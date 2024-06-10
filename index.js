let in1 = document.querySelector('.in1');
let in2 = document.querySelector('.in2');
let btn = document.querySelector('.btn');

function qoshish() {
  let son1 = in1.value;
  let son2 = in2.value;
  let javob = Number(son1) + Number(son2);
  btn.innerHTML = javob;
}

let inp11 = document.querySelector('.inp11');
let inp22 = document.querySelector('.inp22');
let bpn11 = document.querySelector('.bpn11');

function ayirish() {
  let son1 = inp11.value;
  let son2 = inp22.value;
  let javob = Number(son1) - Number(son2);
  bpn11.innerHTML = javob;
}



let inn111 = document.querySelector('.inn111');
let inn222 = document.querySelector('.inn222');
let bkn111 = document.querySelector('.bkn111');

function kopaytirish() {
  let son1 = inn111.value;
  let son2 = inn222.value;
  let javob = Number(son1) * Number(son2);
  bkn111.innerHTML = javob;
}



let icn1111 = document.querySelector('.icn1111');
let icn2222 = document.querySelector('.icn2222');
let bcn1111 = document.querySelector('.bcn1111');

function bolish() {
  let son1 = icn1111.value;
  let son2 = icn2222.value;
  let javob = Number(son1) / Number(son2);
  bcn1111.innerHTML = javob;
}
