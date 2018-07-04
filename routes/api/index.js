const router = require("express").Router();
const administratorsRoutes = require("./administrators");
const patientsRoutes = require("./patients");
const practicionersRoutes = require("./practicioners");
const proceduresRoutes = require("./procedures");
const inventoriesRoutes = require("./inventories");

router.use("/administrators", administratorsRoutes);
router.use("/patients", patientsRoutes);
router.use("/practicioners", practicionersRoutes);
router.use("/procedures", proceduresRoutes);
router.use("/inventories", inventoriesRoutes);

module.exports = router;
