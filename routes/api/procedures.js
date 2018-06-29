const router = require("express").Router();
const proceduresController = require("../../controllers/proceduresController");

router.route("/")
  .get(proceduresController.findAll)
  .post(proceduresController.create);

router
  .route("/:id")
  .get(proceduresController.findById)
  .put(proceduresController.update)
  .delete(proceduresController.remove);

module.exports = router;
