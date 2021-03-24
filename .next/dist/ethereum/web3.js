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
    var _provider = new _web2.default.providers.HttpProvider(process.env.PROJECT);
    web3 = new _web2.default(_provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiZW5hYmxlIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwicHJvY2VzcyIsImVudiIsIlBST0pFQ1QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBQ0EsSUFBSSxZQUFKO0FBQ0EsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsYUFBMkIsQUFBL0QsYUFBNEUsQUFDeEU7UUFBTSxXQUFXLE9BQU8sQUFBeEIsQUFDQTthQUFTLEFBQVQsQUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUpELE9BSU8sQUFDSDtRQUFNLFlBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLFFBQVEsQUFBUixJQUFZLEFBREMsQUFBakIsQUFHQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL21udC9kL3Byb2plY3RzL25hdGlvbmFsL2Jsb2NrY2hhaW4vQ2FtcGFpZ24ifQ==