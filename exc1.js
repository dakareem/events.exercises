const grandParent = document.querySelector("#ThegrandParent");
grandParent.classList.add("grandParent");
grandParent.style.width = "250px";
grandParent.style.height = "250px";
grandParent.style.backgroundColor = "red";


const Parent = document.querySelector("#TheParent");
Parent.classList.add("Parent");
Parent.style.width = "150px";
Parent.style.height = "150px";
Parent.style.backgroundColor = "blue";



const child = document.querySelector("#Thechild");
child.classList.add("child");
child.style.width = "80px";
child.style.height = "80px";
child.style.backgroundColor = "green";

let grandParentClass = true;
let ParentClass = true;
let childClass = true;


child.addEventListener("click", (childClicked) => {
   if (grandParent) {
    grandParent.style.background = 'yellow'
   }
})
grandParent = !grandParent
