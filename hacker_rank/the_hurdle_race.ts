// https://www.hackerrank.com/challenges/the-hurdle-race/problem

export function theHurdleRace(k: number, height: number[]): number {
  const max = Math.max(...height) - k;
  return max <= 0 ? 0 : max;
}
