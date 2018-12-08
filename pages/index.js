import React, { Component } from "react";
import ReceptionsitFactory from "../build/contracts/ReceptionsitFactory.json";
import Receptionist from "../build/contracts/Receptionsit.json";
import { Form, Button, Input, Message, Card } from "semantic-ui-react";
import { Link } from "../routes";
//import getWeb3 from "../ethereum/getWeb3";
import web3 from "../ethereum/web3";
import truffleContract from "truffle-contract";
import Layout from "../components/Layout";
import instanceFactoryFile from "../ethereum/receptionFactory";
class index extends Component {
  state = {
    web3: null,
    accounts: null,
    hospitalName: "",
    receptionistName: "",
    instanceFactory1: "",
    receptionistInstance: "",
    recetionistAddress: "",
    instanceFactory: "",
    receptionist: "",
    receptionList: []
  };

  static async getInitialProps() {
    //const web3 = await getWeb3();
    console.log("web3", web3.version);
    const accounts = await web3.eth.getAccounts();

    //this.setState({ web3, accounts });
    const Contract = truffleContract(ReceptionsitFactory);
    Contract.setProvider(web3.currentProvider);

    const instanceFactory = await Contract.deployed();
    console.log("Address:", instanceFactory);
    const receptionCount = await instanceFactory.getReceptionList.call();
    console.log("List of :", receptionCount);
    const receptionist = await Promise.all(
      Array(parseInt(receptionCount))
        .fill()
        .map((element, index) => {
          return instanceFactory.receptionSummary.call(index);
        })
    );
    console.log("Receptionist Array", receptionist[0]);

    return { receptionist };
  }

  // componentDidMount = async () => {
  //   //  const web3 = await getWeb3();
  //   console.log("web3", web3.version);
  //   const accounts = await web3.eth.getAccounts();
  //   //  this.setState({ web3, accounts });
  //   const Contract = truffleContract(ReceptionsitFactory);
  //   Contract.setProvider(web3.currentProvider);
  //   console.log("FromFile:", instanceFactoryFile);
  //   const instanceFactory = await Contract.deployed();
  //   console.log("address", instanceFactory.address);
  //   const receptionCount = await instanceFactory.getReceptionList.call();
  //   console.log("lenght:", receptionCount.length);
  //   const deployed = await instanceFactory.getDeployedReception.call();
  //   console.log("factory total:", deployed.length);
  //   const receptionList = await Promise.all(
  //     Array(parseInt(receptionCount.length))
  //       .fill()
  //       .map((element, index) => {
  //         console.log("index:", index);
  //         return instanceFactory.receptionSummary.call(index);
  //       })
  //   );
  //   this.setState({ receptionList: receptionList });
  //   console.log("Length", this.state.receptionList.length);
  // };
  // // try {
  //     const web3 = await getWeb3();
  //     const accounts = await web3.eth.getAccounts();
  //     this.setState({ web3, accounts });
  //     const Contract = truffleContract(ReceptionsitFactory);
  //     Contract.setProvider(web3.currentProvider);
  //
  //     const instanceFactory = await Contract.deployed();
  //
  //     // const instanceFactory1 = instanceFactory.address;
  //     // console.log("factory:", instanceFactory);
  //     // this.setState({ instanceFactory });
  //     // console.log("instance:", instanceFactory1);
  //     // this.setState({ instanceFactory1 });
  //     // const manager = await instanceFactory.manager.call();
  //
  //     //  var manager = await instanceFactory.manager.call();
  //
  //     //  const receptionistInstance = await ContractReceptionist.at(address);
  //
  //     // const rec = await instanceFactory.createReceptionist("MAYO", "AMAN", {
  //     //   from: accounts[0]
  //     // });
  //
  //     const recetionistAddress = await instanceFactory.accountToAddress.call(
  //       accounts[0]
  //     );
  //
  //     const ContractReceptionist = truffleContract(Receptionist);
  //     ContractReceptionist.setProvider(web3.currentProvider);
  //     const instanceReceptionist = await ContractReceptionist.at(
  //       recetionistAddress
  //     );
  //     const summary = await instanceReceptionist.getSummary.call();
  //     this.setState({
  //       hospitalName: summary[0],
  //       receptionistName: summary[1]
  //     });
  //
  //     console.log("Manager:", manager);
  //     console.log("Factory address:", instanceFactory.address);
  //     console.log("ReceptionistAddress:", recetionistAddress);
  //     console.log("Summary:", summary);
  //     console.log(web3.version);
  //     console.log(accounts[0]);
  //     this.setState({
  //       instanceReceptionist,
  //       recetionistAddress
  //     });
  //   } catch (error) {
  //     console.log(error);

  renderCampiagns() {
    console.log("BRFORE:", this.props.receptionist);
    const items = this.props.receptionist.map((element, index) => {
      const address = element[3];
      return {
        header: "Hospital Name:  " + element[0],
        description: "Admin Name:  " + element[1],
        meta: "Account of Admin:  " + element[2],

        extra: (
          <Link route={`hospital/${address}`}>
            <a color="blue">Visit Hospital</a>
          </Link>
        ),
        fluid: true
      };
    });
    console.log("Lenght", this.props.receptionist);

    return (
      <Card.Group
        items={items}
        style={{
          color: "black",
          marginTop: 10,
          borderRadius: 4,
          margin: 10,
          fontFamily: "Times New Roman, Times, serif",
          fontSize: 20
        }}
      />
    );
  }

