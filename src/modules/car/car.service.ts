import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create.car.dto';

@Injectable()
export class CarService {
  private readonly cars: CreateCarDto[] = [];

  create(dto: CreateCarDto): Promise<CarResDto> {
    this.cars.push(dto);
  }

  findAll(): CreateCarDto[] {
    return this.cars;
  }
}
