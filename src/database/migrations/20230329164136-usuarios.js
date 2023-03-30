/** @type { import('sequelize-cli').Migration; } * */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'usuarios',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        num_casa: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        data_nascimento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        telefone: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        cpf_cnpj: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },

    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  },
};
