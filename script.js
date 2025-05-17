let box = document.querySelector(".box")

let value = 0
box.addEventListener('click', function(){
  if(value==0) {
    box.style.backgroundColor = 'red'
  value = 1;}
  else { 
    box.style.backgroundColor = 'grey'
  value = 0;
  }
})
