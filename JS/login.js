var flag_menu=0
var mql = window.matchMedia('(max-width: 600px)');

function menu(){
    console.log("Holita")
    if (flag_menu==0) {
        //document.getElementsByClassName("menu-items")
        for (var i=0;i<document.getElementsByClassName("menu-items").length;i+=1){
            document.getElementsByClassName("menu-items")[i].style.display = 'block';
        }
        document.getElementsByTagName('header')[0].style.height='233px'
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
    for (var i=0;i<document.getElementsByClassName("menu-items").length;i+=1){
      document.getElementsByClassName("menu-items")[i].style.display = 'none';
  }
  } else {
    /* the viewport is more than than 600 pixels wide */
    //para.textContent = 'This is a wide screen — more than 600px wide.';
    //document.body.style.backgroundColor = 'blue';
    
    
    for (var i=0;i<document.getElementsByClassName("menu-items").length;i+=1){
        document.getElementsByClassName("menu-items")[i].style.display = 'block';
    }
    document.getElementsByTagName('header')[0].style.height='105px'
  }
}

mql.addListener(screenTest);
