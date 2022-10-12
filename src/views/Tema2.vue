<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Animaciones y elementos interactivos

    .bg_img_01(data-aos="zoom-in")
      .bloque-texto-a.cstm--color_01.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p #[strong Los elementos interactivos y la animación dentro de todo componente multimedia enriquecen y le dan personalidad al mismo. Ya que mediante ellos se obtiene un mayor acercamiento y disfrute de dicho material, por ello se debe conocer y tener en cuenta esos elementos y componentes para darle vida a los proyectos.]

      separador

      #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-left") 
        h2 2.1 Diseño de personajes

      .row.justify-content-center.mb-5
        .col-lg-8.order-2.order-lg-1(data-aos="fade-left") 
          p Siendo un tema tan extenso y que contempla cientos de temas se puede plantear que la construcción de un personaje es un concepto tan amplio y complejo que abarca muchas áreas del pensamiento. 
          .row  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
            .col
              p.mb-0 Por consiguiente, se trabajarán temas relacionados a los principios y formas básicas, anatomía y algunas leyes que son de importancia y se deben tener en cuenta en la construcción realista de personajes, etc. Se debe tener en cuenta otros temas que seguro no se abordarán, pero de los que podrá encontrar información relacionada en los diferentes enlaces que se irán presentando.
        .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in") 
          figure
            img(src="@/assets/curso/temas/t2/t2_02.svg", alt="alt")

      .row.justify-content-center
        .col-lg-10
          figure.mb-5(data-aos="zoom-in") 
            img(src="@/assets/curso/temas/t2/t2_03.png", alt="alt")

    .cajon.cjn--paleBlue.p-4.mb-5(data-aos="fade-left") 
      p.mb-0 Antes de continuar con el proceso de construcción es importante pensar y empezar a darle características a los personajes; no solo son trazos en un papel, ya que lo que se quiere trasmitir siempre es un mensaje y es muy importante construirlo, además del estilo y rasgos coherentemente, por eso se plantea unos principios por los que pasa un proceso para la creación y diseño de un personaje.

    .row.justify-content-center(data-aos="zoom-in") 
      .col-lg-10
        .row.justify-content-center.align-items-lg-center.mb-5
          .col-auto.avtr-txt
            figure
              img(src="@/assets/curso/temas/recursos/icon_01.png", alt="alt").img150
          .col
            p.mb-0 #[strong Como todo proceso se debe entender que los pasos no son una guía estricta, sino que son herramientas que ayudarán a que el personaje vaya acorde con lo que se pretende plantear, que tenga unas características y principios que generen una emoción en la persona que aprecia el personaje y una muy buena ilustración; de lo contrario el personaje no sabrá cómo comunicarse con el entorno.]

    .bg_img_03.mb-5(data-aos="fade-left") 
      .row.mb-4
        .col-auto
          h3.custom-H3 Arquetipos o paradigma del personaje 
      
      .row.justify-content-center.mb-5
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right") 
          p.mb-4 Uno de los primeros puntos a los que se hará referencia es al arquetipo del personaje y esto según los expertos es la manera más sencilla de definir a una persona, siendo esta la primera de las características que se deben tener en cuenta; se encuentran arquetipos tradicionales que ayudarán a enmarcar con una serie de características y comportamientos. A continuación, diferentes modelos de arquetipos: 
          .tarjeta.color-secundario.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_01.svg").img90
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Arquetipos para un personaje
                    p.text-small Estimado aprendiz, a partir de este documento encontrará las claves que le ayudarán a la construcción de arquetipos.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                      span.clr--base Descargar
                      i.clr--base.fas.fa-file-download

        .col-lg-4.col-8(data-aos="zoom-in") 
          figure
            img(src="@/assets/curso/temas/t2/t2_04.svg", alt="alt")
    
      .row.mb-4(data-aos="fade-left") 
        .col-auto
          h3.custom-H3 Anatomía

      p(data-aos="fade-right").mb-5 El diseño de personajes es un área en la que la fundamentación es clave y se debe tener un claro conocimiento para ayudar a crear personajes reales, estructurados, que sean y se comporten sobre planos reales, comprender la lógica de la anatomía y las conexiones con el ambiente natural.

      .row.justify-content-center(data-aos="zoom-in") 
        .col-lg-8
          figure
            img(src="@/assets/curso/temas/t2/t2_05.png", alt="alt")

    .row.mb-4(data-aos="zoom-in") 
      .col-auto
        h3.custom-H3 Volúmenes y sombras

    p(data-aos="fade-right")  El volumen es uno de los aspectos que distingue a lo que lo rodea, es una característica que depende de la luz y de la sombra que se produce, se puede deducir que el volumen de un objeto se define por la intensidad y la distancia de las sombras. 

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_06.svg", alt="alt")
      .col-lg-8(data-aos="fade-right") 
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Se establece básicamente dos tipos de sombras, las sombras propias que son las que se proyectan sobre sí mismos y las sombras proyectadas, que son las que se proyectan sobre otras superficies. Con respecto a la luz se debe tener en cuenta los reflejos proyectados sobre los elementos, ya que aclaran los colores y las sombras, dependiendo la intensidad de las luces y las sombras se encuentran transiciones o “medias tintas” que intensifican la cantidad de sombra que se proyecta.

        p.mb-0 La sombra es la ausencia de luz, lo cual actúa como un contraste con respecto a otras zonas. 

    .row.mb-4(data-aos="fade-left") 
      .col-auto
        h3.custom-H3 Líneas de acción

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right") 
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Se puede considerar que lo primero que se debe trazar al momento de realizar un dibujo es la línea de acción, esta es imaginaria y se basa en la línea que da la curvatura de la espina dorsal, denota una serie de cualidades al momento de usar un tipo de línea. 
        .cajon.cjn--paleBlue.p-4.mb-4
          p.mb-0 Esta línea ayuda a definir movimientos, actitudes y la forma de comunicación que el personaje intenta llevar a cabo, es vital dado que esta línea de acción debe dar dinamismo, definiendo algunas actitudes.     
      .col-lg-4.col-10(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_07.png", alt="alt")

    .row.justify-content-center.mb-5
      .col-lg-4.col-10.order-2.order-lg-1(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_08.png", alt="alt")
      .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right") 
        p Es una herramienta que ayuda a crear poses, haciendo que el ojo las pueda leer más claramente al darle una dirección a las acciones y movimientos. 
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
          .col
            p.mb-0 #[strong Una pose con una línea de acción clara no necesita más explicaciones de acción, por el contrario, como ocurre en animaciones que basan sus fuerzas de comunicación en los parlamentos y en el diálogo.] 
        .cajon.cjn--paleBlue.p-4
          p.mb-0 Figuras retóricas como la exageración ayudan a que los personajes puedan transmitir las emociones a través de las líneas de acción, captando mayor sensación y fuerza en las acciones.    


    .row.mb-4(data-aos="fade-left") 
      .col-auto
        h3.custom-H3 Hojas de personaje o #[em Character model sheet]

    .squareTop(data-aos="fade-right")
      p Básicamente una hoja de personaje es donde se van a plasmar todas las vistas posibles del personaje en cuestión, vistas frontales, laterales, espalda, etc. En estos modelos se pueden referir detalles como complementos para su vestido, expresiones faciales y diferentes poses que ayudarán a dar más contexto de los personajes. 

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")     
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Es de igual importancia para algunos casos cuando el trabajo de animación lo realizan varias personas que todos puedan trabajar sobre unas bases y lineamientos, que se puedan ilustrar con las mismas características y respetar siempre las mismas proporciones del personaje, etc.
        .cajon.cjn--paleBlue.p-4
          p.mb-0 #[strong Para hacer una construcción de personajes siempre es importante pensar en formas básicas para representar el concepto y poder girar o rotar los personajes. Esto sirve para dar volumen y un aspecto tridimensional a los personajes; es importante poder construir las vistas de los personajes para aumentar las características y de igual importancia poder plasmar sus actitudes, con el fin de contemplar el comportamiento de sus acciones.]              
      .col-lg-4.col-8(data-aos="zoom-in")     
        figure
          img(src="@/assets/curso/temas/t2/t2_09.png", alt="alt")

    .squareTop.mb-5
      p También se puede encontrar muchos ejemplos donde se construyen los modelos geométricos y las medidas de personaje, como también hojas de modelo de accesorios o vehículos, que ayudan a recrear y dar más información para la construcción de una historia. 
    
    .row.mb-4(data-aos="fade-left") 
      .col-auto
        h3.custom-H3 #[em Storyboard y animatic]

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_10.svg", alt="alt")
      .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right") 
        .squareTop          
          p Herramientas que ayudan a dar movimiento a las imágenes y a aclarar las ideas sobre lo que se quiere hacer, permitiendo que los errores sean menores y así aminorar costos. Son útiles implementos donde se puede integrar imágenes y especificar detalles como la música, voces, efectos de sonido y toda la información necesaria para poder contar una historia, un comercial, una película, un corto, etc.
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Los altos costos que genera la producción de cualquier elemento audiovisual requiere un trabajo arduo con presupuestos muy altos y, estas herramientas ayudan a reducir errores que puedan superar los presupuestos previos, en resumen, permiten realizar pruebas a través de las cuales se puede simular escenas, desarrollos y detalles que no se tenían previstos, cambios o mejoras necesarias, diferentes planos y movimientos de cámara, duración de las escenas, la musicalización y los efectos de sonido, etc., elementos que se pueden prever en los #[em animatic] sin gastar presupuesto de más. 
        .cajon.cjn--paleBlue.p-4
          p.mb-0 Al igual se pueden adicionar y mejorar escenas, también son de gran importancia al detectar fallas de secuencias o de guion, para poder lograr una continuidad y poder avanzar en próximas fases de producción.

    .squareTop.mb-4          
      p(data-aos="fade-right") La gran diferencia entre el #[em storyboard] y el #[em animatic] es que el primero, se encuentra compuesto por imágenes y dibujos, mientras que el #[em animatic] es la evolución, dado que permite animar escenas o personajes, creando #[em historyboard] más complejos y con más información relevante para la historia. 

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 El #[em animatic] es un proceso muy cercano a la animación final, por eso su uso se ha convertido en una herramienta que ha ganado espacio, dado la facilidad de las herramientas con las que se trabajan detalles en el #[em timing], los cortes y la duración de las escenas, la musicalización de cada una y el uso de las voces y otras herramientas que hacen que los productos con los que se trabajan sean lo más cercanos a las animaciones o proyectos finales. Según el diseñador de animaciones Mario Maldonado (2018) el #[em storyboard] es un #[em animatic] en bruto, sin afinar, mientras que el #[em animatic] ya es un #[em storyboard] completo y afinado sobre el cual se trabajará toda la animación y marcará la duración final.
      .col-lg-4.col-8(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_11.svg", alt="alt")

    .cajon.cjn--paleBlue.p-4.mb-4(data-aos="zoom-in") 
      p.mb-0 Se puede analizar diferentes páginas que contienen información valiosa al momento de empezar a trabajar estas herramientas, con diferentes ejemplos que ayudarán a conceptualizar más fácilmente la información que debería estar presente en cualquier opción: 

    .tarjeta.color-secundario.p-3.mb-4(data-aos="zoom-in") 
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/recursos/cta_03.svg").img90
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Drawing and composition
              p.text-small Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente link: 
            .col-sm-auto
              a.boton.color-acento-botones(href="http://www.floobynooby.com/comp1.html" target="_blank")
                span.clr--base Ir a página
                i.clr--base.fas.fa-file-download

    .tarjeta.color-secundario.p-3.mb-4(data-aos="zoom-in") 
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/recursos/cta_02.svg").img90
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Ejemplo de #[em animatic]
              p.text-small Estimado aprendiz, se puede observar el siguiente video para reforzar el nuevo conocimiento sobre #[em animatic]:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=MRyPSOyC7_c" target="_blank")
                span.clr--base Ver video
                i.clr--base.fas.fa-file-download

    separador

    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-left") 
        h2 2.2 Animación y elementos interactivos

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right") 
        .squareTop
          p.mb-4 La animación es el proceso que utilizan los diseñadores y los profesionales para dar sensación de movimiento a imágenes estáticas, dibujos y seres u objetos inanimados; se considera que es una ilusión que hace el cerebro al juntar a una velocidad imperceptible todas las imágenes y darles sensación de movimiento.
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Existen distintas técnicas de animación, las cuales se explicarán más adelante, por ahora se hará énfasis en las cuatro características básicas de la animación, que permiten que las cosas y los personajes cobren vida, se muevan y hagan acciones dentro de un escenario determinado, apegándose a leyes de la física, etc. Otras características que pueden dar contexto a las animaciones son los gestos y personificaciones del personaje como los elementos físicos que componen el escenario.

      .col-lg-4.col-8(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_12.svg", alt="alt")

    .row.mb-4(data-aos="fade-right") 
      .col-auto
        h3.custom-H3 Características internas

    .squareTop.mb-5(data-aos="fade-right") 
      p.mb-0 Las características básicas o las características internas de la animación se apoyan en la posibilidad que tiene el ojo humano y el cerebro de juntar las imágenes y producir una animación. La capacidad del cerebro no puede percibir un número muy grande de imágenes por segundo, por lo que investigaciones y profesionales en la materia tienen un parámetro de unas 30 imágenes por segundo, es decir, que para hacer un #[em film] de un minuto se deberían elaborar alrededor de 1800 imágenes. 

    .row.mb-5(data-aos="fade-right") 
      .col-auto
        figure
          img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
      .col
        p.mb-0 #[strong Todo depende de la técnica y la calidad de animación que se requiera, la cantidad de cuadros por segundo variarán según el proyecto, estas características se explican a continuación:]


    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mb-5
      .row.justify-content-center.align-items-center(titulo="Aceleración y desaceleración")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Es una de las características más importantes, dado que da sentido y realismo a las secuencias, se entiende que el movimiento no es lineal, sino que va cambiando en la fase donde se encuentre, es decir, el movimiento empieza con una aceleración, luego acelera o se realiza la acción y finalmente se desacelera o se detiene.   
            
          .cajon.cjn--grayBlue.p-4
            p.mb-0 Estos conceptos se entienden como “Ease IN” en las etapas de inicio de movimiento y “Ease Out” o desaceleración para finalizar el movimiento; todos los elementos que interactúan en la construcción de una animación deberían tener en cuenta este primer concepto. 

        .col-lg-6
          figure
            img(src="@/assets/curso/temas/t2/t2_14.png", alt="alt") 

      .row.justify-content-center.align-items-center(titulo="Tiempo y movimiento")
        .col-lg-6
          p El movimiento es un elemento muy importante, ya que el movimiento tiene un tiempo para cada cosa, no es lo mismo crear una animación para un personaje que esté caminando que otra persona que esté corriendo o saltando, todo esto dependerá directamente de la acción que se decida elaborar, hay que dar el tiempo suficiente para la realización de una acción y de cada elemento.
          p El movimiento que se refleja en las animaciones debe ser comprendido en una escala de tiempo, donde cada movimiento será reflejado por acciones rápidas o lentas, dependiendo lo que se pretende conseguir.          

        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t2/t2_15.png", alt="alt")  

        .col-12
          .cajon.cjn--grayBlue.p-4
            p.mb-0 Un ejemplo sencillo comprende la acción de caminar que requiere para su movimiento una representación gráfica de alguien levantando un pie, seguido de un estiramiento y luego de volver a colocar el pie en el piso; otro ejemplo sería si se quiere representar a alguien corriendo, una primera gráfica sería levantando el pie, pero la acción siguiente sería levantar la pierna flexionando hasta su cintura y seguido el pie de nuevo en el suelo. 

      .row.justify-content-center.align-items-center(titulo="Acción y reacción")
        .col-lg-12
          p Es bien sabido que toda acción conlleva a una reacción y en la animación no se puede olvidar este principio, se debe tener muy en cuenta las leyes físicas que hacen parte de los movimientos, ya que son estas las que permiten que las animaciones sean más creíbles. 

        .col-lg-6
          .cajon.cjn--grayBlue.p-4.mb-4.mb-lg-0
            p.mb-0 Un sencillo ejemplo sería un jugador de fútbol que quiere patear un balón; mientras el jugador impacta el balón, la fuerza ejercida por la patada hace que el balón se deforme, cuando empiece el trayecto de la pelota, esta tomará una forma más ovalada y al momento de chocar contra su objetivo, esta se contraerá contra el elemento con el cual choca, flexionando los elementos, todo este movimiento vendrá acompañado con las herramientas que se vieron anteriormente, como el movimiento del pateador y la pelota, al igual que la aceleración con la que se quiera mostrar ese movimiento.                 

        .col-lg-6
          figure
            img(src="@/assets/curso/temas/t2/t2_16.png", alt="alt")  

        .col-12.mt-4
          p.mb-0 Las leyes de la física entran a jugar un papel importante en el momento de dar vida a las animaciones, haciéndolas más creíbles, estas causas externas pretenden cambios constantes que ayudan a exagerar elementos y dar más credibilidad a las acciones.

      .row.justify-content-center.align-items-center(titulo="Anticipación y frecuencia")
        .col-lg-12
          p La anticipación como su palabra lo indica es poder decir al espectador que algo está por suceder, es decir, cuando una acción está a punto de realizarse, está bien mostrar acciones que denoten que algo está por ocurrir. 

        .col-lg-6.mb-4.mb-lg-0
          .cajon.cjn--grayBlue.p-4
            p.mb-0 Se puede decir que si se toma el ejemplo del jugador de fútbol que va a patear la pelota, algunas acciones anticipadas que permitan apreciar gestos de la cara o los ojos, movimiento del cuerpo para tomar más distancia o más fuerza, son elementos que producen en la mente de la persona que está observando la anticipación de una acción que va a suceder, debe estar muy presente en las animaciones, ya que son estas acciones las que dan continuidad a las acciones, y así crear y continuar las secuencias que crean y dan vida a los personajes.               

        .col-lg-6
          figure
            img(src="@/assets/curso/temas/t2/t2_17.png", alt="alt")  

        .col-12.mt-4
          p.mb-0 Todas estas características están relacionadas entre sí, dándole sentido a las animaciones, a los personajes y a todas las cosas que se mueven y hacen acciones en un escenario, todo esto es lo que se refiere a la secuencia misma de una animación.

    .tarjeta.color-secundario.p-3.mb-5(data-aos="zoom-in") 
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/recursos/cta_02.svg").img90
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 12 principios dela animación
              p.text-small Estimado aprendiz, se puede observar el siguiente video para reforzar sobre el tema:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=haa7n3UGyDc&list=PLWmOmuxhrhQvHUwM7yGw5koprnB5Dz47C&index=1" target="_blank")
                span.clr--base Ver video
                i.clr--base.fas.fa-file-download

    .row.mb-4(data-aos="fade-left") 
      .col-auto
        h3.custom-H3 Técnicas de  animación
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right") 
        .squareTop.mb-4
          p.mb-0 Animar o darle alma a un ser inanimado es un trabajo de pura interpretación, transformándose en un proceso artístico, que fusiona elementos como la observación y la comprensión sobre cómo funcionan esos elementos en situaciones ordinarias, dándole a estos procesos de observación una transformación y convirtiéndolos en elementos más creativos y a su vez en animaciones más creíbles.
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Se entiende que la animación puede dividirse en dos grandes tipos, la animación tradicional o realizada con procesos artesanales, y la animación digital que viene ayudada y de la mano de programas, herramientas y #[em software] de diseño. Estas técnicas se explican a continuación:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_18.svg", alt="alt")

    TabsC.color-acento-botones(data-aos="zoom-in").mb-5 
      .py-3.py-md-4(titulo="<em>Flipbook o filoscopio</em>")
        .row.justify-content-center 
          .col-lg-8.mb-4.mb-lg-0
            h4 #[em Flipbook o filoscopio]
            p.mb-0 TEs un libro que contiene una serie de imágenes que cambian de una a la otra, para cuando estas imágenes se pasen rápido den la impresión de estar en movimiento; es la forma más primitiva de animación, las imágenes van pasando una a la otra creando la ilusión de movimiento. Se conocían antiguamente como cine de pulgar, ya que en una mano sostenía el filoscopio y con el dedo pulgar se pasaban las imágenes de una a la otra. 
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t2/t2_19.png", alt="alt") 

      .py-3.py-md-4(titulo="<em>Stopmotion</em>")
        .row.justify-content-center 
          .col-lg-8.mb-4.mb-lg-0
            h4 #[em Stopmotion]
            p.mb-0 Una de las técnicas más clásicas de animación, básicamente la técnica consiste en captar imágenes de objetos estáticos, con ligeras variaciones para crear el efecto de movimiento. Esta técnica se emplea para animaciones en 2D como en 3D, solo que para las animaciones en 2D se conocen por el nombre de Cut Out y Clay Mation para animaciones en 3D. 
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t2/t2_20.png", alt="alt") 

      .py-3.py-md-4(titulo="<em>Cut Out</em>")
        .row.justify-content-center 
          .col-lg-8.mb-4.mb-lg-0
            h4 #[em Cut Out]
            p.mb-0 El #[em Cut Out] o animación por recortes es una variante del #[em StopMotion] que se basa en la utilización de recortes planos en 2D o fotografías, para la creación de los personajes, dándoles movimientos y así creando la sensación de movimiento.
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t2/t2_21.png", alt="alt") 

      .py-3.py-md-4(titulo="Clay Mation o Plastimación")
        .row.justify-content-center 
          .col-lg-8.mb-4.mb-lg-0
            h4 #[em Clay Mation o Plastimación]
            p.mb-0 Animación en 2D, que utiliza los mismos principios del #[em StopMotion] y el #[em Cut Out], solo que los protagonistas de estas animaciones son los objetos y elementos que se crean con plastilina, y otros materiales como arcilla, cerámica o cualquier elemento que pueda ser fácilmente moldeable y que dé sensaciones en 3D. 
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t2/t2_22.png", alt="alt")   

      .py-3.py-md-4(titulo="Rotoscopía")
        .row.justify-content-center 
          .col-lg-8.mb-4.mb-lg-0
            h4 #[em Rotoscopía]
            p.mb-0 Esta técnica consiste en dibujar a mano cuadro por cuadro, tomando como base imágenes previamente grabadas. Cada fotograma era proyectado en una mesa de luz o rotoscopio donde se realizaba el siguiente fotograma y así sucesivamente, calcando elementos que ayudan a dar continuidad a la animación. Actualmente, la tecnología y los #[em software], reducen estos tiempos al ayudar copiar con más facilidad cada cuadro y dar la impresión de animación o movimiento con más detalle.
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t2/t2_23.png", alt="alt")   

      .py-3.py-md-4(titulo="Pixilación")
        .row.justify-content-center 
          .col-lg-8.mb-4.mb-lg-0
            h4 #[em Pixilación]
            p Otra de las variantes del #[em StopMotion], a diferencia de usar elementos creados, muñecos, marionetas o simples recortes; en el proceso de pixilación se fotografían repetidamente seres humanos con elementos comunes, haciendo o creando el movimiento de los elementos, fusionándolos con las acciones de las personas.
            p.mb-0 Dentro de esta categoría existen muchas técnicas que se valen de #[em software] de animación y diseño para crear otras técnicas, fusionándolas con otros elementos.
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t2/t2_24.png", alt="alt")

      .py-3.py-md-4(titulo="Animación 3D")
        .row.justify-content-center 
          .col-lg-8.mb-4.mb-lg-0
            h4 Animación 3D
            p Como se ha visto anteriormente, no toda la animación es un proceso manual, aunque la animación 3D incluye una variedad de herramientas que permiten recrear y hacer más fácil los procesos clásicos de animación.
            p.mb-0 Herramientas para la creación de personajes y entornos digitales, efectos de video y de sonido que añadirán realismo a las acciones realizadas, capturas de movimiento, juego de luces, sombras y diferentes #[em software] que servirán de ayuda al momento de realizar animaciones más realistas que mejoran considerablemente los tiempos de creación.

          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t2/t2_25.png", alt="alt")  

          .col-12
            p.mb-0 Gracias a los procesos y al continuo avance de la tecnología se pueden encontrar diferentes programas que pueden ser utilizadas en diferentes proyectos 3D, programas que integran personajes reales con animaciones en 3D, muy utilizadas en la creación de videojuegos y películas que utilizan la captura de movimiento para crear animaciones cada vez más realistas. Es un proceso arduo, ya que para crear animación 3D se debe hacer la creación y modelaje de personajes, texturizar cada elemento para darle riqueza visual, iluminar adecuadamente cada ambiente para crear atmósferas reales y finalmente, juntar todos los elementos para poder crear un movimiento creíble y deseado. 

    .row.mb-4(data-aos="fade-left") 
      .col-auto
        h3.custom-H3 #[em Software] de animación y maquetación  

    .squareTop.mb-5(data-aos="fade-right") 
      p.mb-0 Con el paso de los años las herramientas de creación de contenido animado han venido evolucionando y haciéndose paso en el mundo del diseño, por eso se encuentran herramientas muy poderosas que ayudarán con la creación de películas, cortos, diseño de personajes, etc., todos especializados en el campo donde en el que se vaya a trabajar. Se hará una mención a algunos de estos programas y se hablará de las cualidades de cada uno. 

    .row.justify-content-center(data-aos="zoom-in") 
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col
              h3 ¿Cómo elegir el programa adecuado? 
              p La primera respuesta es conocer o plantear si se requiere una animación 2D o una 3D, ya que las características de cada una varían y utilizan diferente herramienta para alcanzar diferentes metas.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/t2/t2_26.svg", alt="alt").img120.m-auto
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/t2/t2_27.svg", alt="alt").img120.m-auto
            .col
              h3.text-start ¿Qué se necesita para saber animar?  
              p.text-start Además de aprender programas o #[em software] para la realización de animaciones, es de vital importancia conocer ciertos puntos para poder ejecutar proyectos de animación, elementos que ayudarán a comprender y dominar herramientas necesarias, al momento crear animaciones que llamen la atención:
          .row
            .col               
              p Saber dibujar y conocer sobre temas como perspectiva, anatomía de personajes, física de movimiento, etc. Herramientas que se han señalado anteriormente como movimiento, aceleración, composiciones de escenas, aplicación de fuerzas y otros conocimientos, que ayudarán a entender cómo funcionan las cosas dentro de los escenarios. 
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/t2/t2_28.svg", alt="alt").img120.m-auto
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/t2/t2_29.svg", alt="alt").img120.m-auto
            .col               
              p.text-start Mantener un estado creativo que será alimentado por un proceso de observación y construcción personal; útiles armas que apoyarán el proceso desde una visión cada vez más profesional. 
          .row
            .col               
              p La planificación de cualquier proyecto es vital, dado que para un proceso como la animación que tiende a ser largo, la disciplina y organización serán claves para no desviar caminos creativos y poder cumplir con las metas pactadas en tiempos determinados.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/t2/t2_30.svg", alt="alt").img120.m-auto
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/t2/t2_31.svg", alt="alt").img120.m-auto
            .col               
              p.text-start Practicar, practicar y practicar, como herramienta para alcanzar la perfección. Mejorar técnicas y procesos que irán evolucionando, creación de bocetos, historias, elementos o personajes serán claves para mejorar la técnica.
          .row
            .col               
              p La observación como una herramienta para conocer el mundo y cómo funciona; consumir películas y otras animaciones que hayan hecho referentes para poder construir ideas y técnicas, observar cómo se relacionan los objetos y cómo interactúan unos con otros, para dar realismo a las creaciones.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/t2/t2_32.svg", alt="alt").img120.m-auto

    .row.justify-content-center.mb-5
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_33.svg", alt="alt")
      .col-lg-8(data-aos="fade-right") 
        p Ahora sí, teniendo en cuenta todas estas características se puede avanzar en #[span.bold.clr--orange la construcción de elementos y personajes con herramientas y #[em software] que permitirán verter todos los conocimientos previos] para lograr y alcanzar las metas propuestas. 
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Como se ha venido trabajando en este componente se puede hacer una diferencia entre los programas de pago, que tienen un sin número de herramientas y los #[em software] de código abierto, que son muy buenas herramientas al momento de empezar a adentrarse en el mundo de la animación. #[strong Ya sea creando videos informativos, infografías, cortos para la escuela o algún proyecto con grandes animaciones, los siguientes programas serán de mucha ayuda al momento de plantear la mejor herramienta:]

    .slyderBg_01.pt-5.p-4(data-aos="zoom-in").mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_34.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-0.ps-lg-4
            h4 Adobe Animate
            p.mb-0 Programa de animación 2D, desarrollado por la casa Adobe, es un programa que ha evolucionado, antes conocido como Flash, posee herramientas que hacen posible animar personajes y escenarios de manera sencilla; animaciones cuadro a cuadro o la posibilidad de dibujar elementos a mano, son alguna de las posibilidades que este programa permite realizar, incluso importar personajes y otros elementos.    

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_35.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-4
            h4 Adobe Character Animator
            p.mb-0 Continuando con la familia Adobe y con la animación 2D, es una de las herramientas más recientes de la familia, permitiendo animar personajes y diferentes elementos animados en tiempo real, de  forma muy rápida y sencilla.
            
            p Con la posibilidad a menudo de tener una cámara a disposición, simplemente se conecta la cámara al #[em software] y este reconoce los movimientos que se efectúan, pasando a animar personajes o marionetas que se utilizan específicamente para este sistema, siendo esta una de sus contras.

            p.mb-0 Es un programa que puede detectar expresiones y voces, las cuales adapta a las “marionetas virtuales” que presenta, se pueden obtener movimientos y expresiones que hacen un programa de animación funcional. 

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_36.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-4
            h4 Adobe After Effects
            p.mb-0 No quedando por fuera de las herramientas de animación se hace referencia a After Effects como la herramienta más estándar en la industria, permitiendo entre todos los programas enlazar archivos de todas las plataformas Adobe, además de integrar gráficos, ilustraciones y otras animaciones, ofrece posibilidades de animación 2D y 3D, así como imágenes en tiempo real.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_37.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-4
            h4 Moho 13
            p.mb-0 Para empezar en el mundo de la animación se presenta una herramienta, la cual se conocía como “Anime Studio”, este programa para animaciones 2D permite realizar animaciones cuadro por cuadro. Se puede trabajar con texturas, efectos y herramientas para la creación de vectores, es un sistema mejorado para flujos de trabajo en 3D.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_38.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-4
            h4 CelAction2D
            p.mb-0 Es el programa por excelencia de la animación profesional, permite generar personajes desde su esqueleto, es decir, no se anima cuadro por cuadro. Es un programa fácil de aprender, usar y trabaja muy bien de la mano con programas de diseño como PhotoShop e Illustrator.

            p.mb-0 Herramientas como la sincronización de labios o las diferentes cámaras de panel ayudan a controlar la animación en tiempo real.
            
            p.mb-0 Diseñado para usuarios principiantes pero que necesitan herramientas para generar toques profesionales. 

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_39.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-4
            h4 StopMotion Studio
            p.mb-0 Programa diseñado para trabajos y proyectos en 2D, su facilidad de captura de contenido permite trabajar con enfoques y balances, su herramienta de trasparencia de capas ayuda al proceso del cuadro por cuadro, permite la captura de audio y de voz, lo que permite crear animaciones más completas sin necesidad de buscar otros programas especializados. Puede incorporar periféricos con los que permite capturar perspectivas remotas, sin duda una gran herramienta para que los principiantes y los ya profesionales puedan encontrar un programa muy completo.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_40.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-4
            h4 Blender
            p.mb-0 Potente programa de código libre para animación 3D, enfocado a un público más profesional; acciones como el modelado de personajes, la renderización y el seguimiento de movimiento se consideran una de las herramientas con las que este programa gratis, permite realizar creaciones en 3D.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/t2_41.png', alt='')
          .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.dot-left.ps-4
            h4 Clara.IO
            p Aplicación que trabaja directamente en la #[em web], es decir, que desde un navegador cualquiera se puede trabajar, incluye recursos de modelado, cortes y administración de superficies, como es un sistema que trabaja por la #[em web], su contenido se almacena en la nube, lo que la hace una herramienta poderosa al momento de trabajar proyectos en colaboración. 
            
            p.mb-0 Trabaja por #[em key frames], lo que permite trabajar interpolaciones, herramientas de renderizado y animación que superan las expectativas para un servicio en línea.
    
    .row.justify-content-center(data-aos="zoom-in") 
      .col-lg-10
        .row.justify-content-center.align-items-lg-center.mb-5
          .col-auto.avtr-txt
            figure
              img(src="@/assets/curso/temas/recursos/icon_01.png", alt="alt").img150
          .col
            p.mb-0 #[strong Se ha podido ver diferentes y útiles programas y aplicaciones tanto comerciales como de código abierto, todas muy buenas herramientas para poder arrancar este largo camino que es la animación; encuentre la mejor herramienta para la creación de los mejores proyectos de comunicación.]

    .row.mb-4(data-aos="fade-left") 
      .col-auto
        h3.custom-H3 Formatos de salida y procesamiento

    .row.justify-content-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right") 
        .squareTop.mb-4
          p.mb-0 Como se acaba de concluir, la animación es una secuencia continua de varias imágenes que seguidas recrean la sensación de animación, lo que vendría a ser en el campo digital una imagen digital, seguida de varias imágenes digitales, así mismo, se podría suponer una consecución de “formatos jpg” seguidos; para esta secuencia de fotogramas o imágenes existen unos formatos específicos para archivos de animación y otros animados más genéricos. 
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-0 Entre estos archivos que pueden soportar o procesar formatos como la animación se encuentran formatos GIF y SWF, los primeros guardan información cuadro a cuadro, los segundos información en tiempo real.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_42.svg", alt="alt")

    .cajon.cjn--paleBlue.p-4.mb-5(data-aos="zoom-in") 
      p.mb-0 Se encontrarán archivos específicos en el mundo laboral, pero vendrán de la mano de los programas en los cuales se realizaron, algunos de los más utilizados son:

    .row.justify-content-center.align-items-center
      .col-lg-3.d-none.d-lg-flex(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t2/t2_47.svg", alt="alt")
      .col-lg-9
        .slyderBg_02.pt-5.p-4(data-aos="fade").mb-5
          SlyderA(tipo="b")
            .row.justify-content-around.align-items-center          
              .col-lg-8.mb-4.mb-lg-0
                h4 SWF #[em (Small Web Format)]
                p.mb-0 Estos archivos cortos son muy usados por su facilidad de compartir y de permitir compatibilidad, haciendo que se puedan utilizar en cualquier plataforma, aún con anchos de banda de poca señal; estos archivos son los más utilizados en la #[em web]. Animaciones basadas en vectores, contenido interactivo y su contenido es independiente, es decir, puede ser representado en cualquier sistema operativo, su archivo editable es el formato FLA, con el #[em software] Flash.
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/t2/t2_43.svg', alt='')

            .row.justify-content-around.align-items-center          
              .col-lg-8.mb-4.mb-lg-0
                h4 GIF #[em (Graphic Interchange Format)]
                p.mb-0 Uno de los formatos más usados en la #[em web] para la presentación de imágenes y animaciones posee características de 8 #[em bits] por pixel, es decir, 256 colores, lo que hace que, de preferencia, sean imágenes pequeñas; una de sus características más importantes es el algoritmo de descarga que utiliza, dado que aprovecha conexiones lentas para la descarga de sus archivos. 
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/t2/t2_44.svg', alt='')

            .row.justify-content-around.align-items-center          
              .col-lg-8.mb-4.mb-lg-0
                h4 MNG #[em (Multiple Image Network Graphic)]
                p.mb-0 Se considera un formato de extensión de los archivos PNG, es un archivo capaz de almacenar animaciones e imágenes complejas o cualquier archivo en formato PNG o JPG. Es un formato que permite mayor relación de compresión, dada la posibilidad de almacenar diferentes mapas de #[em bits], este formato pertenece a los formatos que necesitan de un #[em software] para poder editarlo, aunque su reproducción en línea es mucho más sencilla. 
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/t2/t2_45.svg', alt='')

            .row.justify-content-around.align-items-center          
              .col-lg-8.mb-4.mb-lg-0
                h4 SVG #[em (Scalable Vector Graphics)]
                p.mb-0 Formato de visualización que utiliza elementos vectoriales para la construcción de formas, lo que permite una capacidad muy alta al momento de pensar en la resolución de gráficos, dado la escalabilidad de sus elementos. Cualquier programa de edición vectorial es un programa posible para la edición de estos archivos, su posibilidad de escritura de código hace que sea un elemento que se abre paso, ya que su capacidad de indexar mejora las búsquedas SEO de las páginas #[em web].
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/t2/t2_46.svg', alt='')


 

 


</template>

<script>
export default {
  name: 'Tema2',
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
