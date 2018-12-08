pragma solidity ^0.4.24;

contract PatientFactory{
       mapping (address=>address) public accountToAddress;
       mapping (uint => address)  public patientIdToAddress;
       mapping(uint=>bool) public checkPatientId;

       uint[] public patientId;
       address public manager;
       constructor(){
         manager= msg.sender;
       }
    function addPatient(uint _PatientId , string _patientName , string _gender , uint _age , address _account) public {
        require(!checkPatientId[_PatientId]);
        address newPatient = new Patient(_PatientId , _patientName , _gender , _age , _account);
        accountToAddress[_account] = newPatient;
        patientIdToAddress[_PatientId] = newPatient;
        patientId.push(_PatientId);
        checkPatientId[_PatientId]=true;


    }

    function getPatientList() public view returns(uint){
      return patientId.length;
  }
    // function getAddress(string _patientId) public view returns(address){
    //     return(patientIdToAddress[_patientId]);
    // }

}


contract Patient{

    string public patientName;
    uint public patientId;
    string public gender;
    uint public age;
    address public manager;
    constructor( uint _PatientId  , string _patientName, string _gender, uint _age , address _account) public{
        patientName = _patientName;
        gender = _gender;
        age = _age;
        manager = _account;
        patientId = _PatientId;

    }

    function getManager() public view returns(address){
        return (manager);
    }


      function getPatientName() public view returns(string){
          return(patientName);
      }
      function getSummary(uint _PatientId) public view returns(uint , string , string , uint , address){
        return(patientId , patientName , gender , age , manager);
      }
    function viewAppointments() public pure{


    }

}
