import React from "react"
import { TiTick } from "react-icons/ti"
interface ReasonProps {
  text: string
}

export const Reason: React.FC<ReasonProps> = props => {
  return (
    <div className="flex gap-2">
      <TiTick className="text-2xl text-green-500" />
      <p className="text-xl font-bold capitalize md:text-2xl">{props.text}</p>
    </div>
  )
}
