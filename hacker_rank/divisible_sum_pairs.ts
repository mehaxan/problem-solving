// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function getPairs<T>(ar: T[]): Array<[T, T]> {
  const pairs: Array<[T, T]> = [];

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      pairs.push([ar[i], ar[j]]);
    }
  }

  return pairs;
}

export function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let count = 0;

  const pairs = getPairs(ar);

  for (const [a, b] of pairs) {
    if ((a + b) % k === 0) {
      count++;
    }
  }

  return count;
}
