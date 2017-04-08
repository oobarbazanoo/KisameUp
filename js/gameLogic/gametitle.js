var GameTitle = function(game){};



GameTitle.prototype =
{
	create: function()
    {
        this.buttonClickSound = this.game.add.audio('buttonClickSound');
        this.buttonHoverSound = this.game.add.audio('hoverButtonSound');
        this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "gameMenuBack");
        // new Button(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame)
        var newGameButton = this.game.add.button(game.world.centerX - 95, 50, 'buttonNewGameSprite', this.newGameButtonWasClicked, this, 2, 1, 0);
        var achievementsButton = this.game.add.button(game.world.centerX - 115, 100, 'buttonAchievementsSprite', this.achievementsButtonWasClicked, this, 0, 1, 2);

        newGameButton.onInputOver.add(this.buttonHovered, this);
        achievementsButton.onInputOver.add(this.buttonHovered, this);
    },

    buttonHovered: function()
    {
        playSound(this.buttonHoverSound)
    },


	startGame: function(){
		this.game.state.start("Main");
	},

    showAchievements: function()
    {
        this.game.state.start("Achievements");
    },

    newGameButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.startGame();
    },

    achievementsButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.showAchievements();
    }

};

function playSound(sound)
{
    sound.play();
}