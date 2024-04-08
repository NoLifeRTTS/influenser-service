// Targets all textareas with class "txta"
let textareas = document.querySelectorAll('.txta'),
    hiddenDiv = document.createElement('div'),
    content = null;

// Adds a class to all textareas
for (let j of textareas) {
  j.classList.add('txtstuff');
}

// Build the hidden div's attributes

// The line below is needed if you move the style lines to CSS
// hiddenDiv.classList.add('hiddendiv');

// Add the "txta" styles, which are common to both textarea and hiddendiv
// If you want, you can remove those from CSS and add them via JS
hiddenDiv.classList.add('txta');

// Add the styles for the hidden div
// These can be in the CSS, just remove these three lines and uncomment the CSS
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

// Loop through all the textareas and add the event listener
for(let i of textareas) {
  (function(i) {
    // Note: Use 'keyup' instead of 'input'
    // if you want older IE support
    i.addEventListener('input', function() {

      // Append hiddendiv to parent of textarea, so the size is correct
      i.parentNode.appendChild(hiddenDiv);
      
      // Remove this if you want the user to be able to resize it in modern browsers
      i.style.resize = 'none';
      
      // This removes scrollbars
      i.style.overflow = 'hidden';

      // Every input/change, grab the content
      content = i.value;

      // Add the same content to the hidden div
      
      // This is for old IE
      content = content.replace(/\n/g, '<br>');
      
      // The <br ..> part is for old IE
      // This also fixes the jumpy way the textarea grows if line-height isn't included
      hiddenDiv.innerHTML = content + '<br style="line-height: 5px;">';

      // Briefly make the hidden div block but invisible
      // This is in order to read the height
      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      i.style.height = hiddenDiv.offsetHeight + 'px';

      // Make the hidden div display:none again
      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
}

$('.section1__card').click(function(){
  $('.section1__card').removeClass('clicked');
  $(this).addClass('clicked');
});

function isEmptyInp(val) {
  if (val != '' && val != undefined && val != null) {
    return true;
  }
  else {
    return false;
  }
}

$('form').submit(function(e) {
  e.preventDefault();
  let form = this;
  let nameFlag = isEmptyInp($('.name-inp').val());
  let phoneFlag = isEmptyInp($('.phone-inp').val());
  let mailFlag = isEmptyInp($('.email-inp').val());
  let linkFlag = isEmptyInp($('.link-inp').val());
  let aboutFlag = isEmptyInp($('.about-inp').val());
  let checks = $('.check-inp');
  let taskFlag = false;

  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      taskFlag = true;
    }
  }

  if (!nameFlag) {
    $('.section4__form .inp1').css('border-bottom', '1px solid #cb3939');
  }
  else {
    $('.section4__form .inp1').css('border-bottom', '1px solid #ffffff')
  }

  if (!phoneFlag) {
    $('.section4__form .inp2').css('border-bottom', '1px solid #cb3939');
  }
  else {
    $('.section4__form .inp2').css('border-bottom', '1px solid #ffffff')
  }

  if (!mailFlag) {
    $('.section4__form .inp3').css('border-bottom', '1px solid #cb3939');
  }
  else {
    $('.section4__form .inp3').css('border-bottom', '1px solid #ffffff')
  }

  if (!linkFlag) {
    $('.section4__form .inp4').css('border-bottom', '1px solid #cb3939');
  }
  else {
    $('.section4__form .inp4').css('border-bottom', '1px solid #ffffff')
  }

  if (!aboutFlag) {
    $('.section4__form .inp5').css('border-bottom', '1px solid #cb3939');
  }
  else {
    $('.section4__form .inp5').css('border-bottom', '1px solid #ffffff')
  }

  if (nameFlag && phoneFlag && mailFlag && linkFlag && aboutFlag && taskFlag) {
    console.log("send!");
  }
  else {
    console.log("((((");
  }

});