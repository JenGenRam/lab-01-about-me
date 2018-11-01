/* eslint no-console: "off" */
/* exported tryQuerySelector */
/*use strict'*/

var elementResponse = document.querySelectorAll('input'[name="element"]');
// var elementResponseDiv = document.querySelectorAll('element-response-Div');
// var elementResponseLi = document.querySelectorAll('element-response-Li');
// var elementResponseInput = document.querySelectorAll('element-response-Input');
    for(var i = 0; i < elementResponse.length; i++) {
        console.log(input.value, input.id, input.checked);
    }

// function tryQuerySelector() {
//     var tags = document.querySelectorAll('input[name="element"]:checked');
//     for(var i = 0; i < elementResponse.length; i++) {
//         elementResponse[i].N = '';
//         var tag = document.querySelectorAll(tags[i].value); 
//         var N = tags[i].value;
//         var numberElement = tag.length;
//         var elementResponse= (inputName + '_' + numberElement);
        
//         if(elementList === 'P') {
//             elementResponse.textContent = elementResponse;
//         }
//         else if(elementList === 'Div') {
//             elementResponseDiv.textContent = elementResponse;
//         } 
//         else if(elementList === 'Li') {
//             elementResponseLi.textContent = elementResponse;
//         }
//         else if(elementList === 'Input') {
//             elementResponseInput.textContent = elementResponse;
//         }
//     }
    
// }