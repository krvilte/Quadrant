import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(port, () => console.log("Server started"));
