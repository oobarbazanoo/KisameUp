var Boot = function(game){

};
  
Boot.prototype = {

	preload: function(){

	},
	
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		this.game.state.start("Preload");
	}
};