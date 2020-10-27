"use strict";

const WIZARD_NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпина`,
  `Вашингтон`,
];
const COAT_COLOR = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`,
];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирбелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`,
];

// {
// "DATA_WIZARDS": {
//  "WIZARD_NAMES": [
//       `Иван`,
//       `Хуан Себастьян`,
//       `Мария`,
//       `Кристоф`,
//       `Виктор`,
//       `Юлия`,
//       `Люпина`,
//       `Вашингтон`
//     ],
//     "COAT_COLOR": [
//       `rgb(101, 137, 164)`,
//       `rgb(241, 43, 107)`,
//       `rgb(146, 100, 161)`,
//       `rgb(56, 159, 117)`,
//       `rgb(215, 210, 55)`,
//       `rgb(0, 0, 0)`
//     ],
//     "EYES_COLOR": [`black`, `red`, `blue`, `yellow`, `green`],
//      "WIZARD_SURNAMES": [
//       `да Марья`,
//       `Верон`,
//       `Мирбелла`,
//       `Вальц`,
//       `Онопко`,
//       `Топольницкая`,
//       `Нионго`,
//       `Ирвинг`
//     ]
//   }
// }

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = userDialog.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);

let wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[0],
    surname: WIZARD_SURNAMES[0],
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[1],
    surname: WIZARD_SURNAMES[1],
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYES_COLOR[2],
    surname: WIZARD_SURNAMES[2],
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYES_COLOR[3],
    surname: WIZARD_SURNAMES[3],
  },
];

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent =
    wizard.name + `\n` + wizard.surname;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

// const getRandomElement = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     const randomElement = array[randomIndex];
//   }
//   return randomElement;
// };
// const getRandomElement = function (array = null) {
// if (array === 'WIZARD_NAMES'){
//   const index = Math.floor(Math.random() * DATA_WIZARDS.names.WIZARD_NAMES.length)
//   return DATA_WIZARDS.names.WIZARD_NAMES[index]
// }
// if (array === 'WIZARD_SURNAMES'){
//   const index = Math.floor(Math.random() * DATA_WIZARDS.names.WIZARD_SURNAMES.length)
//   return DATA_WIZARDS.names.WIZARD_SURNAMES[index]
// }
// const names = [
//   ...DATA_WIZARDS.names.WIZARD_NAMES,
//   ...DATA_WIZARDS.names.WIZARD_SURNAMES
// ]
// const index = Math.floor(Math.random() * names.length)
// return names[index]
// }
// console.log(getRandomElement)
