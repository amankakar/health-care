pragma solidity ^0.4.24;


contract DoctorFactory{
        mapping (address=>address) public accountToAddress;
        mapping (uint => address)  public doctorIdToAddress;
        mapping(uint=>bool) public checkDoctorId;
        uint[] public doctorId;
        address public manager;
        constructor(){
            manager = msg.sender;
        }
    function addDoctor(uint _doctorId , string _doctorName , string _gender , string _qualification , address _account) public {
           require(!checkDoctorId[_doctorId]);
        address newDoctor = new Doctor(_doctorId , _doctorName , _gender , _qualification , _account);
        accountToAddress[_account] = newDoctor;
        doctorIdToAddress[_doctorId] = newDoctor;
        doctorId.push(_doctorId);
        checkDoctorId[_doctorId]=true;

    }
    function getAddress(uint _doctorId) public returns(address){
        return(doctorIdToAddress[_doctorId]);
    }

    function getDoctorList() public view returns(uint){
        return(doctorId.length);
    }

}


contract Doctor{

    string public doctorName;
    uint public doctorId;
    string public gender;
    string public qualification;
    address public manager;
    constructor( uint _doctorId  , string _doctorName, string _gender, string _qualification, address _account){
        doctorName = _doctorName;
        gender = _gender;
        qualification = _qualification;
        manager = _account;
        doctorId = _doctorId;

    }

    function getManager() public view returns(address){
        return (manager);
    }


      function getPatientName() public view returns(string){
          return(doctorName);
      }
    function viewAppointments(){


    }

}
