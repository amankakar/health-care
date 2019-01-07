webpackHotUpdate("static/development/pages/patient.js",{

/***/ "./pages/patient/index.js":
/*!********************************!*\
  !*** ./pages/patient/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_patientLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/patientLayout */ "./components/patientLayout.js");
/* harmony import */ var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json");
var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json", 1);
/* harmony import */ var _build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../build/contracts/Patient.json */ "./build/contracts/Patient.json");
var _build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Patient.json */ "./build/contracts/Patient.json", 1);
/* harmony import */ var _components_AppointmentRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppointmentRow */ "./components/AppointmentRow.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");


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











var patient =
/*#__PURE__*/
function (_Component) {
  _inherits(patient, _Component);

  function patient() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, patient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(patient)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      appointmentIdResult: "",
      appointmentIdSearch: "",
      patientIdResult: "",
      doctorIdresult: "",
      dateResult: "",
      chepComplaintResult: "",
      loading: false,
      errorMessage: "",
      doctorId: "",
      loadingDis: false,
      errorMessageDis: "",
      doctorIdDis: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchAppointment",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var patient, appointmentResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                patient = _this.props.patient;
                console.log(patient);
                _context.next = 5;
                return patient.appointments.call(parseInt(_this.state.appointmentIdSearch));

              case 5:
                appointmentResult = _context.sent;
                console.log(appointmentResult);

                _this.setState({
                  appointmentIdResult: appointmentResult[0].toNumber(),
                  patientIdResult: appointmentResult[1].toNumber(),
                  doctorIdresult: appointmentResult[2].toNumber(),
                  dateResult: appointmentResult[3],
                  chepComplaintResult: appointmentResult[4]
                }); // console.log(this.state.appointmentResult);


                _this.onSearch();

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearch", function () {
      if (_this.state.appointmentIdResult) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], {
          singleLine: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Appointement Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Patient Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Doctor Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Chief Complaint"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Body, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.appointmentIdResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.patientIdResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.doctorIdresult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.dateResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.chepComplaintResult))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "No Record Found");
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentIdSearch", function (event) {
      _this.setState({
        appointmentIdSearch: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDoctorId", function (event) {
      _this.setState({
        doctorId: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDoctorIdDis", function (event) {
      _this.setState({
        doctorIdDis: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSumbitApproval",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var patient, isPresent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                patient = _this.props.patient;

                _this.setState({
                  loading: true,
                  errorMessage: ""
                });

                console.log(patient);
                _context2.next = 6;
                return patient.doctorApproval.call(_this.state.doctorId);

              case 6:
                isPresent = _context2.sent;
                console.log(isPresent);

                if (isPresent) {
                  _context2.next = 21;
                  break;
                }

                _context2.prev = 9;
                _context2.next = 12;
                return patient.addDoctorApproval(_this.state.doctorId, {
                  from: _this.props.account
                });

              case 12:
                alert(_this.state.doctorId + "is Approved to view Your Record");
                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](9);
                console.log("Error of try:", _context2.t0);

                _this.setState({
                  errorMessage: _context2.t0.message
                });

              case 19:
                _context2.next = 22;
                break;

              case 21:
                alert("Already Approved");

              case 22:
                _this.setState({
                  loading: false
                });

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[9, 15]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSumbitDisapprove",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        var patient, isPresent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                patient = _this.props.patient;

                _this.setState({
                  loadingDis: true,
                  errorMessageDis: ""
                });

                console.log(patient);
                _context3.next = 6;
                return patient.doctorApproval.call(_this.state.doctorIdDis);

              case 6:
                isPresent = _context3.sent;
                console.log(isPresent);

                if (!isPresent) {
                  _context3.next = 22;
                  break;
                }

                console.log(_this.state.doctorIdDis);
                _context3.prev = 10;
                _context3.next = 13;
                return patient.blockDoctor(_this.state.doctorIdDis, {
                  from: _this.props.account,
                  gas: "10000"
                });

              case 13:
                alert(_this.state.doctorIdDis + "is disApproved to view Your Record");
                _context3.next = 20;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](10);
                console.log("Error of try:", _context3.t0);

                _this.setState({
                  errorMessageDis: _context3.t0.message
                });

              case 20:
                _context3.next = 23;
                break;

              case 22:
                alert("Already DisApproved");

              case 23:
                _this.setState({
                  loadingDis: false
                });

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 16]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(patient, [{
    key: "renderRow",
    value: function renderRow() {
      var _this2 = this;

      return this.props.appointmentListData.map(function (appointment, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AppointmentRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: index,
          appointment: appointment,
          address: _this2.props.patientAddress
        });
      });
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this3 = this;

      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Body;
      var panes = [{
        menuItem: "View Record",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Patient Record of Health-care"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Appointment ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Patient ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Doctor ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Chief Complaint"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, " Hash"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Body, null, _this3.renderRow())));
        }
      }, {
        menuItem: "Search Appointment",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Search Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
            onSubmit: _this3.onSearchAppointment
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Appointment Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
            value: _this3.state.appointmentIdSearch,
            onChange: _this3.onAppointmentIdSearch
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            primary: true
          }, " Search Appointment "))), _this3.onSearch());
        }
      }, {
        menuItem: "Approve/DisApprove Doctor",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
            columns: 2,
            divided: true
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
            stretched: true
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Approve Doctor"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
            onSubmit: _this3.onSumbitApproval,
            error: !!_this3.state.errorMessage
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
            value: _this3.state.doctorId,
            onChange: _this3.onDoctorId
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Message"], {
            error: true,
            header: "Oops..!",
            content: _this3.state.errorMessage
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            loading: _this3.state.loading,
            primary: true
          }, " ", "Approve Doctor", " ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "DisApprove Doctor"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
            onSubmit: _this3.onSumbitDisapprove,
            error: !!_this3.state.errorMessageDis
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Doctor Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
            value: _this3.state.doctorIdDis,
            onChange: _this3.onDoctorIdDis
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Message"], {
            error: true,
            header: "Oops..!",
            content: _this3.state.errorMessageDis
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            loading: _this3.state.loadingDis,
            primary: true
          }, " ", "disApprove Doctor", " ")))))), " ");
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
        menu: {
          attached: false
        },
        panes: panes
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.patientAddress === null) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_patientLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            color: "red"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "You are not Registered as Patient or you have selected wrong account in metamask")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_patientLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Patient Name: ", this.props.patientName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Patient Id:", this.props.patientId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Patient Gender:", this.props.patientGender), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Patient Age:", this.props.patientAge), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Patient Account: ", this.props.patientAccount))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.renderTabs()));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var accounts, factory, instanceFactory, patient, patientAddress, patientContract, patientId, summary, appointmentList, appointmentListData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].eth.getAccounts();

              case 2:
                accounts = _context5.sent;
                console.log(accounts[0]);
                factory = truffle_contract__WEBPACK_IMPORTED_MODULE_6___default()(_build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_3__);
                factory.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].currentProvider);
                _context5.next = 8;
                return factory.deployed();

              case 8:
                instanceFactory = _context5.sent;
                console.log(instanceFactory);
                patient = truffle_contract__WEBPACK_IMPORTED_MODULE_6___default()(_build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_4__);
                patient.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].currentProvider);
                _context5.next = 14;
                return instanceFactory.accountToAddressPatient.call(accounts[0]);

              case 14:
                patientAddress = _context5.sent;
                console.log(patientAddress);

                if (!(patientAddress == 0x0000000000000000000000000000000000000000)) {
                  _context5.next = 21;
                  break;
                }

                alert("Sorry check your account or contact with authorized person");
                return _context5.abrupt("return", {
                  patientAddress: null
                });

              case 21:
                _context5.next = 23;
                return patient.at(patientAddress);

              case 23:
                patientContract = _context5.sent;
                console.log("patient address :", patientContract);
                _context5.next = 27;
                return patientContract.patientId.call();

              case 27:
                patientId = _context5.sent;
                _context5.next = 30;
                return patientContract.getSummary.call(patientId);

              case 30:
                summary = _context5.sent;
                console.log(summary);
                _context5.next = 34;
                return patientContract.getAppointmentList.call();

              case 34:
                appointmentList = _context5.sent;
                console.log(appointmentList);
                _context5.next = 38;
                return Promise.all(Array(parseInt(appointmentList)).fill().map(
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(element, index) {
                    var appointmentId;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return patientContract.appointmentsList.call(index);

                          case 2:
                            appointmentId = _context4.sent;
                            return _context4.abrupt("return", patientContract.appointments.call(appointmentId));

                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));

                  return function (_x4, _x5) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 38:
                appointmentListData = _context5.sent;
                console.log("Appointment Data:", appointmentListData);
                return _context5.abrupt("return", {
                  patient: patientContract,
                  appointmentListData: appointmentListData,
                  account: accounts[0],
                  patientId: summary[0].toNumber(),
                  patientName: summary[1],
                  patientGender: summary[2],
                  patientAge: summary[3].toNumber(),
                  patientAccount: summary[4],
                  patientAddress: patientAddress
                });

              case 41:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return patient;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (patient);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/patient")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=patient.js.c7836328fea87ebb2a32.hot-update.js.map