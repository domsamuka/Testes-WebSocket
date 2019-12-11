
	const vPath = '/assets/script/js/Diretorios.js' ;
	const oDir  = require( process.cwd() + vPath  ) ;

	const oExpress = require( oDir.js + 'Express.js' ) ;

	// console.log( oExpress.oApp );

	oExpress.oApp.get( '/' , function( req , res )
	{
		// res.sendFile( vDirHtml + 'game.html' );
	});

	oExpress.oApp.get( '/admin' , function( req , res )
	{
		// res.sendFile( vDirHtml + 'game-admin.html' );
	});

	oExpress.oApp.listen( oExpress.vPORT , function() 
	{
		console.log( '' );
		console.log( '  =====================================================' );
		console.log( '  =                                                   =' );
		console.log( '  =     # App iniciado com sucesso na porta: '+ oExpress.vPORT +'     =' );
		console.log( '  =                                                   =' );
		console.log( '  =====================================================' );
		console.log( '' );
	});
