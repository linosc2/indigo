function drawCanvas(unit)
{	
	var ctx = this.getContext("2d");
	var gradient=ctx.createLinearGradient(0, 115, 0, 235);
		gradient.addColorStop("1.0","#03FF03");
		gradient.addColorStop("0.4","red");

	var gradient1=ctx.createLinearGradient(0, 145, 0, 285);
		gradient1.addColorStop("1.0","#03FF03");
		gradient1.addColorStop("0.4","red");

	var gradient2=ctx.createLinearGradient(0, 165, 0, 335);
		gradient2.addColorStop("1.0","#03FF03");
		gradient2.addColorStop("0.4","red");

		ctx.font = "20px Arial";
		ctx.fillStyle = "white";
		ctx.fillText("Hello World!",440,80);
		ctx.fill();
		
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.fillRect(40,40,80,80);
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle="rgba(4,205,4,0.7)";
		ctx.lineWidth = 10;
		ctx.strokeRect(160,40,80,80);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "blue";
		ctx.rect(320,40,80,80);
			ctx.shadowBlur=15;
			ctx.shadowColor="yellow";
			ctx.shadowOffsetX=10;
			ctx.shadowOffsetY=10;
		ctx.fill();
		
		ctx.beginPath();
		ctx.fillStyle = gradient;
		ctx.shadowColor="transparent";
    	ctx.moveTo(80,240);
    	ctx.lineTo(120,160);
    	ctx.lineTo(40,160);
    	ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = gradient1;
    	ctx.moveTo(160,280);
    	ctx.lineTo(200,200);
    	ctx.lineTo(120,200);
    	ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = gradient2;
    	ctx.moveTo(240,320);
    	ctx.lineTo(280,240);
    	ctx.lineTo(200,240);
    	ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "yellow";
    	ctx.arc(80,400,40,Math.PI/4,-Math.PI/4,false);
    	ctx.lineTo(80,400);
    	ctx.fill();

		ctx.beginPath();
		ctx.arc(160,400,20,0,(Math.PI/180)*360,true);
		ctx.fillStyle="white";
		ctx.fill();
		
	    ctx.beginPath();
		ctx.fillStyle="pink";
	    ctx.moveTo(333,430);
	    ctx.lineTo(320,440);
		ctx.lineTo(320,400);
	    ctx.bezierCurveTo(320,380,335,360,360,360);
	    ctx.bezierCurveTo(390,360,400,375,400,400);
	 	ctx.lineTo(400,440);
		ctx.lineTo(386,430);
		ctx.lineTo(373,440);
		ctx.lineTo(360,430);
		ctx.lineTo(347,440);
		ctx.fill();
		
	    ctx.fillStyle = "white";
	    ctx.beginPath();
	    ctx.moveTo(333,400);
	    ctx.bezierCurveTo(333,395,335,388,341,385);
		ctx.bezierCurveTo(348,382,352,395,350,400);
		ctx.bezierCurveTo(350,404,344,409,341,410);
		ctx.bezierCurveTo(338,410,335,409,333,402);
	    ctx.moveTo(360,400);
	    ctx.bezierCurveTo(360,395,362,388,368,385);
		ctx.bezierCurveTo(375,382,379,395,377,400);
		ctx.bezierCurveTo(377,404,371,409,368,410);
		ctx.bezierCurveTo(365,410,362,409,360,402);
		ctx.fill();
		
	    ctx.fillStyle = "black";
	    ctx.beginPath();
	    ctx.arc(337,401,6,0,Math.PI*2,true);
	    ctx.fill();
	
	    ctx.beginPath();
	    ctx.arc(365,401,6,0,Math.PI*2,true);
	    ctx.fill();



}
