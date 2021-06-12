import { Level001 } from "./level001.js";
import { Level002 } from "./level002.js";
import { Level003 } from "./level003.js";
import { LoadScene } from "./loadscene.js";

const config = {
    width: 900,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#ffff',
    scene: [LoadScene, Level001, Level002, Level003],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 800
            },
            debug: true
        }
    },
    //pixelArt: true
}

new Phaser.Game(config);