const { option } = require('../db/config/config');
const knex = require('knex')(option.mysql);

knex.schema
  .createTable('productos', (table) => {
    table.increments('id'), table.string('nombre'), table.string('precio'), table.string('thumbnail');
  })
  .then(() => {
    console.log('La tabla se creo correctamente');
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knex.destroy();
  });

knex('productos')
  .insert([
    {
      id: 1,
      nombre: 'Zapatos Adidas',
      precio: 500,
      thumbnail: '../public/img/adidas-shoes.jpg',
    },
    {
      id: 2,
      nombre: 'Pelota Nike',
      precio: 300,
      thumbnail: '../public/img/nike-ball.jpg',
    },
    {
      id: 3,
      nombre: 'Zapatos Nike',
      precio: 750,
      thumbnail: '../public/img/nike-shoes.jpg',
    },
  ])
  .then(() => {
    console.log(`Se insertaron los productos `);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
