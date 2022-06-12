import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleTask,
} from "../controllers/tasks.controller";
import { create } from "express-handlebars";

const router = Router();
router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", toggleTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

// router.post("/about", (req, res) => {
//   //res.send("Hello ABOUT! ");
//   res.render("about");
// });

export default router;
