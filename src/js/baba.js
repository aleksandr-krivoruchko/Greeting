const player = document.querySelector('.audio');

document.querySelector('.cta').addEventListener('click', () => {
  player.play();
  document.querySelector('.sun').classList.toggle('is-hidden');
  document.querySelector('.face').classList.toggle('is-hidden');
  document.querySelector('.cat').classList.toggle('is-hidden');
  document.querySelector('.me').classList.toggle('is-hidden');
  document.querySelector('.heart').classList.toggle('is-hidden');
  document.querySelector('.phrase').classList.toggle('is-hidden');
});
