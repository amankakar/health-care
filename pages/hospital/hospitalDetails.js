import React, { Component } from "react";
import ReactDOM from "react-dom";
import ToggleDisplay from "react-toggle-display";
import ReceptionsitFactory from "../../build/contracts/ReceptionsitFactory.json";
import Receptionist from "../../build/contracts/Receptionsit.json";
import PatientFactory from "../../build/contracts/PatientFactory.json";
import Patient from "../../build/contracts/Patient.json";
import DoctorFactory from "../../build/contracts/DoctorFactory.json";
import Doctor from "../../build/contracts/Doctor.json";
import {
  Card,
  Button,
  Tab,
  Form,
  Input,
  Dropdown,
  Table
} from "semantic-ui-react";
import DatetimePicker from "react-semantic-datetime";
import moment from "moment"; //for date picker
import { BigNumber } from "bignumber.js";

import { Link } from "../../routes";
import getWeb3 from "../../ethereum/getWeb3";
import web3 from "../../ethereum/web3";
import truffleContract from "truffle-contract";
import Layout from "../../components/Layout";
// import Dropdown from "react-dropdown";
// import "../style.css";
class hospitalDetails extends Component {
  //intialize state of variable use
  state = {
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
    date: moment(),
    date1: "",
    dateTimeOpen: false,
    patientIdArray: null,
    doctorIdArray: null,
    appointmentIdResult: "",
    appointmentIdSearch: "",
    patientIdResult: "",
    doctorIdresult: "",
    dateResult: "",
    chepComplaintResult: ""
  };
  //get Address of  hospital/ Receptionist contract provided in intial props and set show contract information
  static async getInitialProps(props) {
    const address = props.query.address;
    console.log("ADdress:", address);
    const accounts = await web3.eth.getAccounts();
    const ContractReceptionist = truffleContract(Receptionist);
    ContractReceptionist.setProvider(web3.currentProvider);
    const instanceReceptionist = await ContractReceptionist.at(address);
    const hospitalSummary = await instanceReceptionist.getSummary.call();
    console.log(accounts[0], "and acctual is ===:", hospitalSummary[2]);
    const optionsArray = ["one", "two", "three"];
    console.log("S", hospitalSummary);

    //  console.log(Factory);
    //PatinentContract
    //const Contract = truffleContract(Doctor);
    //console.log(Contract);
    //Contract.setProvider(web3.currentProvider);

    return {
      address: props.query.address,
      hospitalName: hospitalSummary[0],
      adminName: hospitalSummary[1],
      manager: hospitalSummary[2]
    };
  }
  //unlock admin view
  onUnlockView = async event => {
    event.preventDefault();
    var admin;
    console.log("Clicked");
    //const web3 = await getWeb3();
    console.log("web3:", web3);
    const accounts = await web3.eth.getAccounts();
    console.log("account at index:", this.props.manager);
    console.log("account in metamask", accounts);
    const Factory = truffleContract(PatientFactory);
    //  console.log(Factory);
    Factory.setProvider(web3.currentProvider);
    console.log(Factory);

    const patientFactoryInstance = await Factory.deployed();

    const patientList = await patientFactoryInstance.getPatientList.call();
    this.setState({ patientIdArray: patientList });
    this.preparePatientDropDown();
    const FactoryDoctor = truffleContract(DoctorFactory);
    //  console.log(Factory);
    FactoryDoctor.setProvider(web3.currentProvider);
    console.log(FactoryDoctor);

    const doctorFactoryInstance = await FactoryDoctor.deployed();

    const doctorList = await doctorFactoryInstance.getDoctorList.call();
    this.setState({ doctorIdArray: doctorList });
    this.prepareDoctorDropdown();
    // const FactoryDoctor = truffleContract(DoctorFactory);
    // //  console.log(Factory);
    // FactoryDoctor.setProvider(web3.currentProvider);
    // const doctorFactoryInstance = await FactoryDoctor.deployed();
    // const doctorList = await doctorFactoryInstance.getDoctorList.call();
    // this.setState({ doctorIdArray: doctorList });
    //console.log("patientList:", patientList.length);
    if (this.props.manager === accounts[0]) {
      this.setState({ show: !this.state.show });
      //this.renderDropDownPatient();
      //Patient factory
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
      console.log("ISADMIn:", this.state.show);
    } else {
      this.setState({ show: false });
      this.setState({
        notAdmin:
          "you are not admin or you have selected Wrong account in Metamask please check"
      });
      console.log("ISADMIn:", this.state.show);
    }
  };

