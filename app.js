var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

// var serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
var serverURL = 'https://api.funtranslations.com/translate/minion.json';

// This function will return the URL which we will use to fetch the data from the server.
function getTranslationURL(input) {
    return serverURL + '?' + 'text=' + input;
    // Our required URL is -> "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Arijit" so this is basically (serverURL + '?' + 'text=' + what we are entering in the input box).
}

function errorHandler(error) {
    console.log('error occured', error);
    alert('Something wrong with the server! Try again after some time.');
}

function clickHandler() {
    var inputText = txtInput.value;
    // This is the text what the user entered in the input box.

    //fetch is a function which takes the URL as an argument and returns a promise.
    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .cache(errorHandler);
    // fetch(URL).then() means that when the response is received then the response is converted to json and then the json is used to get the translatedText and then the translatedText is displayed in the output box.
}

btnTranslate.addEventListener('click', clickHandler);
