


//for the show more button

document.addEventListener('DOMContentLoaded', function() {
    // Initial number of cards to show
    const initialCardsToShow = 3;
  
    // Select all cards and the "Show More Properties" button
    const cards = document.querySelectorAll('.card-js');
    const showMoreBtn = document.getElementById('showMoreBtn');
  
    for (let i = initialCardsToShow; i < cards.length; i++) {
      cards[i].classList.add('hidden');
    }
  
    // Event listener for the "Show More Properties" button
    showMoreBtn.addEventListener('click', function() {
      // Toggle the "hidden" class for all cards beyond the initial count
      for (let i = initialCardsToShow; i < cards.length; i++) {
        cards[i].classList.toggle('hidden');
      }
  
      // Change the button text based on the current state
      const buttonText = showMoreBtn.innerText === 'Show More Properties' ? 'Show Less Properties' : 'Show More Properties';
      showMoreBtn.innerText = buttonText;
    });
  });


  


function search() {
  // Get input values
  var searchValue1 = document.getElementById('searchInput1').value.toLowerCase();
  var searchValue2 = document.getElementById('searchInput2').value.toLowerCase();
  var searchValue3 = document.getElementById('searchInput3').value.toLowerCase();
  var searchValue4 = document.getElementById('searchInput4').value.toLowerCase();

  // Get all items with the class "parent"
  var items = document.querySelectorAll('.parent');

  // Loop through each item
  items.forEach(function(item) {
    // Get the text content of each relevant child element
    var text1 = item.querySelector('.search-1').textContent.toLowerCase();
    var text2 = item.querySelector('.search-2').textContent.toLowerCase();
    var text3 = item.querySelector('.search-3').textContent.toLowerCase();
    var text4 = item.querySelector('.search-4').textContent.toLowerCase();

    // Check if the item matches the search criteria
    if (text1.includes(searchValue1) ||
        text2.includes(searchValue2) ||
        text3.includes(searchValue3) ||
        text4.includes(searchValue4)) {
      // If it matches, display the item
      item.style.display = 'flex';
    } else {
      // If it doesn't match, hide the item
      item.style.display = 'none';
    }
  });

  // Attach the search function to the input events

}
document.getElementById('searchInput1').addEventListener('input', search);
document.getElementById('searchInput2').addEventListener('input', search);
document.getElementById('searchInput3').addEventListener('input', search);
document.getElementById('searchInput4').addEventListener('input', search);






  
  