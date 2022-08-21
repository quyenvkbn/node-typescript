'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: Sequelize.STRING,
        });
    },
    async down(queryInterface, Sequelize) {
        return await queryInterface.dropTable('users');
    }
};
