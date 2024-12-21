var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// probably a better way to do this but who cares LOL
var imageURLs = [ "images/img1.png", "images/img2.jpg", "images/img3.jpg", 
				  "images/img4.png", "images/img5.png", "images/img6.jpg", 
				  "images/img7.jpg", "images/img8.png", "images/img9.png", 
				  "images/img10.jpg", "images/img11.png", "images/img12.png", 
				  "images/img13.png", "images/img14.png", "images/img15.jpg", 
				  "images/img16.png", "images/img17.jpg", "images/img18.jpg", 
				  "images/img19.png", "images/img20.jpg", "images/img21.png",
				  "images/img22.jpg", "images/img23.jpg", "images/img24.png",
				  "images/img25.png"];
var audioURLs = [ "sounds/1.mp3", "sounds/2.mp3", "sounds/3.mp3", 
				  "sounds/4.mp3", "sounds/5.mp3", "sounds/6.mp3", 
				  "sounds/7.mp3", "sounds/8.mp3", "sounds/9.mp3", 
				  "sounds/10.mp3", "sounds/11.mp3", "sounds/12.mp3", ];
function GetImage() {
	var img = '<img src=\"';
	var randomIndex = Math.floor(Math.random() * imageURLs.length);
	img += imageURLs[randomIndex];
	img += '\" alt=\"Every copy of Super Mario 64 is personalized.\"';
	img += '\ style=\"width:80%; height:100%; \"/>';
	return img;
}
function GetAudio() {
	var audio = '<embed src="';
	var index = Math.floor(Math.random() * audioURLs.length);
	audio += audioURLs[index];
	audio += '\" loop="true"\"';
	audio += '\ autostart="false"\"';
	audio += '\ hidden="true"\"/>';
	return audio;
}

}
/*
     FILE ARCHIVED ON 11:30:05 Jun 07, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:17:55 Dec 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.642
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 16.394
  LoadShardBlock: 189.574 (3)
  PetaboxLoader3.datanode: 137.627 (4)
  PetaboxLoader3.resolve: 125.962 (2)
  load_resource: 140.523
*/