'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

var nameField = document.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxLength = '50';

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setupFireball = document.querySelector('.setup-fireball-wrap');
var FireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


var setColors = function (arrColors) {
  return arrColors[Math.floor(Math.random() * arrColors.length)];  //  а как тут правильно сделать перебор цветов по порядку?
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = setColors(wizardCoatColors);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = setColors(wizardEyesColors);
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = setColors(FireballColors);
});
