# jTranslate
Very simple translation file, jQuery based. Detects browser language.

Required:
- Import jQuery
- Import jtranslate.js file from this repo
- Import translation.json file from this repo

## HTML setup
On every Element that has a translated text add `data-translate` attribute and give it a value. Don't put text in your HTML.
Add jQuery in you head and jtranslate.js file.
```
<!DOCTYPE html>
  <head>
    <title>Simple jQuery translator plugin - jTranslate</title>
    <script
        defer
	src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>
    <script defer src="./jtranslate.js"></script>
    
    </head>
    <body>
      <!-- Leave the HTML empty and use the content of data-translate as key in your translation.json file -->
      <h1 data-translate="title"></h1>
    </body>
 <html>
  ```
## jtranslate.js
Make sure you get the correct path for you translation.json in the get method file AND to setup a default language.
The rest is handled automatically.
```
$(document).ready(() => {
  $.get('/translation.json', (translationData) => {
    let detectedLanguage = window.navigator.userLanguage || window.navigator.language;
    // Fallback for languages that are not defined by your translation.json
    
    let defaultLanguage = 'en'; //This has TO BE SET BY YOU! 

    let useLanguage = translationData['languages'][detectedLanguage] !== 'undefined' ? detectedLanguage : defaultLanguage;
    
    let elementsToTranslate = $('[data-translate]');
    $.each(elementsToTranslate, (index, element) => {
      let key = $(element).attr('data-translate');
        $(element).html(translationData[key][useLanguage]);
    })
  });
})
```

## translation.json
In this file you only have to set the supported browser languages in the `languages` key e.g. `["en", "nl", "it"]`.
So this file has three language translations: English, Ducth and Italian.
```
{
  "languages": ["en", "nl", "it"],
  "title": {
    "en": "hello world",
    "nl": "hallo wereld!",
    "it": "ciao mondo!"
  }
}
```
