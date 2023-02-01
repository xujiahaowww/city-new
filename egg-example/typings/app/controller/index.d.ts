// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin = require('../../../app/controller/login');
import ExportVerif = require('../../../app/controller/verif');
import ExportRegistered = require('../../../app/controller/registered');

declare module 'egg' {
  interface IController {
    login: ExportLogin;
    verif: ExportVerif;
    registered: ExportRegistered;
  }
}
