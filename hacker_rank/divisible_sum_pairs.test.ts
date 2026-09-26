import { test } from "node:test";
import assert from "node:assert/strict";

import { divisibleSumPairs } from "./divisible_sum_pairs.js";

test("divisibleSumPairs counts pairs whose sum divides k", () => {
  assert.equal(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]), 5);
  assert.equal(divisibleSumPairs(5, 3, [1, 2, 3, 4, 5]), 4);
  assert.equal(divisibleSumPairs(1, 1, [1]), 0);
});
