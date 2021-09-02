const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const length = numbers.length

export const calcPositionAndOpacity = (
  targetNumber: number,
  visibleRadian: number = (4 * Math.PI) / length
) => {
  if (visibleRadian < 0 || visibleRadian > Math.PI) {
    throw Error('visibleRadian should be [0, Math.PI]')
  }
  let sign = Math.sign(targetNumber)
  sign = sign === 0 ? 1 : sign
  return numbers.map((curNumber) => {
    // calc radian must be [0, 2 * PI]
    const radian =
      ((2 * Math.PI) / length) *
      ((length + ((targetNumber - sign * curNumber) % length)) % length)
    const y = Math.sin(radian)
    let opacity = 0
    if (radian <= visibleRadian / 2) {
      opacity = 1 - radian / (visibleRadian / 2)
    }
    if (radian >= 2 * Math.PI - visibleRadian / 2) {
      opacity = 1 - (2 * Math.PI - radian) / (visibleRadian / 2)
    }
    return { y, opacity }
  })
}
