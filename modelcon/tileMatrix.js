/**
 * @rsTeam02
 * define a set of tiles (row, column)
 * 
 */
class TileMatrix {

    constructor() {
        this.clearDisp();
    }

    //init matrix of tile instances, store properties
    createTileMat(row, column) {
        var tiles = [];
        var idx = 0;
        for (var i = 0; i < row; i++) {
            tiles[i] = [];
            for (var j = 0; j < column; j++) {
                tiles[i][j] = new Tile();
                tiles[i][j].x = i;
                tiles[i][j].y = j;
                tiles[i][j].sId = idx;
                if (i === 9 && j === 9) {
                    tiles[i][j].val = "00";
                } else {
                    tiles[i][j].val = ("0" + (idx + 1).toString()).slice(-2);
                }
                idx++;
            }
        }
        return tiles;
    }

    clearDisp() {
        while (tileDisplay.firstChild) {
            tileDisplay.removeChild(tileDisplay.firstChild);
        }

    }
}