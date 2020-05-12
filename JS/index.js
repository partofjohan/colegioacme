var element = document.getElementById("elements")
console.log(element)
var elementos = element.getElementsByTagName("span").length
console.log(elementos)

var flag_menu=0
var mql = window.matchMedia('(max-width: 600px)');
var pos=1

function left(){
  if(pos==1){
    rote(5)
  }else{
    rote(pos-1)
  }
}

function rigth(){
  if(pos==5){
    rote(1)
  }else{
    rote(pos+1)
  }
}

function rote(index){
  pos=index
  console.log(index)
  for (var i=0;i<document.getElementsByClassName("circle").length;i+=1){
    document.getElementsByClassName("circle")[i].classList.remove("circle-fill");
  }
  document.getElementById("imagen").src="images".concat("/IMG",index,".jpg")
  document.getElementById("circle".concat(index)).classList.add("circle-fill");
}

function menu(){
    console.log("Holita")
    if (flag_menu==0) {
        //document.getElementsByClassName("menu-items")
        for (var i=0;i<document.getElementsByClassName("menu-items").length;i+=1){
            document.getElementsByClassName("menu-items")[i].style.display = 'block';
        }
        document.getElementsByTagName('header')[0].style.height='265px'
        flag_menu=1
    }else{
        for (var i=0;i<document.getElementsByClassName("menu-items").length;i+=1){
            document.getElementsByClassName("menu-items")[i].style.display = 'none';
        }
        document.getElementsByTagName('header')[0].style.height='105px'
        flag_menu=0
    }
}



function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    //para.textContent = 'This is a narrow screen — less than 600px wide.';
    //document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than than 600 pixels wide */
    //para.textContent = 'This is a wide screen — more than 600px wide.';
    //document.body.style.backgroundColor = 'blue';
    
    
    for (var i=0;i<document.getElementsByClassName("menu-items").length;i+=1){
        document.getElementsByClassName("menu-items")[i].style.display = 'block';
    }
    document.getElementsByTagName('header')[0].style.height='105px'
    document.getElementsByClassName("btn-res-log")[0].style.display = 'none';
  }
}

mql.addListener(screenTest);