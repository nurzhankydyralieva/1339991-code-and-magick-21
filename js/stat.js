"use strict";
const CLOUD_WIDTH = 420;
const CLOUD_HEIGTH = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const GAP_X = 90;
const GAP_Y = 260;
const FONT_GAP = 60;
const TEXT_WIDTH = 30;
const BAR_WIDTH = 50;
const BAR_HEIGTH = CLOUD_HEIGTH - GAP - GAP_X - GAP;

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
  ctx.fillText(`Ура вы победили!`, 140, 30);
  ctx.fillText(`Список результатов:`, 140, 50);
  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      CLOUD_Y + GAP_Y
    );
    ctx.fillText(
      times[i],
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      CLOUD_Y + FONT_GAP
    );

    ctx.fillRect(
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      CLOUD_Y + FONT_GAP + GAP,
      BAR_WIDTH,
      (BAR_HEIGTH * times[i]) / maxTime
    );
  }
};
