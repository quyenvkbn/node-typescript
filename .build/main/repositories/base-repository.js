import { RepoError, Result } from "./response";
export default class Repo {
    Model;
    constructor(Model) {
        this.Model = Model;
    }
    async save(doc) {
        try {
            const savedDoc = await doc.save();
            return Result.ok(savedDoc);
        }
        catch (ex) {
            // logger.error(ex);
            return Result.fail(new RepoError(ex.message, 500));
        }
    }
    async getAll() {
        try {
            const doc = await this.Model.findAll({});
            if (!doc) {
                return Result.fail(new RepoError('Not found', 404));
            }
            return Result.ok(doc);
        }
        catch (ex) {
            return Result.fail(new RepoError(ex.message, 500));
        }
    }
    async findById(id) {
        try {
            const doc = await this.Model.findOne({ where: {
                    id: id
                } });
            if (!doc) {
                return Result.fail(new RepoError('Not found', 404));
            }
            return Result.ok(doc);
        }
        catch (ex) {
            return Result.fail(new RepoError(ex.message, 500));
        }
    }
}
