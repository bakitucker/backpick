document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyByYg



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}



function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgb(0, 255, 0)'
  document.querySelector('body').style.color = 'white'
}




function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'aqua'
  document.querySelector('body').style.color = 'black'
}

function partyByYg(){
  document.querySelector('body').style.backgroundColor = 'red'
  document.querySelector('body').style.color= 'yellow'
}