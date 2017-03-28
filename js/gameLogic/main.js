var Main = function(game){

};

var velocityOfTileMoving = 10,
    speedOfTileGenerating = 15000,
    speedOfPlayerMovingRightLeft = 150,
    facing = 'left',
    sizeOfPlayer = 0.5,
    me,
    spaceBar,
    jumpTimer = 0,
    background;

Main.prototype = {

	create: function()
    {
		me = this;

        spaceBar = me.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//The spacing for the initial platforms
		me.spacing = 200;

		//Set the initial score
		me.score = 0;

		//Get the dimensions of the tile we are using
		me.tileWidth = me.game.cache.getImage('tile').width;
		me.tileHeight = me.game.cache.getImage('tile').height;

		//Set the background colour to blue
		me.game.stage.backgroundColor = '479cde';

        background = me.game.add.tileSprite(0, 0, me.game.width, me.game.height, 'back');


		//Enable the Arcade physics system
		me.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Add a platforms group to hold all of our tiles, and create a bunch of them
        // me.platforms = me.game.add.physicsGroup();
		me.platforms = me.game.add.group();
		me.platforms.enableBody = true;
		me.platforms.createMultiple(100, 'tile');


		//Create the inital on screen platforms
		me.initPlatforms();

		//Add the player to the screen
		me.createPlayer();

		//Create the score label
		me.createScore();

		//Add a platform every speedOfTileGenerating seconds
		me.timer = game.time.events.loop(speedOfTileGenerating, me.addPlatform, me);

        game.time.events.loop(Phaser.Timer.SECOND * 10, me.changePicture, me);

	    //Enable cursor keys so we can create some controls
	    me.cursors = me.game.input.keyboard.createCursorKeys();  
	},

    changePicture: function()
    {
        var numberOfThePicture = getRandomInt(0, 101);
        background.loadTexture(numberOfThePicture + "");
    },


	update: function()
    {
       background.tilePosition.y += 2;


		//Make the sprite collide with the ground layer
		me.game.physics.arcade.collide(me.player, me.platforms);

        //region delteMaybe
        //Make the sprite jump when the up key is pushed
        // if(me.cursors.up.isDown && me.player.body.wasTouching.down) {
	     // 	me.player.body.velocity.y = -1400;
        // }
        // //Make the player go left
        // if(me.cursors.left.isDown){
	    	// me.player.body.velocity.x = -150;
        // }
        // //Make the player go right
        // if(me.cursors.right.isDown){
	    	// me.player.body.velocity.x = 150;
        // }
        //endregion

        //Check if the player is touching the bottom
        if(me.player.body.position.y >= me.game.world.height - me.player.body.height){
	    	me.gameOver();
        }

        me.game.input.keyboard.onDownCallback = somethingWasPressed;

        me.player.body.velocity.x = 0;

        if(me.cursors.left.isDown)
        {
            animateRunLeft();
        }
        else if(me.cursors.right.isDown)
        {
           // animateRunRight();

            me.player.body.velocity.x = speedOfPlayerMovingRightLeft;

           // background1 = me.game.add.tileSprite(0, 0, me.game.width, me.game.height, 'back');

            // if(facing != 'right')
            // {
            //     me.player.scale.setTo(sizeOfPlayer, sizeOfPlayer);
            //
            //     me.player.animations.play('right');
            //     facing = 'right';
            // }
        }
        else
        {
            if(facing != 'idle')
            {
                me.player.animations.play('idle');

                if(facing == 'left')
                {
                    me.player.frame = 5;
                }
                else
                {
                    me.player.frame = 5;
                }

                facing = 'idle';
            }
        }

        if(jumpHasToOccur())
        {
            me.player.body.velocity.y = -250;

            me.player.animations.play('jump');

            me.game.time.events.add(Phaser.Timer.SECOND * 1.450, function(){me.player.animations.play('idle');}, this);

            jumpTimer = me.game.time.now + 750;
        }
	},

	gameOver: function(){
		this.game.state.start('Main');
	},

	addTile: function(x, y)
    {
		//Get a tile that is not currently on screen
	    var tile = me.platforms.getFirstDead();

	    //Reset it to the specified coordinates
	    tile.reset(x, y);
	    tile.body.velocity.y = velocityOfTileMoving;
	    tile.body.immovable = true;

	    //When the tile leaves the screen, kill it
	    tile.checkWorldBounds = true;
	    tile.outOfBoundsKill = true;	
	},

	addPlatform: function(y)
    {
		//If no y position is supplied, render it just outside of the screen
		if(typeof(y) == "undefined"){
			y = -me.tileHeight;
			//Increase the players score
			me.incrementScore();
		}

		//Work out how many tiles we need to fit across the whole screen
		var tilesNeeded = Math.ceil(me.game.world.width / me.tileWidth);

		//Add a hole randomly somewhere
	    var hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;

	    //Keep creating tiles next to each other until we have an entire row
	    //Don't add tiles where the random hole is
	    for (var i = 0; i < tilesNeeded; i++){
	        if (i != hole && i != hole + 1){
	        	this.addTile(i * me.tileWidth, y); 
	        } 	    	
	    }

	},

	initPlatforms: function()
    {

			var bottom = me.game.world.height - me.tileHeight,
			top = me.tileHeight;

		//Keep creating platforms until they reach (near) the top of the screen
		for(var y = bottom; y > top - me.tileHeight; y = y - me.spacing){
			me.addPlatform(y);
		}

	},

	createPlayer: function()
    {
		//Add the player to the game by creating a new sprite
		me.player = me.game.add.sprite(me.game.world.centerX, me.game.world.height - (me.spacing * 2 + (3 * me.tileHeight)), 'kisameSprite', 'stance/0.png');

		me.player.scale.setTo(sizeOfPlayer);

		//Set the players anchor point to be in the middle horizontally
		me.player.anchor.setTo(0.5, 1);
		//Enable physics on the player
		me.game.physics.arcade.enable(me.player);
		//Make the player fall by applying gravity
		me.player.body.gravity.y = 2000;
		//Make the player collide with the game boundaries 
		me.player.body.collideWorldBounds = true;
		//Make the player bounce a little
		me.player.body.bounce.y = 0.1;


        me.player.animations.add('attackMagic', Phaser.Animation.generateFrameNames('attackMagic/', 0, 24, '.png', 1), 7, false, true);
        me.player.animations.add('attack', Phaser.Animation.generateFrameNames('attack/', 0, 5, '.png', 1), 10, false, true);
        me.player.animations.add('left', Phaser.Animation.generateFrameNames('run/', 0, 4, '.png', 1), 10, true, true);
        me.player.animations.add('idle', Phaser.Animation.generateFrameNames('stance/', 0, 3, '.png', 1), 10, true, true);
        me.player.animations.add('right', Phaser.Animation.generateFrameNames('run/', 0, 4, '.png', 1), 10, true, true);
        me.player.animations.add('jump', Phaser.Animation.generateFrameNames('jump/', 0, 3, '.png', 1), 10, false, true);

	},

	createScore: function(){


		var scoreFont = "100px Arial";

		me.scoreLabel = me.game.add.text((me.game.world.centerX), 100, "0", {font: scoreFont, fill: "#fff"}); 
		me.scoreLabel.anchor.setTo(0.5, 0.5);
		me.scoreLabel.align = 'center';

	},

	incrementScore: function(){

		me.score += 1;
		me.scoreLabel.text = me.score; 		

	},
};

