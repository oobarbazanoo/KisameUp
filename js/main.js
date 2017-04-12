requirejs(["config"], function()
{
    requirejs(["phaser", "quicksort", "basil"], function()
    {
        requirejs(["boot", "preload", "gametitle", "main", "gameover", "achievements", "videocontrol"], afterEverythingWasLoaded);
    });
});

function afterEverythingWasLoaded()
{
    game = initialiseGame();
    setStatesFor(game);
    startThe(game);
}

function initialiseGame()
{
    var gameWindow = document.getElementById("gameWindow");
    return new Phaser.Game(1000, 500, Phaser.AUTO, gameWindow);
}

function setStatesFor(game)
{
    game.state.add("Boot", Boot);
    game.state.add("Preload", Preload);
    game.state.add("GameTitle", GameTitle);
    game.state.add("Achievements", Achievements);
    game.state.add("Main", Main);
    game.state.add("GameOver", GameOver);
}

function startThe(game)
{
    game.state.start("Boot");
}