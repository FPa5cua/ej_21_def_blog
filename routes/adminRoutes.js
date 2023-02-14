const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas al admin:
// ...

router.get("/", adminController.index);
router.get("/crear", adminController.create);
router.post("/admin", adminController.store);
router.get("/:id", adminController.show);
router.get("/editar/:id", adminController.edit);
router.post("/:id", adminController.update);
router.get("/eliminar/:id", adminController.destroy);

module.exports = router;
