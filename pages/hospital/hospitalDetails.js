import React, { Component } from "react";
import ReactDOM from "react-dom";
import ToggleDisplay from "react-toggle-display";
import ReceptionsitFactory from "../../build/contracts/ReceptionsitFactory.json";
import Receptionist from "../../build/contracts/Receptionsit.json";
import { Card, Button, Tab, Form, Input, Dropdown } from "semantic-ui-react";
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
    notAdmin: ""
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

    if (this.props.manager === accounts[0]) {
      this.setState({ show: !this.state.show });
      // this.setState({ patientId: ["aman", "khan"] });
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
  _onSelect = event => {
    event.preventDefault();
    this.props.optionsArray[0];
    console.log();
  };
  //render methods to render jsx Components
  renderDropDownPatient = patienId => {
    const options = [
      { key: 1, text: "Choice 1", value: 1 },
      { key: 2, text: "Choice 2", value: 2 },
      { key: 3, text: "Choice 3", value: 3 }
    ];
    return <Dropdown clearable options={options} selection />;
  };
  renderDropDownDoctor = doctorId => {
    const options = [
      { text: "Selection" },
      { text: "Choice 2" },
      { text: "Choice 3" }
    ];
    return <Dropdown clearable options={options} selection />;
  };
  renderTabs() {
    const panes = [
      {
        menuItem: "Add Patinet",
        render: () => (
          <Tab.Pane attached={false}>
            <h1>Patient Information</h1>
            <Form onSubmit={this.addPatinet}>
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
            <Form>
              <Form.Field>
                <label>Patinet ID</label>
                {this.renderDropDownPatient()}
              </Form.Field>

              <Form.Field>
                <label>Doctor Name</label>
                <Input
                  value={this.state.doctorName}
                  onChange={this.onDoctorHandle}
                />
              </Form.Field>
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
              <Button primary> Add Doctor </Button>
            </Form>
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
        <h3>{hospitalName}</h3>
        <h3>{adminName}</h3>
        <h3>{manager}</h3>
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
          <h1>Hospital Details</h1>
          {this.renderHospital()}
        </div>
        <hr />
        <ToggleDisplay show={this.state.show}>
          {" "}
          <h1 style={{ align: "center" }}>Admin Panel</h1>
          {this.renderTabs()}
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
