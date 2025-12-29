import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDb } from "./db/index.js";

dotenv.config({
    path : "server/.env"
});

connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is listening on port .. `, process.env.PORT);
    });
}).catch((err) => {
    console.error(`Db Connection Failed with error ... ${err}`);
    process.exit(1);
})