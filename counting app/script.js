//document.getElementById("count-el").innerText=5 

let savedEl = document.getElementById("saved-el")
let countEl = document.getElementById("count-el")
 console.log(countEl)
 
 let count = 0

  function increment()
 {
 count +=  1
 countEl.innerText=count

 }

 function decrement()
 {
     count -=  1
     countEl.innerText = count
 }

function saved()
 {
  let countStr = count + " - " 
  savedEl.textContent += countStr//textcontent adds spaces
  countEl.textContent=0//makes the count to return to 0
  count=0
}

//console.log("lets count people on the bus stop")





   

