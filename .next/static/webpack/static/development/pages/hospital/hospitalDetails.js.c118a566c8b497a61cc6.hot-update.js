webpackHotUpdate("static/development/pages/hospital/hospitalDetails.js",{

/***/ "./pages/hospital/hospitalDetails.js":
/*!*******************************************!*\
  !*** ./pages/hospital/hospitalDetails.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toggle_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toggle-display */ "./node_modules/react-toggle-display/dist/ToggleDisplay.js");
/* harmony import */ var react_toggle_display__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toggle_display__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json");
var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json", 1);
/* harmony import */ var _build_contracts_Receptionsit_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../build/contracts/Receptionsit.json */ "./build/contracts/Receptionsit.json");
var _build_contracts_Receptionsit_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Receptionsit.json */ "./build/contracts/Receptionsit.json", 1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ethereum_getWeb3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ethereum/getWeb3 */ "./ethereum/getWeb3.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");


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











 // import Dropdown from "react-dropdown";
// import "../style.css";

var hospitalDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(hospitalDetails, _Component);

  function hospitalDetails() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, hospitalDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(hospitalDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      patientName: "",
      patientAge: "",
      patientGender: "",
      patientId: "",
      doctorName: "",
      doctorGender: "",
      doctorQualification: "",
      doctorId: "",
      notAdmin: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onUnlockView",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var admin, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log("Clicked"); //const web3 = await getWeb3();

                console.log("web3:", _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"]);
                _context.next = 5;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].eth.getAccounts();

              case 5:
                accounts = _context.sent;
                console.log("account at index:", _this.props.manager);
                console.log("account in metamask", accounts);

                if (_this.props.manager === accounts[0]) {
                  _this.setState({
                    show: !_this.state.show
                  }); // this.setState({ patientId: ["aman", "khan"] });


                  console.log("ISADMIn:", _this.state.show);
                } else {
                  _this.setState({
                    show: false
                  });

                  _this.setState({
                    notAdmin: "you are not admin or you have selected Wrong account in Metamask please check"
                  });

                  console.log("ISADMIn:", _this.state.show);
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPatientIdHandle", function (event) {
      _this.setState({
        patientId: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPatientHandle", function (event) {
      _this.setState({
        patientName: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onGenderHandle", function (event) {
      _this.setState({
        patientGender: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAgeHandle", function (event) {
      _this.setState({
        patientAge: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDoctorIdHandle", function (event) {
      _this.setState({
        doctorId: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDoctorHandle", function (event) {
      _this.setState({
        doctorName: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onQualificationHandle", function (event) {
      _this.setState({
        doctorQualification: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onGenderDoctorHandle", function (event) {
      _this.setState({
        doctorGender: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onSelect", function (event) {
      event.preventDefault();
      _this.props.optionsArray[0];
      console.log();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDropDownPatient", function (patienId) {
      var options = [{
        key: 1,
        text: "Choice 1",
        value: 1
      }, {
        key: 2,
        text: "Choice 2",
        value: 2
      }, {
        key: 3,
        text: "Choice 3",
        value: 3
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
        clearable: true,
        options: options,
        selection: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDropDownDoctor", function (doctorId) {
      var options = [{
        text: "Selection"
      }, {
        text: "Choice 2"
      }, {
        text: "Choice 3"
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
        clearable: true,
        options: options,
        selection: true
      });
    });

    return _this;
  }

  _createClass(hospitalDetails, [{
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var panes = [{
        menuItem: "Add Patinet",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Patient Information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
            onSubmit: _this2.addPatinet
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.patientId,
            onChange: _this2.onPatientIdHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.patientName,
            onChange: _this2.onPatientHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient Gender"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.patientGender,
            onChange: _this2.onGenderHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient Age"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.patientAge,
            onChange: _this2.onAgeHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            primary: true
          }, " Add Patient ")));
        }
      }, {
        menuItem: "Add Doctor",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Doctor Information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
            onSubmit: _this2.addDoctor
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.doctorId,
            onChange: _this2.onDoctorIdHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.doctorName,
            onChange: _this2.onDoctorHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Gender"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.doctorGender,
            onChange: _this2.onGenderDoctorHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Qualification"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.doctorQualification,
            onChange: _this2.onQualificationHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            primary: true
          }, " Add Doctor ")));
        }
      }, {
        menuItem: "Create Appointment",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Create Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
            onSubmit: ""
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patinet ID"), _this2.renderDropDownPatient()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.doctorName,
            onChange: _this2.onDoctorHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Gender"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.doctorGender,
            onChange: _this2.onGenderDoctorHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Qualification"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
            value: _this2.state.doctorQualification,
            onChange: _this2.onQualificationHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            primary: true
          }, " Add Doctor ")));
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        menu: {
          attached: false
        },
        panes: panes
      });
    }
  }, {
    key: "renderHospital",
    value: function renderHospital() {
      var _this$props = this.props,
          address = _this$props.address,
          hospitalName = _this$props.hospitalName,
          adminName = _this$props.adminName,
          manager = _this$props.manager;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, hospitalName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, adminName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, manager));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        floated: "right",
        primary: true,
        content: "Show admin View",
        onClick: this.onUnlockView
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hospital Details"), this.renderHospital()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_toggle_display__WEBPACK_IMPORTED_MODULE_3___default.a, {
        show: this.state.show
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          align: "center"
        }
      }, "Admin Panel"), this.renderTabs()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_toggle_display__WEBPACK_IMPORTED_MODULE_3___default.a, {
        show: !this.state.show
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          color: "red"
        }
      }, this.state.notAdmin))));
    }
  }], [{
    key: "getInitialProps",
    //get Address of  hospital/ Receptionist contract provided in intial props and set show contract information
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        var address, accounts, ContractReceptionist, instanceReceptionist, hospitalSummary, optionsArray;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                console.log("ADdress:", address);
                _context2.next = 4;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].eth.getAccounts();

              case 4:
                accounts = _context2.sent;
                ContractReceptionist = truffle_contract__WEBPACK_IMPORTED_MODULE_10___default()(_build_contracts_Receptionsit_json__WEBPACK_IMPORTED_MODULE_5__);
                ContractReceptionist.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].currentProvider);
                _context2.next = 9;
                return ContractReceptionist.at(address);

              case 9:
                instanceReceptionist = _context2.sent;
                _context2.next = 12;
                return instanceReceptionist.getSummary.call();

              case 12:
                hospitalSummary = _context2.sent;
                console.log(accounts[0], "and acctual is ===:", hospitalSummary[2]);
                optionsArray = ["one", "two", "three"];
                console.log("S", hospitalSummary);
                return _context2.abrupt("return", {
                  address: props.query.address,
                  hospitalName: hospitalSummary[0],
                  adminName: hospitalSummary[1],
                  manager: hospitalSummary[2]
                });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      };
    }() //unlock admin view

  }]);

  return hospitalDetails;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (hospitalDetails);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/hospital/hospitalDetails")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=hospitalDetails.js.c118a566c8b497a61cc6.hot-update.js.map