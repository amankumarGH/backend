import connectDB from "./db/dbconnection.js";
import { app } from "./app.js";

const port = process.env.PORT;
console.log(port);

connectDB()
  .then(() => {
    app.listen(port || 3000, () => {
      console.log("success");
    });
  })
  .catch((err) => {
    console.error("ERROR FOUND", err);
    // process.exit(1);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
