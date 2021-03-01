"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

require('./database');
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _taskRoutes = require('./routes/taskRoutes'); var _taskRoutes2 = _interopRequireDefault(_taskRoutes);
var _responsibleRoutes = require('./routes/responsibleRoutes'); var _responsibleRoutes2 = _interopRequireDefault(_responsibleRoutes);
var _situationRoutes = require('./routes/situationRoutes'); var _situationRoutes2 = _interopRequireDefault(_situationRoutes);
var _categoryRoutes = require('./routes/categoryRoutes'); var _categoryRoutes2 = _interopRequireDefault(_categoryRoutes);

const whiteList = [
  'http://localhost:3000',
  'http://localhost:3001',
];

/*const corsOptions = {
  origin: function(origin, callback){
    if(whiteList.indexOf(origin) !== -1 || !origin){
      callback(null, true);
    }else{
      callback(new Error('Not Allowed By CORS!'));
    }
  }
};*/

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
  }

  routes() {
    //Rotas para home
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/tasks/', _taskRoutes2.default);
    this.app.use('/responsibles/', _responsibleRoutes2.default);
    this.app.use('/situations/', _situationRoutes2.default);
    this.app.use('/categories/', _categoryRoutes2.default);
  }
}

exports. default = new App().app