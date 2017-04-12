requirejs.config(
{
    baseUrl: "js",

    paths:
    {
        phaser: "dependencies/phaser",
        boot: "gameLogic/boot",
        preload: "gameLogic/preload",
        gametitle: "gameLogic/gametitle",
        main: "gameLogic/main",
        gameover: "gameLogic/gameover",
        achievements: "gameLogic/achievements",
        videocontrol: "sideJS/videoControl",
        quicksort: "dependencies/quicksort",
        storage: "dependencies/storage",
        basil: "dependencies/basil"
    }
});
