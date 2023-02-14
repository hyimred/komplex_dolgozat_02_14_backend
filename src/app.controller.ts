import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import CarDto from './dto/car';
import Car from './entities/car';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/car')
  async newCar(@Body() car: CarDto) {
    const carRepo = this.dataSource.getRepository(Car);
    carRepo.save(car);
    return car;
  }

  @Get('/car')
  async listCars() {
    const carRepo = this.dataSource.getRepository(Car);
    return {Cars: await carRepo.find() };
  }
}
