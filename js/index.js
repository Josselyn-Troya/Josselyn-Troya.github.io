
var jugadores = [0,1];
var numTurnos = jugadores.length;
turno=0;
var roja = 0;
var amarilla = 0;
alert("QUEDATE EN CASA EL JUEGO")

$('#jugador_1').attr("disabled", true);
$('#jugador_2').attr("disabled", true);
$( '#turno' ).on( 'click', function(){
    turno = Math.round( Math.random() * (numTurnos - 1) );
    console.log(turno);
    
    if(turno == 0){
		rojo = true;
        amarilla = false;
        console.log("roja");
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').removeAttr("disabled", true);
    }
    if(turno == 1){
		amarilla = true;
		roja = false;
        console.log("amarillo");
        $('#jugador_2').removeAttr("disabled", true);
    }
    $('#turno').attr("disabled", true);

    if(roja === true){
		roja = false;
        amarilla = true; 
        $('#jugador_2').attr("disabled", true);
        
        
	}
	else if(amarilla === true){
		amarilla = false;
        roja = true;
        $('#jugador_1').attr("disabled", true);
        
    }
} ); 

$("#jugador_1").on("click", function(){
    $('#jugador_2').removeAttr("disabled", true);
    $('#jugador_1').attr("disabled", true);
});

$("#jugador_2").on("click", function(){
    $('#jugador_1').removeAttr("disabled", true);
    $('#jugador_2').attr("disabled", true);
}); 


 var r;
