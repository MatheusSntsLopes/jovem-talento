/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Curriculos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      biografia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      formacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      experiencia: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      competencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      habilidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Curriculos');
  },
};
