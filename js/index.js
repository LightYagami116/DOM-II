// Your code goes here

const pTags = document.querySelectorAll('p');

for (i = 0; i < pTags.length; i++) {
  pTags[i].addEventListener('mouseover', (e) => {
    e.target.style.color = 'red';
  });
  pTags[i].addEventListener('mouseout', (e) => {
    e.target.style.color = '#000';
  });
}
const iTags = document.querySelectorAll('img');
for(i = 0; i < iTags.length; i++){
  //click
  iTags[i].addEventListener('click', (e) => {
    e.target.style.opacity = 0.4;
  });
  //dblclick
  iTags[i].addEventListener('dblclick', (e) => {
    e.target.style.opacity = 1;
  });
}
//scroll to top
const foot = document.querySelector('.footer');
foot.addEventListener('click', () => {
  const j = {
    top: 0,
    behavior: 'smooth'
  }
  window.scrollTo(j);
});
//click/preventDefault
const noContext = document.querySelector('img');

noContext.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
const navStop = document.querySelector('nav');
navStop.addEventListener('click', (e) => {
  e.preventDefault();
  alert(`Not Working!!`);
});
//keydown/keyup
const x2 = document.querySelector('body');

x2.addEventListener('keydown', (e) => {
    e.target.style.opacity = 0;
});
x2.addEventListener('keyup', (e) => {
    e.target.style.opacity = 1;
});
//mousedown/mouseup
  x2.addEventListener('mousedown', (e) => {
    e.target.style.background = '#000';
    e.target.style.color = '#fff';
  });
  x2.addEventListener('mouseup', (e) => {
    e.target.style.background = '#fff';
    e.target.style.color = '#000';
  });
//load
window.addEventListener('load', () => {
    console.log('Page Loaded!');
});
//resize
var r = 0;
window.addEventListener('resize', () => {
  const num = r++;
  console.log(`window resized ${num}`);
});
//wheel
const scrollCount = document.querySelector('body');
var m = 0;
scrollCount.addEventListener('wheel', (e) => {
  const sCount = m++;
    e.stopPropagation;
    console.log(`I scrolled ${sCount} pixels 😁`);
});
//selector
var x5 = document.querySelector('body');

x5.addEventListener('select', (e) => {
    console.log('something selected');

});
