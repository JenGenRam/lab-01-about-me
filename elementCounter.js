/* eslint no-console: "off" */
/* exported tryQuerySelector */
/*use strict'*/

function tryQuerySelector() {
    var elementInputs = document.querySelectorAll('input[name="element"]');

    for(var i = 0; i < elementInputs.length; i++) {
        var response = elementInputs[i];
    }   
    
    var selectedElement = document.querySelectorAll('input[name="element"]:checked');

    if(selectedElement === 'P') {
        response.textContent = selectedElement;
    }
    // else if(selectedElementResponse === 'Div') {
    //     response.textContent = elementResponseDiv;
    // } 
    // else if(selectedElementResponse === 'Li') {
    //     response.textContent = elementResponseLi;
    // }
    // else if(selectedElementResponse === 'Input') {
    //     response.textContent = elementResponseInput;
    // }
    
}