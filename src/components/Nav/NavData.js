const headerMenu = [
  { id: 1, name: 'JOIN US' },
  { id: 2, name: 'LOGIN' },
  { id: 3, name: 'ORDER' },
  { id: 4, name: 'MY PAGE' },
];

const category = [
  { id: 1, name: 'All', subCategory: ['All', 'New', 'Best'] },
  {
    id: 2,
    name: 'Stationery',
    subCategory: [
      'Postcard',
      'Notebook',
      'Memo Pad',
      'Poster',
      'Tape',
      'Tattoo Sticker',
      'Sticker',
      'Diary',
      'Calendar',
      'Etc',
    ],
  },
  {
    id: 3,
    name: 'Digital',
    subCategory: [
      'AirPods Case',
      'AirPods Pro Case',
      'Griptok',
      'Phone Case',
      'Etc',
      'Case / Pouch',
      'Buds Case',
    ],
  },
  {
    id: 4,
    name: 'Fabric & Living',
    subCategory: ['Cup', 'Fabric', 'Pouch', 'Bag', 'Fashion', 'Pet'],
  },
  { id: 5, name: 'Acc', subCategory: ['Key Ring', 'Pin Button'] },
  { id: 6, name: 'EVENT', subCategory: ['All'] },
];

export { headerMenu, category };
