import * as fs from 'fs'


class Claim {
  id: number;
  fromLeft: number;
  fromTop: number;
  width: number;
  height: number;

  constructor(dataStr) {
    this.init(dataStr);
  }

  init(dataStr) {
    const dataSplit: string[] = dataStr.split(" ");
    this.id = parseInt(dataSplit[0].slice(1));
    this.fromLeft = parseInt(dataSplit[2].split(",")[0]);
    this.fromTop = parseInt(dataSplit[2].split(",")[1].slice(0, -1));
    this.width = parseInt(dataSplit[3].split("x")[0]);
    this.height = parseInt(dataSplit[3].split("x")[1]);
  }


}


function processInput(err: any, contents: string) {
  const dataArr: string[] = contents.split("\n");

  const claimArr: Claim[] = dataArr.map(str => new Claim(str));

  claimArr.forEach(claim => {
    
  })


  console.log(claimArr);
}

fs.readFile('../day3.input', 'utf8', processInput);