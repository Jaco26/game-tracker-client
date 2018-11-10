

class City {
  constructor(id, name, xRatio, yRatio, color, connections) {
    this.xRatioKey = 50;
    this.yRatioKey = 30;
    this.id = id;
    this.name = name;
    this.pos = {
      xRatio: xRatio,
      yRatio: yRatio,
    }
    this.color = color;
    this.connections = [];
  }
}

const y = 'yellow';
const blu = 'blue';
const blk = 'black';
const r = 'red';

export const cities = [
  new City(1, "Algiers", 24.5, 13.25, blk, ['cairo', 'istanbul', 'paris', 'madrid']),
  new City(2, "Atlanta", 9.1, 12.2, blu, ['washington', 'chicago', 'miami']),
  new City(3, "Baghdad", 30.4, 12.8, blk, ['riyadh', 'cairo', 'istanbul', 'tehran', 'karachi']),
  new City(4, "Bangkok", 39.75, 16.9, r, ['hong kong', 'ho chi minh city', 'jakarta', 'chennai', 'kolkata', 'manilla']),
  new City(5, "Beijing", 41.2, 9.5, r ['seoul', 'shanghai']),
  new City(6, "Bogota", 11.1, 18.9, y, ['lima', 'sao paulo', 'mexico city', 'miai']),
  new City(7, "Buenos Aries", 14.2, 26.2, y, ['sao paulo', 'bogota']),
  new City(8, "Cairo", 27.3, 14, blk, ['algiers', 'istanbul', 'baghdad', 'riyadh', 'khartoum']),
  new City(9, "Chennai", 37.1, 18.7, blk, ['jakarta', 'bangkok', 'kolkata', 'delhi', 'mumbai']),
  new City(10, "Chicago", 7.8, 9.4, blu, ['atlanta', 'montreal', 'mexico city', 'los angeles', 'san fransisco']),
  new City(11, "Delhi", 36.6, 12.9, blk, ['kolkata', 'chennai', 'mumbai', 'karachi', 'tehran']),
  new City(12, "Essen", 24.7, 7, blu, ['st. petersburg', 'milan', 'paris', 'london']),
  new City(13, "Ho Chi Minh City", 41.95, 19.4, r, ['manilla', 'jakarta', 'bangkok', 'hong kong']),
  new City(14, "Hong Kong", 41.8, 15.2, r, ['ho chi minh city', 'bangkok', 'kolkata', 'shanghai', 'taipei', 'manilla']),
  new City(15, "Istanbul", 27.8, 10.9, blk, ['cairo', 'algiers', 'milan', 'moscow', 'baghdad']),
  new City(16, "Jakarta", 39.7, 21.8, r, ['ho chi minh city', 'sydney', 'bangkok', 'chennai']),
  new City(17, "Johannesburg", 27.8, 24.4, y, ['kinshasa', 'khartoum']),
  new City(18, "Karachi", 33.9, 13.9, blk, ['delhi', 'tehran', 'baghdad', 'riyadh', 'mumbai']),
  new City(19, "Khartoum", 28, 17.5, y, ['johannesburg', 'kinshasa', 'lagos', 'cairo']),
  new City(20, "Kinshasa", 25.6, 20.9, y, ['johannesburg', 'khartoum', 'lagos']),
  new City(21, "Kolkata", 39.15, 13.8, blk, ['bangkok', 'hong kong', 'delhi', 'chennai']),
  new City(22, "Lagos", 23.3, 18.2, y, ['sao paulo', 'kinshasa', 'khartoum']),
  new City(23, "Lima", 9.8, 22.9, y, ['santiago', 'bogota', 'mexico city']),
  new City(24, "London", 21, 7.6, blu, ['essen', 'paris', 'madrid', 'new york']),
  new City(25, "Los Angeles", 3.8, 14.5, y, ['san fransisco', 'chicago', 'mexico city', 'sydney']),
  new City(26, "Madrid", 20.5, 11.1, blu, ['london', 'paris', 'algiers', 'sao paulo', 'new york']),
  new City(27, "Manila", 45.5, 19.2, r, ['san fransisco', 'sydney', 'ho chi minh city', 'taipei', 'hong kong']),
  new City(28, "Mexico City", 7.15, 15.9, y, ['miami', 'bogota', 'los angeles', 'chicago', 'lima']),
  new City(29, "Miami", 11.4, 15.1, y, ['washington', 'atlanta', 'mexico city', 'bogota']),
  new City(30, "Milan", 26.2, 8.75, blu, ['esses', 'istanbul', 'paris']),
  new City(31, "Montreal", 11.4, 9.3, blu, ['chicago', 'washington', 'new york']),
  new City(32, "Moscow", 30.8, 8.8, blk, ['st. petersburg', 'istanbul', 'tehran']),
  new City(33, "Mumbai", 34.25, 16.7, blk, ['karachi', 'delhi', 'chennai']),
  new City(34, "New York", 14.2, 9.8, blu, ['madrid', 'london', 'montreal', 'washington']),
  new City(35, "Osaka", 47.4, 13.7, r, ['tokyo', 'taipei']),
  new City(36, "Paris", 23.8, 9.35, blu, ['essen', 'milan', 'algiers', 'madrid', 'london']),
  new City(37, "Riyadh", 30.85, 16.05, blk, ['cairo', 'baghdad', 'karachi']),
  new City(38, "San Francisco", 3.05, 10.95, blu, ['tokyo', 'manila', 'los angeles', 'chicago']),
  new City(39, "Santiago", 10.25, 26.95, y, ['lima']),
  new City(40, "Sao Paulo", 16.2, 23.35, y, ['buenos aries', 'bogota', 'lagos', 'madrid']),
  new City(41, "Seoul", 44.5, 9.4, r, ['beijing', 'shanghai', 'tokyo']),
  new City(42, "Shanghai", 41.5, 12.05, r, ['beijing', 'seoul', 'tokyo']),
  new City(43, "St. Petersburg", 28.7, 6.1, blu, ['essen', 'moscow', 'istanbul']),
  new City(44, "Sydney", 47.6, 26.8, r, ['los angeles', 'manila', 'jakarta']),
  new City(45, "Taipei", 44.75, 14.65, r, ['osaka', 'shanghai', 'hong kong', 'manila']),
  new City(46, "Tehran", 33.15, 10.4, blk, ['moscow', 'baghdad', 'karachi', 'delhi']),
  new City(47, "Tokyo", 47.05, 10.95, r, ['san fransisco', 'osaka', 'seoul', 'shanghai']),
  new City(48, "Washington", 13, 12, blu, ['new york', 'montreal', 'atlanta', 'miami']),
];

