'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: '../.env' });


var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), process.env.FACTORY_CONTRACT);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsInBhdGgiLCJ3ZWIzIiwiQ2FtcGFpZ25GYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsInByb2Nlc3MiLCJlbnYiLCJGQUNUT1JZX0NPTlRSQUNUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7Ozs7O0FBRjVCLGtCQUFBLEFBQWtCLE9BQU8sRUFBQyxNQUExQixBQUF5QixBQUFPOzs7QUFJaEMsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUMxQixLQUFBLEFBQUssTUFBTSwwQkFERSxBQUNiLEFBQTJCLFlBQzNCLFFBQUEsQUFBUSxJQUZaLEFBQWlCLEFBRUQsQUFHaEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvbW50L2QvcHJvamVjdHMvbmF0aW9uYWwvYmxvY2tjaGFpbi9DYW1wYWlnbiJ9