import { fakerRU as faker } from '@faker-js/faker';

export class Estate {
  static Create(id: number): Estate {
    return new Estate(
      id,
      faker.location.streetAddress(),
      faker.helpers.arrayElement([
        'Москва',
        'Санкт-Петербург',
        'Новосибирск',
        'Екатеринбург',
        'Уфа',
        'Краснодар',
        'Калининград',
        'Казань',
        'Тюмень',
      ]),
      faker.helpers.arrayElement(['apartment', 'house', 'commercial']),
      faker.number.int({ min: 1000000, max: 99999999 }),
      'RUB'
    );
  }

  private constructor(
    public id: number,
    public address: string,
    public city: string,
    public type: string,
    public price: number,
    public currency: string
    // eslint-disable-next-line no-empty-function
  ) {}
}
