var Boot = function(game)
{};

var basil = new Basil();

Boot.prototype =
{
  	create: function()
    {
        this.game.sound.mute = this.getSoundConfiguration();
		this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		this.game.state.start("Preload");
	},

    getSoundConfiguration: function()
    {
        var soundConf = basil.get("turnTheSoundDown");

        if(!soundConf)
        {soundConf = false;}

        return soundConf;
    }
};