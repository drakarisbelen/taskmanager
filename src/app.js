import express from "Express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path"; //Este modulo es de node
import "./database";
import morgan from "morgan"; //middleware
const app = express();

//Indico donde van a estar las vistas le paso
//una ruta absoluta sino No funciona

app.set("views", path.join(__dirname + "/views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});
//va a servir archivos con la extension hbs
app.engine(".hbs", exphbs.engine);
//le indico a express que utilice esta configuracion de plantillas
app.set("view engine", ".hbs");

app.use(morgan("dev")); //hace de middlere y muestra x consola las peticiones que esta tratando de hacer
//GET / 200 21.211 ms - 1161
//Cannot GET /tasks/add

//Esto es para poder ver los parametros enviados x url
app.use(express.urlencoded({ extended: false }));

//Routes

app.use(indexRoutes);

export default app;
