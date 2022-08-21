import { RepoError, Result } from "@/app/repositories/response";

export type RepoResult<M> = Promise<Result<M | undefined, RepoError | undefined>>;

export interface IRepo<M> {
    save(model: M): RepoResult<M>;
    findById(id: string): RepoResult<M>;
    // search(parameterName: string, parameterValue: string, sortBy: string, order: number, pageSize: number, pageNumber: number): RepoResult<M[]>;
    getAll(): RepoResult<M[]>;
    // deleteById(id: string): RepoResult<M>;
    // findByIds(ids: string[]): RepoResult<M[]>;
    // deleteByIds(ids: string[]): RepoResult<any>;
};