var $filterCheckboxes = $('input[type="checkbox"]');
var $filteredResults = $('.course');
var filterFunc = function() {
  
  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);
  });

  // create a collection containing all of the filterable elements
  $filteredResults = $('.course');

  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function(name, filterValues) {

    // filter each .course element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      // loop over each category value in the current .flower's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .course element is returned
      return matched;

    });
  });

  $('.course').hide().filter($filteredResults).show();
  search_course();
}

$filterCheckboxes.on('change', filterFunc);

function search_course() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = $filteredResults;

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display="none";
    }
    else {
      x[i].style.display="list-item";
    }
  }
}

// When the user clicks on div, open the popup
function myFunction1() {
  var popup = document.getElementById("pop1");
  popup.classList.toggle("show");
}
function myFunction2() {
  var popup = document.getElementById("pop2");
  popup.classList.toggle("show");
}

function myFunction100() {
  var popup = document.getElementById("pop100");
  popup.classList.toggle("show");
}
function myFunction101() {
  var popup = document.getElementById("pop101");
  popup.classList.toggle("show");
}
function myFunction102() {
  var popup = document.getElementById("pop102");
  popup.classList.toggle("show");
}
function myFunction103() {
  var popup = document.getElementById("pop103");
  popup.classList.toggle("show");
}
function myFunction104() {
  var popup = document.getElementById("pop104");
  popup.classList.toggle("show");
}
function myFunction105() {
  var popup = document.getElementById("pop105");
  popup.classList.toggle("show");
}
function myFunction106() {
  var popup = document.getElementById("pop106");
  popup.classList.toggle("show");
}
function myFunction107() {
  var popup = document.getElementById("pop107");
  popup.classList.toggle("show");
}
function myFunction108() {
  var popup = document.getElementById("pop108");
  popup.classList.toggle("show");
}
function myFunction109() {
  var popup = document.getElementById("pop109");
  popup.classList.toggle("show");
}
function myFunction110() {
  var popup = document.getElementById("pop110");
  popup.classList.toggle("show");
}
function myFunction111() {
  var popup = document.getElementById("pop111");
  popup.classList.toggle("show");
}
function myFunction112() {
  var popup = document.getElementById("pop112");
  popup.classList.toggle("show");
}
function myFunction113() {
  var popup = document.getElementById("pop113");
  popup.classList.toggle("show");
}
function myFunction114() {
  var popup = document.getElementById("pop114");
  popup.classList.toggle("show");
}
function myFunction115() {
  var popup = document.getElementById("pop115");
  popup.classList.toggle("show");
}
function myFunction116() {
  var popup = document.getElementById("pop116");
  popup.classList.toggle("show");
}
function myFunction117() {
  var popup = document.getElementById("pop117");
  popup.classList.toggle("show");
}
function myFunction118() {
  var popup = document.getElementById("pop118");
  popup.classList.toggle("show");
}
function myFunction119() {
  var popup = document.getElementById("pop119");
  popup.classList.toggle("show");
}
function myFunction120() {
  var popup = document.getElementById("pop120");
  popup.classList.toggle("show");
}
function myFunction121() {
  var popup = document.getElementById("pop121");
  popup.classList.toggle("show");
}
function myFunction122() {
  var popup = document.getElementById("pop122");
  popup.classList.toggle("show");
}
function myFunction123() {
  var popup = document.getElementById("pop123");
  popup.classList.toggle("show");
}
function myFunction124() {
  var popup = document.getElementById("pop124");
  popup.classList.toggle("show");
}
function myFunction125() {
  var popup = document.getElementById("pop125");
  popup.classList.toggle("show");
}
function myFunction126() {
  var popup = document.getElementById("pop126");
  popup.classList.toggle("show");
}
function myFunction127() {
  var popup = document.getElementById("pop127");
  popup.classList.toggle("show");
}
function myFunction128() {
  var popup = document.getElementById("pop128");
  popup.classList.toggle("show");
}
function myFunction129() {
  var popup = document.getElementById("pop129");
  popup.classList.toggle("show");
}