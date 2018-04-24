class Sound {
    constructor(src, volume = 0.5, maximum = Infinity) {
        this.src = src;
        this.volume = volume;
        this.maximum = maximum;
        this.elms = [];
    }
    play(vol = this.volume) {
        this.volume = vol;
        let toPlay;
        for (const elm of this.elms) {
            if (elm.paused) {
                toPlay = elm;
                break;
            }
        }
        if (!toPlay) toPlay = this.add();
        toPlay.volume = this.volume;
        toPlay.play();
    }
    add() {
        if (this.elms.length >= this.maximum) {
            return this.elms[0];
        }
        const elm = new Audio(this.src);
        this.elms.push(elm);
        return elm;
    }
}
