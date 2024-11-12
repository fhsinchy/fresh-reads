export default interface IBookRepository {
    findAll(): Record<string, string>[];
    findById(id: string): Record<string, string> | undefined;
}