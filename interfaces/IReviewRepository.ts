export default interface IReviewRepository {
    findAllByBookId(id: string): Record<string, string>[];
}