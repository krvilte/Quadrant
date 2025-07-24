import "dotenv/config";
import connectDatabase from "./db/db.js";
import app from "./app.js";

const port = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });

    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();
