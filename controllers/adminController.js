const { Article, Comment } = require("../models");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll();

  res.render("admin", {
    articles: articles,
  });
}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("article", {
    article,
  });
}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("createArticle");
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    //return res.json(files);
    await Article.create({
      title: fields.title,
      content: fields.content,
      authorId: fields.users,
      image: files.image.newFilename,
    });
    res.redirect("/admin");
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const idParams = req.params.id;
  const articles = await Article.findByPk(idParams);
  return res.render("editArticle", { idParams, articles });
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    return res.json(files);
    await Article.create({
      title: fields.title,
      content: fields.content,
      authorId: fields.users,
      image: files.image.newFilename,
    });
  });
  res.render("/admin");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.redirect("/admin");
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
