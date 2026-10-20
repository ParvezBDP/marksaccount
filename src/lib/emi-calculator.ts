export type EmiBreakdown = {
  monthlyEmi: number;
  totalPayment: number;
  totalInterest: number;
};

export function calculateEmi(principal: number, annualRate: number, tenureMonths: number): EmiBreakdown {
  const monthlyRate = annualRate / 1200;
  const monthlyEmi = tenureMonths <= 0
    ? 0
    : monthlyRate === 0
      ? principal / tenureMonths
      : (principal * monthlyRate * (1 + monthlyRate) ** tenureMonths) /
        ((1 + monthlyRate) ** tenureMonths - 1);
  const totalPayment = monthlyEmi * tenureMonths;

  return {
    monthlyEmi,
    totalPayment,
    totalInterest: Math.max(0, totalPayment - principal),
  };
}