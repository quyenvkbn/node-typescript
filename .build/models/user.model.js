var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { DataTypes, Optional } from 'sequelize'
import { sequelize } from '.';
import { Table, Model, Column, DefaultScope } from 'sequelize-typescript';
let User = class User extends Model {
};
__decorate([
    Column,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
User = __decorate([
    DefaultScope(() => ({
        attributes: ['id', 'name']
    })),
    Table({
        timestamps: false,
        tableName: 'users',
        modelName: 'User'
    })
], User);
export { User };
sequelize.addModels([User]);
