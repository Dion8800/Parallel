
 
  var flexBtn1 = document.getElementById('floatBtn1');
  var flexBtn2 = document.getElementById('floatBtn2');
  var flexBtn3 = document.getElementById('floatBtn3');
  var flexBtn4 = document.getElementById('floatBtn4');
  


var first = () =>{
 
  flexBtn1.classList.add('active-float');
  flexBtn2.classList.remove('active-float');
  flexBtn3.classList.remove('active-float');
  flexBtn4.classList.remove('active-float');
  

}


var second = () =>{
  
    flexBtn1.classList.remove('active-float');
    flexBtn2.classList.add('active-float');
    flexBtn3.classList.remove('active-float');
    flexBtn4.classList.remove('active-float');
    
    
}


var third = () =>{

    flexBtn1.classList.remove('active-float');
    flexBtn2.classList.remove('active-float');
    flexBtn3.classList.add('active-float');
    flexBtn4.classList.remove('active-float');
    
}


var fourth = () =>{
    

    flexBtn1.classList.remove('active-float');
    flexBtn2.classList.remove('active-float');
    flexBtn3.classList.remove('active-float');
    flexBtn4.classList.add('active-float');
    
}