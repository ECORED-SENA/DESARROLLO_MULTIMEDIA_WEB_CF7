<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg_img_01

    .bloque-texto-a.cstm--color_01.p-4.p-md-5.mb-5(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/intro/intro.png", alt="alt")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Bienvenidos al componente formativo “Desarrollo de los elementos gráficos y audiovisuales del proyecto multimedia”, se invita a ver el siguiente video: 

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oa1yQIA9krA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
