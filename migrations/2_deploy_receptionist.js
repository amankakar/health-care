var RecetionistFactory = artifacts.require("./ReceptionsitFactory.sol");
var ReceptionsitContract = artifacts.require("./Receptionsit.sol");
module.exports = async deployer => {
  await deployer.deploy(RecetionistFactory);
  var recetionistContract = await RecetionistFactory.deployed().then(
    console.log("Fatory:", ReceptionsitFactory.address)
  );
  var rec = await deployer.deploy(
    recetionistContract.createReceptionist(ReceptionsitContract, "MAYO", "AMAN")
  );
  await ReceptionsitContract.deployed().then(() => {
    console.log("Recetionist:", ReceptionsitContract.address);
  });
};
