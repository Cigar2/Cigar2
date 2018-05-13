function Sound(src, volume, maximum) {
    this.src = src;
    this.volume = typeof volume == "number" ? volume : 0.5;
    this.maximum = typeof maximum == "number" ? maximum : Infinity;
    this.elms = [];
}
Sound.prototype.play = function(vol) {
    if (typeof vol == "number") this.volume = vol;
    let toPlay;
    for (var i = 0; i < this.elms.length; i++) {
        var elm = this.elms[i];
        if (elm.paused) {
            toPlay = elm;
            break;
        }
    }
    if (!toPlay) toPlay = this.add();
    toPlay.volume = this.volume;
    toPlay.play();
};
Sound.prototype.add = function() {
    if (this.elms.length >= this.maximum) {
        return this.elms[0];
    }
    var elm = new Audio(this.src);
    this.elms.push(elm);
    return elm;
};
