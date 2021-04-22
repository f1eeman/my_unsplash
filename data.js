import _ from 'lodash';

const pictures = [
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-2-mobile.jpg',
        webp: '/images/pictures/girl-2-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-2-desktop.jpg',
        webp: '/images/pictures/girl-2-desktop.webp',
        bgPhotoCard: '/images/pictures/girl-2-bg-desktop.jpg',
        imgPhotoCard: {
          jpg: '/images/pictures/girl-2-photo-card-desktop.jpg',
          webp: '/images/pictures/girl-2-photo-card-desktop.webp',
        },
      },
    },
    alt: 'Фотография девушки в арке',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/mercedes-mobile.jpg',
        webp: '/images/pictures/mercedes-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/mercedes-desktop.jpg',
        webp: '/images/pictures/mercedes-desktop.webp',
      },
    },
    alt: 'Эмблема мерседес в кафе',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/elephants-mobile.jpg',
        webp: '/images/pictures/elephants-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/elephants-desktop.jpg',
        webp: '/images/pictures/elephants-desktop.webp',
      },
    },
    alt: 'Фотография слонов на рассвете',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/yellow-car-mobile.jpg',
        webp: '/images/pictures/yellow-car-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/yellow-car-desktop.jpg',
        webp: '/images/pictures/yellow-car-desktop.webp',
      },
    },
    alt: 'Фотография желтого вольксвагена 40-х годов',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/tree-mobile.jpg',
        webp: '/images/pictures/tree-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/tree-desktop.jpg',
        webp: '/images/pictures/tree-desktop.webp',
      },
    },
    alt: 'Фотография завтрака под деревом',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/rack-mobile.jpg',
        webp: '/images/pictures/rack-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/rack-desktop.jpg',
        webp: '/images/pictures/rack-desktop.webp',
      },
    },
    alt: 'Фотография полки с предметами',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-1-mobile.jpg',
        webp: '/images/pictures/girl-1-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-1-desktop.jpg',
        webp: '/images/pictures/girl-1-desktop.webp',
      },
    },
    alt: 'Арт-фотография девушки в очках',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/records-mobile.jpg',
        webp: '/images/pictures/records-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/records-desktop.jpg',
        webp: '/images/pictures/records-desktop.webp',
      },
    },
    alt: 'Фотография неоновой надписи Records',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/flowers-mobile.jpg',
        webp: '/images/pictures/flowers-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/flowers-desktop.jpg',
        webp: '/images/pictures/flowers-desktop.webp',
      },
    },
    alt: 'Фотография букета в руках',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/man-1-mobile.jpg',
        webp: '/images/pictures/man-1-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/man-1-desktop.jpg',
        webp: '/images/pictures/man-1-desktop.webp',
      },
    },
    alt: 'Фотография мужчины мужчины перед зеркалом в ванной',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/food-1-mobile.jpg',
        webp: '/images/pictures/food-1-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/food-1-desktop.jpg',
        webp: '/images/pictures/food-1-desktop.webp',
      },
    },
    alt: 'отография еды на столе',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/board-mobile.jpg',
        webp: '/images/pictures/board-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/board-desktop.jpg',
        webp: '/images/pictures/board-desktop.webp',
      },
    },
    alt: 'Фотография таблички со надписью',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-3-mobile.jpg',
        webp: '/images/pictures/girl-3-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-3-desktop.jpg',
        webp: '/images/pictures/girl-3-desktop.webp',
      },
    },
    alt: 'Фотография девушки на закате',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/yellow-man-mobile.jpg',
        webp: '/images/pictures/yellow-man-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/yellow-man-desktop.jpg',
        webp: '/images/pictures/yellow-man-desktop.webp',
      },
    },
    alt: 'Фотография человека на дороге',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/man-3-mobile.jpg',
        webp: '/images/pictures/man-3-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/man-3-desktop.jpg',
        webp: '/images/pictures/man-3-desktop.webp',
      },
    },
    alt: 'Фотография отражения мужчины в обломке зеркала',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/man-2-mobile.jpg',
        webp: '/images/pictures/man-2-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/man-2-desktop.jpg',
        webp: '/images/pictures/man-2-desktop.webp',
      },
    },
    alt: 'Картинка фотоаппарата в руках',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/food-2-mobile.jpg',
        webp: '/images/pictures/food-2-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/food-2-desktop.jpg',
        webp: '/images/pictures/food-2-desktop.webp',
      },
    },
    alt: 'Фотография девушки в процессе приготовления пищи',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/gtr-mobile.jpg',
        webp: '/images/pictures/gtr-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/gtr-desktop.jpg',
        webp: '/images/pictures/gtr-desktop.webp',
      },
    },
    alt: 'Фотография белого Nissan GT-R',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/terrain-desktop.jpg',
        webp: '/images/pictures/terrain-desktop.webp',
      },
      desktopView: {
        jpg: '/images/pictures/terrain-desktop.jpg',
        webp: '/images/pictures/terrain-desktop.webp',
      },
    },
    alt: 'Фотография долины и гор',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/mountain-desktop.jpg',
        webp: '/images/pictures/mountain-desktop.webp',
      },
      desktopView: {
        jpg: '/images/pictures/mountain-desktop.jpg',
        webp: '/images/pictures/mountain-desktop.webp',
      },
    },
    alt: 'Фотография гор с высоты',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/aged-people-desktop.jpg',
        webp: '/images/pictures/aged-people-desktop.webp',
      },
      desktopView: {
        jpg: '/images/pictures/aged-people-desktop.jpg',
        webp: '/images/pictures/aged-people-desktop.webp',
      },
    },
    alt: 'Фотография пожилой пары',
    authorId: 1
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-8-mobile.jpg',
        webp: '/images/pictures/girl-8-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-8-desktop.jpg',
        webp: '/images/pictures/girl-8-desktop.webp',
      },
    },
    alt: 'Фотография темноволосой девушки в белой блузке',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-7-mobile.jpg',
        webp: '/images/pictures/girl-7-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-7-desktop.jpg',
        webp: '/images/pictures/girl-7-desktop.webp',
      },
    },
    alt: 'Фотография девушки с черной шляпой',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-10-mobile.jpg',
        webp: '/images/pictures/girl-10-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-10-desktop.jpg',
        webp: '/images/pictures/girl-10-desktop.webp',
      },
    },
    alt: 'Фотография девушки в полосатой блузке и в шляпе',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-9-mobile.jpg',
        webp: '/images/pictures/girl-9-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-9-desktop.jpg',
        webp: '/images/pictures/girl-9-desktop.webp',
      },
    },
    alt: 'Фотография девушки в лучах солнца',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-11-mobile.jpg',
        webp: '/images/pictures/girl-11-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-11-desktop.jpg',
        webp: '/images/pictures/girl-11-desktop.webp',
      },
    },
    alt: 'Фотография девушки со сложенными руками',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-6-mobile.jpg',
        webp: '/images/pictures/girl-6-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-6-desktop.jpg',
        webp: '/images/pictures/girl-6-desktop.webp',
      },
    },
    alt: 'Фотография девушки среди колосьев в поле',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-5-mobile.jpg',
        webp: '/images/pictures/girl-5-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-5-desktop.jpg',
        webp: '/images/pictures/girl-5-desktop.webp',
      },
    },
    alt: 'Фотография девушки в очках и зеленом топе',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
  {
    id: _.uniqueId(),
    path: {
      mobileView: {
        jpg: '/images/pictures/girl-4-mobile.jpg',
        webp: '/images/pictures/girl-4-mobile.webp',
      },
      desktopView: {
        jpg: '/images/pictures/girl-4-desktop.jpg',
        webp: '/images/pictures/girl-4-desktop.webp',
      },
    },
    alt: 'Фотография девушки в ночной иллюминации',
    authorId: 1,
    tags: ['Girl', 'Woman', 'Mood', 'People', 'Free Pictures'],
  },
];

export default pictures;
