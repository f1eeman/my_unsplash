import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// import { promises as fsp } from 'fs';
import { uniqueId } from 'lodash';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const picturesDirectory = path.join(__dirname, '..', 'pictures');

const data = [
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-2-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-2-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-2-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-2-desktop.webp'),
        'bg-photo-card': path.join(picturesDirectory, 'girl-2-bg-desktop.jpg'),
        'img-photo-card': {
          jpg: path.join(picturesDirectory, 'girl-2-photo-card-desktop.jpg'),
          webp: path.join(picturesDirectory, 'girl-2-photo-card-desktop.webp'),
        },
      },
    },
    alt: 'Фотография девушки в арке',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'mercedes-mobile.jpg'),
        webp: path.join(picturesDirectory, 'mercedes-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'mercedes-desktop.jpg'),
        webp: path.join(picturesDirectory, 'mercedes-desktop.webp'),
      },
    },
    alt: 'Эмблема мерседес в кафе',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'elephants-mobile.jpg'),
        webp: path.join(picturesDirectory, 'elephants-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'elephants-desktop.jpg'),
        webp: path.join(picturesDirectory, 'elephants-desktop.webp'),
      },
    },
    alt: 'Фотография слонов на рассвете',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'yellow-car-mobile.jpg'),
        webp: path.join(picturesDirectory, 'yellow-car-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'yellow-car-desktop.jpg'),
        webp: path.join(picturesDirectory, 'yellow-car-desktop.webp'),
      },
    },
    alt: 'Фотография желтого вольксвагена 40-х годов',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'tree-mobile.jpg'),
        webp: path.join(picturesDirectory, 'tree-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'tree-desktop.jpg'),
        webp: path.join(picturesDirectory, 'tree-desktop.webp'),
      },
    },
    alt: 'Фотография завтрака под деревом',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'rack-mobile.jpg'),
        webp: path.join(picturesDirectory, 'rack-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'rack-desktop.jpg'),
        webp: path.join(picturesDirectory, 'rack-desktop.webp'),
      },
    },
    alt: 'Фотография полки с предметами',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-1-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-1-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-1-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-1-desktop.webp'),
      },
    },
    alt: 'Арт-фотография девушки в очках',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'records-mobile.jpg'),
        webp: path.join(picturesDirectory, 'records-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'records-desktop.jpg'),
        webp: path.join(picturesDirectory, 'records-desktop.webp'),
      },
    },
    alt: 'Фотография неоновой надписи Records',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'flowers-mobile.jpg'),
        webp: path.join(picturesDirectory, 'flowers-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'flowers-desktop.jpg'),
        webp: path.join(picturesDirectory, 'flowers-desktop.webp'),
      },
    },
    alt: 'Фотография букета в руках',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'man-1-mobile.jpg'),
        webp: path.join(picturesDirectory, 'man-1-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'man-1-desktop.jpg'),
        webp: path.join(picturesDirectory, 'man-1-desktop.webp'),
      },
    },
    alt: 'Фотография мужчины мужчины перед зеркалом в ванной',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'food-1-mobile.jpg'),
        webp: path.join(picturesDirectory, 'food-1-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'food-1-desktop.jpg'),
        webp: path.join(picturesDirectory, 'food-1-desktop.webp'),
      },
    },
    alt: 'отография еды на столе',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'board-mobile.jpg'),
        webp: path.join(picturesDirectory, 'board-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'board-desktop.jpg'),
        webp: path.join(picturesDirectory, 'board-desktop.webp'),
      },
    },
    alt: 'Фотография таблички со надписью',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-3-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-3-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-3-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-3-desktop.webp'),
      },
    },
    alt: 'Фотография девушки на закате',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'yellow-man-mobile.jpg'),
        webp: path.join(picturesDirectory, 'yellow-man-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'yellow-man-desktop.jpg'),
        webp: path.join(picturesDirectory, 'yellow-man-desktop.webp'),
      },
    },
    alt: 'Фотография человека на дороге',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'man-3-mobile.jpg'),
        webp: path.join(picturesDirectory, 'man-3-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'man-3-desktop.jpg'),
        webp: path.join(picturesDirectory, 'man-3-desktop.webp'),
      },
    },
    alt: 'Фотография отражения мужчины в обломке зеркала',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'man-2-mobile.jpg'),
        webp: path.join(picturesDirectory, 'man-2-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'man-2-desktop.jpg'),
        webp: path.join(picturesDirectory, 'man-2-desktop.webp'),
      },
    },
    alt: 'Картинка фотоаппарата в руках',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'food-2-mobile.jpg'),
        webp: path.join(picturesDirectory, 'food-2-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'food-2-desktop.jpg'),
        webp: path.join(picturesDirectory, 'food-2-desktop.webp'),
      },
    },
    alt: 'Фотография девушки в процессе приготовления пищи',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'gtr-mobile.jpg'),
        webp: path.join(picturesDirectory, 'gtr-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'gtr-desktop.jpg'),
        webp: path.join(picturesDirectory, 'gtr-desktop.webp'),
      },
    },
    alt: 'Фотография белого Nissan GT-R',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: null,
        webp: null,
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'terrain-desktop.jpg'),
        webp: path.join(picturesDirectory, 'terrain-desktop.webp'),
      },
    },
    alt: 'Фотография долины и гор',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: null,
        webp: null,
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'mountain-desktop.jpg'),
        webp: path.join(picturesDirectory, 'mountain-desktop.webp'),
      },
    },
    alt: 'Фотография гор с высоты',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: null,
        webp: null,
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'aged-people-desktop.jpg'),
        webp: path.join(picturesDirectory, 'aged-people-desktop.webp'),
      },
    },
    alt: 'Фотография женщин в возрасте',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-8-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-8-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-8-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-8-desktop.webp'),
      },
    },
    alt: 'Фотография темноволосой девушки в белой блузке',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-7-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-7-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-7-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-7-desktop.webp'),
      },
    },
    alt: 'Фотография девушки с черной шляпой',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-10-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-10-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-10-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-10-desktop.webp'),
      },
    },
    alt: 'Фотография девушки в полосатой блузке и в шляпе',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-9-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-9-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-9-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-9-desktop.webp'),
      },
    },
    alt: 'Фотография девушки в лучах солнца',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-11-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-11-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-11-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-11-desktop.webp'),
      },
    },
    alt: 'Фотография девушки со сложенными руками',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-6-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-6-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-6-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-6-desktop.webp'),
      },
    },
    alt: 'Фотография девушки среди колосьев в поле',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-5-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-5-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-5-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-5-desktop.webp'),
      },
    },
    alt: 'Фотография девушки в очках и зеленом топе',
    authorId: 1
  },
  {
    id: uniqueId(),
    path: {
      mobileView: {
        jpg: path.join(picturesDirectory, 'girl-4-mobile.jpg'),
        webp: path.join(picturesDirectory, 'girl-4-mobile.webp'),
      },
      desktopView: {
        jpg: path.join(picturesDirectory, 'girl-4-desktop.jpg'),
        webp: path.join(picturesDirectory, 'girl-4-desktop.webp'),
      },
    },
    alt: 'Фотография девушки в ночной иллюминации',
    authorId: 1
  },
];

export default data;
