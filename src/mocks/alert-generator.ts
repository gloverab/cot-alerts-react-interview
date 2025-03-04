import { faker } from "@faker-js/faker";

export function* alertGenerator() {
  let id = 0;
  while (true) {
    const anyQuantity = faker.datatype.boolean()
    const allGa = faker.datatype.boolean()
    const shouldHaveEnd = faker.datatype.boolean()
    const end = shouldHaveEnd ? faker.date.future() : null
    yield {
      id: id++,
      event: {
        name: faker.music.songName(),
        start: faker.date.soon(),
        image: faker.image.imageUrl(640, 320, "cat", true),
        end,
        venue_name: faker.science.chemicalElement()?.name,
        city: faker.address.city(),
        state: faker.address.stateAbbr()
      },
      quantity: anyQuantity ? null : faker.datatype.number({min: 1, max: 10}),
      requests: faker.datatype.number({ min: 0, max: 60 }),
      reserved: faker.datatype.boolean(),
      all_ga: allGa,
      ga_sections: allGa ? null : faker.helpers.arrayElements(['floor', 'pit', 'field', 'stands', 'mezzanaine'])
    };
  }
}
