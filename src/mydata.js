const allData = { 
    resolverDataArray: [
    {
      name: "stateNameResolver",
      data: [
        {
          time: Date.now(),
          freq: 10,
          speed: 4000
        },
        {
          time: Date.now(),
          freq: 1,
          speed: 2000
        },
        {
          time: Date.now(),
          freq: 50,
          speed: 1000
        },
        {
          time: Date.now(),
          freq: 16,
          speed: 4000
        },
        {
          time: Date.now(),
          freq: 5,
          speed: 3000
        }
      ]
    },
    {
      name: "countyTotalDosageResolver",
      data: [
        {
          time: Date.now(),
          freq: 15,
          speed: 5000
        },
        {
          time: Date.now(),
          freq: 39,
          speed: 2300
        },
        {
          time: Date.now(),
          freq: 3,
          speed: 3400
        }
      ]
    },
    {
      name: "stateManufacturedResolver",
      data: [
        {
          time: Date.now(),
          freq: 5,
          speed: 5000
        },
        {
          time: Date.now(),
          freq: 10,
          speed: 2300
        },
        {
          time: Date.now(),
          freq: 1,
          speed: 3400
        },
        {
          time: Date.now(),
          freq: 50,
          speed: 3400
        }
      ]
    }
  ]
};

const chart1 = [];
const chart2 = [];
  //  const data = resolverDataArray.map((element) => element.name)
    
  // })

// Function to get times into an array from a resolver object.
const getTimes = resolverData => {
  // init an array to return.
  let returnArray;

  // Iterate through data.
  returnArray = resolverData.map(invocation => invocation.time);

  // Return the array.
  return returnArray;
}

// Function to get speeds into an array from a resolver object. 
// TODO: write function
const getSpeed = resolverData => {
  let resultArray;
  resultArray = resolverData.map(invocation => invocation.speed);
  return resultArray;
}

// Function to get frequencies into an array from resolver object. 
// TODO: write function 
const getFrequency = resolverData => {
  let outputArray;
  outputArray = resolverData.map(invocation => invocation.freq);
  return outputArray;
}

// Example code.
// TODO: write other examples.
 const newTimesArray = getTimes(allData.resolverDataArray[0].data);
 const newSpeedArray = getSpeed(allData.resolverDataArray[0].data);
 const secondSpeed = getSpeed(allData.resolverDataArray[1].data);
 const thirdSpeed = getSpeed(allData.resolverDataArray[2].data);
 const newFrequencyArray = getFrequency(allData.resolverDataArray[0].data);
 const secondFrequency = getFrequency(allData.resolverDataArray[1].data);
 const thirdFrequency = getFrequency(allData.resolverDataArray[2].data);


module.exports = {allData, newTimesArray, newSpeedArray, newFrequencyArray, secondSpeed, thirdSpeed, secondFrequency,thirdFrequency}