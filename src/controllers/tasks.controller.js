import Task from "../models/Task"; //importo el modelo/schema

export const renderTasks = async (req, res) => {
  //res.send("Hello World! ✨");
  //Busco todas las tareas
  const tasks = await Task.find().lean();
  console.log(tasks);
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    //res.send("add task");
    const task = Task(req.body);
    //metodo save lo añade a mongo db es asincrono por eso tengo que agregar el await y el async al comienzo
    const taskSaved = await task.save();

    console.log(taskSaved);

    //res.send("saved"); //
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    console.log("Parametro recibido en la ruta ", req.params);
    const task = await Task.findById(req.params.id).lean();
    // const taskToEdit = await ()
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  const { id } = req.params;

  //Busca el registro a actualizar y lo act.
  //Task.findByIdAndUpdate(req.params.id);
  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toggleTask = async (req, res) => {
  const { id } = req.params;
  console.log("GET TOGLE");

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save(); //para guardar el cambio en el campo done

  console.log("tarea: ", task);
  res.redirect("/");
};
