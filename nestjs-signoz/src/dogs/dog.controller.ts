import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DogsService } from './dog.service';
import { Dog } from './dog.schema';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }
}
