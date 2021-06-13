export class Story1 extends Phaser.Scene {
    constructor() {
        super('story1');    
    }


    init(){
        this.controls2 = this.input.keyboard.addKeys({ 
            'down': Phaser.Input.Keyboard.KeyCodes.E});
    }


    create(){
        this.add.image(-140, -30, 'cutscene1').setOrigin(0).setScale(0.6);
        // this.add.image(290, 150, 'goback').setOrigin(0).setScale(0.8);
    }

    update(time){
        if (this.controls2.down.isDown)
        {
            this.scene.start('Level001');
        }
    }
}