var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},

	receivedEvent: function(id) {
		console.log("Ready");
		alert('Ready');
	}
};