  onSubmit = async event => {
    event.preventDefault();

    const { web3, instanceFactory1, instanceFactory } = this.state;
    const accounts = await web3.eth.getAccounts();
    console.log(web3, accounts, instanceFactory1, instanceFactory);

    const rec = await instanceFactory.createReceptionist(
      this.state.hospitalName,
      this.state.receptionistName,
      {
        from: accounts[0]
      }
    );

    // console.log("Accounts", this.state.accounts);
    // console.log("instance:", this.state.instanceFactory1);
    //console.log("Factory:", this.state.instanceFactory);
    //console.log("web3", this.state.web3);
    //const web3 = this.state.web3;

    //  const manager = await instanceFactory.manager.call();
    //  var manager = await instanceFactory.manager.call();

    //const receptionistInstance = await ContractReceptionist.at(address);

    // const rec = await instanceFactory.createReceptionist(
    //   this.state.hospitalName,
    //   this.state.receptionistName,
    //   {
    //     from: this.state.accounts
    //   }
    // );

    // const recetionistAddress = await instanceFactory.accountToAddress.call(
    //   accounts[0]
    // );

    // const ContractReceptionist = truffleContract(Receptionist);
    // ContractReceptionist.setProvider(web3.currentProvider);
    // const instanceReceptionist = await ContractReceptionist.at(
    //   recetionistAddress
    // );
    // const Contract = truffleContract(ReceptionsitFactory);
    // Contract.setProvider(web3.currentProvider);
    // const instanceFactory = await Contract.at(this.state.instanceFactory1);
    // console.log("Address:", instanceFactory);
    // const manager = await instanceFactory.manager.call();
    // console.log("Manager", manager);
    // console.log("BEFORE");
    // const deployed = await instanceFactory.getDeployedCompaigns.call();
    // console.log("deployed", deployed);
    //
    // const newReceptionist = await Contract.at(this.state.instanceFactory1);
    // console.log("new Reception", newReceptionist);
    // await newReceptionist.createReceptionist(
    //   this.state.hospitalName,
    //   this.state.receptionistName,
    //   {
    //     from: this.state.accounts
    //   }
    // );
    // console.log("AFTER");
    //
    // const ContractReceptionist = truffleContract(Receptionist);
    // ContractReceptionist.setProvider(web3.currentProvider);
    // const instanceReceptionist = await ContractReceptionist.at(
    //   newReceptionist.address
    // );
    // const summary = await instanceReceptionist.getSummary.call();
    // this.setState({
    //   hospitalName: summary[0],
    //   receptionistName: summary[1]
    // });
    // console.log("Summary:", summary);

    // const ContractReceptionist = truffleContract(Receptionist);
    // ContractReceptionist.setProvider(web3.currentProvider);
    // // const instanceReceptionist = await ContractReceptionist.at(
    //   recetionistAddress
    // );
    //  try {
    //   const Contract = truffleContract(ReceptionsitFactory);
    //    Contract.setProvider(web3.currentProvider);
    //
    //    const instanceFactory = await Contract.deployed();
    // //   const manager = await instanceFactory.manager.call();
    //   //  var manager = await instanceFactory.manager.call();
    //   console.log(manager);
    //   const receptionistInstance = await ContractReceptionist.at(address);
    //   const rec = await instanceFactory.createReceptionist(
    //     this.state.hospitalName,
    //     this.state.receptionistName,
    //     {
    //       from: this.state.accounts[0]
    //     }
    //   );
    //   const recetionistAddress = await instanceFactory.accountToAddress.call(
    //     accounts[0]
    //   );
    //
    //   const ContractReceptionist = truffleContract(Receptionist);
    //   ContractReceptionist.setProvider(web3.currentProvider);
    //   const instanceReceptionist = await ContractReceptionist.at(
    //     recetionistAddress
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  onHospitalHandle = event => {
    this.setState({ hospitalName: event.target.value });
  };
  onReceptionistHandle = event => {
    this.setState({ receptionistName: event.target.value });
  };

  render() {
    // if (!this.state.recetionistAddress) {
    //   return (
    //     <Layout>
    //       <h1>
    //         Your are not Registered or you have selected wrong Account in
    //         metamask
    //       </h1>
    //       <Link route="/register">
    //         <a>follow this link to register</a>
    //       </Link>
    //
    //       <div>
    //         <h1>register new Recetionist</h1>
    //         <h3>Create new Receptionist</h3>
    //         <Form onSubmit={this.onSubmit}>
    //           <Form.Field>
    //             <label>Hospital Name</label>
    //             <Input
    //               value={this.state.hospitalName}
    //               onChange={this.onHospitalHandle}
    //             />
    //           </Form.Field>
    //           <Form.Field>
    //             <label>Admin Name</label>
    //             <Input
    //               value={this.state.receptionistName}
    //               onChange={this.onReceptionistHandle}
    //             />
    //           </Form.Field>
    //           <Button primary> Create </Button>
    //         </Form>
    //
    //         <h1>Accounts: {this.state.accounts}</h1>
    //       </div>
    //     </Layout>
    //   );
    // }
    return (
      <Layout>
        <div>
          <Link route="hospital/register">
            <a>
              <Button
                floated="right"
                primary
                content="Register New Hospital"
                icon="add circle"
                labelPosition="left"
              />
            </a>
          </Link>
          <div style={{ marginLeft: 300 }}>
            <h2>List Of All Registered Hospitals</h2>
          </div>{" "}
        </div>
        <hr />
        <div>{this.renderCampiagns()};</div>
      </Layout>
    );
  }
}
export default index;
