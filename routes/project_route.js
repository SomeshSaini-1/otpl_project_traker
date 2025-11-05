const Project = require("../controllers/project_controller");
const router = express.Router();


router.post("/Add_project",Project.Add_project);
router.post("/Get_project",Project.Get_Project);
router.post("/Delete_project",Project.Delete_project);
router.post("/update_Project",Project.update_Project);

module.exports = router;
