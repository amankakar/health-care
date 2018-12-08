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
/* harmony import */ var _build_contracts_PatientFactory_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../build/contracts/PatientFactory.json */ "./build/contracts/PatientFactory.json");
var _build_contracts_PatientFactory_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/PatientFactory.json */ "./build/contracts/PatientFactory.json", 1);
/* harmony import */ var _build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../build/contracts/Patient.json */ "./build/contracts/Patient.json");
var _build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Patient.json */ "./build/contracts/Patient.json", 1);
/* harmony import */ var _build_contracts_DoctorFactory_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../build/contracts/DoctorFactory.json */ "./build/contracts/DoctorFactory.json");
var _build_contracts_DoctorFactory_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/DoctorFactory.json */ "./build/contracts/DoctorFactory.json", 1);
/* harmony import */ var _build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../build/contracts/Doctor.json */ "./build/contracts/Doctor.json");
var _build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Doctor.json */ "./build/contracts/Doctor.json", 1);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_semantic_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-semantic-datetime */ "./node_modules/react-semantic-datetime/build/react-semantic-ui.min.js");
/* harmony import */ var react_semantic_datetime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_semantic_datetime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ethereum_getWeb3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ethereum/getWeb3 */ "./ethereum/getWeb3.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");


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












 //for date picker






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
      appointmentId: "",
      patientAccount: "",
      doctorAccount: "",
      textArea: "",
      currentPatientValue: "",
      currentDoctorValue: "",
      notAdmin: "",
      date: moment__WEBPACK_IMPORTED_MODULE_12___default()(),
      date1: "",
      dateTimeOpen: false,
      patientIdArray: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onUnlockView",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var admin, accounts, Factory, patientFactoryInstance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log("Clicked"); //const web3 = await getWeb3();

                console.log("web3:", _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"]);
                _context.next = 5;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 5:
                accounts = _context.sent;
                console.log("account at index:", _this.props.manager);
                console.log("account in metamask", accounts);
                Factory = truffle_contract__WEBPACK_IMPORTED_MODULE_17___default()(_build_contracts_PatientFactory_json__WEBPACK_IMPORTED_MODULE_6__); //  console.log(Factory);

                Factory.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].currentProvider);
                console.log(Factory);
                _context.next = 13;
                return Factory.deployed();

              case 13:
                patientFactoryInstance = _context.sent;
                //const patientList = await patientFactoryInstance.getPatientList.call();
                console.log("patientList:", patientList.length);

                if (_this.props.manager === accounts[0]) {
                  _this.setState({
                    show: !_this.state.show
                  }); //Patient factory
                  // const Factory = truffleContract(PatientFactory);
                  // //  console.log(Factory);
                  // Factory.setProvider(web3.currentProvider);
                  // //  console.log(Factory);
                  // //PatinentContract
                  // const Contract = truffleContract(Patient);
                  // //console.log(Contract);
                  // Contract.setProvider(web3.currentProvider);
                  // //  console.log(Contract);
                  // const patientFactoryInstance = await Factory.deployed();
                  // //console.log("RESULT:", patientFactoryInstance.address);
                  // try {
                  //   const result = await patientFactoryInstance.addPatient(
                  //     1,
                  //     "Aman",
                  //     "Male",
                  //     24,
                  //     accounts[0],
                  //     { from: accounts[0] }
                  //   );
                  //   console.log("RESULT:", result);
                  // } catch (error) {
                  //   console.error(error);
                  // }
                  //
                  // const patientId = await patientFactoryInstance.patientIdToAddress.call(1);
                  // //  const patientFactoryInstance = await Factory.deployed();
                  // console.log("address of patient:", patientId);
                  //
                  // // console.log("Address of Patient", patientId.address);
                  // console.log(patientFactoryInstance.address);
                  //
                  // const man = await patientFactoryInstance.manager.call();
                  // console.log(man);
                  // // this.setState({ patientId: ["aman", "khan"] });


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

              case 16:
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addPatient",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var Factory, Contract, patientFactoryInstance, accounts, result, patientinstanceAddress, patientInstance, summary;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //const { patientFactoryInstance } = this.props;
              Factory = truffle_contract__WEBPACK_IMPORTED_MODULE_17___default()(_build_contracts_PatientFactory_json__WEBPACK_IMPORTED_MODULE_6__); //  console.log(Factory);

              Factory.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].currentProvider);
              console.log(Factory); //PatinentContract;

              Contract = truffle_contract__WEBPACK_IMPORTED_MODULE_17___default()(_build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_7__); //console.log(Contract);

              Contract.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].currentProvider); //  console.log(Contract);

              _context2.next = 7;
              return Factory.deployed();

            case 7:
              patientFactoryInstance = _context2.sent;
              console.log("RESULT:", patientFactoryInstance.address);
              _context2.prev = 9;
              _context2.next = 12;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

            case 12:
              accounts = _context2.sent;
              _context2.next = 15;
              return patientFactoryInstance.addPatient( // 1,
              // "Aman",
              // "Male",
              // 24,
              // accounts[0],
              _this.state.patientId, _this.state.patientName, _this.state.patientGender, _this.state.patientAge, _this.state.patientAccount, {
                from: accounts[0]
              });

            case 15:
              result = _context2.sent;
              console.log("RESULT:", result);
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](9);
              console.error(_context2.t0);

            case 22:
              _context2.next = 24;
              return patientFactoryInstance.patientIdToAddress.call(_this.state.patientId);

            case 24:
              patientinstanceAddress = _context2.sent;
              _context2.next = 27;
              return Contract.at(patientinstanceAddress);

            case 27:
              patientInstance = _context2.sent;
              _context2.next = 30;
              return patientInstance.getSummary.call(_this.state.patientId);

            case 30:
              summary = _context2.sent;
              console.log("summary:", summary); //  const patientFactoryInstance = await Factory.deployed();

              console.log("address of patient:", patientinstanceAddress);

            case 33:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[9, 19]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addDoctor",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        var doctorFactoryInstance, accounts, result, doctorInstanceAddress, doctorInstance, doctorList;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Factory.deployed();

              case 2:
                doctorFactoryInstance = _context3.sent;
                _context3.prev = 3;
                _context3.next = 6;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 6:
                accounts = _context3.sent;
                _context3.next = 9;
                return doctorFactoryInstance.addDoctor( // 1,
                // "Aman",
                // "Male",
                // 24,
                // accounts[0],
                _this.state.doctorId, _this.state.doctorName, _this.state.doctorGender, _this.state.doctorQualification, _this.state.doctorAccount, {
                  from: accounts[0]
                });

              case 9:
                result = _context3.sent;
                console.log("RESULT:", result);
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](3);
                console.error(_context3.t0);

              case 16:
                _context3.next = 18;
                return doctorFactoryInstance.doctorIdToAddress.call(_this.state.doctorId);

              case 18:
                doctorInstanceAddress = _context3.sent;
                _context3.next = 21;
                return Contract.at(doctorInstanceAddress);

              case 21:
                doctorInstance = _context3.sent;
                _context3.next = 24;
                return doctorFactoryInstance.getDoctorList.call();

              case 24:
                doctorList = _context3.sent;
                console.log("doctorlist:", doctorList.length); //  const patientFactoryInstance = await Factory.deployed();

                console.log("address of Doctor:", doctorInstanceAddress); // const requests = await Promise.all(
                //   Array(parseInt(requestCount))
                //     .fill()
                //     .map((element, index) => {
                //       return campaign.methods.requests(index).call();
                //     })
                // );

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 13]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentSubmit",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentId", function (event) {
      _this.setState({
        appointmentId: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPatientAccountHandle", function (event) {
      _this.setState({
        patientAccount: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDoctorAccountHandle", function (event) {
      _this.setState({
        doctorAccount: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTextArea", function (event) {
      _this.setState({
        textArea: event.target.value
      });

      console.log(_this.state.textArea);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePatientChange", function (e, _ref5) {
      var value = _ref5.value;

      //  console.log(value);
      _this.setState({
        currentPatientValue: value
      });

      console.log(_this.state.currentPatientValue);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDoctorChange", function (e, _ref6) {
      var value = _ref6.value;

      //  console.log(value);
      _this.setState({
        currentDoctorValue: value
      });

      console.log(_this.state.currentDoctorValue);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentSubmit", function (event) {
      console.log(_this.state.currentPatientValue);
      console.log(_this.state.currentDoctorValue);
      console.log(_this.state.date1);
      console.log(_this.state.date);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDropDownPatient", function (patienId) {
      var _this$state = _this.state,
          currentPatientValue = _this$state.currentPatientValue,
          patientIdArray = _this$state.patientIdArray;
      console.log("render maethod:", _this.props.patientList);

      var patientArray = _this.props.patientList.map(function (element, index) {
        //console.log("element:", index, element.toNumber());
        var element1 = element.toNumber().toString();
        return {
          key: index,
          text: element1,
          value: element1
        };
      });

      var options = patientArray.map(function (element1, index) {
        return {
          key: index,
          text: element1,
          value: element1
        };
      });
      console.log("options :", options);
      console.log("patient Array:", patientArray); //
      // { key: index, text:element.toNumber() , value: element.toNumber() },
      // { key: 2, text: "Choice 2", value: 2 },
      // { key: 3, text: "Choice 3", value: 3 }
      // ];

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        clearable: true,
        options: patientArray,
        selection: true,
        search: true,
        value: currentPatientValue,
        onChange: _this.handlePatientChange
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDropDownDoctor", function (doctorId) {
      var currentDoctorValue = _this.state.currentDoctorValue;
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
      console.log("OPTIONS:", options);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        clearable: true,
        options: options,
        selection: true,
        value: currentDoctorValue,
        onChange: _this.handleDoctorChange
      });
    });

    return _this;
  }

  _createClass(hospitalDetails, [{
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var panes = [{
        menuItem: "Add Patient",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Patient Information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            onSubmit: _this2.addPatient
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.patientId,
            onChange: _this2.onPatientIdHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.patientName,
            onChange: _this2.onPatientHandle
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient Gender"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.patientGender,
            onChange: _this2.onGenderHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient Age"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.patientAge,
            onChange: _this2.onAgeHandle
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.patientAccount,
            onChange: _this2.onPatientAccountHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            primary: true
          }, " Add Patient ")));
        }
      }, {
        menuItem: "Add Doctor",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Doctor Information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            onSubmit: _this2.addDoctor
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.doctorId,
            onChange: _this2.onDoctorIdHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.doctorName,
            onChange: _this2.onDoctorHandle
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Gender"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.doctorGender,
            onChange: _this2.onGenderDoctorHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Qualification"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.doctorQualification,
            onChange: _this2.onQualificationHandle
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.doctorAccount,
            onChange: _this2.onDoctorAccountHandle
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            primary: true
          }, " Add Doctor ")));
        }
      }, {
        menuItem: "Create Appointment",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Create Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            onSubmit: _this2.onAppointmentSubmit
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Appointment Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.appointmentId,
            onChange: _this2.onAppointmentId
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Appointment Date "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            action: {
              color: "teal",
              icon: "calendar",
              onClick: function onClick() {
                return _this2.setState({
                  dateTimeOpen: true
                });
              }
            },
            actionPosition: "left",
            value: moment__WEBPACK_IMPORTED_MODULE_12___default()(_this2.state.myDate).format("LLL"),
            onClick: function onClick() {
              return _this2.setState({
                dateTimeOpen: true
              });
            },
            disabled: _this2.state.dateTimeOpen,
            fluid: true
          }), _this2.state.dateTimeOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_semantic_datetime__WEBPACK_IMPORTED_MODULE_11___default.a, {
            onChange: function onChange(value) {
              _this2.setState({
                myDate: value,
                dateTimeOpen: false
              });

              _this2.setState({
                date: moment__WEBPACK_IMPORTED_MODULE_12___default()(_this2.state.myDate).format("LLL")
              });
            },
            moment: _this2.myDate,
            time: true
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patinet ID"), _this2.renderDropDownPatient()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patinet ID"), _this2.renderDropDownDoctor())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].TextArea, {
            label: "Chep Complaint",
            rows: 2,
            placeholder: "write patient disease...",
            onChange: _this2.onTextArea
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            primary: true
          }, " Add Doctor ")));
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"], {
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Hospital Name: ", hospitalName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Admin Name: ", adminName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Account: ", manager));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        floated: "right",
        primary: true,
        content: "Show admin View",
        onClick: this.onUnlockView
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginLeft: 300
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hospital Details")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundColor: "#4267b2",
          color: "white",
          marginTop: 10,
          borderRadius: 4,
          padding: 10,
          paddingLeft: 50,
          margin: 10,
          fontFamily: "Times New Roman, Times, serif",
          fontSize: 20
        }
      }, this.renderHospital())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_toggle_display__WEBPACK_IMPORTED_MODULE_3___default.a, {
        show: this.state.show
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          marginLeft: 300
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(props) {
        var address, accounts, ContractReceptionist, instanceReceptionist, hospitalSummary, optionsArray, Factory, Contract, patientFactoryInstance, patientList1, patient;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                address = props.query.address;
                console.log("ADdress:", address);
                _context5.next = 4;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 4:
                accounts = _context5.sent;
                ContractReceptionist = truffle_contract__WEBPACK_IMPORTED_MODULE_17___default()(_build_contracts_Receptionsit_json__WEBPACK_IMPORTED_MODULE_5__);
                ContractReceptionist.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].currentProvider);
                _context5.next = 9;
                return ContractReceptionist.at(address);

              case 9:
                instanceReceptionist = _context5.sent;
                _context5.next = 12;
                return instanceReceptionist.getSummary.call();

              case 12:
                hospitalSummary = _context5.sent;
                console.log(accounts[0], "and acctual is ===:", hospitalSummary[2]);
                optionsArray = ["one", "two", "three"];
                console.log("S", hospitalSummary);
                Factory = truffle_contract__WEBPACK_IMPORTED_MODULE_17___default()(_build_contracts_DoctorFactory_json__WEBPACK_IMPORTED_MODULE_8__); //  console.log(Factory);

                Factory.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].currentProvider); //  console.log(Factory);
                //PatinentContract

                Contract = truffle_contract__WEBPACK_IMPORTED_MODULE_17___default()(_build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_9__); //console.log(Contract);

                Contract.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].currentProvider);
                _context5.next = 22;
                return Factory.deployed();

              case 22:
                patientFactoryInstance = _context5.sent;
                _context5.next = 25;
                return patientFactoryInstance.getPatientList.call();

              case 25:
                patientList1 = _context5.sent;
                _context5.next = 28;
                return Promise.all(Array(parseInt(patientList)).fill().map(function (element, index) {
                  return patientFactoryInstance.patientId.call(index);
                }));

              case 28:
                patient = _context5.sent;
                return _context5.abrupt("return", {
                  patientList: patient,
                  patientFactoryInstance: patientFactoryInstance,
                  address: props.query.address,
                  hospitalName: hospitalSummary[0],
                  adminName: hospitalSummary[1],
                  manager: hospitalSummary[2]
                });

              case 30:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getInitialProps(_x4) {
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
//# sourceMappingURL=hospitalDetails.js.199e46c2b3c402a20069.hot-update.js.map