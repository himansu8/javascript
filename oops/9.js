let ladder = {
    step : 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showstep() {
        console.log(this.step);
    }
}
ladder.up().up().up().down().showstep();