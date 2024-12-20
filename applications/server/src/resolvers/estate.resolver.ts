import { Estate } from '../models/estate';

type GetEstatesParams = {
  city?: string;
  type?: string;
  search?: string;
};

export class EstateResolver {
  private limit = 50;

  private estatesList: Estate[];

  constructor() {
    this.estatesList = Array(this.limit)
      .fill(null)
      .map((_, index) => Estate.Create(index));
  }

  public getEstates({ search, type, city }: GetEstatesParams): Estate[] {
    if (search?.length) {
      return this.estatesList.filter(({ address }) =>
        address.toLowerCase().includes(search.toLowerCase())
      );
    }

    return this.estatesList.filter((estate) => {
      const targetCity = city || estate.city;
      const targetType = type || estate.type;

      return estate.city === targetCity && estate.type === targetType;
    });
  }
}
