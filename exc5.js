
const inputThatnotAllowedNumbers = document.querySelector('#myInput');
const theDivShowWhatEntered = document.querySelector('#ShowWhatEntered');


inputThatnotAllowedNumbers = addEventListener ('keyup', (event) => {
    const enterKey = event.keyCode;
    if (enterKey === 13){
        theDivShowWhatEntered.innerHTML ='The value you entered is :' +  inputThatnotAllowedNumbers.value 
}
})
