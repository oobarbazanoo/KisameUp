var Preload = function(game){};

Preload.prototype = {

	preload: function()
    {
        this.game.load.atlasJSONHash('kisameSprite', 'assets/sprites/kisameSpriteSheet/kisameSpriteSheet.png', 'assets/sprites/kisameSpriteSheet/kisameSpriteSheet.json');
        this.game.load.atlasJSONHash('kabutoSprite', 'assets/sprites/kabutoSpriteSheet/kabutoSpriteSheet.png', 'assets/sprites/kabutoSpriteSheet/kabutoSpriteSheet.json');
        this.game.load.atlasJSONHash('narutoSprite', 'assets/sprites/narutoSpriteSheet/narutoSpriteSheet.png', 'assets/sprites/narutoSpriteSheet/narutoSpriteSheet.json');
        this.game.load.image('back', 'assets/images/back.jpg');
        this.game.load.image('tile', 'assets/tile.png');

        for(var i = 0; i <= 101; i++)
        {this.game.load.image(i + "", "assets/images/" + i + " .jpg");}

    },

	create: function(){
		this.game.state.start("Main");
	}
};