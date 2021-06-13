export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        this.load.image('harpoon', './images/harpoon.png');
        this.load.image('cutscene1', './images/cutscene1.png');
        this.load.image('cutscene2', './images/cutscene2.png');
        this.load.image('cutscene3', './images/cutscene3.png');
        this.load.image('cutscene4', './images/cutscene4.png');
        this.load.image('skip', './images/skipcutscene.png');
        this.load.image('victorymenu', './images/victorymenu.png');
        this.load.image('goback', './images/goback.png');
        this.load.image('victory', './images/victory.png');
        this.load.image('ghostoffice', './images/ghostoffice.png');
        this.load.image('pressE', './images/pressE.png');
        this.load.image('background2', './images/bg3.png');
        this.load.image('background3', './images/bg5.png');
        this.load.image('background', './images/bg4.png');
        this.load.image('level1', '/images/level1.png');
        this.load.image('level2', '/images/level2.png');
        this.load.image('level3', '/images/level3.png');
        this.load.image('life', '/images/life.png');
        this.load.image('changelevel', '/images/changelevelE.png');
        this.load.image('changelevelto1', '/images/changelevelto1.png');
        this.load.image('mainmenu', '/images/mainmenu.png');


        this.load.image('balls', './ball/zero.png');

        this.load.spritesheet('player2', 'player/ghost3.png', {
            frameWidth: 400,
            frameHeigh: 400
        })
       
        this.load.spritesheet('player', 'player/ghost2.png',  {
            frameWidth: 400,
            frameHeight: 400
        })
        
    }

    create() {
        this.createAnimations();


        this.scene.start('MainMenu');

    }

    createAnimations() {
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('ghost2', {
                
            }),
            frameRate: 1,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key:'shoot',
            frames: this.anims.generateFrameNames('ghostshoot', {
                
            }),
            frameRate: 1,
            yoyo: true,
            repeat: -1
        });
    }
}

