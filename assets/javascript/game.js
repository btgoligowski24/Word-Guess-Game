window.addEventListener("DOMContentLoaded", (event) => {

    var shows = [{
        name: "Dark Matter",
        themeSong: "assets/audio/darkMatter.mp3",
        showImg: "assets/images/darkMatter.png",
    }, {
        name: "Orphan Black",
        themeSong: "assets/audio/orphanBlack.mp3",
        showImg: "assets/images/orphanBlack.jpg",
    }, {
        name: "Star Trek: Voyager",
        themeSong: "assets/audio/starTrekVoyager.mp3",
        showImg: "assets/images/starTrekVoyager.jpg",
    }, {
        name: "Torchwood",
        themeSong: "assets/audio/torchwood.mp3",
        showImg: "assets/images/torchwood.jpg",
    }, {
        name: "Farscape",
        themeSong: "assets/audio/farscape.mp3",
        showImg: "assets/images/farscape.jpg",
    }, {
        name: "Futurama",
        themeSong: "assets/audio/futurama.mp3",
        showImg: "assets/images/futurama.jpg",
    }, {
        name: "Bablyon 5",
        themeSong: "assets/audio/bablyon5.mp3",
        showImg: "assets/images/babylon5.jpg",
    }, {
        name: "The Expanse",
        themeSong: "assets/audio/theExpanse.mp3",
        showImg: "assets/images/theExpanse.jpg",
    }, {
        name: "Westworld",
        themeSong: "assets/audio/westworld.mp3",
        showImg: "assets/images/westworld.jpg",
    }, {
        name: "Stranger Things",
        themeSong: "assets/audio/strangerThings.mp3",
        showImg: "assets/images/strangerThings.jpg",
    }, {
        name: "Mystery Science Theater 3000",
        themeSong: "assets/audio/mst3k.mp3",
        showImg: "assets/images/mst3k.jpg",
    }, {
        name: "Fringe",
        themeSong: "assets/audio/fringe.mp3",
        showImg: "assets/images/fringe.jpg",
    }, {
        name: "Star Trek: Deep Space Nine",
        themeSong: "assets/audio/starTrekDS9.mp3",
        showImg: "assets/images/starTrekDS9.jpg",
    }, {
        name: "Stargate SG-1",
        themeSong: "assets/audio/stargateSG1.mp3",
        showImg: "assets/images/stargateSG1.jpg",
    }, {
        name: "Lost",
        themeSong: "assets/audio/lost.mp3",
        showImg: "assets/images/lost.jpg",
    }, {
        name: "Firefly",
        themeSong: "assets/audio/firefly.mp3",
        showImg: "assets/images/firefly.jpg",
    }, {
        name: "Star Trek",
        themeSong: "assets/audio/starTrek.mp3",
        showImg: "assets/images/starTrek.jpg",
    }, {
        name: "The Twilight Zone",
        themeSong: "assets/audio/theTwilightZone.mp3",
        showImg: "assets/images/theTwilightZone.jpg",
    }, {
        name: "Battlestar Galactica",
        themeSong: "assets/audio/battlestarGalactica.mp3",
        showImg: "assets/images/battlestarGalactica.jpg",
    }, {
        name: "Star Trek: The Next Generation",
        themeSong: "assets/audio/starTrekTNG.mp3",
        showImg: "assets/images/starTrekTNG.jpg",
    }, {
        name: "The X-Files",
        themeSong: "assets/audio/theXFiles.mp3",
        showImg: "assets/images/theXFiles.jpg",
    }, {
        name: "Doctor Who",
        themeSong: "assets/audio/doctorWho.mp3",
        showImg: "assets/images/doctorWho.jpg",
    }, {
        name: "Stargate Atlantis",
        themeSong: "assets/audio/stargateAtlantis.mp3",
        showImg: "assets/images/stargateAtlantis.jpg",
    }, {
        name: "Stargate Universe",
        themeSong: "assets/audio/stargateUniverse.mp3",
        showImg: "assets/images/stargateUniverse.jpg",
    }, {
        name: "Killjoys",
        themeSong: "assets/audio/killjoys.mp3",
        showImg: "assets/images/killjoys.jpg",
    }, {
        name: "Buffy the Vampire Slayer",
        themeSong: "assets/audio/buffyTheVampireSlayer.mp3",
        showImg: "assets/images/buffyTheVampireSlayer.jpg",
    }, {
        name: "Angel",
        themeSong: "assets/audio/angel.mp3",
        showImg: "assets/images/angel.jpg",
    }, {
        name: "Defiance",
        themeSong: "assets/audio/defiance.mp3",
        showImg: "assets/images/defiance.jpg",
    }, {
        name: "Dollhouse",
        themeSong: "assets/audio/dollhouse.mp3",
        showImg: "assets/images/dollhouse.jpg",
    }, {
        name: "The Outer Limits",
        themeSong: "assets/audio/theOuterLimits.mp3",
        showImg: "assets/images/theOuterLimits.jpg",
    }, {
        name: "Quantum Leap",
        themeSong: "assets/audio/quantumLeap.mp3",
        showImg: "assets/images/quantumLeap.jpg",
    }, {
        name: "Continuum",
        themeSong: "assets/audio/continuum.mp3",
        showImg: "assets/images/continuum.jpg",
    }, {
        name: "The Man in the High Castle",
        themeSong: "assets/audio/theManInTheHighCastle.mp3",
        showImg: "assets/images/theManInTheHighCastle.jfif",
    }, {
        name: "The Orville",
        themeSong: "assets/audio/theOrville.mp3",
        showImg: "assets/images/theOrville.jpg",
    }, {
        name: "Warehouse 13",
        themeSong: "assets/audio/warehouse13.mp3",
        showImg: "assets/images/warehouse13.jpg",
    }, {
        name: "Eureka",
        themeSong: "assets/audio/eureka.mp3",
        showImg: "assets/images/eureka.jpg",
    }, {
        name: "Game of Thrones",
        themeSong: "assets/audio/gameOfThrones.mp3",
        showImg: "assets/images/gameOfThrones.jpg",
    }, {
        name: "Star Trek: Enterprise",
        themeSong: "assets/audio/starTrekEnterprise.mp3",
        showImg: "assets/images/starTrekEnterprise.jpg",
    }, {
        name: "Star Trek: Discovery",
        themeSong: "assets/audio/starTrekDiscovery.mp3",
        showImg: "assets/images/starTrekDiscovery.jpg",
    }, {
        name: "Falling Skies",
        themeSong: "assets/audio/fallingSkies.mp3",
        showImg: "assets/images/fallingSkies.jpg",
    }, {
        name: "Altered Carbon",
        themeSong: "assets/audio/alteredCarbon.mp3",
        showImg: "assets/images/alteredCarbon.jpg",
    }, {
        name: "Colony",
        themeSong: "assets/audio/colony.mp3",
        showImg: "assets/images/colony.jpg",
    }, {
        name: "Black Mirror",
        themeSong: "assets/audio/blackMirror.mp3",
        showImg: "assets/images/blackMirror.jpg",
    }, {
        name: "Caprica",
        themeSong: "assets/audio/caprica.mp3",
        showImg: "assets/images/caprica.jpg",
    }, {
        name: "Sense8",
        themeSong: "assets/audio/caprica.mp3",
        showImg: "assets/images/caprica.jpg",
    }, {
        name: "Rick and Morty",
        themeSong: "assets/audio/rickAndMorty.mp3",
        showImg: "assets/images/rickAndMorty.jfif",
    }, {
        name: "Counterpart",
        themeSong: "assets/audio/counterpart.mp3",
        showImg: "assets/images/counterpart.jpg",
    }, {
        name: "Humans",
        themeSong: "assets/audio/humans.mp3",
        showImg: "assets/images/humans.jpg",
    }, {
        name: "Sanctuary",
        themeSong: "assets/audio/sanctuary.mp3",
        showImg: "assets/images/sanctuary.jpg",
    }, {
        name: "Andromeda", // 50 to here
        themeSong: "assets/audio/andromeda.mp3",
        showImg: "assets/images/andromeda.jpg",
    }];
    shows.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    var initialImage = "assets/images/scifishows.jpg";
    var showIndex = 0;
    var showName;
    var wordArray = [];
    var showImg;
    var showAudio;
    var maxGuesses = 10;
    var letterGuesses = [];
    var wins = 0;
    var playIndex = 0;
    var lowerCaseWordArray = [];
    var wordLabel = document.getElementById("wordLabel");
    var curWordElem = document.getElementById("currentWord");
    var numGuessesElem = document.getElementById("numGuesses");
    var letterGuessedElem = document.getElementById("lettersGuessed");
    var winsElem = document.getElementById("wins");
    var instructionsElem = document.getElementById("instructions");
    var screenCheckElem = document.getElementById("screenCheck");
    var imgElem = document.getElementById("showImg");
    var audioElem = document.getElementById("showAudio");
    var startButtonElem = document.getElementById("startButton");
    var hint = document.getElementById("hint");
    var correctLetter;
    var incorrectGuessCount = 0;
    var availableChars = "abcdefghijklmnopqrstuvwxyz0123456789-:";
    var buttonArea = document.getElementById("mobileButtons");
    var buttons = document.getElementsByClassName("button");
    // ***Not using the below because it's easier to just create an array of valid characters but the below is really cool to dynamically create a unique list***
    // var allShows = shows.map(function (show) {
    //     return show["name"].toLowerCase();
    // });
    // var availableChars = allShows.join("").split("");
    // var uniqueChars = [];

    if (screen.width <= 767) {
        screenCheckElem.textContent = "the character buttons below";
    } else {
        screenCheckElem.textContent = "your keyboard"
    }

    for (var i = 0; i < availableChars.length; i++) {
        var addButton = document.createElement("button");
        addButton.setAttribute("data-char", availableChars[i]);
        addButton.setAttribute("class", "m-1 button rounded");
        addButton.textContent = addButton.getAttribute("data-char");
        buttonArea.appendChild(addButton);
    }

    var buttonArray = Object.values(buttons);
    buttonArray.forEach((btn) => {
        btn.addEventListener("touchend", mobileGame);
    })

    startButtonElem.addEventListener("click", function (event) {
        // we are technically in a 'true' state for checkForWin because there are no "_" in the empty wordArray var so it should resolve to true and work
        if (checkForGameFinish()) {
            resetPage();
            return;
        }
        if ((checkForLoss() || checkForWin())) {
            newShow();
            instructionsElem.style.display = "none";
            startButtonElem.style.display = "none";
        }
    })
    // function to remove duplicate array indices; in this case, i'm using it to filter unique characters, but if it were show titles, it would find unique show titles. Not in use as it was easier to just create the string myself to test against.
    // function removeDupes(chars) {
    //     var tempObj = {};
    //     for (var i = 0; i < chars.length; i++) {
    //         tempObj[chars[i]] = true;
    //     }
    //     var tempArray = [];
    // 
    //     for (var j in tempObj) {
    //         tempArray.push(j);
    //     }
    //     return tempArray;
    // }
    function letterGuessed() {
        alert("You already guessed that letter, try again!")
    }

    function updateScore() {
        winsElem.textContent = wins;
    }

    function checkForGameFinish() {
        return playIndex === shows.length;
    }

    function gameFinished() {
        instructionsElem.style.display = "block";
        instructionsElem.textContent = "GAME OVER! Click \"Start Button\" to play again";
        winsElem.textContent = "You got " + wins + " out of " + shows.length;
    }

    function resetPage() {
        location.reload();
    }

    function checkForWin() {
        return !wordArray.includes("_");
    }

    function checkForLoss() {
        return maxGuesses === incorrectGuessCount;
    }

    function userWon() {
        wins++;
        hint.style.display = "none";
        imgElem.setAttribute("src", showImg);
        audioElem.setAttribute("src", showAudio);
        curWordElem.textContent = showName;
        curWordElem.setAttribute("style", "color: green");
        audioElem.style.display = "block";
        if (checkForGameFinish()) {
            gameFinished();
        } else {
            startButtonElem.textContent = "Continue";
            startButtonElem.style.display = "block";
            instructionsElem.textContent = "Congratulations on guessing the show right! Click the \"Continue\" button to get your next show."
            instructionsElem.style.display = "block";
        }
    }

    function userLoss() {
        hint.style.display = "none";
        curWordElem.textContent = showName;
        imgElem.setAttribute("src", showImg);
        audioElem.setAttribute("src", showAudio);
        wordLabel.textContent = "The show was:"
        curWordElem.setAttribute("style", "color: red");
        audioElem.style.display = "block";
        if (checkForGameFinish()) {
            gameFinished();
        } else {
            startButtonElem.textContent = "Continue";
            startButtonElem.style.display = "block";
            instructionsElem.textContent = "Sorry, you didn't guess correctly. Click the \"Continue\" button to get your next show."
            instructionsElem.style.display = "block";
        }
    }

    function newShow() {
        wordLabel.textContent = "Show to Guess"
        curWordElem.removeAttribute("style");
        hint.style.display = "none";
        showImg = shows[showIndex].showImg;
        showAudio = shows[showIndex].themeSong;
        showName = shows[showIndex].name;
        letterGuesses = [];
        incorrectGuessCount = 0;
        wordArray = [];
        for (var i = 0; i < showName.length; i++) {
            if (showName.charAt(i) === " ") {
                wordArray.push("&nbsp;");
            } else {
                wordArray.push("_");
            }
        }
        curWordElem.innerHTML = wordArray.join(" ");
        numGuessesElem.textContent = maxGuesses;
        letterGuessedElem.textContent = letterGuesses;
        winsElem.textContent = wins;
        showIndex++;
        lowerCaseWordArray = [];
        for (var j = 0; j < wordArray.length; j++) {
            lowerCaseWordArray.push(wordArray[j].toLowerCase());
        }
        imgElem.setAttribute("src", initialImage);
        audioElem.pause();
        audioElem.removeAttribute("src");
        audioElem.style.display = "none";
        buttonArray.forEach((btn) => {
            btn.style.backgroundColor = "silver";
            btn.style.color = "black";
        })
        playIndex++;
    }

    function playGame(lower) {
        if (checkForLoss() || checkForWin()) {} else {
            if (availableChars.includes(lower)) {
                if (lowerCaseWordArray.includes(lower)) {
                    letterGuessed();
                } else if (letterGuesses.includes(lower)) {
                    letterGuessed();
                } else {
                    correctLetter = false;
                    // iterating through all characters in show name to see where matches, if any, exist
                    for (var n = 0; n <= showName.length; n++) {
                        // new sucessful match to character in normalized word
                        if (showName.toLowerCase().charAt(n) === lower) {
                            wordArray[n] = showName.charAt(n);
                            correctLetter = true;
                        }
                    }
                    if (!correctLetter) {
                        incorrectGuessCount++;
                        numGuessesElem.textContent = maxGuesses - incorrectGuessCount;
                    } else {
                        curWordElem.innerHTML = wordArray.join(" ");
                    }
                    letterGuesses.push(lower);
                    letterGuessedElem.textContent = letterGuesses.join(", ");
                    // event.style.backgroundColor = "darkgray";
                }
                if (incorrectGuessCount === 8) {
                    hint.style.display = "block";
                }
                if (checkForWin()) {
                    userWon();
                } else if (checkForLoss()) {
                    userLoss();
                }
            }
        }
    }

    document.onkeyup = function (event) {
        var lower = event.key.toLowerCase();
        playGame(lower);
    }

    function mobileGame(event) {
        var lower = this.getAttribute("data-char");
        playGame(lower);
        this.style.backgroundColor = "darkslategray";
        this.style.color = "white";
    }
});