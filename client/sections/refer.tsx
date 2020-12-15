import React from "react"
import { AiOutlineLink } from "react-icons/ai"
import ReactModal from "react-modal"
import { buildModal } from "../utils/buildModal"
interface ReferProps {}

export const Refer: React.FC<ReferProps> = () => {
  const [Modal, handleModal, isOpen] = buildModal()

  const ModalT = Modal as typeof ReactModal
  return (
    <div className="flex flex-col items-center justify-center py-4 -mx-12 overflow-hidden text-center bg-green-500">
      <h3 className="text-2xl font-bold text-gray-900">Can’t afford it?</h3>
      <p className="max-w-xs px-4 mt-4 font-bold text-gray-100 md:max-w-md">
        Get a{" "}
        <span className="font-bold text-white opacity-100 ">20% Discount</span>{" "}
        for every person you send this link to that comes to this page.
      </p>

      <div
        onClick={handleModal as () => void}
        className="flex items-center justify-center gap-2 mt-2 text-blue-900 underline cursor-pointer hover:text-blue-600"
      >
        <AiOutlineLink className="text-xl" />
        <p>Read More</p>
      </div>

      <ModalT
        isOpen={isOpen as boolean}
        onRequestClose={handleModal as () => void}
      ></ModalT>
    </div>
  )
}
