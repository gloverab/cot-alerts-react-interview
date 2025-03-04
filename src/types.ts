import { faker } from "@faker-js/faker";

export interface IAlert {
  id: number;
  event: {
    name: string;
    image: string;
    start: string;
    end: string | null;
    venue_name: string;
    city: string;
    state: string;
  }
  quantity: number;
  requests: number;
  reserved: boolean;
  all_ga: boolean;
  ga_sections: string[] | null;
}


const reservedAndGa = {
  id: 1,
  event: {
    name: faker.music.songName(),
    start: faker.date.soon(),
    image: faker.image.imageUrl(640, 320, "cat", true),
    end: null,
    venue_name: faker.science.chemicalElement(),
    city: faker.address.city(),
    state: faker.address.stateAbbr()
  },
  quantity: 2,
  requests: faker.datatype.number({ min: 0, max: 60 }),
  reserved: true,
  all_ga: false,
  ga_sections: ['floor', 'pit', 'field']
}