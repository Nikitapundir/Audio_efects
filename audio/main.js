
var song = [{   
         'name': 'song1',
		 'artist':'Mohit Chauhan',
		 'album'  :'Tamsha',
		 'duration':'3:13',
		 'fileName': 'song1.mp3',
		 'image':'th.jpg'

		 },
		 {
		 'name': 'song2',
		 'artist':'All you had was to stay',
		 'album'  :'Taylor swift',
		 'duration': '3:13',
         'fileName': 'song2.mp3',
		 'image':'All.jpg'
		 },
		 {
		 'name': 'song3',
		 'artist':'Dev Negi',
		 'album'  :'Badri Nath ki Dhulania',
		 'duration': '2:44',
		 'fileName': 'song3.mp3',
		 'image':'badri.jpg'
		                      
		 },
		 {
		 'name': 'song4',
		 'artist':'Badshah',
		 'album'  :'Badri Nath ki Dhulania',
		 'duration': '3:54',
		 'fileName': 'song4.mp3',
		 'image':'Tamma.jpg'
		                   
		 }]
		 

function fancyTimeFormat(time)<!-- changing time into time format-->
{
  // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
function toggleSong(){
	var song=document.querySelector('audio');//select audio file 
	if(song.paused == true){ 
	 $('.play-icon').removeClass('fa-play').addClass('fa-pause');//chaining
	 song.play();
	}
	else{
	  $('.play-icon').removeClass('fa-pause').addClass('fa-play');//chaining
	  song.pause();
	  }
	}
function updateCurrentTime(){ //function of updation of current time and duration
    var song=document.querySelector('audio');//select audio file
	var currentTime=Math.floor(song.currentTime);//convert song current time into decimal
	currentTime = fancyTimeFormat(currentTime);//calling function which will change into a time format
	var duration=Math.floor(song.duration);//convert song duration into decimal
	duration = fancyTimeFormat(duration);//calling function which will change into a time format
	$('.time-elapsed').text(currentTime);
	$('.song-duration').text(duration);
	}
function changecurrentSongDetails(songobj) { 
 $('.current-song-image').attr('src','img/' +songobj.image)
 $('.current-song-name').text(songobj.name)
 $('.current-song-album').text(songobj.album)
 }
function addSongNameEventListener(songobj ,position){ // selecting songs
    var id= '#song'+ position;
  $(id).on('click' ,function(event){
    var song=document.querySelector('audio');
	var currentsong=song.src;
	if(currentsong.search(songobj.fileName)!= -1){
	toggleSong();
	changecurrentSongDetails(songobj);
	}else{
	changecurrentSongDetails(songobj);
	song.src = songobj.fileName;
	toggleSong();
	}
	});
 }
window.onload=function(){ 
    
    updateCurrentTime();
	setInterval(function(){
	updateCurrentTime();
	},1000);
	$('.current-song-image').attr('src','img/' +song[0].image);
	$('.current-song-name').text(song[0].name);
	$('.current-song-album').text(song[0].album);
	for( var i=0 ; i < song.length;i++){
		 var obj =song[i];
		 var name ='#song' +(i+1);
		 var song1=$(name);
		 song1.find('.song-name').text(obj.name);
		 song1.find('.song-artist').text(obj.artist);
		 song1.find('.song-album').text(obj.album);
		 song1.find('.song-length').text(obj.duration);
		 addSongNameEventListener(obj,i+1);
		 
		 }
$('#songs').DataTable({ //search bar
   paging: false
   });
   }
$('#demo').EzFade({ //slider
	height:'600',
	width:'1200'
	});
 
$('#but1').on('click',function(){   //click function on but1 id
var a= $('input[type="text"]').val();// store the text in variable a
if(a.length >3){ //check the length
	$('#p1').text("Welcome, "+a); 
	$('#sect1').addClass("hidden");
	$('.main').removeClass("hidden");
}
else
	{
	$('input[type="text"]').addClass('error');
	document.write('<b>length is less then three enter the name again</b>');
	}
});
$('.play-icon').on('click',function(){
 toggleSong();
 });

 $('body').on('keypress',function(event){ //spacebar
if(event.keyCode == 32)
{
   toggleSong();
}
});





