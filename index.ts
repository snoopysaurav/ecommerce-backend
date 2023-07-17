import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import { AppDatasource } from "./src/database/datasource";
import authRoute from "./src/routes/auth.route";
import userRoute from "./src/routes/user.route";
import productRoute from "./src/routes/product.route";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(morgan('dev'));

// static file
app.use(express.static(__dirname+'/uploads'));

// auth route
app.use(authRoute);
app.use(userRoute);
app.use(productRoute);

// Database
AppDatasource.initialize()
  .then(() => {
    console.log(`Database running...`);
    app.listen(process.env.PORT, () => {
      console.log(`Server running at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error while connectiong to database...${error}`);
  });