let currentPosition = 0;
$( '#jugador_1' ).on( 'click', function() {
  r = Math.floor( Math.random() * (7 - 1) ) + 1;
  $( '#dice-number' ).html( r );
  console.log( 'diceNumber', r );

  currentPosition += r ;
  $( '.tablero .celda' )
    .eq( currentPosition )
    .append( $( '.roja' ) );
     
    if(currentPosition == 5){
        alert('**********Casilla 5**********\nAvanza hasta la casilla 9');
        currentPosition = 9 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
    if(currentPosition == 14){
        alert('**********Casilla 14**********\nAvanza hasta la casilla 18');
        currentPosition = 18 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
    if(currentPosition == 23){
        alert('**********Casilla 23**********\nAvanza hasta la casilla 27');
        currentPosition = 27 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
    if(currentPosition == 32){
        alert('**********Casilla 32**********\nAvanza hasta la casilla 36');
        currentPosition = 36 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
    if(currentPosition == 41){
        alert('**********Casilla 41**********\nAvanza hasta la casilla 45');
        currentPosition = 45 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
    if(currentPosition == 3){
        alert('**********Casilla 3**********\nLos vecinos te espian y te vieron salir sin mascarilla\n regresa al principio');
        currentPosition = 0 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
   /*  if(currentPosition == 4){
        alert('**********Casilla 4**********\n Recreate con los mas pequeños de la casa, intenta jugar con ellos hasta tu siguiente turno');
    } */
    if(currentPosition == 10){
        alert('**********Casilla 10**********\nEs momento de ser solidarios e intentar ponernos en lugar de los demas.Cambia tu posicion con el otro jugador');
    }
    if(currentPosition == 13){
        alert('**********Casilla 13**********\nEnseña el meme mas gracioso que tengas');
    }
    if(currentPosition == 15){
        alert('**********Casilla 15**********\nRecuerda usar mascarilla antes de salir de casa');
    }
    if(currentPosition == 16){
        alert('**********Casilla 16**********\nLas fiestas son un gran foco de contagio. No te arriesgues\n Pero puedes hacer tu propia fiesta personal en casa. Baila la macarena mientras el otro jugador la canta');
    }
    if(currentPosition == 19){
        alert('**********Casilla 19**********\nLa cuarentena te dejo muy gordo. Has 20 sentadillas');
    }
    if(currentPosition == 21){
        alert('**********Casilla 21**********\nCanta tu cancion favorita');
    }
    if(currentPosition == 25){
        alert('**********Casilla 25**********\nLavate las manos con agua y jabon por al menos 20 segundos');
    }
    if(currentPosition == 28){
        alert('**********Casilla 28**********\nEl virus anda suelto, ¡escapate ante de que te alcance!. Regresa al inicio y vuelve a empezar');
        currentPosition = 0 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
    if(currentPosition == 29){
        alert('**********Casilla 29**********\nLos pantalones ya no te quedan. Realiza 20 abdominales');
    }
    if(currentPosition == 33){
        alert('**********Casilla 33**********\nDa cinco vueltas y parate de un pie mientras de tocas la nariz ');
    }
    if(currentPosition == 34){
        alert('**********Casilla 34**********\nIntenta hacer un avion de papel en menos de un minuto');
    }
    if(currentPosition == 39){
        alert('**********Casilla 39**********\nRecuerda quedarte en casa y para eso recorre toda tu casa dando saltos');
    }
    if(currentPosition == 44){
        alert('**********Casilla 44**********\nBañate después de haber salido para no contagiar a tu familia.Regresa a la casilla 40');
        currentPosition = 40 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
    }
    if(currentPosition == 48){
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        console.log("48");
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPosition == 49){
        currentPosition = 48 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPosition == 50){
        currentPosition = 48 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPosition == 51){
        currentPosition = 48 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPosition == 52){
        currentPosition = 48 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPosition == 53){
        currentPosition = 48 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.roja' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }


} );


let a;
let currentPositio = 0;
$( '#jugador_2' ).on( 'click', function() {
  a = Math.floor( Math.random() * (7 -1) ) + 1;
  $( '#dice-number' ).html( a );
  console.log( 'diceNumber', a );

  currentPositio += a ;
  $( '.tablero .celda' )
    .eq( currentPositio )
    .append( $( '.amarilla' ) );


    if(currentPositio == 5){
        alert('**********Casilla 5**********\nAvanza hasta la casilla 9');
        currentPositio = 9 ;
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
    }
    if(currentPositio == 14){
        alert('**********Casilla 14**********\nAvanza hasta la casilla 18');
        currentPosition = 18 ;
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
    }
    if(currentPosition == 23){
        alert('**********Casilla 23**********\nAvanza hasta la casilla 27');
        currentPositio = 27 ;
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
    }
    if(currentPositio == 32){
        alert('**********Casilla 32**********\nAvanza hasta la casilla 36');
        currentPositio = 36 ;
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
    }
    if(currentPositio == 41){
        alert('**********Casilla 41**********\nAvanza hasta la casilla 45');
        currentPosition = 45 ;
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
    }
    if(currentPositio == 10){
        alert('**********Casilla 10**********\nEs momento de ser solidarios e intentar ponernos en lugar de los demas.Cambia tu posicion con el otro jugador');
    }
    if(currentPositio == 13){
        alert('**********Casilla 13**********\nEnseña el meme mas gracioso que tengas');
    }
    if(currentPositio == 15){
        alert('**********Casilla 15**********\nRecuerda usar mascarilla antes de salir de casa');
    }
    if(currentPositio == 16){
        alert('**********Casilla 16**********\nLas fiestas son un gran foco de contagio. No te arriesgues\n Pero puedes hacer tu propia fiesta personal en casa. Baila la macarena mientras el otro jugador la canta');
    }
    if(currentPositio == 19){
        alert('**********Casilla 19**********\nLa cuarentena te dejo muy gordo. Has 20 sentadillas');
    }
    if(currentPositio == 21){
        alert('**********Casilla 21**********\nCanta tu cancion favorita');
    }
    if(currentPositio == 25){
        alert('**********Casilla 25**********\nLavate las manos con agua y jabon por al menos 20 segundos');
    }
    if(currentPositio == 28){
        alert('**********Casilla 28**********\nEl virus anda suelto, ¡escapate ante de que te alcance!. Regresa al inicio y vuelve a empezar');
        currentPositio = 0 ;
        $( '.tablero .celda' )
        .eq( currentPosition )
        .append( $( '.amarilla' ) );
    }
    if(currentPositio == 29){
        alert('**********Casilla 29**********\nLos pantalones ya no te quedan. Realiza 20 abdominales');
    }
    if(currentPositio == 33){
        alert('**********Casilla 33**********\nDa cinco vueltas y parate de un pie mientras de tocas la nariz ');
    }
    if(currentPositio == 34){
        alert('**********Casilla 34**********\nIntenta hacer un avion de papel en menos de un minuto');
    }
    if(currentPositio == 39){
        alert('**********Casilla 39**********\nRecuerda quedarte en casa y para eso recorre toda tu casa dando saltos');
    }
    if(currentPositio == 44){
        alert('**********Casilla 44**********\nBañate después de haber salido para no contagiar a tu familia.Regresa a la casilla 40');
        currentPositio = 40 ;
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
    }
    if(currentPositio == 48){
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        console.log("48");
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPositio == 49){
        currentPositio -=1 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPositio == 50){
        currentPositio -= 2 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPositio == 51){
        currentPositio -= 3 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPositio == 52){
        currentPositio -= 4 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
    if(currentPositio == 53){
        currentPositio -= 5 ;
        alert('**********Casilla 48**********\n¡¡Has ganado!! Se ha acabado el confinamiento, ¡¡¡ERES LIBRE!!!');
        $( '.tablero .celda' )
        .eq( currentPositio )
        .append( $( '.amarilla' ) );
        $('#jugador_2').attr("disabled", true);
        $('#jugador_1').attr("disabled", true);
    }
} ); 



