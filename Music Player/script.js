let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause(){
    if(ctrlIcon.classList.contains("fi-sr-pause")){
        song.pause();
        ctrlIcon.classList.replace("fi-sr-pause", "fi-sr-play");
    }else{
        song.play();
        ctrlIcon.classList.replace("fi-sr-play", "fi-sr-pause");
        
        setInterval(() =>{
            progress.value =song.currentTime
        }, 600);
    }
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}