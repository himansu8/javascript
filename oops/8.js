let ladder = {
    step : 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showstep() {
        console.log(this.step);
    }
}
ladder.showstep();
ladder.up();
ladder.showstep();
ladder.up();
ladder.up();
ladder.up();
ladder.showstep();
ladder.down();
ladder.showstep();


