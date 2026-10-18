export interface Package {
  id: number
  package_id: number
  name: string
  type: string
  display: string
  code: string
  priority: number
  country: string
  amount: string
  legal_fee: string
  stamp_fee: string
  interest: string
  receivable_amount: string
  deposit: string
  service_fee: string
  period: number
  tenure: number
  status: number
  status_name: string
  status_display: string
  min_amount: string
  max_amount: string
  scale_amount: string
  min_amount_increment: string
  max_amount_limit: string
  min_tenure: string
  max_tenure: string
  scale_tenure: string
  interest_percentage: string
  service_fee_percentage: string
  min_service_fee: string
  min_extension_tenure: string
  max_extension_tenure: string
  extension_fee_percentage: string
  is_default: number
  is_upgradeable: number
  agreement?: PackageAgreement
}

export interface PackageAgreement {
  company_name: string
  company_registration_number: string
  company_license_number: string
  company_address: string
  representative_name: string
  representative_signature: string
  lawyer_name: string
  lawyer_signature: string
}

export interface CalculationResult {
  amount: number
  tenure: number
  interest: number
  serviceFee: number
  totalRepayment: number
  monthlyRepayment: number
}
