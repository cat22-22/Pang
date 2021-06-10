export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        this.load.image('background', './images/bg3.png');
        this.load.image('balls', './ball/zero.png');
       
        this.load.spritesheet('player','player/ghost1.png',  {
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
            frames: this.anims.generateFrameNames('sheet', {
                frames: [1, 2, 3, 4]
            }),
            frameRate: 4,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key:'shoot',
            frames: this.anims.generateFrameNames('sheet', {
                frames: [5, 6]
            }),
            frameRate: 4,
            yoyo: true,
            repeat: -1
        });
    }
}

