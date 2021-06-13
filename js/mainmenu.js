export class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');    
    }


    init(){
        this.controls2 = this.input.keyboard.addKeys({ 
            'down': Phaser.Input.Keyboard.KeyCodes.E});
    }


    create(){
        this.add.image(-119, 0, 'mainmenu').setOrigin(0).setScale(0.6);

        this.add.image(235, 40, 'ghostoffice').setOrigin(0).setScale(1);
        this.add.image(460, 310, 'pressE').setOrigin(0).setScale(0.6);

    }

    update(time){
        if (this.controls2.down.isDown)
        {
            this.scene.start('story1');
        }
    }
}



