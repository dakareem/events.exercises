// <!-- תרגיל מספר ארבע -->
// <!-- כתוב תכנית המציגה תיבת קלט
// <input type="text">
// התכנית לא תאפשר קליטה של סימנים
// כגון : ()! @ # $ & * -->

const input1 = document.querySelector('#input1');
const noticToUser = document.querySelector('#noticToUser');
noticToUser.classList.add("showTheNotic")
input1.addEventListener('keypress', keyPress);

function keyPress(event){
    if ( event.key === '"' |
         event.key === '!' |
         event.key === '$' |
         event.key === '(' |
         event.key === ')' |
         event.key === '@' |
         event.key === '&' |
         event.key === '*' ) {
              const showTheNotic = noticToUser.innerHTML = "you can't use this key press  !";
              setTimeout(function(){ 
                noticToUser.innerHTML = "";}, 1600);
        event.preventDefault();  
         }
      }