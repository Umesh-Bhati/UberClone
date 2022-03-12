export const filterData = [
  {name: 'Ride', image: require('../assets/ride.png'), id: '0' , navigationScreenName: "RideService" },
  {name: 'Food', image: require('../assets/food.png'), id: '1', navigationScreenName: "FoodService"},
  {name: 'Package', image: require('../assets/package.png'), id: '2', navigationScreenName: "PackegeDelivery" },
  {name: 'Reserve', image: require('../assets/reserve.png'), id: '3', navigationScreenName: "InterCityService"},
];


export const carsAround = [
  {latitude: 26.8078, longitude: 75.5402},
  {latitude: 26.202616, longitude: 75.5902},
  {latitude: 26.220, longitude: 75.5290},
  {latitude: 26.200, longitude: 75.500},
  {latitude: 26.190, longitude: 75.5500},
];

export const types = [
  {
    id: '0',
    type: 'UberX',
    price: 22,
    duration: 45,
  },
  {
    id: '1',
    type: 'Comfort',
    price: 27,
    duration: 30,
  },
  {
    id: '2',
    type: 'UberXL',
    price: 36,
    duration: 27,
  },
]
