// authService.js
import * as bcrypt from 'bcrypt';
import { UsersService } from './loginServices';
import { SECRET } from './app.config';
import { db } from './app.config';

 const loginservices = new UsersService(db);
export const jwt = require('jsonwebtoken');
export { bcrypt, SECRET,loginservices };
