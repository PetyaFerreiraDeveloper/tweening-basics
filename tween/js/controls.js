export const controlTweens = (...tweens) => {
  const playBtn = document.querySelector(".play")
  const pauseBtn = document.querySelector(".pause")
  const reverseBtn = document.querySelector(".reverse")
  const restartBtn = document.querySelector(".restart")

  // Check if all buttons exist
  if (!playBtn || !pauseBtn || !reverseBtn || !restartBtn) {
    return
  }

  playBtn.onclick = () => tweens.forEach((tween) => tween.play())
  pauseBtn.onclick = () => tweens.forEach((tween) => tween.pause())
  reverseBtn.onclick = () => tweens.forEach((tween) => tween.reverse())
  restartBtn.onclick = () => tweens.forEach((tween) => tween.restart())
}
