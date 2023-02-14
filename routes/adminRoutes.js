const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas al admin:
// ...

router.get("/", adminController.index);
router.get("/crear", adminController.create);
router.post("/", adminController.store);
router.get("/:id", adminController.show);
router.get("/:id/editar", adminController.edit);
router.get("/:id", adminController.update);
router.get("/:id", adminController.destroy);

module.exports = router;
