$(document).ready(function(main){
	$('.content').hide();
    $('#AboutBtn').click(function() {
        $('.contBox').hide();
		$('#about').show();
    });
    $('#MuseumBtn').click(function() {
        $('.contBox').hide();
		$('#mus').show();
    });
	
	    $('#GalleryBtn').click(function() {
        $('.contBox').hide();
		$('#gall').show();
    });
	
		$('#projectsBtn').click(function() {
        $('.contBox').hide();
		$('#proj').show();
    });

	$('.closeBtn').click(function() { /* Кнопка закривашка */
        $('.content').hide();
		$('.contBox').show();
    });
	
	
	
});




var months=new Array(13);
months[1]="січня";
months[2]="лютого";
months[3]="березня";
months[4]="квітня";
months[5]="травня";
months[6]="червня";
months[7]="липня";
months[8]="серпня";
months[9]="вересня";
months[10]="жовтня";
months[11]="листопада";
months[12]="грудня";
var time=new Date();
var lmonth=months[time.getMonth() + 1];
var date=time.getDate();
var year=time.getYear();
var day=time.getDay() + 1; 
if (year < 2000) 
year = year + 1900; 
if(day==1) DayofWeek = "Неділя.";
if(day==2) DayofWeek = "Понеділок.";
if(day==3) DayofWeek = "Вівторок.";
if(day==4) DayofWeek = "Середа.";
if(day==5) DayofWeek = "Четвер.";
if(day==6) DayofWeek = "П'ятниця.";
if(day==7) DayofWeek = "Субота."; 
document.write( "<right>"+ date + " ");
document.write(lmonth + " " + year + " "+ "року" + ","+" " + DayofWeek + "<\/right>");