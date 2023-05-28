import express, { Express } from "express";
import dotenv from "dotenv";
import auth from "./src/routes/auth.route";

dotenv.config();

const app: Express = express();

// auth route
app.use(auth);

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
