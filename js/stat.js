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
  ctx.fillText(`Ура вы победили!`, 140, 35);
  ctx.fillText(`Список результатов:`, 140, 55);
  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      CLOUD_Y + GAP_Y + BAR_GAP
    );

    const renderRectangle = function (ctx, x, y, width, height, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, BAR_WIDTH, barHeight);
    };

    const randomColor = Math.floor(Math.random() * 100) + 1;
    ctx.fillStyle =
      players[i] === `Вы`
        ? `rgba(255, 0, 0, 1)`
        : `hsl(240,` + randomColor + `%, 50%)`;

    const barHeight = (BAR_HEIGTH * times[i]) / maxTime;
    console.log(barHeight);
    ctx.fillRect(
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      CLOUD_Y + GAP_Y,
      BAR_WIDTH,
      -barHeight
    );
    ctx.fillStyle = `#000`;
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + TEXT_WIDTH + (GAP + GAP_X) * i,
      GAP_Y - barHeight
    );
  }
};
