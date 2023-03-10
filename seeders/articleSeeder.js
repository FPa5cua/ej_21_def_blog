const { faker } = require("@faker-js/faker");
const { Article, User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  const users = await User.findAll();

  for (let i = 0; i < 10; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      contentPreview: faker.lorem.sentence(20), //Ver como instanciar parte del content previo
      image: faker.image.city(640, 480, true),
      authorId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
