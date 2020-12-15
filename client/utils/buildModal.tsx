import { useState } from "react"
import ReactModal from "react-modal"

export const buildModal = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(!isOpen)
  return [ReactModal, handleOpen, isOpen]
}
