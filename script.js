const progressBar = document.getElementsByClassName
('progress-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const widht = parseFloat(computedStyle.getPropertyValue
        ('--width')) || 0
    progressBar.style.setProperty('--width', widht + .1)
}, 5)


//                 All countdowns
 let daysItem = document.querySelector("#days")
 let hoursItem = document.querySelector("#hours")
 let minItem = document.querySelector("#min")
 let secItem = document.querySelector("#sec")


  let countDown = () => {
    let futureDate = new Date("20 Apr 2021")
    let currentDate = new Date();
    let myDate = currentDate - futureDate;
    //console.log(myDate);

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 /60 /60) % 24;
    let min = Math.floor(myDate / 1000 /60) % 60;
    let sec = Math.floor(myDate / 1000) %60;


    daysItem.innerHTML = days
    hoursItem.innerHTML = hours
    minItem.innerHTML = min
    secItem.innerHTML = sec
  }
  countDown()
  setInterval(countDown, 1000)

  
//countdown Quent
 let days2Item = document.querySelector("#days2")
 let hours2Item = document.querySelector("#hours2")
 let min2Item = document.querySelector("#min2")
 let sec2Item = document.querySelector("#sec2")

  let countDown2 = () => {
    let futureDate2 = new Date()
    let currentDate2 = new Date("9 Jul 2024");
    let myDate2 = currentDate2 - futureDate2;
    //console.log(myDate);

    let days2 = Math.floor(myDate2 / 1000 / 60 / 60 / 24);
    let hours2 = Math.floor(myDate2 / 1000 /60 /60) % 24;
    let min2 = Math.floor(myDate2 / 1000 /60) % 60;
    let sec2 = Math.floor(myDate2 / 1000) %60;


    days2Item.innerHTML = days2
    hours2Item.innerHTML = hours2
    min2Item.innerHTML = min2
    sec2Item.innerHTML = sec2
  }
  countDown2()
  setInterval(countDown2, 1000)


//countdown Kets
let days3Item = document.querySelector("#days3")
let hours3Item = document.querySelector("#hours3")
let min3Item = document.querySelector("#min3")
let sec3Item = document.querySelector("#sec3")

 let countDown3 = () => {
   let futureDate3 = new Date()
   let currentDate3 = new Date("9 Jul 2025");
   let myDate3 = currentDate3 - futureDate3;
   //console.log(myDate);

   let days3 = Math.floor(myDate3 / 1000 / 60 / 60 / 24);
   let hours3 = Math.floor(myDate3 / 1000 /60 /60) % 24;
   let min3 = Math.floor(myDate3 / 1000 /60) % 60;
   let sec3 = Math.floor(myDate3 / 1000) %60;


   days3Item.innerHTML = days3
   hours3Item.innerHTML = hours3
   min3Item.innerHTML = min3
   sec3Item.innerHTML = sec3
 }
 countDown3()
 setInterval(countDown3, 1000)







//                   gaymode switch
function switchModeNor(){
  if(document.getElementById('switchModeNor').checked="false"){
      document.getElementById('switchModeNor').checked = 0;
      setTimeout(()=>{window. location = 'index.html' },500);
      return true;
  }
}

function switchModeGay(){
  if(document.getElementById('switchModeGay').checked){
      setTimeout(()=>{window. location = 'gaymode.html' },500);
      return true;
  }
  return true;
}