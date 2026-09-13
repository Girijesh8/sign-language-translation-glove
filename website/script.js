const gestureSelect =
    document.getElementById("gestureSelect");

const gestureIcon =
    document.getElementById("gestureIcon");

const gestureText =
    document.getElementById("gestureText");

const speakButton =
    document.getElementById("speakButton");

const speechStatus =
    document.getElementById("speechStatus");


const gestures = {

    hello: {
        icon: "👋",
        text: "HELLO"
    },

    thankyou: {
        icon: "🙏",
        text: "THANK YOU"
    },

    yes: {
        icon: "👍",
        text: "YES"
    },

    no: {
        icon: "👎",
        text: "NO"
    }

};


gestureSelect.addEventListener(
    "change",
    function () {

        const selected =
            gestures[this.value];

        gestureIcon.textContent =
            selected.icon;

        gestureText.textContent =
            selected.text;

        speechStatus.textContent = "";

    }
);


speakButton.addEventListener(
    "click",
    function () {

        const selected =
            gestures[gestureSelect.value];

        if (
            "speechSynthesis"
            in window
        ) {

            const speech =
                new SpeechSynthesisUtterance(
                    selected.text
                );

            speech.lang = "en-IN";

            window.speechSynthesis.speak(
                speech
            );

            speechStatus.textContent =
                "Speaking: " +
                selected.text;

        }

        else {

            speechStatus.textContent =
                "Speech is not supported by this browser.";

        }

    }
);