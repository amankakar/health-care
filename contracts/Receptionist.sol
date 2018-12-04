pragma solidity ^0.4.24;


contract ReceptionsitFactory{
    struct ReceptionSummary{
        string hospitalName;
        string receptionistName;
        address manager;
        address contractAddress;

    }

    ReceptionSummary[] public receptionSummary;
        address[] public deployedReceptionist;
        mapping (address=>address) public accountToAddress;
        mapping(address => bool) public accountCheck;
        address public newReceptionist ;
        address public manager;

   function createReceptionist(string _hospitalName, string _name ) public{
       require(!(accountCheck[msg.sender]));
         newReceptionist = new Receptionsit(_hospitalName, _name, msg.sender);
        deployedReceptionist.push(newReceptionist);
        accountToAddress[msg.sender] = newReceptionist;
        accountCheck[msg.sender] = true;

        ReceptionSummary memory newRecetionSummary= ReceptionSummary({
            hospitalName: _hospitalName ,
            receptionistName : _name,
            manager: msg.sender,
            contractAddress : newReceptionist

        })  ;
        receptionSummary.push(newRecetionSummary);
    }
function getDeployedReception() public view returns(uint){
  return deployedReceptionist.length;
}
    function getReceptionList() public view returns(uint){
             return receptionSummary.length;
         }


}

contract Receptionsit{
    //Patient public patient1;
    //Doctor public doctor1;
    //address public patient;
    //address public doctor;
    //uint public date;
    address public manager;
    string public hospitalName;
    string public receptionistName;
    //address [] public patientList;
    //address [] public doctorList;
    //address [] public listOfPatientAccount;
    //address [] public listOfDoctorAccount;
    //string public  _PatientName;


    constructor (string _hospitalName, string _receptionistName , address _manager) public {
        hospitalName = _hospitalName;
        receptionistName = _receptionistName;
        manager = _manager;

    }

   function getSummary() public view returns(string , string , address){
     return(hospitalName  , receptionistName , manager);
   }

    modifier restricted{
        require(msg.sender == manager);
        _;
    }
  }
