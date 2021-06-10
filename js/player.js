export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setScale(0.9);

        //Para usar com os objetos comentados em baixo
        //this.initialFrame = frame;

        this.horizontal_velocity = 300;

        this.controls = scene.input.keyboard.createCursorKeys();
        
    }

    update(time) {
        if(this.controls.left.isDown) {
            this.setVelocityX(-this.horizontal_velocity);
            this.flipX = true;
            //if(!this.anims.isPlaying)
            //{
                //this.anims.play('run');
            //}
        } else if (this.controls.right.isDown) {
            this.setVelocityX(this.horizontal_velocity);
            this.flipX = false;
            //if(!this.anims.isPlaying)
            //{
                //this.anims.play('run');
            //}
        } else  {
            this.setVelocityX(1);
            //if(this.anims.isPlaying) {
                //this.anims.stop('run')
            //}
            //this.setFrame(this.initialFrame);
        } 
    }
}