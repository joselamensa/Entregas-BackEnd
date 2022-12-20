const express = require('express');
const app = express();
const PORT = 8081;
const { engine } = require('express-handlebars');

const moment = require('moment');
const timestamp = moment().format('h:mm a');

const Messages = require('./container/messagesContainer');
const Products = require('./container/productsContainer');
const messagesContainer = new Messages('mensajes');
const productsContainer = new Products('productos');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

httpServer.listen(PORT, () => console.log('SERVER ON http://localhost:' + PORT));

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);

app.get('/', async (req, res) => {
  res.render('productslist');
});

io.on('connection', async (socket) => {
  console.log(`Nuevo cliente conectado ${socket.id}`);

  socket.emit('product-list', await productsContainer.getAll());

  socket.emit('msg-list', await messagesContainer.getAll());

  socket.on('product', async (data) => {
    await productsContainer.save(data);

    console.log('Se recibió un producto nuevo', 'producto:', data);

    io.emit('product-list', await productsContainer.getAll());
  });

  socket.on('msg', async (data) => {
    console.log('Se recibio un msg nuevo', 'msg:', data);

    await messagesContainer.save({ socketid: socket.id, timestamp: timestamp, ...data });

    io.emit('msg-list', await messagesContainer.getAll());
  });
});
