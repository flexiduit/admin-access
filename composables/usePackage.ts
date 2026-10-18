import type { CalculationResult, Package } from '~/types/package'
import { toNumber } from '~/utils/currency'

export function usePackage() {
  function calculate(
    amount: number,
    tenure: number,
    pkg: Package | null,
  ): CalculationResult {
    if (!pkg) {
      return {
        amount: 0,
        tenure: 0,
        interest: 0,
        serviceFee: 0,
        totalRepayment: 0,
        monthlyRepayment: 0,
      }
    }

    const interestPct = toNumber(pkg.interest_percentage)
    const feePct = toNumber(pkg.service_fee_percentage)
    const minFee = toNumber(pkg.min_service_fee)

    const interest = (amount * interestPct) / 100
    const serviceFee = Math.max((amount * feePct) / 100, minFee)
    const totalRepayment = amount + interest + serviceFee
    const monthlyRepayment = tenure > 0 ? totalRepayment / tenure : 0

    return {
      amount,
      tenure,
      interest: round(interest),
      serviceFee: round(serviceFee),
      totalRepayment: round(totalRepayment),
      monthlyRepayment: round(monthlyRepayment),
    }
  }

  function round(n: number, decimals = 2): number {
    const f = 10 ** decimals
    return Math.round(n * f) / f
  }

  return { calculate }
}
