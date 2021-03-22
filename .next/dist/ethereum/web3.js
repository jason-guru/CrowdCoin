'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    var provider = window.ethereum;
    provider.enable();
    web3 = new _web2.default(provider);
} else {
    var _provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/7521994a34104f0e9375ca0322e82d12');
    web3 = new _web2.default(_provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiZW5hYmxlIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUNBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLGFBQTJCLEFBQS9ELGFBQTRFLEFBQ3hFO1FBQU0sV0FBVyxPQUFPLEFBQXhCLEFBQ0E7YUFBUyxBQUFULEFBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFKRCxPQUlPLEFBQ0g7UUFBTSxZQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWpCLEFBR0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9tbnQvZC9wcm9qZWN0cy9uYXRpb25hbC9ibG9ja2NoYWluL0NhbXBhaWduIn0=