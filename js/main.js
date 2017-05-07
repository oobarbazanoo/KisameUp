var filesToPreloadFirst = ["phaser", "basil"],
    filesToPreloadSecond = ["boot", "preload", "mainMenu", "gameItself", "achievements", "settings", "videocontrol", "gameOver"];

var numberOfBackgroundPictures = 281;

requirejs(["config"], function()
{
    requirejs(filesToPreloadFirst, function()
    {
        requirejs(filesToPreloadSecond, afterEverythingWasLoaded);
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
    game.state.add("MainMenu", MainMenu);
    game.state.add("Achievements", Achievements);
    game.state.add("Settings", Settings);
    game.state.add("GameItself", GameItself);
    game.state.add("GameOver", GameOver);
}

function startThe(game)
{
    game.state.start("Boot");
}