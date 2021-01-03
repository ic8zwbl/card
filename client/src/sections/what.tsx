import React from "react"
// @ts-ignore
import ArrowsGif from "../assets/images/arrows.gif"
interface WhatProps {}

export const What: React.FC<WhatProps> = ({}) => {
  return (
    <div className="flex flex-col items-center max-w-2xl py-8 ">
      <h3 className="text-3xl text-blue-900">What’s carding all about?</h3>
      <div className="mt-6 font-medium leading-normal font-inter content">
        <p className="font-bold text-gray-900">
          Have you or anyone you know ever had...
        </p>
        <p>
          - Their funds get taken out of their bank account without permission?
        </p>

        <p>- Unauthorised orders placed on their amazon or ebay accounts?</p>
        <p className="mt-4">
          <span className="font-bold">Here’s the good news!</span> I will teach
          you how to use the same techniques to take money out of other people’s
          pockets and make yourself rich.
          <span className="font-bold"> Want to know the best part?</span> the
          banks are forced to take the hit and refund them their money.
        </p>
        <h5 className="mt-12 mb-2 text-3xl font-bold text-gray-900">
          Continue reading to learn how it happens!
        </h5>
      </div>

      <img src={ArrowsGif} />
    </div>
  )
}
