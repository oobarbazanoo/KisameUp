var Achievements = function(game){};

Achievements.prototype =
{
    create: function()
    {
        this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "gameMenuBack");

        var backButton = this.game.add.button(game.world.width - 110, game.world.height - 50, 'buttonBackSprite', this.goToMenu, this, 0, 2, 1);

        var arrWithAchievements = (new Basil()).get("kisameUpAchievements");

        var length = arrWithAchievements.length;
        for(var i = 0; i < length; i++)
        {
            var font = "40px Arial";
            this.scoreLabel = this.game.add.text((this.game.world.centerX), 25 + 50*i, (i+1) + ". " + arrWithAchievements[length-1-i], {font: font, fill: "#1e477d"});
            this.scoreLabel.anchor.setTo(0.5, 0.5);
            this.scoreLabel.align = 'center';
        }

        console.log(arrWithAchievements);
    },

    goToMenu: function()
    {
        this.game.state.start("GameTitle");
    }

};