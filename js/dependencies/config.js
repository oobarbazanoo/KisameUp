requirejs.config(
{
    baseUrl: "js",

    paths:
    {
        phaser: "dependencies/phaser",
        basil: "dependencies/basil",

        boot: "gameLogic/boot",
        preload: "gameLogic/preload",
        mainMenu: "gameLogic/mainMenu",
        gameItself: "gameLogic/gameItself",
        achievements: "gameLogic/achievements",
        settings: "gameLogic/settings",
        gameOver: "gameLogic/gameOver",

        videocontrol: "miscellaneousJS/videoControl"
    }
});
