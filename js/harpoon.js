// export class harpoon extends Phaser.Physics.Arcade.Sprite{
//     constructor(scene, x, y, texture, frame) {
//         super(scene, x, y, texture, frame);

//         scene.add.existing(this);
//         scene.physics.add.existing(this);

//         this.setCollideWorldBounds(true);

//         this.controls = scene.input.keyboard.createCursorKeys();

//         this.countharpoon = 0;
//     }

//     update(time){
//         if(this.controls.space.isDown){
//             Fireharpoon();
//         }
//         this.setVelocityX(1000);
//     }

//     fireharpoon(){
//         console.log(+ this.countharpoon);
//          this.setVelocityX(-this.velocity);
//         if(this.countharpoon >= 2)
//         { 
//             return;
//         } else {
//         this.countharpoon = this.countharpoon + 1;

//         var harpoon = this.add.image(this.player.x, 1000, 'harpoon').setOrigin(0).setScale(10);
//         harpoon.scaleY=0;
//         this.physics.add.overlap(harpoon,this.groupBall,this.hitharpoon,null,this);
//         }
//     }
// }