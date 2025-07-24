import { connect } from "mongoose";
const connectDatabase = async () => {
  try {
    const dbInstance = await connect(
      `${process.env.DATABASE_URI}/${process.env.DATABASE_NAME}`
    );
    console.log(
      `mongodb connection successful \nHost: ${dbInstance.connection.host}`
    );
  } catch (error) {
    console.log(`mongodb connection error:\n${error}`);
    process.exit(1);
  }
};

export default connectDatabase;
