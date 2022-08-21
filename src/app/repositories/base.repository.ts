import { Model, ModelCtor } from 'sequelize-typescript';
import { IRepo } from "./interface.base.repository";
import { RepoError, Result } from "./response";

export default abstract class Repo<M extends Model> implements IRepo<M> {
  protected Model!: ModelCtor<M>;
  constructor(Model: ModelCtor<M>) {
      this.Model = Model;
  }

  public async save(doc: M) {
      try {
          const savedDoc = await doc.save();
          return Result.ok(savedDoc);
      } catch (ex: any) {
          // logger.error(ex);
          return Result.fail(new RepoError(ex.message, 500));
      }
  }

  public async getAll() {
      try {
          const doc = await this.Model.findAll<any>({});
          if (!doc) {
              return Result.fail(new RepoError('Not found', 404));
          }

          return Result.ok(doc);
      } catch (ex: any) {
          return Result.fail(new RepoError(ex.message, 500));
      }
  }

  public async findById(id: string) {
      try {
          const doc = await this.Model.findOne<any>({where: {
              id: id
          }});
          if (!doc) {
              return Result.fail(new RepoError('Not found', 404));
          }

          return Result.ok(doc);
      } catch (ex: any) {
          return Result.fail(new RepoError(ex.message, 500));
      }
  }
}