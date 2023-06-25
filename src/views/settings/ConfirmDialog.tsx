import React from "react"
import './ConfirmDialog.css'

interface Props {
  thisRef: any,
  handleCancel: () => void,
  onRemove: () => void
}



const ConfirmDialog: React.FC<Props> = ({ thisRef, handleCancel,onRemove }) => {
  return (
    <dialog className="Widget ConfirmDialog" ref={thisRef}>
      <p>Are you sure you want to remove this widget?</p>
      <button className="button button--secondary" onClick={onRemove}>Sure</button>
      <button className="button button--primary" onClick={handleCancel}>Cancel</button>
    </dialog>
  )
}

export default ConfirmDialog