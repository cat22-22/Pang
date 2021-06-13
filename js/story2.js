export class Story2 extends Phaser.Scene {
    constructor() {
        super('story2');    
    }


    init(){
        this.controls2 = this.input.keyboard.addKeys({ 
            'down': Phaser.Input.Keyboard.KeyCodes.E});
    }


    create(){
        this.add.image(-50, 30, 'cutscene2').setOrigin(0).setScale(0.5);
        this.add.image(-60, 458, 'skip').setOrigin(0).setScale(0.7);
    }

    update(time){
        if (this.controls2.down.isDown)
        {
            this.scene.start('story3');
        }
    }
}