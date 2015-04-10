// JavaScript file of simpulsnip for loading in snipp-able elements and copy pasting of their relevant code
// By Alex Wigmore
// @MrWigster
// http://alex-wigmore.co.uk/simpulsnip

// On Load func
$(function(){
  // Get out JSON Data
  $.getJSON('data.json',callbackFuncWithData);
  // Call back function that runs when all data has been grabbed
  function callbackFuncWithData(data) {
    // Loop over each item group
    $.each(data, function(arrayID,elements) {
      // Create the heading for each item group
      output='<h3>'+elements.ELEMENT_TYPE+'</h3>';
      $("#placeholder").append(output);
      // Now each item within that group
      $.each(elements.ELEMENTS, function(name,elementData) {
        // Check if an optional src has been provided to show as an image
        if (elementData.SRC != null){
          elSrc = '<p><img src="'+elementData.SRC+'"></p>';
        } else {
          elSrc = '';
        }
        // Put this item on the page with relevant HTML and markup
        output=
        '<div class="element">'
        // Add any extra elements you want here, read the readme.md
        + '<p>'+elementData.NAME+'</p>'
        + elSrc
        + '<div class="hover-hint">Simply hover to select &darr;</div>'
        + '<textarea>'+elementData.HTML+'</textarea>'
        + '<div class="tooltip">Great - Content highlighted, just press ctrl-c (cmd-c on mac) to copy</div>'
        + '</div>';
        $("#placeholder").append(output);
      });
    });
    // Delegated handling of mouseover to this function as the elements on ready on page load straight away due to JSON delays
    hoverHandler();
  }
  function hoverHandler (){
    // On mouseover of any element select that items textarea ready for easy copy/pasting
    $('body').on('mouseenter','textarea',function(){
      // This helps the textarea always be focused, but it's buggy when scrolling. needs to be fixed - not 100% vital though, only happens sometimes when tabbing out then back in to page.
      // $(this).focus();


      text = $(this).select();
      // Remove if you want, just easy for testing
      console.log(text.val());
    })
  }
});