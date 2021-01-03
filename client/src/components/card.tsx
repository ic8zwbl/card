import React from "react"
import { FaChevronRight } from "react-icons/fa"

interface CardProps {
  name: string
  time: number
}

export const Card: React.FC<CardProps> = props => {
  return (
    <div className="relative px-4 py-4 bg-gray-100 gap-x-2">
      <FaChevronRight className="absolute col-start-1 m-1 text-sm text-green-500 2xl:font-bold" />
      <div className="ml-8">
        <h5 className="text-lg font-bold leading-normal ">{props.name}</h5>
        <label className="col-start-1 row-start-3 text-xs font-bold text-gray-400 opacity-50 font-inter">
          {props.time} min read
        </label>
      </div>
    </div>
  )
}
