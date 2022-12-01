
  var fir = document.getElementById("page6Content");
  var sec = document.getElementById("page7Content");
  var thir = document.getElementById("page8Content");
  var four = document.getElementById("page9Content");

  var btn1 = document.getElementById('subBtn1');
  var btn2 = document.getElementById('subBtn2');
  var btn3 = document.getElementById('subBtn3');
  var btn4 = document.getElementById('subBtn4');

  


var first = () =>{
  fir.classList.remove('hidden');
  sec.classList.add('hidden');
  thir.classList.add('hidden');
  four.classList.add('hidden');

  btn1.classList.add('active-inside-li');
  btn2.classList.remove('active-inside-li');
  btn3.classList.remove('active-inside-li');
  btn4.classList.remove('active-inside-li');

}


var second = () =>{
  fir.classList.add('hidden');
  sec.classList.remove('hidden');
  thir.classList.add('hidden');
  four.classList.add('hidden');

  btn1.classList.remove('active-inside-li');
  btn2.classList.add('active-inside-li');
  btn3.classList.remove('active-inside-li');
  btn4.classList.remove('active-inside-li');

}


var third = () =>{

  fir.classList.add('hidden');
  sec.classList.add('hidden');
  thir.classList.remove('hidden');
  four.classList.add('hidden');

  btn1.classList.remove('active-inside-li');
  btn2.classList.remove('active-inside-li');
  btn3.classList.add('active-inside-li');
  btn4.classList.remove('active-inside-li');

}


var fourth = () =>{
  fir.classList.add('hidden');
  sec.classList.add('hidden');
  thir.classList.add('hidden');
  four.classList.remove('hidden');

  btn1.classList.remove('active-inside-li');
  btn2.classList.remove('active-inside-li');
  btn3.classList.remove('active-inside-li');
  btn4.classList.add('active-inside-li');
}