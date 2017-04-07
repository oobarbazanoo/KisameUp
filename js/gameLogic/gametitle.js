var GameTitle = function(game){};

GameTitle.prototype = {

	create: function()
    {
        this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "gameMenuBack");
        // new Button(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame)
        var newGameButton = this.game.add.button(game.world.centerX - 95, 50, 'buttonNewGameSprite', this.startGame, this, 2, 1, 0);
        var achievementsButton = this.game.add.button(game.world.centerX - 115, 100, 'buttonAchievementsSprite', this.showAchievements, this, 0, 1, 2);
	},

	startGame: function(){
		this.game.state.start("Main");
	},

    showAchievements: function()
    {
        this.game.state.start("Achievements");
    }

};