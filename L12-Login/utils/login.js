function alerta() {
  Swal.fire({
    imageUrl: './src/img/developer.gif',
    imageWidth: 150,
    imageHeight: 150,
    text: '⚠️En construcción',
    title: '🚧 Sitio está en desarrollo ',
    confirmButtonText: 'Entrar',
    color: '#000',
    background: '#ffffffb3',
    backdrop: 'rgba(0,0,0,0.7)',
    showClass: {
      popup: 'animate__animated animate__backInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__bounceOut',
    },
    footer: 'Proximamente',
  });
}
alerta();
