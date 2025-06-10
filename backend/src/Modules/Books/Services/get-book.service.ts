import { Injectable } from "@nestjs/common";
import { BooksRepository } from "../Repository/books.repository";

@Injectable()
export class GetBookService {
    constructor(
        private booksRepository: BooksRepository
    ) {}

    async handle(id: string): Promise<any> {
        const data = await this.booksRepository.findById(id);

        return data;
    }
}