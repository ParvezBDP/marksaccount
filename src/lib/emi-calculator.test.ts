import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { calculateEmi } from "./emi-calculator";

describe("calculateEmi", () => {
  it("calculates a standard monthly repayment and interest split", () => {
    const result = calculateEmi(1_000_000, 12, 12);

    assert.ok(Math.abs(result.monthlyEmi - 88_848.788678) < 0.0001);
    assert.ok(Math.abs(result.totalPayment - 1_066_185.4641) < 0.001);
    assert.ok(Math.abs(result.totalInterest - 66_185.4641) < 0.001);
  });

  it("splits a zero-interest loan evenly across its tenure", () => {
    const result = calculateEmi(1_200_000, 0, 12);

    assert.equal(result.monthlyEmi, 100_000);
    assert.equal(result.totalInterest, 0);
  });
});