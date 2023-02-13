const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User");
const Comment = require("./Comment");
const Article = require("./Article");

User.initModel(sequelize);
Comment.initModel(sequelize);
Article.initModel(sequelize);

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

// CREATE TABLE IF NOT EXISTS "Teams" (
//   /* ... */
// );
// CREATE TABLE IF NOT EXISTS "Players" (
//   /* ... */
//   "TeamId" INTEGER REFERENCES "Teams" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
//   /* ... */
// );

// Options
// The options to be applied in this case are the same from the One-To-One case. For example, to change the name of the foreign key and make sure that the relationship is mandatory, we can do:

// Team.hasMany(Player, {
//   foreignKey: 'clubId'
// });
// Player.belongsTo(Team);

User.hasMany(Article, {
  foreignKey: "authorId",
});
Article.belongsTo(User, {
  foreignKey: "authorId",
});

Article.hasMany(Comment, {
  foreignKey: "articleId",
});
Comment.belongsTo(Article, {
  foreignKey: "articleId",
});

User.hasMany(Comment, {
  foreignKey: "authorId",
});
Comment.belongsTo(User, {
  foreignKey: "authorId",
});

module.exports = {
  sequelize,
  User,
  Comment,
  Article,
};
