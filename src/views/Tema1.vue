<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Codificación de imágenes

    p A partir de este momento se abordan los conceptos básicos que se deben conocer sobre la arquitectura de una imagen, desde sus elementos constitutivos hasta sus características, formatos y herramientas que le permitirán tener una visión mayor sobre las mismas y a su vez, conocer cómo trabajar cada imagen hasta la generación de un formato final. 

    #t_1_1.titulo-segundo.color-acento-botones 
      h2 1.1 La imagen

    .row.justify-content-center.mb-4
      .col-lg-4.col-8
        figure
          img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")
      .col-lg-8
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Se entiende como la conceptualización o representación visual de algo o alguien, es decir, una ilustración o imagen que asemeja o refleja la apariencia de algo imaginario o real, proviene del latín “imago” que se traduce como copia o imitación.

        .cajon.cjn--grayBlue.p-4
          p.mb-0 De todas las cosas que se perciben, se viven y se sienten, la imagen ha sido la forma como el hombre desde el momento que tuvo la posibilidad de conceptualizar su conocimiento y representarlo de manera visual ha querido dejar su marca en el mundo.

    .bg_img_01
      p Características como la forma abstracta o la forma icónica que hace referencia al grado de coincidencia de la imagen con la realidad; la complicidad o la simplicidad, que sugiere la forma como se analiza (por parte del receptor) o se plasma una imagen, característica que va muy ligada a la forma como directamente el emisor del mensaje utiliza la polisemia/monosemia, herramienta que se utiliza para usar una imagen y transmitir diferentes formas de percibir un mensaje.

      .row.justify-content-center.mb-5
        .col-lg-8
          p Todas estas características pasan a complementar un segundo tipo de propiedades que pertenecen a la imagen digital. Cuando se habla de la imagen digital se hace referencia a un elemento que está constantemente presente en el día a día de las personas, siendo una herramienta poderosa.

          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
            .col
              p.mb-0 #[strong Con la producción continua de contenido gráfico y la evolución de la tecnología los profesionales y desarrolladores mejoran la manera como la imagen se percibe, se crea y se comparte, evolución que va de la mano con características más puntuales como:]

        .col-lg-4.col-8
          figure
            img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt")

    .row.mb-4
      .col-auto
        h3.custom-H3 Características

    p.mb-5 A continuación, se profundiza en las características propias de toda imagen, esos elementos que la conforman y que muchas veces se desconocen:

    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt")
      .col-lg-7
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="1" titulo="Pixel")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt").img120
            .col-lg
              p Del acrónimo inglés, picture element, es cada punto o cada uno de los puntos o elementos que componen la imagen, es la menor unidad posible que forma la imagen digital y su tamaño lo conforman la cantidad o número de píxeles en horizontal y en vertical, el concepto conocido como megapíxel viene a ser un millón de píxeles.
            .col-12
              p.mb-0 Un píxel no tiene una medida como tal, solo es la división exacta en una retícula de una imagen. Cada píxel se compone de la mezcla de los colores verde, rojo y azul (red, green, blue), esta combinación de colores puede reproducir hasta 16 millones de colores, conocido como RGB, por sus siglas.

          .row(numero="2" titulo="Resolución")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_05.svg", alt="alt").img120
            .col-lg
              p Es la capacidad que tiene la imagen de dar detalles, tener mayor resolución, traduce mejor calidad; una imagen digital se almacena como un “mapa de bits” (píxeles = columnas x filas), que se traduce coloquialmente como resolución. Por ejemplo, una cámara de 12 megapíxeles, la imagen que captura la puede contener en una retícula de 12 millones de píxeles. 

            .col-12
              p.mb-0 Es de igual importancia hablar de la resolución en la impresión, es decir, los PPP o DPI (puntos por pulgada o Dots Per Inch), que es la capacidad de poner puntos individuales de color en una pulgada lineal, una pulgada equivale a 2,54 cm.

          .row(numero="3" titulo="Tamaño")
            .col-12
              p.mb-0 Va completamente relacionado con la capacidad de la toma de la imagen, como se indicó anteriormente, entre más píixeles existan, más grande y más resolución podrá tener la imagen.

          .row(numero="3" titulo="Profundidad de color")
            .col-12
              p La profundidad de color o los bits por píxel (bpp) es el número de bits necesarios para representar un color en un píxel, es decir, el color que utiliza cada píxel para componer la imagen. 
              .cajon.cjn--grayBlue.p-4.mb-4
                p.mb-0 Un bit es un número binario (0 o 1), entre más bits tenga un píxel, más colores podría representar, es decir, si un píxel cuenta con un solo bit (1) solo podría representar 2 colores uno para el valor 0 y otro para el valor 1 y así sucesivamente, como cada uno representa un color, entre más bits por píxel o (bpp) generará más combinaciones de color.

              
              table
                thead
                  tr.text-center.bg--orange
                    th Bits
                    th C&aacute;lculo
                    th Colores
                tbody.text-center
                  tr
                    td 1
                    td 2 1
                    td 2
                  tr
                    td 2
                    td 2 2
                    td 4
                  tr
                    td 4
                    td 2 4
                    td 16
                  tr
                    td 8
                    td 2 8
                    td 256
                  tr
                    td 24
                    td 2 24
                    td 16.7 millones
                  tr
                    td 36
                    td 2 36
                    td 60.719 millones
                  tr
                    td 42
                    td 2 42
                    td 4.3 billones 


          .row(numero="4" titulo="Comprensión")
            .col-12
              p.mb-0 Dado a que la capacidad de las cámaras y los dispositivos actuales para que las imágenes tengan una resolución y un tamaño cada vez mayor, el proceso de compresión de las imágenes es una característica importante, ya que ayudará al momento de compartir o guardar una imagen. Es importante conocer los procesos, ya que al momento de comprimir una imagen, lleva a que esta pierda calidad.

          .row(numero="5" titulo="Digitalización")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_06.svg", alt="alt").img120
            .col-lg
              p El término digitalización describe la forma como una imagen se transforma de un medio análogo a un lenguaje comprensible o sistema digital, generalmente la identificación de esos lenguajes a un idioma comprensible es representada en su mayoría de veces sobre un mapa de bits, asignado con un color y las demás características que se han referido anteriormente.

            .col-12
              p.mb-0 Los periféricos que ayudan a la digitalización de imágenes comprenden las cámaras digitales y los escáneres; estos elementos permiten acceder a ventajas tangibles como ganar espacio, acceder y distribuir fácilmente todo este contenido. 


    .row
      .col-auto
        h3.custom-H3 Formatos

    .bg_img_03.mb-5
      p Conocer los formatos que existen actualmente ayudará a escoger adecuada y sabiamente en qué formato es más prudente y favorable a la hora de trabajar, al momento de visualizar y hasta de compartir información. 

      .row.justify-content-center.mb-5
        .col-lg-8
          p Se explicarán a continuación, los formatos más utilizados en el mercado laboral actual, cada uno tiene características que hacen más fácil el trabajo o algún proceso, una fase de una campaña o simplemente pensar en crear una imagen. 
          .row
            .col-auto 
              figure
                img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
            .col
              p.mb-0 #[strong Primero, se debe entender la diferencia entre una imagen vectorial y una imagen en mapa de bits y, valiéndonos de la información anterior, se puede decir que una imagen en mapa de bits es una imagen que está ubicada en un plano y está dividida por cuadros o pixeles, cada uno de ellos con unas características que transforman cada pixel como elemento y no en conjunto; por otra parte, las imágenes por vectores están compuestas por elementos que a su vez poseen características individuales como sus vectores y nodos, haciendo que su transformación sea por elemento y no en conjunto.]
        .col-lg-4.col-8
          figure
            img(src="@/assets/curso/temas/t1/t1_07.svg", alt="alt")

      .row
        .col-auto
          h3.custom-H3 Formatos de imágenes en mapa de bits

      .bloque-texto-a.cstm--color_01.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/temas/t1/t1_08.png", alt="alt")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 #[strong Las imágenes rasterizadas (ráster, de su traducción en inglés) por los surcos o canales que asemejan (filas y columnas de píxeles) están compuestas por píxeles, asignados a un color y a unas coordenadas en una trama, formando así una imagen digital. A continuación, los tipos formato:]

      .slyderBg_01.py-5.p-4
        SlyderA(tipo="b")
          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              h3 Formato JPG #[em (Joint Photographic Experts Group)]
              p.mb-0 Es uno de los formatos más conocidos y utilizados, dado que su forma de compresión permite que no se pierda resolución y su peso no sea un problema, su forma de compresión es agrupar bloques de 8x8 píxeles y reagruparlos como un conjunto; un inconveniente de este formato es que no reconoce transparencias o falta de color en sus pixeles, por lo que es necesario incurrir en otros tipos de formatos.       
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_09.svg', alt='').img120.m-auto

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              h3 Formato PNG #[em (Portable Network Graphics)]
              p Formato reconocido mundialmente, apareció como una alternativa al formato GIF, destaca por su posibilidad de compresión de imágenes sin pérdida y alcanza a tener una profundidad de color de hasta 24 bits por píxel o bpp (224 = 16 millones de colores).
              p.mb-0 A causa de su compresión sin pérdida, hace que las imágenes pesen más que los formatos JPG, lo cual hace que su uso en la Web se vea más limitado, pero su mayor característica es la posibilidad de reconocer un canal alfa, que permite reconocer y soportar transparencias. 	      
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_10.svg', alt='').img120.m-auto

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              h3 Formato GIF #[em (Graphics Interchange Format)]
              p Es un formato que ha adquirió su fama por la facilidad de almacenaje y su eficiente compresión, ya que ubica una sola paleta de colores, es decir, una tabla de 256 colores por píxel (8bits) lo que hace que no sea un formato apto para fotografías e imágenes de gran resolución; es un formato que puede agrupar varias imágenes en un solo archivo, lo que impulsó su fama para la creación de pequeñas animaciones, cada píxel puede adquirir la característica de transparencia, pero no de una semi transparencia, es decir, es 0 o 1. 	      
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_11.svg', alt='').img120.m-auto

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              h3 Formato TIFF #[em (Tagged Image File Format)]
              p.mb-0 Es un archivo que sirve para transmitir datos impresos e imágenes de alta resolución, es un formato muy usado, ya que permite soportar imágenes en CMYK y una profundidad de 16 bpp. Este formato se impone gracias a que la calidad de la imagen viene por encima del peso, es por esto que los medios impresos y los editoriales son los que más trabajan con dichos formatos, dada la necesidad de su resolución.<br><br>Existe una variante de este formato llamado GeoTiff, que es un formato enfocado en la presentación y almacenaje de imágenes como mapas, planos, vistas aéreas, etc. que permite adicionar etiquetas de localización y georeferenciación. 
        
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_12.svg', alt='').img120.m-auto

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              h3 Formato PSD #[em (Photoshop Document)]
              p.mb-0 Herramientas como las presentadas por compañías como Adobe presentan formatos propios que día a día van haciéndose espacio en el mundo actual, y es que herramientas como Photoshop son útiles al momento de editar, eliminar y trabajar con imágenes digitales.<br><br>Photoshop funciona trabajando por capas, es decir, que cada información que se edite o elimine tiene la posibilidad de volver a rehacerse independiente, este software funciona con cualquier tipo de imagen y convertirse a su vez en cualquier formato de imagen sin sufrir pérdidas. El principal inconveniente es que se debe contar con el software de Adobe para poder abrir y editar el documento. 
        
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_13.svg', alt='').img120.m-auto

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              h3 Formato BMP #[em (Bitmap)]
              p.mb-0 Es un formato creado por Windows, ya que era la forma como Paint guardaba sus archivos, se considera un formato de imagen simple, ya que almacena gran cantidad de información en un gran tamaño y peso, lo cual ha hecho que pierda admiradores que utilizan formatos como JPG y PNG. 
        
            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_14.svg', alt='').img120.m-auto

          .row.justify-content-around.align-items-center
            .col-lg-8.mb-2.mb-lg-0
              h3 Formato PSD #[em (Photoshop Document)]
              p.mb-0 Es el formato de las cámaras réflex digitales, ya que tiene toda la información y datos que se captan al momento de hacer una fotografía, es decir, cuando una imagen no tiene un proceso o está en crudo.<br><br>La mayoría de los profesionales recomiendan y usan este formato, ya que permite que la imagen no se comprima y que llegue a su máxima calidad posible.

            .col-lg-3.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_15.svg', alt='').img120.m-auto

    .row
      .col-auto
        h3.custom-H3 Formatos de imágenes en vectores

    figure
      img(src="@/assets/curso/temas/t1/t1_16.png", alt="alt")
    .row.justify-content-center.mb-5.mb-lg-0
      .col-lg-10
        .cstmTitleCrd
          p.mb-0 Las imágenes vectoriales no necesitan tanto espacio al momento del almacenamiento, ya que no parten de la información contenida en cada píxel, sino por el contrario, cada elemento que compone la imagen posee una información como distancia entre elementos, tamaños, colores, formas y posiciones, con texto o no, sus dimensiones, etc., permitiendo escalar sin forma de perder resolución. A continuación, se relacionan estos tipos de formatos:

    TabsB.color-secundario(data-aos="fade") 
      .py-4.py-md-5(titulo="Formato AI" :icono="require('@/assets/curso/temas/t1/t1_17.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_21.png", alt="alt")
          .col-lg-9.mb-4.mb-lg-0
            h4 Formato AI (Adobe Illustrator)
            p.mb-0  Para imágenes en mapa de bits existe un software como Photoshop, la compañía de Adobe no quiere dejar puntada sin dedal, por eso para las imágenes en formatos vectoriales cuenta con su programa Adobe Illustrator y su extensión. AI, es un formato que a nivel vectorial es el más utilizado, ya que es el programa nativo.  Al igual que su hermano PS, permite exportar o guardar imágenes en diferentes formatos, incluso en formatos de mapa de bits. 

      .py-4.py-md-5(titulo="Formato SVG" :icono="require('@/assets/curso/temas/t1/t1_18.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_22.png", alt="alt")
          .col-lg-9.mb-4.mb-lg-0
            h4 Formato AI (Adobe Illustrator)
            p.mb-0  Es un tipo de formato que ha venido ganando terreno gracias a que su peso es muy bajo y su calidad es muy alta, lo que hace que navegadores como Chrome, Safari y Firefox utilicen estos formatos al momento de insertar una imagen.<br><br>Estos tipos de imágenes que pueden indexarse, son herramientas que permiten tener grandes ventajas al momento de pensar en posicionar elementos en páginas web.

      .py-4.py-md-5(titulo="Formato EPS" :icono="require('@/assets/curso/temas/t1/t1_19.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_23.png", alt="alt")
          .col-lg-9.mb-4.mb-lg-0
            h4 Formato EPS (Encapsulated PostScrip)
            p.mb-0  Como su nombre lo indica, son imágenes encapsuladas, es decir, ya vienen listas para imprimir y para abrir en cualquier programa de diseño. Se recomienda que estos archivos se pasen a formatos más habituales, ya que no todos los software de impresión reconocen este formato.

      .py-4.py-md-5(titulo="Formato PDF" :icono="require('@/assets/curso/temas/t1/t1_20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_24.png", alt="alt")
          .col-lg-9.mb-4.mb-lg-0
            h4 Formato PDF (Portable Document Format)
            p.mb-0  Otro de los formatos que ha tomado camino dada su facilidad de ser abierto por lenguajes PostScrip, es un formato muy útil dado que puede guardarse como un elemento vectorizado o un mapa de bits, puede almacenar imágenes, texto e ilustraciones. 

    separador  

    #t_1_2.titulo-segundo.color-acento-botones 
      h2 1.2 Herramientas de desarrollo

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Es hora de poner manos a la obra y utilizar los conocimientos que se han trabajado y encontrar la herramienta que más se adapte a los gustos o maneras de trabajar, por eso se hace una introducción a las herramientas más utilizadas en el mercado. De seguro, ya haya tenido un acercamiento a dichas herramientas, pero no está de más poder incluir otras opciones que ayudarán en el día a día.
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/square_00.svg", alt="alt").img65
          .col
            p.mb-0 #[strong Se encuentran herramientas que están online, es decir, que se pueden hallar en cualquier momento y a cualquier hora, programas útiles que permiten a los diseñadores que están comenzando una alternativa, muchas veces gratuita, de empezar el camino en este largo mundo del diseño.]
      .col-lg-4.col-8
        figure
          img(src="@/assets/curso/temas/t1/t1_25.svg", alt="alt")

    .row
      .col-auto
        h3.custom-H3 Herramientas online

    p Existen muchas herramientas para diseñar como las que diseñan logos o avisos, existen las que hacen diseño de maquetación y muchas más que se encargan del diseño web; en este tema se hará referencia al diseño de imágenes digitales. Por tal motivo, se invita a que visualice la descripción de estas herramientas:

    .slyderBg_01.pt-5.p-4(data-aos="fade").mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_26.png', alt='')
          .col-lg-8.dot-left
            h4 Canva
            p.mb-0 Una de las herramientas que ahora se encuentra entre las más usadas por su gran variedad de plantillas que permiten personalizar y diseñar fácilmente. Se pueden crear infografías, crear artículos para blogs, diseños en general adaptándolos a sus plantillas, portadas de libros, revistas y avisos publicitarios. Se puede utilizar Canva desde varios dispositivos, tiene cursos de aprendizaje donde guían para que se pueda tener un mejor desempeño, lo más importante es que su contenido es gratis. 

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_27.png', alt='')
          .col-lg-8.dot-left
            h4 Pixlr
            p.mb-0 Es un editor de imágenes que trabaja sobre mapa de bits, es una herramienta que trabaja similar a PhotoShop o algún software similar, facilitando la edición de imágenes. Sus herramientas son más reducidas con respecto a los programas o herramientas de pago, pero es un programa que permite trabajar de manera rápida y online, sin necesidad de instalar algún programa de diseño. 

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_28.png', alt='')
          .col-lg-8.dot-left
            h4 Gimp
            p.mb-0 Es un software que tiene más de 20 años en el mercado, es uno de los software gratis más populares, ya que reúne características avanzadas para edición de imágenes o fotos, pintura, diseño, imágenes digitales, etc. Con una interfaz muy similar a la de Adobe, Gimp utiliza herramientas muy precisas para la creación y edición. 

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_29.png', alt='')
          .col-lg-8.dot-left
            h4 Piktochart 
            p.mb-0 Herramienta especializada para la creación de infografías, aunque permite crear elementos como #[em flyers], avisos y otros diseños, permite utilizar plantillas y formatos que ayudarán al momento de escoger la mejor opción. Piktochart posee una opción limitada de plantillas, pero gracias a la capacidad de creación se pueden contar con herramientas para poder evitar la opción #[em premium] que incluye una amplia gama de plantillas y formatos.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_30.png', alt='')
          .col-lg-8.dot-left
            h4 Adobe Spark 
            p.mb-0 Adobe no se podía quedar atrás, A. Spark, es un programa de diseño y maquetación sencillo; lanzado hace más de un año, es una herramienta pensada para facilitar la vida en las redes sociales, los blogs y la subida de contenido constante, una herramienta creada para las redes sociales. Innumerables fotos, fuentes, íconos y temas para poder trabajar, Spark es una herramienta que destaca y permite hacerse destacar en las redes.   

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t1/t1_31.png', alt='')
          .col-lg-8.dot-left
            h4 Inkscape  
            p.mb-0 Es un editor profesional de vectores, es libre y es una muy buena alternativa al momento de trabajar imágenes compuesta por vectores, posee las mismas posibilidades de Illustrator o CorelDraw, programas hitos para la edición vectorial, permite exportar en múltiples formatos de vectores y de imagen.

    .row
      .col-auto
        h3.custom-H3 Herramientas avanzadas

    .row.justify-content-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p.mb-4 Pasando a un plano más profesional, con los conocimientos y los conceptos que se han desarrollado hasta ahora y teniendo un conocimiento mayor es hora de seguir y profundizar en herramientas y software más avanzados que permiten llegar más lejos.
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col 
            p #[strong Paquete Adobe:] tiene la capacidad con su gran gama de productos de establecerse como uno de los programas más populares entre los diseñadores, ingenieros y demás profesionales que utilizan algún programa del gran paquete que comprende Adobe, y es que no solo son programas de diseño de imágenes o los más conocidos y destacados como Illustrator, Photoshop o InDesign, sino que comprenden programas especializados para la edición de video y audio, programas especializados para la creación de animaciones, mundos en 3D, realidad aumentada y muchos más que se especializan en colaborar y crear un mundo global de diseño.

      .col-lg-3.col-8
        figure
          img(src="@/assets/curso/temas/t1/t1_32.svg", alt="alt")

    h4.mb-5 Los programas de Adobe y algunas de sus características son:

    .row.justify-content-center
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_33.png", alt="alt").img90
          .col
            h5 Photoshop
            p.mb-0 Edita, compone y crea bellas imágenes, gráficos y obras de arte en el escritorio o computador.
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_34.png", alt="alt").img90
          .col
            h5 LightRoom
            p.mb-0 Herramienta que acompaña a PS, permite tener en la nube la posibilidad de crear, editar, almacenar y compartir fotos desde cualquier dispositivo.

    .row.justify-content-center
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_35.png", alt="alt").img90
          .col
            h5 Illustrator
            p.mb-0 Crear diseños e ilustraciones vectoriales nítidas. 

      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_36.png", alt="alt").img90
          .col
            h5 Illustrator Draw
            p.mb-0 Similar a su hermano mayor, I. Draw, es un programa que funciona con elementos vectoriales, pero con una interfaz más sencilla, rápida y dinámica, pudiendo compartir elementos directamente con AI.

    .row.justify-content-center
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_37.png", alt="alt").img90
          .col
            h5 Character
            p.mb-0 Para las personas que aman la animación en 2D, la creación de personajes y la animación por movimiento en tiempo real.  

      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_38.png", alt="alt").img90
          .col
            h5 Animate
            p.mb-0 Animar cualquier cosa es posible, crear personajes a un nivel profesional, con rapidez y muchas guías que ayudarán a crear animaciones paso a paso.

    .row.justify-content-center
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_39.png", alt="alt").img90
          .col
            h5 Substance 3D
            p.mb-0 Diseñar y componer escenarios y elementos 3D; gracias a sus herramientas complementarias especializadas, Adobe permite incluir luces, texturas y movimientos que ayudan a tener infinitas posibilidades en el mundo 3D.

      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_40.png", alt="alt").img90
          .col
            h5 Premiere Pro
            p.mb-0 Uno de los programas estándar del medio, edición de películas y producción de video a modo profesional.

    .row.justify-content-center
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_41.png", alt="alt").img90
          .col
            h5 After Effects
            p.mb-0 Programa que trabaja de la mano de Premiere y es porque es el número uno en efectos especiales y animados, para producciones cinematográficas y animaciones en general. 

      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_42.png", alt="alt").img90
          .col
            h5 XD
            p.mb-0 Es una aplicación que como su nombre lo indica es un “diseño de experiencias”, lo que permite crear interfaces interactivas de páginas web y de aplicaciones, permite enfocarse en la experiencia al momento de navegar una página o APP, con un rango de error muy bajo. 

    .row.justify-content-center
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_43.png", alt="alt").img90
          .col
            h5 Acrobat
            p.mb-0 En este momento que los archivos PDF son usados y compartidos por todos, es la herramienta más completa para la lectura y edición de estos archivos.

      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_44.png", alt="alt").img90
          .col
            h5 Fresco
            p.mb-0 Herramienta que está hecha para trabajar en dispositivos y pantallas táctiles, Fresco es un conjunto de herramientas de pintura digital, semejando la pintura en tiempo real, con diferentes pinceles que permiten crear diseños a pocos clics.

    .row.justify-content-center
      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_45.png", alt="alt").img90
          .col
            h5 Dimension
            p.mb-0 Crear imágenes fot realistas, en espacios reales; modelos, iluminación y un sinfín de elementos para trabajar de forma sencilla, con interfaces intuitivas y herramientas que  permitirán crear diseños a otro nivel.

      .col-lg-6.mb-4
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_46.png", alt="alt").img90
          .col
            h5 Affinity Photo
            p.mb-0 Un software especializado para la edición y la fotografía, desarrollado para trabajar con proyectos para papel, digital y W	eb. Una de sus principales características es el algoritmo de unión avanzado, que incluye un proceso en la edición, corrección, alineación compleja en cada proceso gráfico. A diferencia de su principal competidor, Affinity trabaja en conjunto los procesos de vectores y mapa de bits, siendo una excelente aplicación al momento de decidirse por una sola opción. 

    .row.mt-5.mb-4
      .col-auto
        h3.custom-H3 Otras herramientas    

    .bloque-texto-a.cstm--color_01.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t1/t1_47.png", alt="alt")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p #[strong Que se encuentran a disposición en la Web son las que ayudarán en la construcción de elementos y proyectos digitales, por eso puede valerse de las herramientas que se encuentran y que están a disposición en el mercado, las que ayudarán a que el contenido tenga más peso y pueda destacarse como un diseño completo y llamativo.]

    p.mb-4 Para conocer estas herramientas haga clic sobre cada enlace: 

    .row.justify-content-center
      .col-lg-4.col-8.mb-3
        figure
          img(src="@/assets/curso/temas/t1/t1_48.png", alt="alt")
      .col-lg-4.col-8.mb-3
        figure
          img(src="@/assets/curso/temas/t1/t1_49.png", alt="alt")
      .col-lg-4.col-8.mb-3
        figure
          img(src="@/assets/curso/temas/t1/t1_50.png", alt="alt")




          

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
