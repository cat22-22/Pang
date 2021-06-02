import { Level001 } from "./level001.js";
import { LoadScene } from "./loadscene.js";

const config = {
    width: 1740,
    height: 1040,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#ffff',
    scene: [LoadScene, Level001],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 800
            },
            debug: false
        }
    },
    pixelArt: true
}

new Phaser.Game(config);