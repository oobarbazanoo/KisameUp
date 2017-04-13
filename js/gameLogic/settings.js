var Settings = function(game){};

Settings.prototype =
{
    create: function()
    {
        this.buttonClickSound = this.game.add.audio('buttonClickSound');
        this.buttonHoverSound = this.game.add.audio('hoverButtonSound');
        this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "gameMenuBack");

        var backButton = this.game.add.button(game.world.width - 110, game.world.height - 50, 'buttonBackSprite', this.backButtonWasClicked, this, 0, 2, 1);

        if(this.game.sound.mute)
        {
            var onSoundButton = this.game.add.button(this.game.world.centerX + 25, 5, 'buttonOnSoundSprite', this.onSoundButtonWasClicked, this, 2, 1, 0);
            onSoundButton.onInputOver.add(this.buttonHovered, this);
        }
        else
        {
            var offSoundButton = this.game.add.button(this.game.world.centerX + 25, 5, 'buttonOffSoundSprite', this.offSoundButtonWasClicked, this, 1, 2, 0);
            offSoundButton.onInputOver.add(this.buttonHovered, this);
        }

        backButton.onInputOver.add(this.buttonHovered, this);



        var font = "35px Bellota";
        var soundText = this.game.add.text((this.game.world.centerX - 100), 25, "Turn the sound", {font: font, fill: "#1e477d"});
        configureText(soundText);
    },


    buttonHovered: function()
    {
        playSound(this.buttonHoverSound)
    },

    goToMenu: function()
    {
        this.game.state.start("MainMenu");
    },

    backButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.goToMenu();
    },

    onSoundButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.turnTheSoundDown(false);
        this.showSettings();
    },

    offSoundButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.turnTheSoundDown(true);
        this.showSettings();
    },

    turnTheSoundDown: function(turnDown)
    {
        basil.set("turnTheSoundDown", turnDown);
        this.game.sound.mute = turnDown;
    },

    showSettings: function()
    {
        this.game.state.start("Settings");
    }
};

function configureText(text)
{
    text.anchor.setTo(0.5, 0.5);
    text.align = 'center';
    text.stroke = "#6abfde";
    text.strokeThickness = 16;
    text.setShadow(2, 2, "#DE5048", 2, true, true);
}