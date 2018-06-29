const router = require("express").Router();
const practicionersController = require("../../controllers/practicionersController");

router.route("/")
  .get(practicionersController.findAll)
  .post(practicionersController.create);

router
  .route("/:id")
  .get(practicionersController.findById)
  .put(practicionersController.update)
  .delete(practicionersController.remove);

module.exports = router;
