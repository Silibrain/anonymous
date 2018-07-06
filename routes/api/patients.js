const router = require("express").Router();
const patientsController = require("../../controllers/patientsController");

router.route("/")
  .get(patientsController.findAll)
  .post(patientsController.create);

router
  .route("/:id")
  .get(patientsController.findById)
  .put(patientsController.update)
  .delete(patientsController.remove);

module.exports = router;
