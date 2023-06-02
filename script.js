//initialize the variable
let songIndex=0;
let audioElement=new Audio('Brown Munde_192(PagalWorld.com.se).mp3')
let masterPlay=document.getElementById("masterPlay")
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songItem"))

let songs=[
  {songName:"Brown Munde", filePath:"Brown Munde_192(PagalWorld.com.se).mp3", coverPath:"Brown Munde.jpg"}  ,
  {songName:"Chura Liya Hai Tumne Cover", filePath:"Chura Liya Hai Tumne Cover_192(PagalWorld.com.se).mp3", coverPath:"Chura Liya hai tumne.jpg"}  ,
  {songName:"Daku", filePath:"Daku_320(PagalWorld.com.se).mp3", coverPath:"Daku.jpg"}  ,
  {songName:"Humko Humise Chura Lo", filePath:"Humko Humise Chura Lo_192(PagalWorld.com.se).mp3", coverPath:"humko hamise churalo.jpg"}  ,
  {songName:"Kahani Suno 2.O", filePath:"Kahani Suno_192(PagalWorld.com.se).mp3", coverPath:"Kahani Suno.jpg"}  ,
  {songName:"Kina Chir x Aadat", filePath:"Kina Chir x Aadat(PagalWorld.com.se).mp3", coverPath:"Kinna chir.jpg"}  ,
  {songName:"Maan Meri Jaan", filePath:"Maan Meri Jaan_192(PagalWorld.com.se).mp3", coverPath:"Man meri Jan.jpg"}  ,
  {songName:"Kesariya Tera", filePath:"Kesariya Tera_192(PagalWorld.com.se).mp3", coverPath:"kesriya.jpg"}  ,
  {songName:"Raatan Lambiyan", filePath:"Raatan Lambiyan_192(PagalWorld.com.se).mp3", coverPath:"Rata Lambiyan.jpg"}  ,
  {songName:"Zara Zara ", filePath:"Zara Zara Unplugged_320(PagalWorld.com.se).mp3", coverPath:"Zara Zara.jpg"}  
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

//audioElement.play();


//listen to event
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      const clickedIndex = parseInt(e.target.id);
  
      if (clickedIndex === songIndex && !audioElement.paused) {
        audioElement.pause();
        audioElement.currentTime = 0;
        gif.style.opacity = 0;
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
      } else {
        songIndex = clickedIndex;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
      }
    });
  });

  //handle play/pause click
  
  masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity = 1;
      const songItemPlayIcon = document.getElementById(`${songIndex}`);
      songItemPlayIcon.classList.remove('fa-circle-play');
      songItemPlayIcon.classList.add('fa-circle-pause');
    } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity = 0;
      const songItemPlayIcon = document.getElementById(`${songIndex}`);
      songItemPlayIcon.classList.remove('fa-circle-pause');
      songItemPlayIcon.classList.add('fa-circle-play');
    }
  });

  document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= songs.length - 1) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    playSongAtIndex(songIndex);
  });
  
  document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
      songIndex = songs.length - 1;
    } else {
      songIndex -= 1;
    }
    playSongAtIndex(songIndex);
  });
  
  function playSongAtIndex(index) {
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[index].songName;
  
    makeAllPlays();
    const songItemPlayIcon = document.getElementById(`${index}`);
    songItemPlayIcon.classList.remove('fa-circle-play');
    songItemPlayIcon.classList.add('fa-circle-pause');
  }
  
  
let index = songIndex; 

// Initialize index with the value of songIndex

document.getElementById("next").addEventListener("click", () => {
  if (index >= 9) {
    index = 0;
  } else {
    index += 1;
  }
  audioElement.src = songs[index].filePath;
  songIndex = index;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  masterSongName.innerText = songs[index].songName;
});

document.getElementById("previous").addEventListener("click", () => {
  if (index <= 0) {
    index = 0;
  } else {
    index -= 1;
  }
  audioElement.src = songs[index].filePath;
  songIndex = index;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  masterSongName.innerText = songs[index].songName;
});
