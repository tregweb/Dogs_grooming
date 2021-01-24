let slide = document.querySelectorAll('.gallery-img'),
  prew = document.querySelector('.gl-prew'),
  next = document.querySelector('.gl-next'),
  points = document.querySelectorAll('.point');

prew.addEventListener('click', left);
next.addEventListener('click', rigth);

function left() {
  toleft()
  for (let i = 0; i < points.length; i++) {
    if (points[i].classList.contains('activepoint')) {
      points[i].classList.remove('activepoint');
      i--;
      if (i < 0) {
        i = points.length - 1;
      }
      points[i].classList.add('activepoint');
    }
  }
}

function rigth() {
  torigth();
  for (let i = 0; i < points.length; i++) {
    if (points[i].classList.contains('activepoint')) {
      points[i].classList.remove('activepoint');
      i++;
      if (i == points.length) {
        i = 0;
      }
      points[i].classList.add('activepoint');
    }
  }
}

function toleft() {
  for (let i = 0; i < slide.length; i++) {
    switch (true) {
      case slide[i].classList.contains('gallery-left'): slide[i].classList.remove('gallery-left');
        slide[i].classList.add('gallery-left-2');
        break;
      case slide[i].classList.contains('gallery-left-2'): slide[i].classList.remove('gallery-left-2');
        slide[i].classList.add('gallery-rigth-2');
        break;
      case slide[i].classList.contains('gallery-rigth-2'): slide[i].classList.remove('gallery-rigth-2');
        slide[i].classList.add('gallery-rigth');
        break;
      case slide[i].classList.contains('gallery-rigth'): slide[i].classList.remove('gallery-rigth');
        slide[i].classList.add('gallery-center');
        break;
      case slide[i].classList.contains('gallery-center'): slide[i].classList.remove('gallery-center');
        slide[i].classList.add('gallery-left');
        break;
    }
  }
}
function torigth() {
  for (let i = 0; i < slide.length; i++) {
    switch (true) {
      case slide[i].classList.contains('gallery-rigth'): slide[i].classList.remove('gallery-rigth');
        slide[i].classList.add('gallery-rigth-2');
        break;
      case slide[i].classList.contains('gallery-rigth-2'): slide[i].classList.remove('gallery-rigth-2');
        slide[i].classList.add('gallery-left-2');
        break;
      case slide[i].classList.contains('gallery-left-2'): slide[i].classList.remove('gallery-left-2');
        slide[i].classList.add('gallery-left');
        break;
      case slide[i].classList.contains('gallery-left'): slide[i].classList.remove('gallery-left');
        slide[i].classList.add('gallery-center');
        break;
      case slide[i].classList.contains('gallery-center'): slide[i].classList.remove('gallery-center');
        slide[i].classList.add('gallery-rigth');
        break;
    }
  }
}

//reviews-slider//

let reviewsPrew = document.querySelector('.reviews-prew'),
  reviewsNext = document.querySelector('.reviews-next'),
  sliderLine = document.querySelector('.reviews__slider-body'),
  curentPos = 150,
  pos = curentPos + 'px';

sliderLine.style.left = pos;

reviewsPrew.addEventListener('click', () => {
  if (reviewsNext.classList.contains('not-active')) {
    reviewsNext.classList.remove('not-active');
    reviewsNext.style.opacity = 1;
  }
  // -223
  if (curentPos == -596) {

    reviewsPrew.classList.add('not-active');

  }
  else {
    curentPos = curentPos - 373;
    pos = curentPos + 'px';
    sliderLine.style.left = pos;
    if (sliderLine.style.left == '-596px') {
      reviewsPrew.classList.add('not-active');
      document.querySelectorAll('.name')[4].classList.remove('smile-name');
      document.querySelectorAll('.reviews-slide-body-ava')[4].classList.remove('smile-ava');
      document.querySelector('.smile-text').classList.remove('smile-text-t');
      reviewsPrew.style.opacity = 0.3;
    }
  }
});

reviewsNext.addEventListener('click', () => {
  if (reviewsPrew.classList.contains('not-active')) {
    document.querySelectorAll('.name')[4].classList.add('smile-name');
    document.querySelectorAll('.reviews-slide-body-ava')[4].classList.add('smile-ava');
    document.querySelector('.smile-text').classList.add('smile-text-t');
    reviewsPrew.classList.remove('not-active');
    reviewsPrew.style.opacity = 1;
  }
  if (curentPos == 150) {
    reviewsNext.classList.add('not-active');
  }
  else {
    curentPos = curentPos + 373;
    pos = curentPos + 'px';
    sliderLine.style.left = pos;
    if (sliderLine.style.left == '150px') {
      reviewsNext.style.opacity = 0.3;
      reviewsNext.classList.add('not-active');
    }
  }
});


