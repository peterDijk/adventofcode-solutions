let fs = require('fs');


const processInput = (err, contents) => {
  let freqsArr = contents.split("\n");
  // console.log(freqsArr);
  
  freqArrInts = freqsArr.map(f => parseInt(f));

  
  var freqCalc = new Array();
  console.log(freqCalc.length);
  
  let solution = freqArrInts.reduce((acc, val) => {
      if (isNaN(val)) { 
        val = 0
      }

      var newFreq = acc + val;
      if (freqCalc.includes(newFreq)) {
        console.log("***** already in there: " + newFreq);
      } else {
        freqCalc.push(newFreq);
      }

      
    
    return newFreq;
  });
  console.log(freqCalc);

  console.log(solution);
}

fs.readFile('./day1.input', 'utf8', processInput);