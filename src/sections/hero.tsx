import React from "react"
// @ts-ignore
import HeroImage from "../assets/images/hero.png"
// @ts-ignore
import HeroImageLG from "../assets/images/lambo2.png"
interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="grid max-w-5xl grid-cols-2">
      <div className="flex flex-col justify-center max-w-2xl col-span-2 col-start-1 py-8 text-xl text-gray-500 md:col-auto lg:px-12 font-roboto">
        <h2 className="font-semibold uppercase font-inter">
          Our Bestselling EBook
        </h2>
        <h1 className="text-4xl font-bold text-gray-700">
          Safely steal from credit cards you don't own.pdf
        </h1>
      </div>
      <img
        className="hidden max-w-5xl col-start-2 row-start-1 md:block"
        src={HeroImageLG}
      />
      <img className="col-span-3 md:hidden" src={HeroImage} />
      <p className="max-w-xs col-start-1 font-bold lg:px-12 text-8xl text-black-500">
        <span className="text-3xl text-green-300">$</span>25
      </p>
      <div className="flex flex-col items-center justify-center">
        {/* <Checkout name="buy now" /> */}
        <button className="w-32 btn-success">buy now</button>
        <p className="mt-2 text-center text-gray-700 underline font-inter">
          122 copies left
        </p>
      </div>
    </div>
  )
}
