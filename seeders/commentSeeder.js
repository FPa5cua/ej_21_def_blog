const { faker } = require("@faker-js/faker");
const { Comment, User, Article } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];
  const users = await User.findAll();
  const articles = await Article.findAll();
  for (let i = 0; i < 10; i++) {
    comments.push({
      content: faker.lorem.text(),
      authorId: users[Math.floor(Math.random() * users.length)].id,
      articleId: articles[Math.floor(Math.random() * articles.length)].id,
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
};