  //Add Patient
  addPatient = async () => {
    //const { patientFactoryInstance } = this.props;
    const Factory = truffleContract(PatientFactory);
    //  console.log(Factory);
    Factory.setProvider(web3.currentProvider);
    console.log(Factory);
    //PatinentContract;
    const Contract = truffleContract(Patient);
    //console.log(Contract);
    Contract.setProvider(web3.currentProvider);
    //  console.log(Contract);
    const patientFactoryInstance = await Factory.deployed();
    console.log("RESULT:", patientFactoryInstance.address);

    try {
      const accounts = await web3.eth.getAccounts();

      const result = await patientFactoryInstance.addPatient(
        // 1,
        // "Aman",
        // "Male",
        // 24,
        // accounts[0],
        this.state.patientId,
        this.state.patientName,
        this.state.patientGender,
        this.state.patientAge,
        this.state.patientAccount,
        { from: accounts[0] }
      );
      console.log("RESULT:", result);
    } catch (error) {
      console.error(error);
    }

    const patientinstanceAddress = await patientFactoryInstance.patientIdToAddress.call(
      this.state.patientId
    );
    const patientInstance = await Contract.at(patientinstanceAddress);

    const summary = await patientInstance.getSummary.call(this.state.patientId);
    console.log("summary:", summary);
    //  const patientFactoryInstance = await Factory.deployed();
    console.log("address of patient:", patientinstanceAddress);
    this.preparePatientDropDown();
    // const patientList = await patientFactoryInstance.getPatientList.call();
    // const patient = await Promise.all(
    //   Array(parseInt(patientList))
    //     .fill()
    //     .map((element, index) => {
    //       return patientFactoryInstance.patientId.call(index);
    //       // .then((element , index)=>{
    //       //
    //       // })
    //       // ;
    //     })
    // );
    // console.log("Patient list:", patient);
    // this.setState({ patientIdArray: patient });
    //
    // console.log("patientList:", this.state.patientIdArray);
  };
  //prepare dropdown for patient
  async preparePatientDropDown() {
    const FactoryPatient = truffleContract(PatientFactory);
    //  console.log(Factory);
    FactoryPatient.setProvider(web3.currentProvider);

    const patientFactoryInstance = await FactoryPatient.deployed();

    const patientList = await patientFactoryInstance.getPatientList.call();
    const patient = await Promise.all(
      Array(parseInt(patientList))
        .fill()
        .map((element, index) => {
          return patientFactoryInstance.patientId.call(index);
          // .then((element , index)=>{
          //
          // })
          // ;
        })
    );
    console.log("Patient list:", patient);
    this.setState({ patientIdArray: patient });

    console.log("patientList:", this.state.patientIdArray);
  }

  //prepare dropdown for doctor id
  async prepareDoctorDropdown() {
    const FactoryDoctor = truffleContract(DoctorFactory);
    //  console.log(Factory);
    FactoryDoctor.setProvider(web3.currentProvider);

    const doctorFactoryInstance = await FactoryDoctor.deployed();

    const doctorList = await doctorFactoryInstance.getDoctorList.call();
    const doctor = await Promise.all(
      Array(parseInt(doctorList))
        .fill()
        .map((element, index) => {
          return doctorFactoryInstance.doctorId.call(index);
          // .then((element , index)=>{
          //
          // })
          // ;
        })
    );
    console.log("Doctor list:", doctor);
    this.setState({ doctorIdArray: doctor });

    console.log("patientList:", this.state.doctorIdArray);
  }
  //Add Doctor
  addDoctor = async event => {
    const FactoryDoctor = truffleContract(DoctorFactory);
    //  console.log(Factory);
    FactoryDoctor.setProvider(web3.currentProvider);

    const doctorFactoryInstance = await FactoryDoctor.deployed();

    try {
      const accounts = await web3.eth.getAccounts();

      const result = await doctorFactoryInstance.addDoctor(
        // 1,
        // "Aman",
        // "Male",
        // 24,
        // accounts[0],
        this.state.doctorId,
        this.state.doctorName,
        this.state.doctorGender,
        this.state.doctorQualification,
        this.state.doctorAccount,
        { from: accounts[0] }
      );
      console.log("RESULT:", result);
    } catch (error) {
      console.error(error);
    }

    const doctorInstanceAddress = await doctorFactoryInstance.doctorIdToAddress.call(
      this.state.doctorId
    );
    //const doctorInstance = await Contract.at(doctorInstanceAddress);
    //
    // const summary = await doctorInstance.getSummary.call(this.state.doctorId);
    // console.log("summary:", summary);
    const doctorList = await doctorFactoryInstance.getDoctorList.call();
    console.log("doctorlist:", doctorList.length);
    //  const patientFactoryInstance = await Factory.deployed();
    console.log("address of Doctor:", doctorInstanceAddress);
    this.prepareDoctorDropdown();
    // const requests = await Promise.all(
    //   Array(parseInt(requestCount))
    //     .fill()
    //     .map((element, index) => {
    //       return campaign.methods.requests(index).call();
    //     })
    // );
  };

