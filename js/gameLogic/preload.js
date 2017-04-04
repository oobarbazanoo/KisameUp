var Preload = function(game){};

Preload.prototype = {

	preload: function()
    {
        this.game.load.atlasJSONHash('kisameSprite', 'assets/sprites/kisameSpriteSheet/kisameSpriteSheet.png', 'assets/sprites/kisameSpriteSheet/kisameSpriteSheet.json');
        this.game.load.atlasJSONHash('kabutoSprite', 'assets/sprites/kabutoSpriteSheet/kabutoSpriteSheet.png', 'assets/sprites/kabutoSpriteSheet/kabutoSpriteSheet.json');
        this.game.load.atlasJSONHash('narutoSprite', 'assets/sprites/narutoSpriteSheet/narutoSpriteSheet.png', 'assets/sprites/narutoSpriteSheet/narutoSpriteSheet.json');
        this.game.load.image('tile0', 'assets/tiles/0.png');
        this.game.load.image('tile1', 'assets/tiles/1.png');
        this.game.load.image('tile2', 'assets/tiles/2.png');
        this.game.load.image('tile3', 'assets/tiles/3.png');
        this.game.load.image('tile4', 'assets/tiles/4.png');
        this.game.load.image('tile5', 'assets/tiles/5.png');

        for(var i = 0; i <= 117; i++)
        {this.game.load.image(i + "", "assets/images/game/" + i + ".jpg");}


        this.game.load.audio('kisameAttack', 'assets/audio/kisame/kisameAttack.wav');
        this.game.load.audio('kisameAttackMagic', 'assets/audio/kisame/kisameAttackMagic.mp3');
        this.game.load.audio('kisameJump', 'assets/audio/kisame/kisameJump.wav');
        this.game.load.audio('kisameRun', 'assets/audio/kisame/kisameRun.wav');

        this.game.load.audio('narutoRun', 'assets/audio/naruto/narutoRun.wav');

        this.game.load.audio('kabutoRun', 'assets/audio/kabuto/kabutoRun.wav');

    },

	create: function(){
		this.game.state.start("Main");
	}
};