/**
 * @rsTeam02
 * sakai.jun01@gmail.com 
 * Control unit 
 * + define a 10x10 Matrix and assign click listeners for numeral output, every button returns 2 - digits as string 
 * + compare random generated with entered pin => return correct or wrong pin
 * 
 */

class Controller {

    constructor() {
        this.initRaster();
        this.btnListener();
        this.tileListener();
    }

    btnListener() {
        document.getElementById("del").addEventListener("click", () => {
            document.getElementById("pw").setAttribute("value", "");
            this.setSeq("");
        });

        document.getElementById("np").addEventListener("click", () => {
            this.newPin();
            this.view.pinInfo(this.getPin());
        });

        document.getElementById("enter").addEventListener("click", () => {
            (this.getPin() === this.seq)
                ?  this.view.pinInfo(this.getPin(), ", correct pin")
                :  this.view.pinInfo(this.getPin(), ", wrong pin");
        });
    }

    newPin() {
        this.pin = new RandomPin().generate();
    }

    getPin() {
        return this.pin;
    }

    initView(seq) {
        this.view = new View(seq, 10);
        this.newPin();
        this.view.pinInfo(this.getPin());
        this.view.svgMat(this.tileArr);
    }

    setSeq(seq) {
        this.seq = seq;
    }

    getSeq() {
        return this.seq;
    }

    //rxc tiles react on clicks, events
    tileListener() {
        this.seq = "";
        //handler/listener for each tile, integer output as string 
        for (let i = 0; i < this.tileArr.length; i++) {
            for (let j = 0; j < this.tileArr[i].length; j++) {
                (() => {
                    var handler = () => {
                        if (this.seq.length !== 4) {
                            this.seq += this.tileArr[i][j].val.toString();
                            document.getElementById("pw").setAttribute("value", this.seq)
                        }
                    };
                    this.tileArr[i][j].sId.addEventListener("click", handler, false)
                })();
            }
        }
    }

    //init int sequence to tiles
    initSeq(seq) {
        let idx = 0;
        for (let i = 0; i < this.tileArr.length; i++) {
            for (let j = 0; j < this.tileArr[i].length; j++) {
                this.tileArr[i][j].sId = document.getElementById("shape" + idx);
                idx++;
            }
        }
    }

    initRaster() {
        let seq = [];
        let expr = 0;
        this.tileMat = new TileMatrix();
        this.tileArr = this.tileMat.createTileMat(10, 10);
        this.initView(seq);
        this.initSeq(seq);
    }

}