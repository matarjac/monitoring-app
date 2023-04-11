import { connectToDB } from "./connection";
import routes from "./routes/index";
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`started listenning on http://localhost:${PORT}`));

connectToDB();