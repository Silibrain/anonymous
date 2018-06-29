const router = require("express").Router();
const staffController = require("../../controllers/staffController");

router.route("/")
  .get(staffController.findAll)
  .post(staffController.create);

router
  .route("/:id")
  .get(staffController.findById)
  .put(staffController.update)
  .delete(staffController.remove);

module.exports = router;
