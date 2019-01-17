webpackHotUpdate("static/development/pages/doctor.js",{

/***/ "./pages/doctor/index.js":
/*!*******************************!*\
  !*** ./pages/doctor/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_doctorLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/doctorLayout */ "./components/doctorLayout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json");
var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json", 1);
/* harmony import */ var _build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../build/contracts/Doctor.json */ "./build/contracts/Doctor.json");
var _build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Doctor.json */ "./build/contracts/Doctor.json", 1);
/* harmony import */ var _build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../build/contracts/Patient.json */ "./build/contracts/Patient.json");
var _build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Patient.json */ "./build/contracts/Patient.json", 1);
/* harmony import */ var _components_AppointmentRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AppointmentRow */ "./components/AppointmentRow.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ipfs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ipfs */ "./pages/ipfs.js");


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













var doctor =
/*#__PURE__*/
function (_Component) {
  _inherits(doctor, _Component);

  function doctor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, doctor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(doctor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      appointmentIdResult: "",
      appointmentIdSearch: "",
      patientIdResult: "",
      doctorIdresult: "",
      dateResult: "",
      chepComplaintResult: "",
      appointmentIdForFile: "",
      isCheckTrue: false,
      buffer: "",
      errorMessage: "",
      loading: false,
      patientId: "",
      instancePatient: "",
      appointmentListData: "",
      doctorApproved: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentIdForFile", function (e) {
      var re = /^[0-9\b]+$/;

      if (e.target.value === "" || re.test(e.target.value)) {
        _this.setState({
          appointmentIdForFile: e.target.value
        });
      }

      console.log(_this.state.appointmentIdForFile);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPatientId", function (e) {
      var re = /^[0-9\b]+$/;

      if (e.target.value === "" || re.test(e.target.value)) {
        _this.setState({
          patientId: e.target.value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentIdSearch", function (event) {
      _this.setState({
        appointmentIdSearch: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchAppointment",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var doctor, appointmentResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                doctor = _this.props.doctor;
                console.log(doctor);
                _context.next = 5;
                return doctor.appointments.call(parseInt(_this.state.appointmentIdSearch));

              case 5:
                appointmentResult = _context.sent;
                console.log(appointmentResult);

                _this.setState({
                  appointmentIdResult: appointmentResult[0].toNumber(),
                  patientIdResult: appointmentResult[1].toNumber(),
                  doctorIdresult: appointmentResult[2].toNumber(),
                  dateResult: appointmentResult[3],
                  chepComplaintResult: appointmentResult[4]
                });

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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          singleLine: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Appointement Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Patient Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Doctor Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Chief Complaint"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Body, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, _this.state.appointmentIdResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, _this.state.patientIdResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, _this.state.doctorIdresult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, _this.state.dateResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, null, _this.state.chepComplaintResult))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "No Record Found");
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddPrescriptionSearch",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var appointmentIdForFile, doctor, appointment, isCheckTrue;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              appointmentIdForFile = _this.state.appointmentIdForFile;
              doctor = _this.props.doctor;
              _context2.next = 4;
              return doctor.appointments.call(appointmentIdForFile);

            case 4:
              appointment = _context2.sent;
              isCheckTrue = appointment[6];

              if (appointment[0].toNumber() == 0 || isNaN(appointment[0].toNumber())) {
                alert("please provide right Appointment Id");
              } else {
                _this.setState({
                  appointmentIdForFile: appointment[0].toNumber(),
                  isCheckTrue: isCheckTrue
                });

                console.log(_this.state.isCheckTrue, _this.state.appointmentIdForFile);

                _this.renderFile();
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
        var _doctor, appointment, isCheckTrue, _appointment;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                _this.setState({
                  loading: true,
                  errorMessage: ""
                });

                console.log(_this.state.appointmentIdForFile);
                _doctor = _this.props.doctor;
                _context4.next = 6;
                return _doctor.appointments.call(_this.state.appointmentIdForFile);

              case 6:
                appointment = _context4.sent;
                isCheckTrue = appointment[6];
                console.log(isCheckTrue);

                if (!(isCheckTrue || _this.state.appointmentIdForFile == 0)) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", alert("Sorry provide valid appointment Id"));

              case 13:
                _ipfs__WEBPACK_IMPORTED_MODULE_11__["default"].files.add(_this.state.buffer,
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(error, result) {
                    var prescription;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!error) {
                              _context3.next = 4;
                              break;
                            }

                            console.error(error);

                            _this.setState({
                              errorMessage: error.message
                            });

                            return _context3.abrupt("return");

                          case 4:
                            _this.setState({
                              loading: false
                            }); // const ethAddress = instance.address;
                            // this.setState({ ethAddress });


                            _context3.next = 7;
                            return _doctor.addPrescription(_this.state.appointmentIdForFile, result[0].hash, {
                              from: _this.props.accounts[0]
                            });

                          case 7:
                            prescription = _context3.sent;

                          case 8:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                _context4.next = 16;
                return _doctor.appointments.call(_this.state.appointmentIdForFile);

              case 16:
                _appointment = _context4.sent;
                console.log(_appointment);

              case 18:
                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](0);
                console.log(error);

                _this.setState({
                  errorMessage: _context4.t0.message
                });

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 20]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSumbitPatientId",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(event) {
        var instanceFactory, patient, patientAddress, instancePatient, checkDoctorId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                event.preventDefault();
                instanceFactory = _this.props.instanceFactory;
                patient = _this.props.patient;
                _context5.next = 5;
                return instanceFactory.patientIdToAddress.call(parseInt(_this.state.patientId));

              case 5:
                patientAddress = _context5.sent;

                if (patientAddress == 0x0000000000000000000000000000000000000000) {
                  alert("sorry wrong patient id");
                }

                _context5.next = 9;
                return patient.at(patientAddress);

              case 9:
                instancePatient = _context5.sent;
                _context5.next = 12;
                return instancePatient.doctorApproval.call(_this.props.doctorId);

              case 12:
                checkDoctorId = _context5.sent;

                if (checkDoctorId) {
                  _this.setState({
                    doctorApproved: true
                  });
                } else {
                  alert("Sorry you are not allowed to view patient record");
                }

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "captureFile", function (event) {
      event.preventDefault();

      try {
        var file = event.target.files[0];
        var reader = new window.FileReader();
        reader.readAsArrayBuffer(file);

        reader.onloadend = function () {
          _this.setState({
            buffer: Buffer(reader.result)
          });

          console.log("buffer:", _this.state.buffer);
        };
      } catch (err) {
        _this.setState({
          errorMessage: err.message
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderFile", function () {
      console.log("render file:", _this.state.isCheckTrue); // console.log("address", this.props.);

      if (!_this.state.isCheckTrue) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Please Add File"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
          onSubmit: _this.onSubmit,
          error: !!_this.state.errorMessage
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
          type: "file",
          onChange: _this.captureFile,
          style: {
            width: 800,
            height: 40,
            opacity: 100
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          loading: _this.state.loading,
          primary: true,
          icon: "upload",
          label: {
            basic: true,
            content: "upload file"
          },
          labelPosition: "right"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
          error: true,
          header: "Oops..!",
          content: _this.state.errorMessage
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "already Completed"));
      }
    });

    return _this;
  }

  _createClass(doctor, [{
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Body;
      var patientId = this.state.patientId;
      var panes = [{
        menuItem: "Add File of Visit",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Add File of Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Search Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            onSubmit: _this2.onAddPrescriptionSearch
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Appointment Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.appointmentIdForFile,
            onChange: _this2.onAppointmentIdForFile
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            primary: true
          }, " Search Appointment "))), _this2.renderFile(_this2.state.appointmentIdForFile, _this2.state.isCheckTrue));
        }
      }, {
        menuItem: "Search Appointment",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Search Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            onSubmit: _this2.onSearchAppointment
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Appointment Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.appointmentIdSearch,
            onChange: _this2.onAppointmentIdSearch
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            primary: true
          }, " Search Appointment "))), _this2.onSearch());
        }
      }, {
        menuItem: "View Patient Record",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "View Patient Record"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            onSubmit: _this2.onSumbitPatientId
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Patient id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
            value: _this2.state.patientId,
            onChange: _this2.onPatientId
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            primary: true
          }, " View record "))), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, _this2.state.doctorApproved ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
            route: "../doctor/patientRecord/".concat(patientId)
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "View Patient Record")) : "Sorry you are not allowed"));
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
    key: "render",
    value: function render() {
      if (this.props.doctorAddress !== null) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_doctorLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Doctor Id: ", this.props.doctorId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " Doctor Name : ", this.props.doctorName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Gender: ", this.props.doctorGender), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Qualification: ", this.props.qualification), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " Account: ", this.props.account)), this.renderTabs()));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_doctorLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            color: "red"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "You are not Registered as Doctor or you have selected wrong account in metamask")));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var accounts, factory, instanceFactory, doctor, patient, doctorAddress, instanceDoctor, doctorId, summary;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();

              case 2:
                accounts = _context6.sent;
                console.log(accounts[0]);
                factory = truffle_contract__WEBPACK_IMPORTED_MODULE_9___default()(_build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4__);
                factory.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider);
                _context6.next = 8;
                return factory.deployed();

              case 8:
                instanceFactory = _context6.sent;
                doctor = truffle_contract__WEBPACK_IMPORTED_MODULE_9___default()(_build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_5__);
                patient = truffle_contract__WEBPACK_IMPORTED_MODULE_9___default()(_build_contracts_Patient_json__WEBPACK_IMPORTED_MODULE_6__);
                patient.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider);
                doctor.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider);
                _context6.next = 15;
                return instanceFactory.accountToAddressDoctor.call(accounts[0]);

              case 15:
                doctorAddress = _context6.sent;

                if (!(doctorAddress == 0x0000000000000000000000000000000000000000)) {
                  _context6.next = 20;
                  break;
                }

                return _context6.abrupt("return", {
                  doctorAddress: null
                });

              case 20:
                _context6.next = 22;
                return doctor.at(doctorAddress);

              case 22:
                instanceDoctor = _context6.sent;
                _context6.next = 25;
                return instanceDoctor.doctorId.call();

              case 25:
                doctorId = _context6.sent;
                _context6.next = 28;
                return instanceDoctor.getSummary.call(doctorId);

              case 28:
                summary = _context6.sent;
                return _context6.abrupt("return", {
                  patient: patient,
                  doctorAddress: doctorAddress,
                  doctor: instanceDoctor,
                  instanceFactory: instanceFactory,
                  doctorId: summary[0].toNumber(),
                  doctorName: summary[1],
                  doctorGender: summary[2],
                  qualification: summary[3],
                  account: summary[4],
                  accounts: accounts
                });

              case 30:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return doctor;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (doctor);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/doctor")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=doctor.js.d992d06384afbb3d07a3.hot-update.js.map