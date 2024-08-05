import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CarListDto } from './dto/car.list.dto';
import { CreateCarDto } from './dto/create.car.dto';
import { CarService } from "./car.service";

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarService) {}
  @Post()
  public async create(@Body() dto: CreateCarDto): Promise<CarResDto> {
    return await this.carService.create(dto);
  }

  @Get()
  findAll(@Query() query: CarListDto) {
    return `This action returns all cars (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} car`;
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() dto: CreateCarDto) {
    return await this.carService.update(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} car`;
  }
}
