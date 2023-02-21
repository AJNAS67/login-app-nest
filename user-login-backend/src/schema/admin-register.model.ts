import * as mongooose from 'mongoose';
// import * as unique from 'mongoose-unique-validator';
var uniqueValidator = require('mongoose-unique-validator');

export const RegisterAdminSchema = new mongooose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
RegisterAdminSchema.plugin(uniqueValidator);

export interface RegisterAdmin {
  email: string;
  password: string;
}
