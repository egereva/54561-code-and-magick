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
var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyes = wizard.querySelector('#wizard-eyes');
var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setupFireball = document.querySelector('.setup-fireball-wrap');
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var i = 0;

wizardCoat.addEventListener('click', function () {
  i++;
  if (i === WIZARD_COAT_COLORS.length) {
    i = 0;
  }
  wizardCoat.style.fill = WIZARD_COAT_COLORS[i];
});

var j = 0;

wizardEyes.addEventListener('click', function () {
  j++;
  if (j === WIZARD_EYES_COLORS.length) {
    j = 0;
  }
  wizardEyes.style.fill = WIZARD_EYES_COLORS[j];
});

var k = 0;

setupFireball.addEventListener('click', function () {
  k++;
  if (k === FIREBALL_COLORS.length) {
    k = 0;
  }
  setupFireball.style.backgroundColor = FIREBALL_COLORS[k];
});
