
/*

====================
HEADER COLOR CHANGER
====================

*/

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = 'darkblue';
  } else {
    header.style.backgroundColor = 'blue';
  }
});


/*

==============
SEARCH FILTER 
==============

*/

const searchBar = document.querySelector('.search-bar');
const carCards = document.querySelectorAll('.car-card');

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  
  carCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});



