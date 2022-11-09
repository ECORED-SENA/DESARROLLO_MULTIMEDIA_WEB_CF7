export default {
  global: {
    componenteFormativo:
      'Desarrollo de los elementos gráficos y audiovisuales del proyecto multimedia',
    descripcionCurso:
      'En este componente se plantean herramientas para la consecución de ideas y conceptos gráficos, además de cuáles herramientas son las más usadas hoy en día. <br><br>Se encuentran conceptos que encaminarán a los aprendices a hallar los programas e instrumentos que puedan explotar y así sacar el mejor provecho tanto para el curso, como en la vida profesional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Codificación de imágenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La imagen',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas de desarrollo',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Animaciones y elementos interactivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diseño de personajes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Animación y elementos interactivos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medios de captura y formatos de salida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Herramientas de captura de imagen',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas de captura de imagen en movimiento',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elementos gráficos del proyecto multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Gráfica digital',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Video',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Sonido',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Transmedia',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Realidad aumentada',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Diseño Centrado en el Humano (HCD)',
            hash: 't_4_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.7',
            titulo: 'Diseño de Interfaz de Usuario Intangible (TUI)',
            hash: 't_4_7',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Animaciones y elementos interactivos',
      referencia:
        'Barba Batel. (2020). Tutorial básico de luces y sombras en el dibujo artístico',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ma8dsEsOh34',
    },
    {
      tema: 'Animaciones y elementos interactivos',
      referencia:
        'Bombillo Amarillo. (2017). <em>Animatic</em> - ¡Águila y Sofía Vergara!',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4zGM73_PcOs',
    },
    {
      tema: 'Elementos gráficos del proyecto multimedia',
      referencia: 'Agencia Ideus. (2017). Diseño gráfico digital',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lUDwULU2LDk',
    },
    {
      tema: 'Elementos gráficos del proyecto multimedia',
      referencia:
        'EzeSoler. (2019). ¿Cuál es la diferencia entre AVI, MP4, MKV y MOV?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=t78rzPK6aLo',
    },
    {
      tema: 'Elementos gráficos del proyecto multimedia',
      referencia: 'FCB&FiRe Spain. (2013). <em>Transmedia Storytelling</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5IFnSp2ilcQ',
    },
    {
      tema: 'Elementos gráficos del proyecto multimedia',
      referencia: 'Rodríguez del Moral, F. (2015). Imagen digital',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wiiR0JLB0Jc',
    },
    {
      tema: 'Medios de captura y formatos de salida',
      referencia:
        'El futuro es apasionante de vodafone. (2017.) Rokoko, el traje de captura de movimiento que revoluciona la animación',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NGnkb3GHt04',
    },
  ],
  glosario: [
    {
      termino: 'CMYK',
      significado:
        'Siglas de Cyan, Magenta, <em>Yellow</em> y <em>Key</em> o <em>Black</em>, es la configuración de imágenes para las impresiones en 4 colores (Mastoner, 2019).',
    },
    {
      termino: '<em>Ease In - Out</em>',
      significado:
        'Define el comienzo y el final de un efecto, tiende a ser un movimiento que comienza lento, rápido y luego lento una vez más (Escardo, 2018).',
    },
    {
      termino: 'Folioscopio',
      significado:
        'Libro que contiene una serie de imágenes que varían gradualmente, simulando un movimiento al momento de pasar rápido las páginas (Neuras a tres, 2010).',
    },
    {
      termino: 'Fotograma',
      significado:
        'Es cada una de las imágenes impresas en una tira de celuloide o cada una de las imágenes, unir dos o más hace que aparezca una animación (Conceptodefinicion.de, 2021).',
    },
    {
      termino: 'Imagen digital',
      significado:
        'Es una representación bidimensional de una imagen a partir de una matriz numérica (Ucha, 2011).',
    },
    {
      termino: 'Imagen vectorial',
      significado:
        'Es una representación digital formada por objetos geométricos, definidos por atributos matemáticos y no sobre un mapa de bits (Alonso, 2019).',
    },
    {
      termino: '<em>KeyFrame</em>',
      significado:
        'O fotograma clave, es una referencia para algunos fotogramas donde se pueden presentar cambios, imágenes, transiciones, etc. (Motion Grafic Web, s.f.).',
    },
    {
      termino: 'Mapa de bits',
      significado:
        'Es una trama compuesta por una estructura rectangular formada por una cantidad de píxeles a lo ancho y a lo alto, asignados de manera ordenada (Bleger, 2021).',
    },
    {
      termino: 'Megapixel',
      significado:
        'Medida de una imagen, que es igual a un millón de píxeles. 1 Mgpx es igual a 1.000.000 de píxeles (Tuenti, s.f.).',
    },
    {
      termino: 'Monosemia',
      significado:
        'Son las palabras que tienen un único significado, dependiendo su sentido y su contexto (Olave, I., s.f.).',
    },
    {
      termino: 'Nodo',
      significado:
        'Elementos de los que están compuestas las imágenes por vectores, un nodo puede ser una esquina o un punto sobre una línea o ser parte de una tipografía (Barber, 2016).',
    },
    {
      termino: 'Polisemia',
      significado:
        'Es una palabra o un concepto que puede definir varias representaciones, todo depende del contexto donde se utilice (Morales, 2019).',
    },
    {
      termino: 'RGB',
      significado:
        'Sigla para la combinación de colores red, green and blue (rojo, verde y azul) y es el sistema en adición para la combinación de colores de las imágenes digitales (Mastoner, 2019).',
    },
  ],
  referencias: [
    {
      referencia:
        'Alba, T. (2017). Diseño de imágenes para tus artículos: herramientas y consejos. Webempresa.',
      link: 'https://www.webempresa.com/blog/diseno-de-imagenes.html',
    },
    {
      referencia:
        'Alonso, A. (2019). Qué es una imagen vectorial: características y diferencias con los mapas de bits. Marketing4ecommerce',
      link:
        'https://marketing4ecommerce.co/que-es-una-imagen-vectorial-y-como-reconocerla/',
    },
    {
      referencia:
        'Colmenar, A. (2019). El sonido digital, formatos, captura, edición, manipulación, conversión y grabación. ',
      link:
        'http://ocw.innova.uned.es/mm2/tm/contenidos/pdf/tema3/tmm_tema3_sonido_digital_presentacion.pdf ',
    },
    {
      referencia: 'Barber, F. (2016). Definición de nodo. ',
      link: 'https://www.cocoschool.com/nodos-diseno-grafico/',
    },
    {
      referencia: 'Bleger, M. (2021). Definición de mapa de bits. ',
      link: 'https://www.crehana.com/co/blog/diseno-grafico/que-es-mapa-bits/',
    },
    {
      referencia: 'ConceptoDefinición. (2021). Definición de fotograma',
      link: 'https://conceptodefinicion.de/fotograma/',
    },
    {
      referencia: 'Cortés, J. (2021). ¿Qué es la animación? Tipos y técnicas. ',
      link:
        'https://www.notodoanimacion.es/que-es-la-animacion-tipos-y-tecnicas/',
    },
    {
      referencia: '3D CAD Portal. (s.f.). Definición de renderizado. ',
      link:
        'https://www.3dcadportal.com/rendering.html#:~:text=Renderizado%20(render%20en%20ingl%C3%A9s)%20es,programas%20de%20dise%C3%B1o%20en%203D',
    },
    {
      referencia:
        'Escardo Club de Animación. (2018). Definición de <em>Ease In – Out</em>.',
      link: '',
    },
    {
      referencia:
        'IEBS. (2019). Narrativa transmedia y storytelling: el arte de contar. Iebschool.com. ',
      link:
        'https://www.iebschool.com/blog/que-es-narrativa-transmedia-social-media-social-media/',
    },
    {
      referencia: 'Mastoner. (2019). Definición CMYK.',
      link: 'https://mastoner.com/blog/imprimir-cmyk-o-rgb-que-formato-elegir/',
    },
    {
      referencia: 'Morales, A. (2019). Definición de polisemia. ',
      link: 'https://www.significados.com/polisemia/',
    },
    {
      referencia: 'Motion Grafic Web. (s.f.). Definición de fotograma clave. ',
      link: 'https://motiongraphicsweb.com/que-es-un-fotograma-clave/',
    },
    {
      referencia: 'Neuras a tres. (2010). Definición de folioscopio. ',
      link:
        'https://neurasartes.wordpress.com/2010/03/10/%C2%BFque-es-un-folioscopio-o-flipbook/',
    },
    {
      referencia: 'Olave, I. (s.f.). Definición de monosemia',
      link: 'https://en.calameo.com/books/00239091327ba09750735',
    },
    {
      referencia: 'Profesional review. (s.f.). Definición de periférico.',
      link: 'https://www.profesionalreview.com/perifericos/',
    },
    {
      referencia:
        'Señal Colombia Proyecta. (2018). ¿Qué es y cómo hacer un transmedia? ',
      link:
        'http://proyecta.senalcolombia.tv/guias/que-es-y-como-hacer-un-transmedia',
    },
    {
      referencia: 'Ucha, F. (2011). Definición de imagen digital. ',
      link: 'https://www.definicionabc.com/tecnologia/imagen-digital.php',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila Garcia Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección general',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez ',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia ',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto ',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesus Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Revisión de guion',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
