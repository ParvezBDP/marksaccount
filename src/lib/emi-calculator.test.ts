import { describe, expect, it } from "bun:test";
import { calculateEmi } from "./emi-calculator";

describe("calculateEmi", () => {
  it("calculates a standard monthly repayment and interest split", () => {
    const result = calculateEmi(1_000_000, 12, 12);

    expect(result.monthlyEmi).toBeCloseTo(88_848.788678, 4);
    expect(result.totalPayment).toBeCloseTo(1_066_185.4641, 3);
    expect(result.totalInterest).toBeCloseTo(66_185.4641, 3);
  });

  it("splits a zero-interest loan evenly across its tenure", () => {
    const result = calculateEmi(1_200_000, 0, 12);

    expect(result.monthlyEmi).toBe(100_000);
    expect(result.totalInterest).toBe(0);
  });
});