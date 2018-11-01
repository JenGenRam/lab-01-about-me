/* eslint no-console: "off" */
/* exported tryQuerySelector */
/*use strict'*/

// var elementResponseDiv = document.querySelectorAll('element-response-Div');
// var elementResponseLi = document.querySelectorAll('element-response-Li');
// var elementResponseInput = document.querySelectorAll('element-response-Input')

function tryQuerySelector() {
    var elementResponse = document.querySelectorAll('input[name="element"]');

    for(var i = 0; i < elementResponse.length; i++) {
        var response = elementResponse[i];
    }   
    
    var selectedElementResponse = document.querySelectorAll('input[name="element"]:checked');

    if(selectedElementResponse === 'P') {
        elementResponse.textContent = elementResponse4;
    }
    else if(selectedElementResponse === 'Div') {
        elementResponse.textContent = elementResponse;
    } 
    else if(selectedElementResponse === 'Li') {
        elementResponse.textContent = elementResponse;
    }
    else if(selectedElementResponse === 'Response') {
        elementResponse.textContent = elementResponse;
    }
}