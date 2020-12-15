import React from "react"
import { Card } from "../components/card"
interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <div className="px-8 py-8 -mx-12 bg-white">
      <div className="flex flex-col items-center">
        <h3 className="px-4 text-2xl font-bold text-center capitalize">
          Our carding programs index
        </h3>
        <h4 className="px-4 text-center text-gray-500 font-inter">
          Our resources designed to teach you:
        </h4>
      </div>

      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 grid-rows-auto ">
          <Card name="All the carding teminology" time={5} />
          <Card name="How to get secure CCs" time={15} />
          <Card name="Where to get logs and proxies" time={5} />
          <Card name="How to beat the anti fraud systems" time={20} />
        </div>
      </div>
      <div className="flex justify-center mt-4 xl:mt-10">
        <button className="btn-success">Instant Access</button>
      </div>
    </div>
  )
}
