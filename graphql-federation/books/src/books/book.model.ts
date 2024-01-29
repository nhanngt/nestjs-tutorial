import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Book model' })
export class Book {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  published_at: Date;
}
