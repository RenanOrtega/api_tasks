"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TaskController = require('../controllers/TaskController'); var _TaskController2 = _interopRequireDefault(_TaskController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _TaskController2.default.index);
router.get('/:id', _TaskController2.default.show);
router.post('/', _TaskController2.default.store);
router.put('/:id', _TaskController2.default.update);
router.delete('/:id', _TaskController2.default.delete);

exports. default = router;
