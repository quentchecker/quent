const progressBar = document.getElementsByClassName
('progress-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const widht = parseFloat(computedStyle.getPropertyValue
        ('--width')) || 0
    progressBar.style.setProperty('--width', widht + .1)
}, 5)


//                 All countdowns



//bodycount quent
let bcountItem = document.querySelector("#bcount")

 let bountUp = () =>{
  let nowBcount = new Date()
  let oldBcount = new Date("25 oct 2023");
  let QuentBcount = nowBcount - oldBcount;

  let Bcount1 = Math.floor(QuentBcount / 1000 / 60 / 60 / 16);
  let Bcount2 = Math.floor(QuentBcount / 1000 / 60 / 60 / 96);
  let Bcount = Bcount1 + Bcount2;

  bcountItem.innerHTML = Bcount
 }
 bountUp()
 setInterval(bountUp, 10000)


// gayness tester
function gayness(){
  let nameGay1 = document.getElementById("fname").value;
  let nameGay = nameGay1.toLowerCase();
  let gayCheck = document.querySelector("#GCvalue");
  let gaylevel = 100;


  switch (nameGay){
    case "quent": case "quentin":
      gaylevel = 1.2 + "     x 10⁸";
    break;
    case "kets": case "kes":
      gaylevel = 33;
    break;
    case "thomas": case "tommy boy": case "discord mod":
      gaylevel = "≈" + 87;
    break;
    case "dennet": case "dennita": case "little boy": case "dennis":
      gaylevel = 9;
    break;
    case "seth": case "z": case "kast": case "sad":
      gaylevel = 12;
    break;
    case "thijs": case "micro kleine thijs": case "kleine thijs": case "oude kaas guy":
      gaylevel = 58;
    break;
    case "alex": case "boer": case "lexi": case "lexy":
      gaylevel = 19;
    break;
    case "freek": case "thijs2":
      gaylevel = 50;
    break;
    case "pablo": case "zagros":
      gaylevel =  0.345526;
    break;
    case "thijmen":
      gaylevel = 92;
    break;
    case "":
      gaylevel = none;
    break;
  }

  gayCheck.innerHTML = gaylevel + "%"
  console.log(nameGay);
}







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