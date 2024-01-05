function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#77B1A9',
    '#73A857'
];

var quotes =  [
    
    ["If you roll two dice, the most likely outcome is 7."],
    ["Among all numbers below 15, 7 is the only one that cannot be summarized as a sum of the squares of three integers."],
    ["There are 7 ancient wonders in the world."],
    ["The world is divided into 7 continents."],
    ["7 colors make up a rainbow."],
    ["A week consists of 7 days."],
    ["Periodic tables have 7 rows."],
    ["7 is the neutral pH value when comparing acidity to alkalinity."],
    ["Devices that use digital technology employ 7-segment displays."],
    ["The OSI model is made up of 7 layers."],
    ["In logic gates, there are 7 gates which are NOT, NOR, XNOR, XOR, AND, NAND, and OR."],
    ["Astronomers in India consider a constellation of 7 stars as a group of the 7 most important saints of the religion. 'Saptarishi mandalam' is the name given to this constellation."],
    ["Our skin has 7 layers."],
    ["Music is composed of 7 basic notes."],
    ["Our bodies have 7 chakras."],
    ["7 books make up the Harry Potter series."],
    ["Maximum price money in KBC in 7 crores."]
    ["There are 7 wonders of the world"]

  ];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";
var audio = new Audio('music.mp3');

       

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote];


    if (audio.paused) {
        // Play the audio
        audio.play();
    } else {
        // Pause the audio
        audio.pause();
        // Resume playing from the beginning
        audio.currentTime = 0;
        audio.play();
    }
    
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    
    });    
}

function openURL(url) {
    
    
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    
    
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});