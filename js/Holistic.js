$(window).on('load', function() {

/* Amenities */

let amenitiesOpened = false
let amenityOpened = ""

$('section#amenities .mpb').on('click', function(e) {

    if (amenitiesOpened && amenityOpened == $(this).attr('data-id')) {
        //close
        amenitiesOpened = false
        amenityOpened = ""
        $('#amenities .mpb').removeClass('vis').removeClass('hid');
        $('#amenities .mpb .text').removeClass('vis').removeClass('hid');
        $('#amenities').removeClass();
        $('section#amenities  p.mpp').slideDown(700);
        $('section#amenities .amenities-stage').addClass('hid');
        $('section#amenities .close').addClass('hid');

    } else {
        //open
        amenitiesOpened = true
        amenityOpened = $(this).attr('data-id')
        $('section#amenities .mpb').removeClass('vis').addClass('hid');
        $('section#amenities .mpb .text').removeClass('vis').addClass('hid');
        $(this).removeClass('hid').addClass('vis');
        $('section#amenities mpb.hid').slideUp();
        let cl = $(this).attr('data-id');
        $('section#amenities  p.mpp').slideUp(700);
        $('#amenities').removeClass();
        $('#amenities').addClass('open').addClass(cl);
        $('section#amenities .amenities-stage').removeClass('hid');


        
    }
 });
});