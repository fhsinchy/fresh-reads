export interface IBookRepository {
    findAll(): Record<string, string>[];
    findById(id: string);
}