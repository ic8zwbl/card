import React from "react"
// @ts-ignore
import Logo from "../assets/images/logo.png"
import {
  Banner,
  Content,
  Guarantee,
  Hero,
  How,
  Quote,
  Refer,
  What,
} from "../sections"

const IndexPage: React.FC = () => (
  <div className="px-4 pt-4 overflow-hidden md:pt-8 lpt-8 lg:px-12 font-roboto">
    <div className="center">
      <img src={Logo} />
    </div>
    <div className="flex flex-col justify-around md:h-screen">
      <div className="center">
        <Hero />
      </div>
      <div className="mt-8 md:mt-0">
        <Refer />
      </div>
    </div>

    <div className="">
      <Content />
    </div>
    <div className="flex items-center justify-center -mx-12 bg-white">
      <Banner />
    </div>
    <div className="flex items-center justify-center -mx-12 bg-gray-50">
      <What />
    </div>
    <How />
    <div className="flex items-center justify-center">
      <Guarantee />
    </div>
    <Quote />
  </div>
)

export default IndexPage
