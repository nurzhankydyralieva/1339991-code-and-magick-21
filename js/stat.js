"use strict";
const CLOUD_WIDTH = 420;
const CLOUD_HEIGTH = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;

const GAP_Y = 150;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 20;
const BAR_WIDTH = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;

  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, 115, 50);
  ctx.fillText(`Список результатов:`, 115, 70);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
      times[i],
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i,
      CLOUD_X
    );
    ctx.fillText(
      players[i],
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i,
      CLOUD_X + GAP + GAP_Y
    );
    ctx.fillRect(
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i,
      (BAR_HEIGHT * times[i]) / maxTime,
      BAR_HEIGHT,
      CLOUD_X + GAP + GAP_Y
    );
  }
};
