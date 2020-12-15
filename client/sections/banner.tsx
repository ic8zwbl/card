import React from "react"
// @ts-ignore
import BankImageLG from "../assets/images/banks-lg-2.png"
// @ts-ignore
import BankImage from "../assets/images/banks.png"
import { Reason } from "../components/reason"
interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div className="flex flex-col justify-around max-w-4xl gap-4 py-8 md:flex-row">
      <img className="hidden w-4/12 lg:block" src={BankImageLG} />
      <img className="self-center lg:hidden" src={BankImage} />
      <div className="flex flex-col items-start self-start justify-center gap-y-2">
        <Reason text="30 Day Money-Back Guarantee" />
        <Reason text="100% Safe & Secure Checkout" />
        <Reason text="Free Bonuses Included" />
      </div>
    </div>
  )
}
