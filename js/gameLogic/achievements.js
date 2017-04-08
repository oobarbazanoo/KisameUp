var Achievements = function(game){};

Achievements.prototype =
{
    create: function()
    {
        this.buttonClickSound = this.game.add.audio('buttonClickSound');
        this.buttonHoverSound = this.game.add.audio('hoverButtonSound');
        this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "gameMenuBack");

        var backButton = this.game.add.button(game.world.width - 110, game.world.height - 50, 'buttonBackSprite', this.backButtonWasClicked, this, 0, 2, 1);

        var resetAchievementsButton = this.game.add.button(game.world.width - 280, 10, 'buttonResettingAchievementsSprite', this.resetAchievementsButtonWasClicked, this, 2, 1, 0);


        backButton.onInputOver.add(this.buttonHovered, this);
        resetAchievementsButton.onInputOver.add(this.buttonHovered, this);


        var arrWithAchievements = (new Basil()).get("kisameUpAchievements");
        if(!arrWithAchievements)
        {arrWithAchievements = [];}

        var font = "35px Bellota";

        var length = arrWithAchievements.length;
        for(var i = 0; i < length; i++)
        {

            this.achievementsLabel = this.game.add.text((this.game.world.centerX), 25 + 50*i, (i+1) + ". " + arrWithAchievements[length-1-i], {font: font, fill: "#1e477d"});
            configureText(this.achievementsLabel);
        }

        var bestText = this.game.add.text((this.game.world.centerX - 100), 25, "BEST", {font: font, fill: "#1e477d"}),
        worstText = this.game.add.text((this.game.world.centerX - 115),475, "WORST", {font: font, fill: "#1e477d"});

        configureText(bestText);
        configureText(worstText);
    },


    buttonHovered: function()
    {
        playSound(this.buttonHoverSound)
    },

    goToMenu: function()
    {
        this.game.state.start("GameTitle");
    },

    backButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.goToMenu();
    },

    resetAchievementsButtonWasClicked: function()
    {
        playSound(this.buttonClickSound);
        this.deleteAchievements();
    },

    deleteAchievements: function()
    {
        var basil = new Basil();
        basil.set("kisameUpAchievements", null);
        this.game.state.start("Achievements");
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