'use strict';

var drawCloud = function (ctx, x, y, width, height) {
  // рисуем тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + 10, y + 10, width, height);

  // рисуем облако
  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
};

var writeText = function (ctx, text, x, y) {

  var textArray = text.split('\n');
  for (var i = 0; i < textArray.length; i++) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(textArray[i], x, y + 20 * i);
  }
};

var setColor = function (n1, n2) {
  var a = (Math.random()).toFixed(1);
  var b = ((Math.random() * n1) * n2).toFixed(0);

  return ('rgba(0, 0, ' + b + ', ' + a + ')');
};

window.renderStatistics = function (ctx, names, times) {
  // рисуем облако
  drawCloud(ctx, 100, 10, 420, 270);

  // выводим текст в облаке
  writeText(ctx, 'Ура вы победили!\nСписок результатов:', 130, 40);

  // ищем наибольшее значение в массиве times
  var max = -1;

  times.forEach(function (time) {
    if (time > max) {
      max = time;
    }
  });

  // рисуем гистограмму
  var HISTO_HEIGHT = 150;
  var HISTO_WIDTH = 40;
  var HISTO_X = 150;
  var step = HISTO_HEIGHT / max;
  var COLUMN_INDENT = 50;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), HISTO_X + (HISTO_WIDTH + COLUMN_INDENT) * i, 90 + HISTO_HEIGHT - height);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = setColor(5, 50);
    }
    ctx.fillRect(HISTO_X + (HISTO_WIDTH + COLUMN_INDENT) * i, 100 + HISTO_HEIGHT - height, HISTO_WIDTH, height);

    ctx.fillStyle = '#000';
    ctx.fillText(name, HISTO_X + (HISTO_WIDTH + COLUMN_INDENT) * i, 120 + HISTO_HEIGHT);
  }

};
