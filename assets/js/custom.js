$(document).ready(function(){
$('#orb').click( function() {        
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        }
        else {
            $(this).removeClass('moon').addClass('sun');
        }

        if ($('#sky').hasClass('day')) {
 			$('#sky').removeClass('day').addClass('night');
		}
		else {
    		$('#sky').removeClass('night').addClass('day');
		}

		moonspotVisible('#moonspot1');
		moonspotVisible('#moonspot2');
		moonspotVisible('#moonspot3');

		$('body').toggleClass("night");

    });


function moonspotVisible(moonspot){
	if ($(moonspot).hasClass('visible')) {
 	   		$(moonspot).removeClass('visible');
		} else {
    		$(moonspot).addClass('visible');
		}
}

});