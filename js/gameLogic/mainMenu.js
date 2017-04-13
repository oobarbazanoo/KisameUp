var MainMenu = function(game){};



MainMenu.prototype =
{
	create: function()
    {
        this.buttonClickSound = this.game.add.audio('buttonClickSound');
        this.buttonHoverSound = this.game.add.audio('hoverButtonSound');
        this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "gameMenuBack");
        var newGameButton = this.game.add.button(this.game.world.centerX - 95, 50, 'buttonNewGameSprite', this.newGameButtonWasClicked, this, 2, 1, 0);
        var achievementsButton = this.game.add.button(this.game.world.centerX - 115, 100, 'buttonAchievementsSprite', this.achievementsButtonWasClicked, this, 0, 1, 2);
        var settingsButton = this.game.add.button(this.game.world.centerX - 78, 150, 'buttonSettingsSprite', this.settingsButtonWasClicked, this, 1, 2, 0);

        newGameButton.onInputOver.add(this.buttonHovered, this);
        achievementsButton.onInputOver.add(this.buttonHovered, this);
        settingsButton.onInputOver.add(this.buttonHovered, this);
    },

    buttonHovered: function()
    {
        playSound(this.buttonHoverSound)
    },


	startGame: function(){
		this.game.state.start("GameItself");
	},

    showAchievements: function()
    {
        this.game.state.start("Achievements");
    },

    showSettings: function()
    {
        this.game.state.start("Settings");
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
    },

    settingsButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.showSettings();
    }

};

function playSound(sound)
{
    sound.play();
}