function animateRunRight()
{
    me.player.body.velocity.x = speedOfPlayerMovingRightLeft;

    if(facing != 'right')
    {
        me.player.scale.setTo(sizeOfPlayer, sizeOfPlayer);

        me.player.animations.play('right');
        facing = 'right';
    }
}

function animateRunLeft()
{
    me.player.body.velocity.x = -speedOfPlayerMovingRightLeft;

    if(facing != 'left')
    {
        me.player.scale.setTo(-sizeOfPlayer, sizeOfPlayer);

        me.player.animations.play('left');
        facing = 'left';
    }
}

function jumpHasToOccur()
{
    var jumButtonClicked = me.cursors.up.isDown || spaceBar.isDown;
    var alreadyOnFloor = me.player.body.onFloor() && me.game.time.now > jumpTimer;
    return jumButtonClicked && alreadyOnFloor;
}

function somethingWasPressed(keyCode)
{
    if(keyEqualTo(keyCode, "a"))
    {animateAttack();}

    if(keyEqualTo(keyCode, "m"))
    {animateAttackMagic();}
}

function keyEqualTo(keyCode, key)
{
    var equalKey = (keyCode.key == key);
    return equalKey;
}

function beIdle()
{
    me.player.animations.play('idle');

    if(facing == 'left')
    {
        me.player.frame = 5;
    }
    else
    {
        me.player.frame = 5;
    }

    facing = 'idle';
}

function animateAttack()
{
    me.player.animations.play('attack', 10, false, false);
    me.player.animations.currentAnim.onComplete.add(beIdle,this);
}

function animateAttackMagic()
{
    me.player.animations.play('attackMagic', 3, false, false);
    me.player.animations.currentAnim.onComplete.add(beIdle,this);
}

function getRandomInt(min, max)
{return Math.floor(Math.random() * (max - min + 1)) + min;}






