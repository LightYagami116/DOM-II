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
