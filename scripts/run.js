const main = async() =>{
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const WaveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const WaveContract = await WaveContractFactory.deploy();
    await WaveContract.deployed();

    console.log("The Contract is deployed to", WaveContract.address);
    console.log("The contract has been deployed by", owner.address);

    let waveCount;
  waveCount = await WaveContract.getTotalWaveCounts();

  let waveTxn = await WaveContract.WaveCount();
  await waveTxn.wait();

  waveCount = await WaveContract.getTotalWaveCounts();

  waveTxn = await WaveContract.connect(randomPerson).WaveCount();
  await waveTxn.wait();

  waveCount = await WaveContract.getTotalWaveCounts();

  let wavedPerson;
  wavedPerson = await WaveContract.getAddressofWavedPerson();
}



const RunMain = async() => {
    try{
        await main();
        process.exit(0); // exit the process after successfully run the main function
    }
    catch(error){
        console.log(" Error: ",error);
        process.exit(1);
    }
}

RunMain()