
var usedSounds = [];
var sounds = [{
            "file": "audio/trumpbeingtrump1.mp3",
            "text": "Hello...Hello? Can I get some water????...",
            "length": 3000,
            "location.hash": "quote1";
        }, {
            "file": "audio/trumpbeingtrump2.mp3",
            "text": "Bing, bing, bing...",
            "length": 2000,
            "location.hash": "quote2";
        }, {
            "file": "audio/trumpbeingtrump3.mp3",
            "text": "Bing, bing, bong, bong, bing...",
            "length": 2000,
            "location.hash": "quote3";
        }, {
            "file": "audio/trumpbeingtrump4.mp3",
            "text": "We can't sell beef...it's peanuts!",
            "length": 3000,
            "location.hash": "quote4";
        }, {
            "file": "audio/trumpbeingtrump5.mp3",
            "text": "I said it's ILLEGAL!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump6.mp3",
            "text": "You have to get hit with a kumatsu tractor...",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump8.mp3",
            "text": "I would never give up my microphone! I thought that was discusting!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump9.mp3",
            "text": "Terrible people...I love it.",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump11.mp3",
            "text": "Because we're going to hell!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump12.mp3",
            "text": "Uhmm...we'll do something. We'll go to sleep first.",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump13.mp3",
            "text": "Our country is going to hell.",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump14.mp3",
            "text": "I beat the people from China, I win!",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump15.mp3",
            "text": "We're tired of the nice people!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump16.mp3",
            "text": "Arab name, arab name, arab name",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump18.mp3",
            "text": "He's sweating like a pig! I've never saw a guy sweat like this!",
            "length": 3000;
            "window.location.hash": "quote18";
        }, {
            "file": "audio/trumpbeingtrump19.mp3",
            "text": "He wants to play golf! I play golf, i kill him at golf!",
            "length": 2000;
            "window.location.hash": "quote19";
        }, {
            "file": "audio/trumpbeingtrump20.mp3",
            "text": "Bing, bing, bing, right!?",
            "length": 1000;
            "window.location.hash": "quote20";
        }, {
            "file": "audio/trumpbeingtrump21.mp3",
            "text": "Oy, oy, oyee...",
            "length": 1000;
            "window.location.hash": "quote21";
        }, {
            "file": "audio/trumpbeingtrump22.mp3",
            "text": "I will take care of women, I respect women. I will take care of women.",
            "length": 3000;
            "window.location.hash": "quote22";
        }, {
            "file": "audio/trumpbeingtrump23.mp3",
            "text": "You know, you could see there where blood coming out of her eyes...uh... blood coming out of her...wherever.",
            "length": 5000;
            "window.location.hash": "quote23";
        }, {
            "file": "audio/trumpbeingtrump24.mp3",
            "text": "He put glasses on so people will think he is smart!",
            "length": 3000;
            "window.location.hash": "quote24";
        }, {
            "file": "audio/trumpbeingtrump26.mp3",
            "text": "Rick Perry should have to have an IQ-test!",
            "length": 2500;
            "window.location.hash": "quote26";
        }, {
            "file": "audio/trumpbeingtrump27.mp3",
            "text": "I've said that if Ivanka weren't my daughter, perhaps I'd be dating her.",
            "length": 3000;
            "window.location.hash": "quote27";
        }, {
            "file": "audio/trumpbeingtrump28.mp3",
            "text": "And I watched our police and our firemen, down on 7/11, down at the World Trade Center, right after it came down.",
            "length": 6000;
            "window.location.hash": "quote28";
        }, {
            "file": "audio/trumpbeingtrump29.mp3",
            "text": "Grab them by the pussy.",
            "length": 1500;
            "window.location.hash": "quote29";
        }, {
            "file": "audio/trumpbeingtrump30.mp3",
            "text": "I tend to like beautiful women more than unattractive women, I don't know maybe that makes me bad.",
            "length": 3000;
            "window.location.hash": "quote30";
        }, {
            "file": "audio/trumpbeingtrump31.mp3",
            "text": "Uaaah, I don't know what I said AAH, I don't remember!",
            "length": 3000;
            "window.location.hash": "quote31";
        }, {
            "file": "audio/trumpbeingtrump32.mp3",
            "text": "He's going like I don't remember AHH, the old baby! That's what I said!",
            "length": 3000;
            "window.location.hash": "quote32";
        }, {
            "file": "audio/trumpbeingtrump33.mp3",
            "text": "I'd call president Obama and Hillary Clinton the founders of ISIS, they're the founders.",
            "length": 5000;
            "window.location.hash": "quote33";
        }
    ];


function playRandomSound() {

    var randomNumber = getRandomNumber();

    var soundFile = sounds[randomNumber];
    // var file = document.getElementById("player").innerHTML = "<embed src=\"" + soundFile.file + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
    var audio = new Audio (soundFile.file);
    audio.play();
    var text = document.getElementById("quote").innerHTML = "<h2>" + soundFile.text + "</h2>";


    // Animations when clicking
    document.getElementById('trump-mouth').className = 'mouthmoving';

    setTimeout(function() {
      $("#trump-mouth").removeClass('mouthmoving');
    }, soundFile.length);
};

function getRandomNumber() {
    var randomNumber;
    if (usedSounds.length >= sounds.length) {
        // We have used all the numbers
        usedSounds = [];
        console.log("All the sounds have been used, resetting.");
    }

    while(!randomNumber) {
        var random = Math.floor(Math.random() * sounds.length);

        if (!contains(usedSounds, random)) {
            randomNumber = random;
            usedSounds.push(randomNumber);
            console.log("Found a new number!");
        } else {
            console.log("The number " + random + " has already been used.");
        }
    }

    return randomNumber;
}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

function myFunction() {
    var x = "The anchor part is now: " + window.location.hash;
    document.getElementById("demo").innerHTML = x;
}

console.log(x);

