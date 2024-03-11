import { app } from "./app.js";
import morgan from "morgan";
import { connectToDB } from "./db/database.js";
import dotenv from "dotenv"


dotenv.config({
    path: './.env'
})


const port = process.env.PORT || 3000;

connectToDB();

app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
