import React from "react"
// @ts-ignore
import Quote_1 from "../assets/images/quote-1.png"
// @ts-ignore
import Quote_2 from "../assets/images/quote-2.png"
interface HowProps {}

export const How: React.FC<HowProps> = ({}) => {
  return (
    <div className="flex flex-col items-center px-2 py-8 -mx-4 bg-gray-900 lg:-mx-12">
      <div className="">
        <h3 className="mt-4 text-3xl text-center text-yellow-400">
          What will I get out of it?
        </h3>
        <div className="max-w-md mt-8 text-white lg:max-w-2xl content">
          <div
            style={{ backgroundColor: "#3182CE" }}
            className="grid gap-4 px-4 py-8 -mx-4 md:px-12"
          >
            <p>
              You’ll learn the ol’ russian secret that loses banks over 100
              billion every year.
            </p>

            <p>
              Yes, banks lose more than $100,000,000,000 every year, and you
              only need 0.0000001% of that cake to make back 100x what you've
              invested in this course.
            </p>
          </div>
          <h3 className="flex-wrap max-w-xs mt-8 text-yellow-400">
            And I know what you’re thinking...
          </h3>
          <img src={Quote_1} />
          <p className="mt-4">
            The methods outlined in this guide force the banks to take the hit
            100% of the time so that normal hardworking everyday people like you
            and me stay unharmed. The way I see it, If I can take from their
            greedy bottomless corporate pockets and give to myself and my loved
            ones, I see that as a win. And so should you. Why? because the
            system is rigged, and definitely not in our benefit.
          </p>

          <img src={Quote_2} />
          <p className="mt-4">
            I will show you how to cover your tracks with the best opsec in the
            industry. The cost of uncovering such an opsec costs millions in
            equipment and time. This reason alone is why 99.9% of carders never
            get caught. Follow my lead and don’t get greedy and you will be just
            fine.
          </p>

          <h3 className="mt-4 text-yellow-400">So whats stopping you?</h3>
        </div>
      </div>
    </div>
  )
}
