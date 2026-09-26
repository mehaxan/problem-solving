import { test } from "node:test";
import assert from "node:assert/strict";

import { dayOfTheProgrammer } from "./day_of_the_programmer.js";

test("dayOfTheProgrammer returns 13.09 for a non-leap Gregorian year", () => {
  assert.equal(dayOfTheProgrammer(2017), "13.09.2017");
});

test("dayOfTheProgrammer returns 12.09 for a leap Gregorian year", () => {
  assert.equal(dayOfTheProgrammer(2016), "12.09.2016");
  assert.equal(dayOfTheProgrammer(1984), "12.09.1984");
});

test("dayOfTheProgrammer excludes century years not divisible by 400 (Gregorian)", () => {
  assert.equal(dayOfTheProgrammer(2100), "13.09.2100");
});

test("dayOfTheProgrammer includes century years divisible by 400 (Gregorian)", () => {
  assert.equal(dayOfTheProgrammer(2000), "12.09.2000");
});

test("dayOfTheProgrammer uses Julian leap rule (year % 4 === 0) before 1918", () => {
  assert.equal(dayOfTheProgrammer(1500), "12.09.1500");
  assert.equal(dayOfTheProgrammer(1900), "12.09.1900");
});

test("dayOfTheProgrammer returns 13.09 for a Julian non-leap year before 1918", () => {
  assert.equal(dayOfTheProgrammer(1917), "13.09.1917");
});

test("dayOfTheProgrammer handles the 1918 calendar transition specially", () => {
  assert.equal(dayOfTheProgrammer(1918), "26.09.1918");
});
