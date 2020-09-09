function listen() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "";
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    recognition.start();

    recognition.onresult = function (event) {
        console.log('You said: ', event.results[0][0].transcript);
        if (event.results[0][0].transcript === "hello") {
            msg.text = "Hello how are you"
            window.speechSynthesis.speak(msg);
        }
        
        else if (event.results[0][0].transcript === "time") {
            let date = new Date();
            let hour = date.getHours();
            if (hour > 12){ 
                msg.text = date.getHours()-12;
                window.speechSynthesis.speak(msg);
                msg.text = date.getMinutes() + "PM";
                window.speechSynthesis.speak(msg)
            }
            else if (hour = 12){
                msg.text = date.getHours();
                window.speechSynthesis.speak(msg)
                msg.text = date.getMinutes() + "PM";
                window.speechSynthesis.speak(msg)
            }
            else{
                msg.text = date.getHours();
                window.speechSynthesis.speak(msg);
                msg.text = date.getMinutes() + "AM";
                window.speechSynthesis.speak(msg)
            }

        }
        else if (event.results[0][0].transcript === "open YouTube") {
            msg.text = "Opening YouTube";
            window.speechSynthesis.speak(msg);
            let url = "https://www.youtube.com/";
            window.open(url);
        }
        else if (event.results[0][0].transcript === "open Facebook") {
            msg.text = "Opening Facebook";
            window.speechSynthesis.speak(msg);
            let url = "https://www.facebook.com/";
            window.open(url);
        }
        else if (event.results[0][0].transcript === "play song") {
            msg.text = "Playing a random song"
            window.speechSynthesis.speak(msg);
            let links = [
                "https://www.youtube.com/watch?v=_uUdJalMaF8",
                "https://www.youtube.com/watch?v=BBAyRBTfsOU",
                "https://www.youtube.com/watch?v=l75z7FrYRXI",
                "https://www.youtube.com/watch?v=IE8OD5FbU-c",
                "https://www.youtube.com/watch?v=eN6AYHAT8UM",
                "https://www.youtube.com/watch?v=YZLKoG_vhDY",
                "https://www.youtube.com/watch?v=qfdShSZZxlg"
            ]


        min = Math.ceil(0);
        max = Math.floor(6);
        randint =  Math.floor(Math.random() * (max - min + 1)) + min;

        window.open(links[randint])
        }
        else if (event.results[0][0].transcript === "who created you") {
            msg.text = "I was created by Aayam 5 5 5 on August 14 2020 Friday";
            window.speechSynthesis.speak(msg);
        }

        else if (event.results[0][0].transcript === "how are you") {
            msg.text = "I am fine Thank You how can I help you";
            window.speechSynthesis.speak(msg);
        }
        
    };

   
}