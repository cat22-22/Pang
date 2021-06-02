export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        this.load.image('background', './images/bg.png');
    }

    create() {
        this.scene.start('Level001');

    }

    createAnimations() {

    }
}

