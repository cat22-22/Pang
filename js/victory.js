export class Victory extends Phaser.Scene {
    constructor() {
        super('victory');    
    }


    init(){
        this.controls2 = this.input.keyboard.addKeys({ 
            'down': Phaser.Input.Keyboard.KeyCodes.E});
    }


    create(){
        this.add.image(-119, 0, 'victorymenu').setOrigin(0).setScale(0.6);

        this.add.image(200, -100, 'victory').setOrigin(0).setScale(1.3);
        this.add.image(280, 290, 'goback').setOrigin(0).setScale(0.9);
    }

    update(time){
        if (this.controls2.down.isDown)
        {
            this.scene.start('MainMenu');
        }
    }
}