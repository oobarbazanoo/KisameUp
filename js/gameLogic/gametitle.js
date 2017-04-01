var GameTitle = function(game){};

GameTitle.prototype = {

	create: function()
    {
        this.game.stage.backgroundColor = '#337799';

        // Create a label to use as a button
        pause_label = this.game.add.text(100, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
        pause_label.inputEnabled = true;
	},

	startGame: function(){
		this.game.state.start("Main");
	}

};