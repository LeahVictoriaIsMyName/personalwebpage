// probably a better way to do this but who cares LOL
var imageURLs = [ "stlayer_data/img22.jpg";
var audioURLs = [ "stlayer_data/6.mp3"];
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
function WritePage(){
	document.write(GetAudio())
	document.write(GetImage())
}