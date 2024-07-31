import { BaseStatisticDto } from '../../statistic/dto/base.statistic.dto';

export class BaseCarDto {
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  sell_region: string;
  views: number;
  statistic: BaseStatisticDto;
}
