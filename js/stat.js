'use strict';

window.renderStatistics = function (ctx, names, times) {
  // рисуем тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // рисуем облако
  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);

  // выводим текст в облаке
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  // ищем наибольшее значение в массиве times
  var max = -1; // почему -1? я взяла это из примера, но не поняла, почему не 0?

  times.forEach(function (time) {
    if (time > max) {
      max = time;
    }
  });

  /* почему здесь не срабатывал этот код for (var i = 0; i < times.lenght; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }?*/


  // рисуем гистограмму
  var histoHeight = 150;
  var histoWidth = 40;
  var histoX = 150;
  var step = histoHeight / max;
  var columnIndent = 50;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histoX + (histoWidth + columnIndent) * i, 90 + histoHeight - height);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var b = ((Math.random() * 5) * 50).toFixed(0);
      var a = (Math.random()).toFixed(1);
      ctx.fillStyle = 'rgba(0, 0, ' + b + ' , ' + a + ')';  // не очень поняла момент написания '+ b +' и '+ a +' . нашла пример в интернете и использовала его.
    }
    ctx.fillRect(histoX + (histoWidth + columnIndent) * i, 100 + histoHeight - height, histoWidth, height);

    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + (histoWidth + columnIndent) * i, 120 + histoHeight);
  }

};

var canvas = document.querySelector('canvas');
