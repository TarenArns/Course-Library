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

      // loop over each category value in the current .course's data-category
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
      x[i].style.display="block";
    }
  }
  check_empty();
}

//Checks if the filtered list is empty, displays a message if it is, hides the message if it isn't
function check_empty(){
  let numVis = 0;
  let x = $filteredResults;
  for(i = 0; i < x.length; i++) {
    if(x[i].style.display === "block")
      numVis++;
  }
  let em = document.getElementById("empty_message");
  if(numVis === 0) {
    em.style.display = "block";
  }
  else {
    em.style.display = "none";
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
function myFunction3() {
  var popup = document.getElementById("pop3");
  popup.classList.toggle("show");
}
function myFunction4() {
  var popup = document.getElementById("pop4");
  popup.classList.toggle("show");
}
function myFunction5() {
  var popup = document.getElementById("pop5");
  popup.classList.toggle("show");
}
function myFunction6() {
  var popup = document.getElementById("pop6");
  popup.classList.toggle("show");
}
function myFunction7() {
  var popup = document.getElementById("pop7");
  popup.classList.toggle("show");
}
function myFunction8() {
  var popup = document.getElementById("pop8");
  popup.classList.toggle("show");
}
function myFunction9() {
  var popup = document.getElementById("pop9");
  popup.classList.toggle("show");
}
function myFunction10() {
  var popup = document.getElementById("pop10");
  popup.classList.toggle("show");
}
function myFunction11() {
  var popup = document.getElementById("pop11");
  popup.classList.toggle("show");
}
function myFunction12() {
  var popup = document.getElementById("pop12");
  popup.classList.toggle("show");
}
function myFunction13() {
  var popup = document.getElementById("pop13");
  popup.classList.toggle("show");
}
function myFunction14() {
  var popup = document.getElementById("pop14");
  popup.classList.toggle("show");
}
function myFunction15() {
  var popup = document.getElementById("pop15");
  popup.classList.toggle("show");
}
function myFunction16() {
  var popup = document.getElementById("pop16");
  popup.classList.toggle("show");
}
function myFunction17() {
  var popup = document.getElementById("pop17");
  popup.classList.toggle("show");
}
function myFunction18() {
  var popup = document.getElementById("pop18");
  popup.classList.toggle("show");
}
function myFunction19() {
  var popup = document.getElementById("pop19");
  popup.classList.toggle("show");
}
function myFunction20() {
  var popup = document.getElementById("pop20");
  popup.classList.toggle("show");
}
function myFunction21() {
  var popup = document.getElementById("pop21");
  popup.classList.toggle("show");
}
function myFunction22() {
  var popup = document.getElementById("pop22");
  popup.classList.toggle("show");
}
function myFunction23() {
  var popup = document.getElementById("pop23");
  popup.classList.toggle("show");
}
function myFunction24() {
  var popup = document.getElementById("pop24");
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