import * as bcrypt from "bcrypt";
import { SECRET } from "./app.settings";
import { db } from "./app.settings";
import { BookServices } from "./bookServices";

const bookservices = new BookServices(db);
export const jwt = require("jsonwebtoken");
export { bcrypt, SECRET, bookservices };
