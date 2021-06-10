  
import { Player } from "./player.js";
import {Balls} from "./balls.js";

export class Level001 extends Phaser.Scene {
    constructor() {
        super('Level001');
    }

    init() {
        this.controls = this.input.keyboard.createCursorKeys();
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0).setScale(1);

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height,
            'player', 1
        ).setScale(0.5); 

        this.balls = new Balls(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'balls',
        );


    }

    update(time) {
        this.player.update(time);

        this.balls.update(time);
    }
}