  //On appointment onSubmit
  onAppointmentSubmit = async event => {
    console.log(this.state.currentPatientValue);
    console.log(this.state.currentDoctorValue);
    console.log(this.state.date1);
    console.log(this.state.date);
    console.log(moment(this.state.myDate).format("LLL"));
    console.log(this.state.appointmentId);
    console.log(this.state.textArea);
    const accounts = await web3.eth.getAccounts();
    const ContractFactory = truffleContract(ReceptionsitFactory);
    ContractFactory.setProvider(web3.currentProvider);

    const instanceFactory = await ContractFactory.deployed();

    console.log(this.props.address);
    try {
      await instanceFactory.createAppointment(
        this.state.appointmentId,
        this.state.currentPatientValue,
        this.state.currentDoctorValue,
        moment(this.state.myDate).format("LLL"),
        this.state.textArea,
        // 123,
        // 456,
        // 567,
        // "12/14/2018",
        // "fhklolp",
        { from: accounts[0] }
      );
    } catch (err) {
      console.error(err);
    }

    // const appoint = await instanceFactory.appointements.call(
    //   parseInt(this.state.appointmentId)
    // );
    // this.setState({ appointmentResult: appoint });
    // console.log(
    //   "appointm:",
    //   this.state.appointmentResult[0].toNumber(),
    //   this.state.appointmentResult[1].toNumber(),
    //   this.state.appointmentResult[2].toNumber(),
    //   this.state.appointmentResult[3],
    //   this.state.appointmentResult[4]
    // );
  };

  onSearchAppointment = async event => {
    event.preventDefault();
    const ContractFactory = truffleContract(ReceptionsitFactory);
    ContractFactory.setProvider(web3.currentProvider);

    const instanceFactory = await ContractFactory.deployed();
    const appointmentResult = await instanceFactory.appointements.call(
      parseInt(this.state.appointmentIdSearch)
    );
    console.log(appointmentResult);
    this.setState({
      appointmentIdResult: appointmentResult[0].toNumber(),
      patientIdResult: appointmentResult[1].toNumber(),
      doctorIdresult: appointmentResult[2].toNumber(),
      dateResult: appointmentResult[3],
      chepComplaintResult: appointmentResult[4]
    });
    console.log(this.state.appointmentResult);
    return this.onSearch();
    // return (
    //   <div>
    //     {this.state.appointmentResult[0].toNumber()}
    //     {this.state.appointmentResult[1].toNumber()}
    //     {this.state.appointmentResult[2].toNumber()}
    //     {(this.state.appointmentResult[3], this.state.appointmentResult[4])}
    //   </div>
    // );
  };

