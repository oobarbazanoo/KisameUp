var GameOver = function(game){};

var gameOverBackground;

GameOver.prototype =
{
    preload: function()
    {
        gameOverBackground = this.game.add.tileSprite(0, 0, me.game.width, me.game.height, "gameEndFirstBack");

        var music = game.add.audio("gameEndMusic");
        music.play();
        music.onStop.add(this.goSmoothlyToMenu);

        setTimeout(this.showSecondEndBackground, 7406);
    },

    goSmoothlyToMenu: function()
    {
        setTimeout(function(){this.game.state.start("MainMenu");}, 1000)
    },

    showSecondEndBackground: function()
    {
        gameOverBackground.loadTexture("gameEndSecondBack");
    }
};