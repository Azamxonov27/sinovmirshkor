
import { DistrictStats, Official, Landmark, FamousPerson } from './types';

export const DISTRICT_STATS: DistrictStats = {
  population: "125,000+",
  area: "3.1 ming km²",
  mahallas: 45,
  economyType: "Paxtachilik, G'allachilik, Chorvachilik"
};

export const OFFICIALS: Official[] = [
  {
    name: "Tuman Hokimi",
    position: "Mirishkor tumani hokimi",
    image: "https://picsum.photos/seed/hokim/300/300"
  },
  {
    name: "Bosh prokuror",
    position: "Tuman prokurori",
    image: "https://picsum.photos/seed/prok/300/300"
  },
  {
    name: "IIB boshlig'i",
    position: "Ichki ishlar bo'limi",
    image: "https://picsum.photos/seed/iib/300/300"
  }
];

export const LANDMARKS: Landmark[] = [
  {
    name: "Sardoba yodgorligi",
    description: "Qadimiy suv inshooti bo'lib, Buyuk Ipak yo'li chorrahasida joylashgan.",
    image: "https://picsum.photos/seed/sardoba/600/400"
  },
  {
    name: "Mirishkor Kanali",
    description: "Tuman qishloq xo'jaligining asosi hisoblangan ulkan irrigatsiya tizimi.",
    image: "https://picsum.photos/seed/canal/600/400"
  }
];

export const FAMOUS_PEOPLE: FamousPerson[] = [
  {
    name: "O'zbekiston Qahramonlari",
    contribution: "Qishloq xo'jaligi va fan sohasida ulkan hissa qo'shgan fidoyilar.",
    image: "https://picsum.photos/seed/hero/300/300"
  }
];
