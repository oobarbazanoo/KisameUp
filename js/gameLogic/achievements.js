var Achievements = function(game){};

Achievements.prototype =
{
    create: function()
    {
        this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "gameMenuBack");
        // new Button(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame)
        var backButton = this.game.add.button(game.world.centerX - 95, 50, 'buttonBackSprite', this.goToMenu, this, 0, 2, 1);
    },

    goToMenu: function(){
        this.game.state.start("GameTitle");
    }

};