import express, { Express } from "express";

const PORT: number = 3000;
const app: Express = express();

app.listen(3000, () => {
  console.log(`node server running..`);
});
