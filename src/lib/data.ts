export type Product = {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  valor: number;
  moneda: string;
  categorias: string[];
  imagen: string;
  disponibilidad: boolean;
  href: string;
};

export const productsData: Product[] = [
  {
    id: 'a1b2c',
    nombre: 'Ramo de Rosas Rojas',
    slug: 'ramo-de-rosas-rojas',
    descripcion: 'Este ramo de rosas rojas es la elección perfecta para expresar amor y pasión. Con pétalos aterciopelados y un aroma embriagador, es ideal para ocasiones especiales como aniversarios y San Valentín. Un símbolo clásico de sentimientos profundos y duraderos.',
    valor: 300,
    moneda: 'MXN',
    categorias: ['Romántico', 'Clásico'],
    imagen: 'https://floresparati.com.mx/wp-content/uploads/2023/09/safloresg_product_shot_of_50_red_roses_bouquet_real_image_elega_0b761805-1200-4d49-adb9-2a161f3917d5.png',
    disponibilidad: false,
    href: '/flores/ramo-de-rosas-rojas'
  },
  {
    id: 'd3e4f',
    nombre: 'Ramo de Lirios Blancos',
    slug: 'ramo-de-lirios-blancos',
    descripcion: 'Este elegante ramo de lirios blancos representa pureza y devoción. Con pétalos grandes y perfumados, es perfecto para transmitir respeto y admiración en bodas y eventos formales.',
    valor: 270,
    moneda: 'MXN',
    categorias: ['Elegante', 'Puro'],
    imagen: 'https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2F6d6bc79f540e2c631acd967fd285d20e%2F445013d0-5251-11ec-8d4e-5fe1922b82a2?alt=media&token=44623f5e-c42c-470c-bd30-55353084f711',
    disponibilidad: true,
    href: '/flores/ramo-de-lirios-blancos'
  },
  {
    id: 'g5h6i',
    nombre: 'Ramo de Tulipanes Rosados',
    slug: 'ramo-de-tulipanes-rosados',
    descripcion: 'Este vibrante ramo de tulipanes rosados es símbolo de afecto y cariño. Ideal para expresar sentimientos tiernos y amables, especialmente popular durante la primavera.',
    valor: 240,
    moneda: 'MXN',
    categorias: ['Afecto', 'Cariño'],
    imagen: 'https://cdnx.jumpseller.com/the-flower-store/image/31508270/6925c6a4-f1fc-4a64-8340-9bdba49864d2.jpg?1675477819',
    disponibilidad: true,
    href: '/flores/ramo-de-tulipanes-rosados'
  },
  {
    id: 'j7k8l',
    nombre: 'Ramo de Girasoles',
    slug: 'ramo-de-girasoles',
    descripcion: 'Un ramo de girasoles brillantes que simboliza alegría y positividad. Perfecto para alegrar cualquier espacio y regalar a alguien especial, evocando felicidad y optimismo.',
    valor: 330,
    moneda: 'MXN',
    categorias: ['Alegre', 'Positiva'],
    imagen: 'https://www.floreriasdf.net/media/catalog/product/cache/9e8f7fb7c4789ff7af581d9bcc93d7a8/r/a/ramo_de_girasoles_flores_america_.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-girasoles'
  },
  {
    id: 'm9n0o',
    nombre: 'Ramo de Margaritas Blancas',
    slug: 'ramo-de-margaritas-blancas',
    descripcion: 'Un ramo sencillo y encantador de margaritas blancas, símbolo de inocencia y pureza. Perfecto para transmitir amor sincero y amistoso en cualquier ocasión romántica.',
    valor: 210,
    moneda: 'MXN',
    categorias: ['Encantadora', 'Romántica'],
    imagen: 'https://i.pinimg.com/originals/d4/a7/20/d4a720e35de6c21b0930725ade1ab470.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-margaritas-blancas'
  },
  {
    id: 'p1q2r',
    nombre: 'Ramo de Orquídeas Moradas',
    slug: 'ramo-de-orquideas-moradas',
    descripcion: 'Este ramo de orquídeas moradas exóticas es ideal para expresar admiración y respeto. Con sus colores vibrantes y elegantes pétalos, aporta distinción a cualquier ambiente.',
    valor: 390,
    moneda: 'MXN',
    categorias: ['Exótica', 'Sofisticada'],
    imagen: 'https://ponchycaprico.com/cdn/shop/files/GI024.jpg?v=1691274443&width=1445',
    disponibilidad: true,
    href: '/flores/ramo-de-orquideas-moradas'
  },
  {
    id: 's3t4u',
    nombre: 'Ramo de Claveles Rojos',
    slug: 'ramo-de-claveles-rojos',
    descripcion: 'Este ramo de claveles rojos es símbolo de amor y admiración. Sus pétalos rizados e intenso color rojo añaden un toque de pasión a cualquier arreglo floral.',
    valor: 180,
    moneda: 'MXN',
    categorias: ['Resistente', 'Amor'],
    imagen: 'https://floreriaadomicilio.mx/wp-content/uploads/2023/06/claveles-rojos-floreriaadomicilio-dot-mx.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-claveles-rojos'
  },
  {
    id: 'v5w6x',
    nombre: 'Ramo de Peonías Rosadas',
    slug: 'ramo-de-peonias-rosadas',
    descripcion: 'Este lujoso ramo de peonías rosadas es ideal para demostrar amor romántico. Sus voluminosos pétalos y dulce fragancia son perfectos para bodas y eventos elegantes.',
    valor: 450,
    moneda: 'MXN',
    categorias: ['Lujosa', 'Romántica'],
    imagen: 'https://i.etsystatic.com/11081498/r/il/a46c53/1938467179/il_570xN.1938467179_geuv.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-peonias-rosadas'
  },
  {
    id: 'y7z8a',
    nombre: 'Ramo de Jazmines Blancos',
    slug: 'ramo-de-jazmines-blancos',
    descripcion: 'Este ramo de jazmines blancos pequeños y perfumados es símbolo de amor eterno y pureza. Perfecto para expresar sentimientos profundos y sinceros con su aroma embriagador.',
    valor: 360,
    moneda: 'MXN',
    categorias: ['Perfumada', 'Pura'],
    imagen: 'https://i.etsystatic.com/27213189/r/il/fea22d/5515534475/il_fullxfull.5515534475_5zy0.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-jazmines-blancos'
  },
  {
    id: 'b9c0d',
    nombre: 'Ramo de Crisantemos Rojos',
    slug: 'ramo-de-crisantemos-rojos',
    descripcion: 'Este ramo de crisantemos rojos es perfecto para expresar amor y pasión. Sus densos y vibrantes pétalos añaden alegría y longevidad a cualquier celebración.',
    valor: 252,
    moneda: 'MXN',
    categorias: ['Versátil', 'Apasionada'],
    imagen: 'https://st4.depositphotos.com/16122460/41859/i/450/depositphotos_418596158-stock-photo-beautiful-dahlia-flowers-blurred-background.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-crisantemos-rojos'
  },
  {
    id: 'e1f2g',
    nombre: 'Ramo de Dalias Rojas',
    slug: 'ramo-de-dalias-rojas',
    descripcion: 'Este espectacular ramo de dalias rojas es ideal para demostrar amor eterno. Sus intrincados pétalos y vibrante color añaden elegancia y dignidad a cualquier evento.',
    valor: 300,
    moneda: 'MXN',
    categorias: ['Ornamentada', 'Eterna'],
    imagen: 'https://i.pinimg.com/originals/72/05/2d/72052dedfe7b0b159926a1a792cc727f.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-dalias-rojas'
  },
  {
    id: 'h3i4j',
    nombre: 'Ramo de Amapolas Rojas',
    slug: 'ramo-de-amapolas-rojas',
    descripcion: 'Este ramo de amapolas rojas es ideal para expresar amor y deseo. Sus delicados pétalos e intenso color añaden belleza y significado a cualquier arreglo floral.',
    valor: 282,
    moneda: 'MXN',
    categorias: ['Simbólica', 'Deseo'],
    imagen: 'https://i.etsystatic.com/8480827/r/il/7de5df/798765786/il_570xN.798765786_89ox.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-amapolas-rojas'
  },
  {
    id: 'k5l6m',
    nombre: 'Ramo de Fresias Blancas',
    slug: 'ramo-de-fresias-blancas',
    descripcion: 'Este pequeño y fragante ramo de fresias blancas simboliza amistad y amor sincero. Ideal para expresar aprecio y cariño en cualquier ocasión especial.',
    valor: 198,
    moneda: 'MXN',
    categorias: ['Fragante', 'Sincera'],
    imagen: 'https://www.theprestigerosesmadrid.es/cdn/shop/files/IMG_3453_1024x1024.jpg?v=1697404952',
    disponibilidad: true,
    href: '/flores/ramo-de-fresias-blancas'
  },
  {
    id: 'n7o8p',
    nombre: 'Ramo de Gardenias Blancas',
    slug: 'ramo-de-gardenias-blancas',
    descripcion: 'Este perfumado ramo de gardenias blancas simboliza pureza y dulzura. Perfecto para expresar amor puro y sincero en decoraciones y ramos elegantes.',
    valor: 330,
    moneda: 'MXN',
    categorias: ['Pura', 'Dulce'],
    imagen: 'https://www.picturethisai.com/wiki-image/1080/201211542713270272.jpeg',
    disponibilidad: true,
    href: '/flores/ramo-de-gardenias-blancas'
  },
  {
    id: 'q1r2s',
    nombre: 'Ramo de Hortensias Rosadas',
    slug: 'ramo-de-hortensias-rosadas',
    descripcion: 'Este exuberante ramo de hortensias rosadas es ideal para expresar amor y gratitud. Sus grandes racimos de flores simbolizan sinceridad y aprecio.',
    valor: 312,
    moneda: 'MXN',
    categorias: ['Exuberante', 'Gratitud'],
    imagen: 'https://previews.123rf.com/images/malkovkosta/malkovkosta1705/malkovkosta170500084/77840518-hermosa-flor-rosa-hortensia-y-orqu%C3%ADdeas-en-ramo-de-boda.jpg',
    disponibilidad: true,
    href: '/flores/ramo-de-hortensias-rosadas'
  }
]
