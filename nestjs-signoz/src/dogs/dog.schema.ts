import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DogDocument = HydratedDocument<Dog>;

@Schema()
export class Dog {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
