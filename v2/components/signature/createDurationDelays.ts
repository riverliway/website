/**
 * @param timings - The timings of the animations.
 * This is an array where the first element is the delay before the first animation starts, and the rest are the durations of the animations.
 * @returns An array of objects with the duration and delay of each animation.
 */
export const createDurationDelays = (timings: number[]): { duration: number, delay: number }[] => {
  const durations = timings.slice(1)
  const cumulativeDelays: number[] = []

  for (let i = 0; i < timings.length - 1; i++) {
    const delay = timings[i] + (i > 0 ? cumulativeDelays[i - 1] : 0)
    cumulativeDelays.push(delay)
  }

  return durations.map((duration, i) => ({
    duration,
    delay: cumulativeDelays[i]
  }))
}
