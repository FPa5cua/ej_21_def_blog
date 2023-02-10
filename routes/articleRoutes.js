const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const { Article } = require("../models");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear", articleController.create);
router.get("/", articleController.store);
/* router.get("/:id", articleController.show);
router.get("/:id/editar", articleController.edit);
router.get("/:id", articleController.update);
router.get("/:id", articleController.destroy);
 */
router.get("/test", async (req, res) => {
  const articles = await Article.findAll();
  console.log(articles);
  return res.json(articles);
});
module.exports = router;
