import React from "react"
interface CheckoutProps {
  name: string
}

export const Checkout: React.FC<CheckoutProps> = props => {
  return (
    <form
      method="GET"
      action="https://api.cryptonator.com/api/merchant/v1/startpayment"
    >
      <input
        type="hidden"
        name="merchant_id"
        value="780d4abae8d6975071a19a2172878729"
      />
      <input
        type="hidden"
        name="item_name"
        value="Safely steal from credit cards you don't own.pdf"
      />
      <input type="hidden" name="invoice_currency" value="usd" />
      <input type="hidden" name="invoice_amount" value="2" data-type="number" />
      <input type="hidden" name="language" value="en" />
      <button type="submit" className="btn-success">
        {props.name}
      </button>
    </form>
  )
}
