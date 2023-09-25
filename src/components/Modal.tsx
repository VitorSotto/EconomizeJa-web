'use client'

import { XCircle } from 'lucide-react'
import Modal from 'react-modal'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
export function ModalProduct({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <div className="z-index relative bg-slate-700">
        <button onClick={onRequestClose}>
          <XCircle />
        </button>
        <div className="modal-content max-w-max[80] border-r-8 p-20">
          <h2 className="">Meu Modal</h2>

          <div>
            <p className="">Conteúdo do modal...</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}
