const storage = localStorage.getItem('name__!');

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}


if (storage) {
    document.getElementById("text").innerHTML = "Hi, " + storage;

    const emojiStorage  = localStorage.getItem('emoji__!');
    const button = document.querySelector('button');     

    var list = ['😤','👾', '🎃','😾', '😈','🐷', '🌈','🌼', '🌻', '🌸', '🥀', '🍣', '🍏', '🥑', '🍜' , '🍉' , '🍻' , '🍩' , '🍭' , '🎉', '🧸', '🔱', '🚭' , '🤯', '🐸', '🤡' , '🤑', '🚬', '💨', '👿', '😴', '🥶', '🚀', '🍄', '🏝️', '🥝', '🍒', '🍇', '🥨', '🍟', '🍪', '🍫', '🍬', '☕', '🍹', '🐣', '🐍', '🦢', '🌟', '🍍', '🌊', '🌍', '🌵', '🎺','🧀','💊','💛','🍯','🍋','🧟‍♂️','💋','👽','👻','🤥','🦉','🦥','🧃','🎷'];
    if (emojiStorage) {
        button.textContent = emojiStorage;
        function myfunc(){
            var random = list.sample();
            button.textContent = random;
            localStorage.setItem('emoji__!' , random)
        }

    } else {
        
        function myfunc(){
            var random = list.sample();
            button.textContent = random;
            localStorage.setItem('emoji__!' , random)
        }
    }  
    
    const musicContainer = document.getElementById('music-container');
    const playBtn= document.getElementById('play');
    const prevBtn= document.getElementById('prev');
    const nextBtn= document.getElementById('next');
    const audio= document.getElementById('audio');
    const progress= document.getElementById('progress');
    const progressContainer= document.getElementById('pregerss-container');
    const title= document.getElementById('title');
    const cover = document.getElementById('cover');



    // MAIN!!!!
    const songs = ['Relaxing', 'Elephant', 'Yami', 'City','Birds','Club','Saxophone','Purpple clouds','Airplane','Downtown','laflaf','I love u','Take care'];
    let songIndex = 2;

    loadSong(songs[songIndex]);


    playBtn.addEventListener('click', () => {
        const isPlaying = musicContainer.classList.contains('play');
        if (isPlaying){
            pauseSong();
        } else{
            playSong();
        }
    });


    prevBtn.addEventListener("click", prevSong);
    nextBtn.addEventListener("click", nextSong);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextSong);

    // FUNCTIONS!!!!


    function loadSong(song){
        title.innerText = song;
        audio.src = "Music/"+ song +'.mp3';
        cover.src = "Image/" +song +'.gif';
    }

    function playSong(){
        musicContainer.classList.add("play");
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');

        audio.play();
    }

    function pauseSong(){
        musicContainer.classList.remove("play");

        playBtn.querySelector('i.fas').classList.add('fa-play');
        playBtn.querySelector('i.fas').classList.remove('fa-pause');

        audio.pause();

    }


    function prevSong(){
        songIndex--;
        if (songIndex < 0){
            songIndex = songs.length -1;
        }
        loadSong(songs[songIndex]);

        playSong();
    }

    function nextSong(){
        songIndex++;
        if (songIndex > songs.length -1){
            songIndex = 0;
        }
        loadSong(songs[songIndex]);

        playSong();
    }

    function updateProgress(e){
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`
    }




    // ----------------------
    // Get the  settings modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var settingsBtn = document.getElementById("settingsBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    settingsBtn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
// -------------------

    function deletedData(){
        localStorage.clear('name__!');
        localStorage.clear('emoji__!');
        window.location.reload();

    }

    const randomBackBTN = document.getElementById('randomBackBTN');
    randomBackBTN.addEventListener("click", randomBackground)
    let backgroundsIndex = 1;

    function randomBackground(){

        const backgrounds = ['background1.gif','background2.gif','background3.gif','background4.gif','background5.gif'];
        let randomBack = backgrounds[backgroundsIndex];

        document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url('Background/${randomBack}')`;
        backgroundsIndex++;

        
        if (backgroundsIndex > backgrounds.length -1){
            backgroundsIndex = 0;
        }
    }

   
} else {
    window.location.href ="/";

}
