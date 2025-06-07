export const controlTimeline = (timeline, startLabel) => {
  const playBtn = document.querySelector(".play")
  const pauseBtn = document.querySelector(".pause")
  const reverseBtn = document.querySelector(".reverse")
  const restartBtn = document.querySelector(".restart")

  // Check if all buttons exist
  if (!playBtn || !pauseBtn || !reverseBtn || !restartBtn) {
    return
  }

  playBtn.onclick = () => {
    // If startLabel is provided, play from that position, otherwise just play
    startLabel ? timeline.play(startLabel) : timeline.play()
  }
  pauseBtn.onclick = () => timeline.pause()
  reverseBtn.onclick = () => timeline.reverse()
  restartBtn.onclick = () => timeline.restart()
}
