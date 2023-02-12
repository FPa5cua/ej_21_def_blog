const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  //seeders de users
  await require("./seeders/userSeeder")();
  console.log("[Database] ¡Los datos de prueba usuarios fueron insertados!");
  //seeders de articles
  await require("./seeders/articleSeeder")();
  console.log("[Database] ¡Los datos de prueba articulos fueron insertados!");
};
