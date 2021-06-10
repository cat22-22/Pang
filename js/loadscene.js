export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        this.load.image('background', './images/bg3.png');
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


        this.scene.start('Level001');

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

