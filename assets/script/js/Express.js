
	const vPORT = process.env.PORT || 3333 ;

	const oExp  = require( "express" ) ;

	const oApp  = oExp() ;

	module.exports = { 
		vPORT , 
		 oExp , 
		 oApp 
	};
