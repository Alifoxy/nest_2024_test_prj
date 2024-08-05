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
import { CreateUserDto, UpdateUserDto, ListAllEntities } from './dto';

@Controller('cars')
export class CarsController {
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cars (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createCarDto: CreateCarDto) {
    return `This action updates a #${id} car`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} car`;
  }
}
