// ========== FICHIER SEPARANT LA LOGIQUE AU TEST EN DEHORS DU DOM ===========

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {  // 加算
        return new Vec(this.x + v.x, this.y + v.y);
    }

    mul(x, y) {  // 掛算
        var y = y || x;
        return new Vec(this.x * x, this.y * y);
    }

    dot(v) {  // 内積
        return this.x * v.x + this.y * v.y;
    }

    cross(v) {  // 外積
        return this.x * v.y - v.x * this.y;
    }

    move(dx, dy) {  // 自分を移動
        this.x += dx;
        this.y += dy;
    }


}

function getTimeStr(dt) {
    let timeMs = `${Math.floor((dt % 1000) / 10)}0`.slice(0, 2);
    let timeS = `0${Math.floor(dt / 1000) % 60}`.slice(-2);
    let timeM = Math.floor(dt / 1000 / 60);
    return `${timeM}:${timeS}.${timeMs}`;
}

module.exports = {
    Vec,
    GameStatus,
    Player,
    Enemy,
    Enemies,
    GameMap,
    Position,
    updatePlayerDirection,
    now,
    GAME_MAP,
    KEY_STATUS,
};
