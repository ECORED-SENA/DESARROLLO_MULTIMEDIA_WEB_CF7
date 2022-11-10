<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Medios de captura y formatos de salida

    figure(data-aos="zoom-in") 
      img(src="@/assets/curso/temas/t3/t3_01.png", alt="alt")
    .row.justify-content-center.mb-5.mb-lg-0(data-aos="fade") 
      .col-lg-10
        .cstmTitleCrd
          p.mb-0 En los desarrollos multimedia, en algunos momentos se necesitará capturar imágenes o secciones para enriquecer los contenidos y a su vez, también es prioritario conocer los formatos en los que se podrían obtener para su correcto uso, en esta sección tendrá las herramientas para hacerlo posible.

    separador

    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right") 
      h2 3.1 Herramientas de captura de imagen

    .row.justify-content-center
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t3/t3_02.svg", alt="alt")
      .col-lg-8(data-aos="fade-left") 
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Teniendo presente las nuevas herramientas tecnológicas para las capturas de imágenes se puede decir que sirven para extraer toda o una parte de una imagen que se ve en las pantallas de los dispositivos digitales tales como un PC, una #[em tablet] o un móvil, es decir, de la misma forma que se toman fotografías con una cámara se puede realizar capturas, ya sea con las herramientas predeterminadas de los sistemas operativos como Windows y Mac o herramientas independientes que se pueden instalar en los dispositivos, con características y funciones más avanzadas. Algunas de estas herramientas de captura de imagen son de uso gratuito y otras en la que su uso depende de pago: 

        .tarjeta.color-secundario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/recursos/cta_01.svg").img90
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Herramientas de captura de imagen
                  p.text-small Estimado aprendiz, a partir de este documento podrá elegir el programa de capturas más acorde a su dispositivo.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Herramientas_Captura.pdf')" target="_blank" type="application/pdf")
                    span.clr--base Descargar
                    i.clr--base.fas.fa-file-download

    separador

    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")  
      h2 3.2 Herramientas de captura de imagen en movimiento

    .bg_img_04
      .row.justify-content-center
        .col-lg-8.order-2.order-lg-1(data-aos="fade-left") 
          .squareTop.mb-4
            p.mb-0 Si bien las herramientas de captura de imagen brindan la capacidad de grabar video, hay que tener claro o diferenciar, entre la opción de grabar lo que se está visualizando en la pantalla y lo que es capturar imágenes en movimiento. Para ello, se van a definir algunas herramientas y tipos de captura de movimiento. 
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
            .col
              p.mb-0 La captura de imágenes en movimiento en términos generales es el proceso de obtener los movimientos de una persona o animal, para posteriormente transformarlos en modelos digitales; este procedimiento se realiza mediante la utilización de herramientas o programas especializados y que se utilizan en el cine, los videojuegos, la televisión y también en cualquier proyecto multimedia que se desea realizar. 
        .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in") 
          figure
            img(src="@/assets/curso/temas/t3/t3_03.svg", alt="alt")
      
      p(data-aos="fade-left").mb-5 Es importante entender que hoy en día con los avances tecnológicos que se cuentan, solo bastará una buena idea creativa para poner en marcha un proyecto, en el que se puedan aplicar todas las herramientas que se tengan al alcance.

      h5(data-aos="fade-left").mb-4 Es importante identificar dos métodos principales:

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mb-5(data-aos="zoom-in") 
        .row.justify-content-center(titulo="Los ópticos")
          .col-lg-8
            p En los sistemas de captura de movimiento ópticos se utilizan varias cámaras que captan el movimiento del personaje y luego un programa lo captura. De esta manera, el personaje se ubica frente a las cámaras y estas capturan, ejecutan y aplican el movimiento a un modelo digital. Una de las ventajas es que el personaje puede estar como en el proceso de captura, porque no necesita de ningún implemento adicional.             
            
            p.mb-0 También cabe resaltar que una falencia de esta técnica es que la precisión de los movimientos se pueden ver alterados por falta o demasiada luz en el escenario, otro factor que puede afectar los registros de movimiento es el poco contraste entre el fondo y la ropa del personaje.

          .col-lg-4
            figure
              img(src="@/assets/curso/temas/t3/t3_04.png", alt="alt")
            figcaption.text-center Proceso de captura de movimiento con movimiento óptico, (por infrarrojos) y el esqueleto digital generado.

        .row.justify-content-center(titulo="No ópticos")
          .col-lg-8
            p.mb-5 Una de sus características es la utilización de trajes para la captura de movimiento. Se dividen en dos grupos principales, los mecánicos y los electromagnéticos:             
            
            ul.fa-ul
              li
                i.fa-li.fa.fa-check-square.clr--orange
                | En los sistemas de captura de movimiento mecánicos, el personaje cubre su cuerpo con un traje que incorpora sensores que registran el movimiento. 
              li
                i.fa-li.fa.fa-check-square.clr--orange
                | En los electromagnéticos se emplea un emisor que genera un campo electromagnético y un conjunto de sensores que miden las alteraciones que realiza el sujeto en ese campo para registrar el movimiento.             

          .col-lg-4
            figure
              img(src="@/assets/curso/temas/t3/t3_05.png", alt="alt")
            figcaption.text-center Hombre con traje de captura de movimiento interpretando a Gollum de El Señor de los Anillos.

          .col-12.mt-4
            p.mb-0 Además de estos dos tipos existe otro de reciente creación, que todavía no es muy usado. Se trata de los sistemas de captura de movimiento inerciales en los que los sensores capturan la inercia de los movimientos y la traducen en tres valores “#[em roll, yaw y pitch]”. La principal ventaja de los sistemas de captura de movimiento no ópticos es su enorme precisión, sobre todo comparada con los ópticos, ya que están calibrados para obtener la máxima precisión. Su desventaja principal es el precio, ya que son más caros que los ópticos y lo incómodo para el actor, ya que sus movimientos se pueden ver restringidos por el propio traje.   
  


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
