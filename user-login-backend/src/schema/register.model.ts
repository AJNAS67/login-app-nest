import * as mongooose from 'mongoose';
// import * as unique from 'mongoose-unique-validator';
var uniqueValidator = require('mongoose-unique-validator');

export const RegisterSchema = new mongooose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
RegisterSchema.plugin(uniqueValidator);

export interface Register {
  username: string;
  email: string;
  password: string;
}
