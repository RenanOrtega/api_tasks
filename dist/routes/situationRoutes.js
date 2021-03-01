"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SituationController = require('../controllers/SituationController'); var _SituationController2 = _interopRequireDefault(_SituationController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _SituationController2.default.index);
router.get('/:id', _SituationController2.default.show);
router.post('/', _SituationController2.default.store);
router.put('/:id', _SituationController2.default.update);
router.delete('/:id', _SituationController2.default.delete);

exports. default = router;