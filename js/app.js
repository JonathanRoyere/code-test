window.onload = function() {

document.getElementById('hide_para').onclick = function() {
     document.getElementById('second_para').style.display = "none";
}

document.getElementById('show_para').onclick = function() {
     document.getElementById('second_para').style.display = "block";
}


// toggle class for blue h1 on body
let change_h1 = document.getElementById('change_h1');

change_h1.onclick = function() {
  let clicked = this.getAttribute('data-clicked');
  let color = document.getElementById('change_h1_color');

  if(clicked == 'false') {
    color.innerHTML = 'black';
    document.body.classList.add("blue-h1");
    this.setAttribute('data-clicked','true');
  }
  else {
    color.innerHTML= 'blue';
    document.body.classList.remove("blue-h1");
    this.setAttribute('data-clicked','false');
  }

 }

// toggle class with after for h1 on body
 let banana = document.getElementById('banana_h1');

 banana.onclick = function() {
   let clicked = this.getAttribute('data-clicked');

   if(clicked == 'false') {
     document.body.classList.add("banana-h1");
     this.innerHTML = 'remove the word banana to the end of h1';
      this.setAttribute('data-clicked','true');
   }
   else {
     this.innerHTML = 'add the word banana to the end of h1';
     document.body.classList.remove("banana-h1");
     this.setAttribute('data-clicked','false');
   }

  }


//mobile menu toggle
document.getElementById('mobile_menu').onclick = function() {
  document.getElementById('menu').classList.toggle('toggled');
    document.getElementById('mobile_nav').classList.toggle('open');
}


} // end doc ready
