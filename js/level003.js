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
        this.add.image(0, 0, 'background3').setOrigin(0).setScale(0.6);
        this.add.image(15, 10, 'life').setOrigin(0).setScale(0.3);
        this.add.image(80, 10, 'life').setOrigin(0).setScale(0.3);
        this.add.image(145, 10, 'life').setOrigin(0).setScale(0.3);
        this.add.image(210, 10, 'life').setOrigin(0).setScale(0.3);

        this.add.image(630, 10, 'life').setOrigin(0).setScale(0.3);
        this.add.image(695, 10, 'life').setOrigin(0).setScale(0.3);
        this.add.image(760, 10, 'life').setOrigin(0).setScale(0.3);
        this.add.image(825, 10, 'life').setOrigin(0).setScale(0.3);

        this.add.image(250, -120, 'level3').setOrigin(0).setScale(1);

        
        

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