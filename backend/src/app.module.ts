import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './Modules/Books/books.controller';
import { BooksModule } from './Modules/Books/books.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from './Config/database.config.service';
import { ReviewsModule } from './Modules/Reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfigService,
    }),
    BooksModule,
    ReviewsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
