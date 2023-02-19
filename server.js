import app from "./app.js";
import { connectDB } from "./database.js";

connectDB();
app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});
app.get("/api/customers", (req, res, next) => {
  res.send("<h1>Name:Aakarsh email:abc@gmail.com phone:1234</h1>");
});
app.listen(process.env.PORT, () =>
  console.log(`Server is working on PORT: ${process.env.PORT}`)
);
