document.addEventListener('click', function (event) {

  // Игнорируем клики, которые не относятся к нашей кнопке
  if (!event.target.hasAttribute('data-fullscreen')) return;

  // Если уже в полном, выйти
  // Иначе, снова открыть полный экран
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }

}, false);