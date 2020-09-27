var FIRE_BALL_SIZE = 22;
var SPEED_WITH_WIND = 5;
var SPEED_AGAINST_WIND = 2;

var getFireballSpeed = function (isMovingLeft) {
  return isMovingLeft ? SPEED_AGAINST_WIND : SPEED_WITH_WIND;
};
var WIZARD_WIDTH = 70;
var WIZARD_HEIGHT = 1.337 * WIZARD_WIDTH;
var getWizardHeight = function () {
  return WIZARD_HEIGHT;
};
var WIZARD_SPEED = 3;
var getWizardX = function (gameFieldWidth) {
  return (gameFieldWidth - WIZARD_WIDTH) / 2;
};
var getWizardY = function (gameFieldHeight) {
  return gameFieldHeight / 3;
};
