import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog } from './dog.schema';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private readonly dogModel: Model<Dog>) {}

  async findAll(): Promise<Dog[]> {
    const data = await this.dogModel.find({}).exec();
    console.log(data);
    return data;
  }
}
