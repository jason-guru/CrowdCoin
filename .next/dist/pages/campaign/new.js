'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/mnt/d/projects/national/blockchain/Campaign/pages/campaign/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true });
                                _context.prev = 2;
                                _context.next = 5;
                                return ethereum.request({ method: 'eth_accounts' });

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _routes.Router.pushRoute('/');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                console.log(_context.t0);

                            case 14:

                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('label', { htmlFor: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                type: 'number',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Submit')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context2.sent;
                                return _context2.abrupt('return', {
                                    accounts: accounts
                                });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIkxheW91dCIsIndlYjMiLCJmYWN0b3J5IiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidGFyZ2V0IiwidmFsdWUiLCJldGgiLCJnZXRBY2NvdW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OzswTkFVRixBO2lDQUFRLEFBQ2lCLEFBQ3JCO3FCLEFBRkksQUFFSztBQUZMLEFBQ0osaUIsQUFJSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNOO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBRlIsQUFFUCxBQUFjLEFBQVU7Z0RBRmpCO2dEQUFBO3VDQUlvQixTQUFBLEFBQVMsUUFBUSxFQUFFLFFBSnZDLEFBSW9CLEFBQWlCLEFBQVU7O2lDQUE1QztBQUpILG9EQUFBO2dEQUFBO3lEQUtHLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxxQkFBMUMsQUFDRDswQ0FDUyxTQVBYLEFBS0csQUFDSSxBQUNJLEFBQVM7QUFEYixBQUNGLGlDQUZGOztpQ0FJTjsrQ0FBQSxBQUFPLFVBVEosQUFTSCxBQUFpQjtnREFUZDtBQUFBOztpQ0FBQTtnREFBQTtnRUFXSDs7d0NBQUEsQUFBUSxhQVhMOztpQ0FjUDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FkVCxBQWNQLEFBQWMsQUFBVzs7aUNBZGxCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7NENBUlMsQUFDaEI7b0JBQUEsQUFBUSxJQUFJLEtBQVosQUFBaUIsQUFDcEI7Ozs7aUNBdUJRO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxzQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7OEJBQXJCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsV0FBTyxTQUFQLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx5Q0FBQSxBQUFDO3VCQUFELEFBQ1UsQUFDTjsrQkFGSixBQUVrQixBQUNkO3NCQUhKLEFBR1MsQUFDTDt1QkFBTyxLQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDbEI7MEJBQ0kseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BQW5ELEFBQVMsQUFBYyxBQUFtQztBQU5sRTs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBVUo7QUFWSTtBQUNJLGlDQVNSLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBVSxNQUF0QyxBQUEyQyxVQUFTLFNBQXBEOzhCQUFBO2dDQUFBO0FBQUE7ZUFoQlosQUFDSSxBQUVJLEFBYUksQUFJZjs7Ozs7Ozs7Ozs7O3VDQW5EMEIsY0FBQSxBQUFLLElBQUwsQUFBUyxBOztpQ0FBMUI7QTs7OENBQ0MsQTtBQUFBLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKYyxBLEFBd0QxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21udC9kL3Byb2plY3RzL25hdGlvbmFsL2Jsb2NrY2hhaW4vQ2FtcGFpZ24ifQ==