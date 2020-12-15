import React from "react"

interface QuoteProps {}

export const Quote: React.FC<QuoteProps> = ({}) => {
  return (
    <div className="flex flex-col items-center py-8 -mx-12 text-center bg-gray-900 ">
      <div className="grid gap-4 text-white content">
        <p>
          Congratulations for getting this far. Here are my final words of
          wisdom.
        </p>
        <p>
          Carding shouldn’t be your means to an end. Use it to accumulate some
          good and easy capital and move on.
        </p>
      </div>

      <p className="mt-6 text-6xl text-yellow-500 font-sig">Jimmy Sphinx</p>
    </div>
  )
}
