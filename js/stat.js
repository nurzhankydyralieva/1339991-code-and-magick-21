"use strict";
const CLOUD_WIDTH = 420;
const CLOUD_HEIGTH = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const GAP_X = 90;
const GAP_Y = 230;
const BAR_GAP = 20;
const FONT_GAP = 60;
const TEXT_WIDTH = 30;
const BAR_WIDTH = 50;
const BAR_HEIGTH = CLOUD_HEIGTH - GAP - CLOUD_X - GAP;
const CLOUD_SHADOW = `rgba(0, 0, 0, 0.7)`;
const CLOUD_WHITE = `#fff`;
const COLOR_TEXT = `#000`;
const MAIN_PLAYER_COLOR = `rgba(255, 0, 0, 1)`;
const TEXT_X = 140;
const TEXT_ONE = 35;
const TEXT_TWO = 55;
const RANDOM_NUMBER = 100;
const NUMBER = 1;
const MAIN_PLAYER = `Вы`;
const FONT_STYLE = `16px PT Mono`;
const WINNER_ON = `Ура вы победили!`;
const LIST_RESULTS = `Список результатов:`;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

const getMaxElement = function (array) {
  let maxElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WHITE);

  ctx.fillStyle = COLOR_TEXT;
  ctx.font = FONT_STYLE;
  ctx.fillText(WINNER_ON, TEXT_X, TEXT_ONE);
  ctx.fillText(LIST_RESULTS, TEXT_X, TEXT_TWO);
  const maxTime = getMaxElement(times);

  const randomColor = function (randomSaturation) {
    ctx.fillStyle = `hsl(240,` + randomSaturation + `%, 50%)`;
  };
  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = COLOR_TEXT;
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      CLOUD_Y + GAP_Y + BAR_GAP
    );

    const renderRectangle = function (ctx, x, y, width, height, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, BAR_WIDTH, barHeight);
    };

    const randomSaturation = Math.floor(Math.random() * RANDOM_NUMBER) + NUMBER;
    ctx.fillStyle =
      players[i] === MAIN_PLAYER
        ? MAIN_PLAYER_COLOR
        : randomColor(randomSaturation);

    const barHeight = (BAR_HEIGTH * times[i]) / maxTime;
    console.log(barHeight);
    ctx.fillRect(
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      CLOUD_Y + GAP_Y,
      BAR_WIDTH,
      -barHeight
    );
    ctx.fillStyle = COLOR_TEXT;
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      GAP_Y - barHeight
    );
  }
};
