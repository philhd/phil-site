// Partially taken from https://googlechrome.github.io/samples/css-custom-properties/index.html
'use strict';

// Auxiliary method. Retrieves and sanitises the value of a custom property.
const getVariable = function(styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};

// Auxiliary method. Sets the value of a custom property at the document level.
const setDocumentVariable = function(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};

const toLightMode = function(){
    console.log('switching to light mode');
    setDocumentVariable('--color-primary', 'black');
    setDocumentVariable('--color-contrast', 'white');
}

const toDarkMode = function(){
    console.log('switching to dark mode');
    setDocumentVariable('--color-primary', 'white');
    setDocumentVariable('--color-contrast', 'black');
}

window.addEventListener('load', function() {
    console.log('on load');
    this.document.getElementById('dark-mode').addEventListener('change', (evt) => {
        if(evt.target.checked){
            toDarkMode()
        }else{
            toLightMode()
        }
    });
});
