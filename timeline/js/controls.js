export const controlTimeline = (timeline) => {
  const playBtn = document.querySelector(".play")
  const pauseBtn = document.querySelector(".pause")
  const reverseBtn = document.querySelector(".reverse")
  const restartBtn = document.querySelector(".restart")

  // Check if all buttons exist
  if (!playBtn || !pauseBtn || !reverseBtn || !restartBtn) {
    return
  }

  playBtn.onclick = () => {
    console.log(timeline)
    timeline.play()
  }
  pauseBtn.onclick = () => timeline.pause()
  reverseBtn.onclick = () => timeline.reverse()
  restartBtn.onclick = () => timeline.restart()
}
