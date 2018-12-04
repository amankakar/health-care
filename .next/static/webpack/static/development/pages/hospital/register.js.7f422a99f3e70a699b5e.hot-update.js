webpackHotUpdate("static/development/pages/hospital/register.js",{

/***/ "./pages/hospital/register.js":
/*!************************************!*\
  !*** ./pages/hospital/register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json");
var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json", 1);
/* harmony import */ var _build_contracts_Receptionsit_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../build/contracts/Receptionsit.json */ "./build/contracts/Receptionsit.json");
var _build_contracts_Receptionsit_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Receptionsit.json */ "./build/contracts/Receptionsit.json", 1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ethereum_getWeb3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/getWeb3 */ "./ethereum/getWeb3.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var register =
/*#__PURE__*/
function (_Component) {
  _inherits(register, _Component);

  function register() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      web3: null,
      accounts: null,
      hospitalName: "",
      receptionistName: "",
      instanceFactory1: "",
      receptionistInstance: "",
      recetionistAddress: "",
      accountForFirstTime: "",
      errorMessage: "",
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var accounts, Contract, instanceFactory, instanceFactory1, manager, rec;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _context2.prev = 1;

                // const web3 = await getWeb3();
                // const accounts = await web3.eth.getAccounts();
                // this.setState({ web3 });
                _this.setState({
                  loading: true,
                  errorMessage: ""
                });

                console.log("Onsubmit"); // const { web3 } = this.state;
                // console.log("WEB3", web3);

                _context2.next = 6;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

              case 6:
                accounts = _context2.sent;
                console.log("We3:", _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__["default"]);
                Contract = truffle_contract__WEBPACK_IMPORTED_MODULE_8___default()(_build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_2__);
                Contract.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_7__["default"].currentProvider);
                _context2.next = 12;
                return Contract.deployed();

              case 12:
                instanceFactory = _context2.sent;
                instanceFactory1 = instanceFactory.address;
                console.log("factory:", instanceFactory);

                _this.setState({
                  instanceFactory: instanceFactory
                });

                console.log("address:", instanceFactory1);

                _this.setState({
                  instanceFactory1: instanceFactory1
                });

                _context2.prev = 18;
                _context2.next = 21;
                return instanceFactory.manager.call();

              case 21:
                manager = _context2.sent;
                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](18);
                console.log(_context2.t0);

              case 27:
                console.log("MAnager:"); //  var manager = await instanceFactory.manager.call();
                //  const receptionistInstance = await ContractReceptionist.at(address);

                _context2.prev = 28;
                _context2.next = 31;
                return instanceFactory.createReceptionist(_this.state.hospitalName, _this.state.receptionistName, {
                  from: _this.props.accountForFirstTime[0]
                });

              case 31:
                rec = _context2.sent;
                _context2.next = 38;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t1 = _context2["catch"](28);
                console.log("ERror of try:", _context2.t1);

                _this.setState({
                  errorMessage: _context2.t1.message
                });

              case 38:
                _context2.next = 44;
                break;

              case 40:
                _context2.prev = 40;
                _context2.t2 = _context2["catch"](1);
                console.log(_context2.t2);

                _this.setState({
                  errorMessage: err.message
                });

              case 44:
                _this.setState({
                  loading: false
                });

              case 45:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 40], [18, 24], [28, 34]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHospitalHandle", function (event) {
      _this.setState({
        hospitalName: event.target.value,
        loading: false,
        errorMessage: ""
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onReceptionistHandle", function (event) {
      _this.setState({
        receptionistName: event.target.value
      });
    });

    return _this;
  }

  _createClass(register, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Register new Recetionist"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Create new Receptionist"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Hospital Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        value: this.state.hospitalName,
        onChange: this.onHospitalHandle
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Admin Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        value: this.state.receptionistName,
        onChange: this.onReceptionistHandle
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
        error: true,
        header: "Oops..!",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        loading: this.state.loading,
        primary: true
      }, " ", "Register Hospital", " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Accounts: ", this.props.accountForFirstTime[0])));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var accountForFirstTime;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

              case 2:
                accountForFirstTime = _context3.sent;
                console.log("acc:", accountForFirstTime[0]);
                console.log("web3", _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__["default"]);
                return _context3.abrupt("return", {
                  accountForFirstTime: accountForFirstTime
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return register;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (register);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/hospital/register")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=register.js.7f422a99f3e70a699b5e.hot-update.js.map