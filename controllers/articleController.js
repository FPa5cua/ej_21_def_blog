const { Article, Comment /* User */ } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll();

  res.render("home", {
    articles: articles,
  });
}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id);

  const comments = await Comment.findAll({ where: { articleId: req.params.id } });

  //const users = await User.findAll({ where: { firstname: req.params.id } });

  res.render("article", {
    article,
    comments,
    //users,
  });
}

// Show the form for creating a new resource
async function create(req, res) {
  return res.send("crear ok");
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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
