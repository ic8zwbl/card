import React from "react"
// @ts-ignore
import GuaranteeImage from "../assets/images/guarantee.png"
interface GuaranteeProps {}

export const Guarantee: React.FC<GuaranteeProps> = ({}) => {
  return (
    <div className="flex max-w-5xl gap-4 py-8">
      <div>
        <div className="container flex items-center">
          <img className="self-center w-20 sm:w-13 pr-2" src={GuaranteeImage} />
          <h2 className="flex text-3xl font-bold text-blue-900 capitalize 2">
            30 Days Money Back Guarantee
          </h2>
        </div>
        <h5 className="mt-3 text-xl font-bold uppercase">
          THE GUARANTEE IS SIMPLE.. GET RESULTS OR IT’S FREE.
        </h5>
        <p className="">
          I want you to be 100% confident in our Carding Program. That’s Right!
          Should you not see any results within 30 days, will personally issue a
          prompt and courteous refund with no questions asked. Even if you don’t
          give a reason, we will give you your money back in full. No questions
          asked.
        </p>
      </div>
    </div>
  )
}
