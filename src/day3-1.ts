import * as fs from 'fs'


class Claim {
  id: number;
  fromLeft: number;
  fromTop: number;
  width: number;
  height: number;

  columnStart: number;
  columnEnd: number;
  rowStart: number;
  rowEnd: number;

  constructor(dataStr: string) {
    this.init(dataStr);
    this.getArea();
  }

  init(dataStr) {
    const dataSplit: string[] = dataStr.split(" ");
    this.id = parseInt(dataSplit[0].slice(1));
    this.fromLeft = parseInt(dataSplit[2].split(",")[0]);
    this.fromTop = parseInt(dataSplit[2].split(",")[1].slice(0, -1));
    this.width = parseInt(dataSplit[3].split("x")[0]);
    this.height = parseInt(dataSplit[3].split("x")[1]);
  }

  getArea() {
    this.columnStart = this.fromLeft + 1;
    this.columnEnd = this.columnStart + (this.width - 1);
    this.rowStart = this.fromTop + 1;
    this.rowEnd = this.rowStart + (this.height - 1);
  }

}


function processInput(err: any, contents: string) {
  const dataArr: string[] = contents.split("\n");

  const claimArr: Claim[] = dataArr.map(str => new Claim(str));

  let solution = 0;
  const canvas: number[][] = new Array(1500).fill(new Array(1500).fill(0));

  claimArr.forEach(claim => {
    for(let r = claim.rowStart; r !== claim.rowEnd; r++) {
      for (let c = claim.columnStart; c !== claim.columnEnd; c++) {
        if (canvas[r][c] !== null) solution++;
        canvas[r][c] = claim.id;
      }
    }
  });

  console.log(solution);
}

fs.readFile('../day3.input', 'utf8', processInput);