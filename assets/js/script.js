'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


document.getElementById('myBtn').addEventListener('click', function() {
  openModal('myModal');
});

document.getElementById('myBtn1').addEventListener('click', function() {
  openModal('myModal1');
});

document.getElementById('myBtn2').addEventListener('click', function() {
  openModal('myModal2');
});


// document.getElementById('myBtn3').addEventListener('click', function() {
//   openModal('myModal3');
// });


document.getElementById('myBtn4').addEventListener('click', function() {
  openModal('myModal4');
});


// document.getElementById('myBtn5').addEventListener('click', function() {
//   openModal('myModal5');
// });


// document.getElementById('myBtn6').addEventListener('click', function() {
//   openModal('myModal6');
// });


// document.getElementById('myBtn7').addEventListener('click', function() {
//   openModal('myModal7');
// });


// document.getElementById('myBtn8').addEventListener('click', function() {
//   openModal('myModal8');
// });


document.getElementById('myBtn9').addEventListener('click', function() {
  openModal('myModal9');
});


// document.getElementById('myBtn10').addEventListener('click', function() {
//   openModal('myModal10');
// });


// document.getElementById('myBtn11').addEventListener('click', function() {
//   openModal('myModal11');
// });


document.getElementById('myBtn12').addEventListener('click', function() {
  openModal('myModal12');
});


document.getElementById('myBtn13').addEventListener('click', function() {
  openModal('myModal13');
});


document.getElementById('myBtn14').addEventListener('click', function() {
  openModal('myModal14');
});


document.getElementById('myBtn15').addEventListener('click', function() {
  openModal('myModal15');
});


document.getElementById('myBtn16').addEventListener('click', function() {
  openModal('myModal16');
});


document.getElementById('myBtn17').addEventListener('click', function() {
  openModal('myModal17');
});


document.getElementById('myBtn18').addEventListener('click', function() {
  openModal('myModal18');
});


document.getElementById('myBtn19').addEventListener('click', function() {
  openModal('myModal19');
});


document.getElementById('myBtn20').addEventListener('click', function() {
  openModal('myModal20');
});


// document.getElementById('myBtn21').addEventListener('click', function() {
//   openModal('myModal21');
// });


// document.getElementById('myBtn22').addEventListener('click', function() {
//   openModal('myModal22');
// });


document.getElementById('myBtn23').addEventListener('click', function() {
  openModal('myModal23');
});


document.getElementById('myBtn24').addEventListener('click', function() {
  openModal('myModal24');
});


document.getElementById('myBtn25').addEventListener('click', function() {
  openModal('myModal25');
});


document.getElementById('myBtn26').addEventListener('click', function() {
  openModal('myModal26');
});


document.getElementById('myBtn27').addEventListener('click', function() {
  openModal('myModal27');
});


document.getElementById('myBtn28').addEventListener('click', function() {
  openModal('myModal28');
});


document.getElementById('myBtn29').addEventListener('click', function() {
  openModal('myModal29');
});


document.getElementById('myBtn30').addEventListener('click', function() {
  openModal('myModal30');
});


document.getElementById('myBtn31').addEventListener('click', function() {
  openModal('myModal31');
});


document.getElementById('myBtn32').addEventListener('click', function() {
  openModal('myModal32');
});


document.getElementById('myBtn33').addEventListener('click', function() {
  openModal('myModal33');
});


document.getElementById('myBtn34').addEventListener('click', function() {
  openModal('myModal34');
});


document.getElementById('myBtn35').addEventListener('click', function() {
  openModal('myModal35');
});


document.getElementById('myBtn36').addEventListener('click', function() {
  openModal('myModal36');
});


document.getElementById('myBtn37').addEventListener('click', function() {
  openModal('myModal37');
});

document.getElementById('myBtn38').addEventListener('click', function() {
  openModal('myModal38');
});


document.getElementById('myBtn39').addEventListener('click', function() {
  openModal('myModal39');
});



document.getElementById('myBtn40').addEventListener('click', function() {
  openModal('myModal40');
});



document.getElementById('myBtn41').addEventListener('click', function() {
  openModal('myModal41');
});




document.getElementById('myBtn42').addEventListener('click', function() {
  openModal('myModal42');
});




document.getElementById('myBtn43').addEventListener('click', function() {
  openModal('myModal43');
});




document.getElementById('myBtn44').addEventListener('click', function() {
  openModal('myModal44');
});




document.getElementById('myBtn45').addEventListener('click', function() {
  openModal('myModal45');
});







document.getElementById('myBtn46').addEventListener('click', function() {
  openModal('myModal46');
});







document.getElementById('myBtn47').addEventListener('click', function() {
  openModal('myModal47');
});









document.getElementById('myBtn48').addEventListener('click', function() {
  openModal('myModal48');
});











document.getElementById('myBtn49').addEventListener('click', function() {
  openModal('myModal49');
});










document.getElementById('myBtn50').addEventListener('click', function() {
  openModal('myModal50');
});





function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'flex';

  // Close the modal when clicking outside of it
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
