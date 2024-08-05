import { Module } from '@nestjs/common';
import { CarsController } from './car.controller';

@Module({
  controllers: [CarsController],
})
export class AppModule {}
