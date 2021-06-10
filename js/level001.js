  
import { Player } from "./player.js";
import { Player2 } from "./player2.js";
import {Balls} from "./balls.js";

export class Level001 extends Phaser.Scene {
    constructor() {
        super('Level001');
    }

    init() {
        this.controls = this.input.keyboard.createCursorKeys();
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0).setScale(0.6);

        this.player = new Player(
            this,
            this.game.config.width * 0.7,
            this.game.config.height,
            'player', 1
        ).setScale(0.2); 

        this.playerTwo = new Player2 (
            this,
            this.game.config.width * 0.3,
            this.game.config.height,
            'player2', 1
        ).setScale(0.2);

        this.balls = new Balls(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'balls',
        );


    }

    update(time) {
        this.player.update(time);

        this.playerTwo.update(time);

        this.balls.update(time);
    }
}