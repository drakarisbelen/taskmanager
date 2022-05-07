import express from "Express";
import indexRoutes from "./routes/index.routes";
const app = express();
const PORT = 3000;

app.use(indexRoutes); //para que utilize las rutas

export default app;
