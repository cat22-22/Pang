import { MainMenu } from "./MainMenu.js";
import { Story1 } from "./story1.js";
import { Story2 } from "./story2.js";
import { Story3 } from "./story3.js";
import { Story4 } from "./story4.js";
import { Level001 } from "./level001.js";
import { Level002 } from "./level002.js";
import { Level003 } from "./level003.js";
import { Victory } from "./victory.js";
import { LoadScene } from "./loadscene.js";



const config = {
    width: 900,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#ffff',
    scene: [LoadScene, MainMenu, Level001, Level002, Level003, Victory, Story1, Story2, Story3, Story4],
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