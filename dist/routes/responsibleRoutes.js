"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ResponsibleController = require('../controllers/ResponsibleController'); var _ResponsibleController2 = _interopRequireDefault(_ResponsibleController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _ResponsibleController2.default.index);
router.get('/:id', _ResponsibleController2.default.show);
router.post('/', _ResponsibleController2.default.store);
router.put('/:id', _ResponsibleController2.default.update);
router.delete('/:id', _ResponsibleController2.default.delete);

exports. default = router;