  //search Result render
  onSearch = () => {
    if (this.state.appointmentIdResult) {
      return (
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Appointement Id</Table.HeaderCell>
              <Table.HeaderCell>Patient Id</Table.HeaderCell>
              <Table.HeaderCell>Doctor Id</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Chep Complaint</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{this.state.appointmentIdResult}</Table.Cell>
              <Table.Cell>{this.state.patientIdResult}</Table.Cell>
              <Table.Cell>{this.state.doctorIdresult}</Table.Cell>
              <Table.Cell>{this.state.dateResult}</Table.Cell>
              <Table.Cell>{this.state.chepComplaintResult}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    } else {
      return <h1>No Record Found</h1>;
    }
  };
  //State methods to handle state of inputs
  //Patient add form handler methods
  onPatientIdHandle = event => {
    this.setState({ patientId: event.target.value });
  };
  onPatientHandle = event => {
    this.setState({ patientName: event.target.value });
  };

  onGenderHandle = event => {
    this.setState({ patientGender: event.target.value });
  };

  onAgeHandle = event => {
    this.setState({ patientAge: event.target.value });
  };

  //Doctor form handler mathodes
  onDoctorIdHandle = event => {
    this.setState({ doctorId: event.target.value });
  };
  onDoctorHandle = event => {
    this.setState({ doctorName: event.target.value });
  };

  onQualificationHandle = event => {
    this.setState({ doctorQualification: event.target.value });
  };

  onGenderDoctorHandle = event => {
    this.setState({ doctorGender: event.target.value });
  };

  onAppointmentId = event => {
    this.setState({ appointmentId: event.target.value });
    //console.log(this.state.app);
  };
  onPatientAccountHandle = event => {
    this.setState({ patientAccount: event.target.value });
  };
  onDoctorAccountHandle = event => {
    this.setState({ doctorAccount: event.target.value });
  };
  onTextArea = event => {
    this.setState({ textArea: event.target.value });
    console.log(this.state.textArea);
  };

  handlePatientChange = (e, { value }) => {
    //  console.log(value);
    this.setState({ currentPatientValue: value });
    console.log(this.state.currentPatientValue);
  };

  handleDoctorChange = (e, { value }) => {
    //  console.log(value);
    this.setState({ currentDoctorValue: value });
    console.log(this.state.currentDoctorValue);
  };

  onAppointmentIdSearch = event => {
    this.setState({ appointmentIdSearch: event.target.value });
  };
  //render methods to render jsx Components
  renderDropDownPatient = patienId => {
    const { currentPatientValue, patientIdArray } = this.state;

    console.log("render maethod:", this.state.patientIdArray);
    const patientArray = this.state.patientIdArray.map((element, index) => {
      //console.log("element:", index, element.toNumber());
      var element1 = element.toNumber().toString();
      return {
        key: index,
        text: element1,
        value: element1
      };
    });
    // const options = patientArray.map((element1, index) => {
    //   return { key: index, text: element1, value: element1 };
    // });
    // console.log("options :", options);
    // console.log("patient Array:", patientArray);
    //
    // { key: index, text:element.toNumber() , value: element.toNumber() },
    // { key: 2, text: "Choice 2", value: 2 },
    // { key: 3, text: "Choice 3", value: 3 }
    // ];
    return (
      <Dropdown
        clearable
        options={patientArray}
        selection
        search
        value={currentPatientValue}
        onChange={this.handlePatientChange}
      />
    );
  };
  renderDropDownDoctor = doctorId => {
    const { currentDoctorValue } = this.state;
    console.log("render maethod:", this.state.doctorIdArray);
    const doctorArray = this.state.doctorIdArray.map((element, index) => {
      //console.log("element:", index, element.toNumber());
      var element1 = element.toNumber().toString();
      return {
        key: index,
        text: element1,
        value: element1
      };
    });
    //  console.log("patient Array:", doctorArray);

    // const options = [
    //   { key: 1, text: "Choice 1", value: 1 },
    //   { key: 2, text: "Choice 2", value: 2 },
    //   { key: 3, text: "Choice 3", value: 3 }
    // ];
    // console.log("OPTIONS:", options);
    return (
      <Dropdown
        clearable
        options={doctorArray}
        selection
        value={currentDoctorValue}
        onChange={this.handleDoctorChange}
      />
    );
  };

  renderTabs() {
    const panes = [
      {
        menuItem: "Add Patient",
        render: () => (
          <Tab.Pane attached={false}>
            <h1>Patient Information</h1>
            <Form onSubmit={this.addPatient}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Patient ID</label>
                  <Input
                    value={this.state.patientId}
                    onChange={this.onPatientIdHandle}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Patient Name</label>
                  <Input
                    value={this.state.patientName}
                    onChange={this.onPatientHandle}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Patient Gender</label>
                  <Input
                    value={this.state.patientGender}
                    onChange={this.onGenderHandle}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Patient Age</label>
                  <Input
                    value={this.state.patientAge}
                    onChange={this.onAgeHandle}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Field>
                <label>Account</label>
                <Input
                  value={this.state.patientAccount}
                  onChange={this.onPatientAccountHandle}
                />
              </Form.Field>
              <Button primary> Add Patient </Button>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Add Doctor",
        render: () => (
          <Tab.Pane attached={false}>
            <h1>Doctor Information</h1>

            <Form onSubmit={this.addDoctor}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Doctor ID</label>
                  <Input
                    value={this.state.doctorId}
                    onChange={this.onDoctorIdHandle}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Doctor Name</label>
                  <Input
                    value={this.state.doctorName}
                    onChange={this.onDoctorHandle}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Doctor Gender</label>
                  <Input
                    value={this.state.doctorGender}
                    onChange={this.onGenderDoctorHandle}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Doctor Qualification</label>
                  <Input
                    value={this.state.doctorQualification}
                    onChange={this.onQualificationHandle}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Account</label>
                <Input
                  value={this.state.doctorAccount}
                  onChange={this.onDoctorAccountHandle}
                />
              </Form.Field>
              <Button primary> Add Doctor </Button>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Create Appointment",
        render: () => (
          <Tab.Pane attached={false}>
            <h1>Create Appointment</h1>
            <Form onSubmit={this.onAppointmentSubmit}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Appointment Id</label>
                  <Input
                    value={this.state.appointmentId}
                    onChange={this.onAppointmentId}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Appointment Date </label>
                  <Input
                    action={{
                      color: "teal",
                      icon: "calendar",
                      onClick: () => this.setState({ dateTimeOpen: true })
                    }}
                    actionPosition="left"
                    value={moment(this.state.myDate).format("LLL")}
                    onClick={event =>
                      this.setState({
                        dateTimeOpen: true,
                        myDate: event.target.value
                      })
                    }
                    disabled={this.state.dateTimeOpen}
                    fluid
                  />
                  {this.state.dateTimeOpen && (
                    <DatetimePicker
                      onChange={value => {
                        this.setState({ myDate: value, dateTimeOpen: false });
                        this.setState({
                          date: moment(this.state.myDate).format("LLL")
                        });
                      }}
                      moment={this.myDate}
                      time={true}
                    />
                  )}
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Patient ID</label>
                  {this.renderDropDownPatient()}
                </Form.Field>

                <Form.Field>
                  <label>Doctor ID</label>
                  {this.renderDropDownDoctor()}
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <Form.TextArea
                  label="Chep Complaint"
                  rows={2}
                  placeholder="write patient disease..."
                  onChange={this.onTextArea}
                />
              </Form.Field>

              <Button primary> Add Doctor </Button>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Search Appointment",
        render: () => (
          <Tab.Pane attached={false}>
            <h1>Search Appointment</h1>
            <Form onSubmit={this.onSearchAppointment}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Appointment Id</label>
                  <Input
                    value={this.state.appointmentIdSearch}
                    onChange={this.onAppointmentIdSearch}
                  />
                </Form.Field>

                <Button primary> Search Appointment </Button>
              </Form.Group>
            </Form>
            {this.onSearch()}
          </Tab.Pane>
        )
      }
    ];
    return <Tab menu={{ attached: false }} panes={panes} />;
  }

  renderHospital() {
    const { address, hospitalName, adminName, manager } = this.props;
    return (
      <div>
        <div>Hospital Name: {hospitalName}</div>
        <div>Admin Name: {adminName}</div>
        <div>Account: {manager}</div>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div>
          <Button
            floated="right"
            primary
            content="Show admin View"
            onClick={this.onUnlockView}
          />
          <div style={{ marginLeft: 300 }}>
            <h1>Hospital Details</h1>
          </div>
          <div
            style={{
              backgroundColor: "#4267b2",
              color: "white",
              marginTop: 10,
              borderRadius: 4,
              padding: 10,
              paddingLeft: 50,
              margin: 10,
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 20
            }}
          >
            {this.renderHospital()}
          </div>
        </div>
        <hr />
        <ToggleDisplay show={this.state.show}>
          {" "}
          <h1 style={{ marginLeft: 300 }}>Admin Panel</h1>
          {this.renderTabs()}
          <hr />
        </ToggleDisplay>
        <ToggleDisplay show={!this.state.show}>
          {" "}
          <div>
            <h1 style={{ color: "red" }}>{this.state.notAdmin}</h1>
          </div>
        </ToggleDisplay>
      </Layout>
    );
  }
}

export default hospitalDetails;
