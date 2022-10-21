import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useState, useImperativeHandle, forwardRef } from 'react'
import useConnect from '../../hooks/useConnect'
import WalletList from '../WalletList/index'

function Connect (props, ref) {
  const [isOpen, setIsOpen] = useState(false)
  const { connect } = useConnect()

  const onClose = () => {
    setIsOpen(false)
  }

  const onConnect = () => {
    setIsOpen(false)
    connect()
  }

  useImperativeHandle(ref, () => ({
    showConnectModal: () => setIsOpen(true)
  }))
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody>
          <WalletList onConnect={onConnect}></WalletList>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default forwardRef(Connect)
