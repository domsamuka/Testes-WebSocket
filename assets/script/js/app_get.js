
	express.get( '/' , function( req , res )
	{
	 	res.send( "<h1>"+' -- Index -- '+"<h1>" );
	});

	express.listen( vPORT , function( req , res ) 
	{
		console.log( "\n"+' # Porta: '+ vPORT +"\n" );
	});
