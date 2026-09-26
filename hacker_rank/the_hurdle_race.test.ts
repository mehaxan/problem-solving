import { test } from "node:test";
import assert from "node:assert/strict";

import { theHurdleRace } from "./the_hurdle_race.js";

test("theHurdleRace returns doses needed to clear the tallest hurdle", () => {
  assert.equal(theHurdleRace(4, [1, 6, 3, 5, 2]), 2);
});

test("theHurdleRace returns 0 when initial power already clears every hurdle", () => {
  assert.equal(theHurdleRace(7, [2, 5, 4, 5, 2]), 0);
});

test("theHurdleRace returns 0 when power exactly matches the tallest hurdle", () => {
  assert.equal(theHurdleRace(3, [2, 3]), 0);
});

test("theHurdleRace handles a single hurdle", () => {
  assert.equal(theHurdleRace(2, [3]), 1);
});
