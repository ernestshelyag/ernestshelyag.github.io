function randCustom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addSquares () {
  let quant = document.body.clientHeight / 100;
  let randSquare = function () {
    let decorDiv = document.createElement('div');
    let randBorder = randCustom(2, 10) + 'px';
    let randWidth = randCustom(100, 200) + 'px';
    let randHeight = randCustom(100, 200) + 'px';
    let randTop = randCustom(0, document.body.clientHeight) + 'px';
    let randLeft = randCustom(0, document.body.clientWidth) + 'px';
    let randColor = '0.' + randCustom(1, 3);
    decorDiv.className = 'square-outer';
    decorDiv.style.cssText = ' width: ' + randWidth + ';' +
      'height: ' + randHeight + ';' +
      'top: ' + randTop + ';' +
      'left: ' + randLeft + ';';
    decorDiv.innerHTML = '<div class="div-inner"><span class="span-inner"></span></div>';
    let spanInner = decorDiv.getElementsByClassName('span-inner');
    spanInner[0].style.cssText = ' border: solid ' + randBorder + ' rgba(255,255,255,' + randColor + ') ';
    return decorDiv;
  };
  for (let i = 0; i < quant; i++) {
    document.getElementById('elem').parentNode.appendChild(randSquare());
  }
}

function paralax () {
  let divs = document.getElementsByClassName('div-inner');
  window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    scrolled = scrolled.toFixed(0);
    for (let i = 0; i < divs.length; i++) {
      let index = Number('0.' + i).toFixed(2);
      divs[i].style.cssText = ' top: ' + scrolled * index + 'px ;';
    }
  };
}

addSquares();
paralax();
