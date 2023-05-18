// Creating Model

function Drum(key, audio) {
    this.key = key;
    this.audio = audio;
}

var drums = [];

drums.push(new Drum('w', new Audio('sounds/tom-1.mp3')));
drums.push(new Drum('a', new Audio('sounds/tom-2.mp3')));
drums.push(new Drum('s', new Audio('sounds/tom-3.mp3')));
drums.push(new Drum('d', new Audio('sounds/tom-4.mp3')));
drums.push(new Drum('j', new Audio('sounds/snare.mp3')));
drums.push(new Drum('k', new Audio('sounds/crash.mp3')));
drums.push(new Drum('l', new Audio('sounds/kick-bass.mp3')));

// Creating a keySet
var allKeys=[];
drums.forEach(function(value){
    allKeys.push(value.key);
});

// playSound Function
function playSound(key) {
    drums.find(function (element) {
        return element.key === key;
    }).audio.play();
}

// adding keyPress animation
function btnAnimation(key){
    console.log('.'+key);
    document.querySelector('.'+key).classList.add('pressed');
    console.log(document.querySelector('.'+key).classList);
     setTimeout(function() {
        document.querySelector('.'+key).classList.remove('pressed');
     }, 100);
}

// Adding eventListeners()

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        console.log(this.textContent.toLowerCase());
        playSound(this.textContent.toLowerCase());
        btnAnimation(this.textContent.toLowerCase());
    });
}

document.addEventListener('keydown', function(event){
    console.log(event.key);
    if (allKeys.includes(event.key)){
        playSound(event.key);
        btnAnimation(event.key);
    }
});

