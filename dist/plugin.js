W.loadPlugin(

  	/* Mounting options */
  	{
  "name": "windy-plugin-hello-world",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/windycom/windy-plugin-hello-world.git"
  },
  "author": "Windyty, S.E.",
  "description": "The most simple, Windy plugin example.",
  "displayName": "Hello world",
  "hook": "menu"
},

  	/* HTML */
	'',

	/* CSS */
	'',

	/* Constructor */
	function() {

	const map = W.require('map');


	console.log('I am being mounted')

	let popup = null

	this.onopen = () => {

		const center = map.getCenter()

		if( popup ) {

			popup.setLatLng(center)

		} else {

			popup = L.popup()
            		.setLatLng(center)
            		.setContent("Hello World")
            		.openOn( map );
		}
	}

	this.onclose = () => {
		if( popup ) {
			map.removeLayer( popup )
			popup = null
		}
	}


});