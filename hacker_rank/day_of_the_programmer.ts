// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

export function dayOfTheProgrammer(year: number): string {
  let leap = false;
  let dd = 12;
  let extendBy = 0;

  if (year < 1918) {
    leap = year % 4 === 0;
  } else if (year > 1918) {
    leap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  if (year === 1918) {
    extendBy = 14;
  } else {
    extendBy = leap ? 0 : 1;
  }

  return `${dd + extendBy}.09.${year}`;
}
