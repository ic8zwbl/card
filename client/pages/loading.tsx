import { useQueryParam } from "gatsby-query-params"
import React from "react"
interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  const name = useQueryParam("ref")

  if (!name) {
    return <div></div>
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-center text-gray-900">
        You've been invited by <span className="text-green-500">{name}</span>
      </h1>
    </div>
  )
}
export default Loading
