'use client'

import Modal from 'react-modal'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
export function ModalProduct({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Modal">
      <div className="overlay-content">
        <div className="modal-content max-w-max[80] border-r-8 bg-slate-50 p-20">
          <h2>Meu Modal</h2>
          <p>Conteúdo do modal...</p>
          <button onClick={onRequestClose}>Fechar</button>
        </div>
      </div>
    </Modal>
  )
}
