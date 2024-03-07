import { app } from "./app.js";
import 'dotenv/config';
import morgan from "morgan";
import { connectToDB } from "./db/database.js";

const port = process.env.PORT || 3000;

connectToDB();

app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
