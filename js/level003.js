  
  
import { Player } from "./player.js";
import { Player2 } from "./player2.js";
import {Balls} from "./balls.js";
class HarpoonGroup extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene);
        this.createMultiple({
            classType: Harpoon,
            frameQuantity: 100,
            active: false,
            visible: false,
            key: 'harpoon'
        })
    }

    fireharpoon (x, y) {
        const harpoon = this.getFirstDead(false);
        if (harpoon) {
            harpoon.fire(x, y);
            }
        }
    }

    class Harpoon extends Phaser.Physics.Arcade.Sprite {
        constructor(scene, x, y) {
            super(scene, x, y, 'harpoon');
        }
    
        fire(x, y) {
            this.body.reset(x, y);
            this.body.setAllowGravity(false)
            //MUDAR ISTO PARA A SETA
            this.setActive(true);
            this.setVisible(true);
            //this.setCollideWorldBounds(true);
    
            this.setVelocityY(-500);
            this.setScale(2);
            //this.setDepth(10);
        }
    
        preUpdate(time, delta) {
            super.preUpdate(time, delta);
     
            if (this.y <= 100) {
                this.setActive(false);
                this.setVisible(false);
                this.scene.harpoonLimit = 0;
            }
        }
    }

export class Level003 extends Phaser.Scene {
    constructor() {
        super('Level003');
        this.harpoonLimit = 0;
        this.harpoonGroup;
        
    }

    init() {
        this.controls = this.input.keyboard.createCursorKeys();
        this.lives = 3;
        this.lives2 = 3;

        this.controls2 = this.input.keyboard.addKeys({ 
            'down': Phaser.Input.Keyboard.KeyCodes.E});
    }

    create() {
        this.add.image(0, 0, 'background3').setOrigin(0).setScale(0.6);
        this.add.image(9, -10, 'changelevelto1').setOrigin(0).setScale(0.8);
        this.add.image(15, 10, 'life').setOrigin(0).setScale(0.3);
        this.add.image(825, 10, 'life').setOrigin(0).setScale(0.3);

        this.add.image(250, -120, 'level3').setOrigin(0).setScale(1);

        this.harpoonGroup = new HarpoonGroup(this);

        this.livesText = this.add.text(
            100, 15,
            `${this.lives}`,
            {
                fontFamily: 'Arial',
                fontSize: 50,
                color: '#ffff',
            }
        );

        this.lives2Text = this.add.text(
            775, 15,
            `${this.lives}`,
            {
                fontFamily: 'Arial',
                fontSize: 50,
                color: '#ffff',
            }
        );

          

        this.player = new Player(
            this,
            this.game.config.width * 0.7,
            this.game.config.height,
            'player', 1
        ).setScale(0.2); 

        this.playerTwo = new Player2 (
            this,
            this.game.config.width * 0.3,
            this.game.config.height,
            'player2', 1
        ).setScale(0.2);

        this.balls = new Balls(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'balls',
        );

        this.physics.add.collider(this.player, this.balls, this.PlayerHitBalls2, null, this);
        this.physics.add.collider(this.playerTwo, this.balls, this.PlayerHitBalls, null, this);

        this.physics.add.collider(this.harpoonGroup, this.balls, this.HarpoonHitBalls, null, this);


    }

    PlayerHitBalls(){
        if(this.lives == 1){
            this.scene.restart();
        }

        this.lives--;
        this.harpoonLimit = 0;
        return;
    }

    PlayerHitBalls2(){
        if(this.lives2 == 1){
            this.scene.restart();
        }

        this.lives2--;
        this.harpoonLimit = 0;
        return;
    }

    HarpoonHitBalls(_harpoonGroup, balls){
        console.log ('atingiu');
        this.harpoonLimit = 0;
        //harpoon.destroy();
        balls.destroy();
    }

    update(time) {
        this.player.update(time);

        this.playerTwo.update(time);

        this.balls.update(time);

        if (this.controls.up.isDown){
            this.shootharpoon();
        }

        this.livesText.text = `${this.lives}`;
        this.lives2Text.text = `${this.lives2}`;

        if (this.controls2.down.isDown)
        {
            this.scene.start('Level001');
        }
    }

    shootharpoon () {
        if (this.harpoonLimit >=1) 
        {return;}
        else {
            this.harpoonLimit ++;
            this.harpoonGroup.fireharpoon(this.player.x +1, this.player.y -10, );
        }
    } 
}