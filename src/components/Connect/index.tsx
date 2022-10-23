import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import useWalletStore from '../../store/useWalletStore'
import WalletList from '../WalletList/index'

function Connect () {
  const connect = useWalletStore(state => state.connect)

  const isOpen = useWalletStore(state => state.isOpenConnectModal)
  const setIsOpen = useWalletStore(state => state.openConnectModal)

  const onClose = () => {
    setIsOpen(false)
  }

  const onConnect = () => {
    setIsOpen(false)
    connect()
  }

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

export default Connect
