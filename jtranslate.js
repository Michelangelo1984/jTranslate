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
