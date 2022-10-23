import './index.styl'
import { Box, Button, Flex, Text, Input, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import ArrowDownIcon from '../../assets/arrow-down.svg'
import SwapIcon from '../../assets/swap.svg'
import { useCallback, useState } from 'react'
import TokenList from '../../components/TokenList'
import { Token } from '../../types/token'
import useWalletStore from '../../store/useWalletStore'
import useSwap from '../../hooks/useSwap'

enum Direct {
  in = 1,
  out
}

export default function Swap (props) {
  const [isOpen, setIsOpen] = useState(false)
  const [direct, setDirect] = useState<Direct>(Direct.in)

  const { tokenIn, setTokenIn, onInputIn, tokenOut, setTokenOut, onInputOut } = useSwap()
  const { getSwapOptions } = useSwap()

  const isConnected = useWalletStore(state => state.isConnected)
  const openConnectModal = useWalletStore(state => state.openConnectModal)

  const onSwitchPos = () => {
    setTokenIn(tokenOut)
    setTokenOut(tokenIn)
  }

  const onSelectedToken = useCallback((token: Token) => {
    if (direct === Direct.in) {
      console.log('select in')
      setTokenIn({ ...token, amount: 0 })
    }
    if (direct === Direct.out) {
      console.log('select out')
      setTokenOut({ ...token, amount: 0 })
    }

    setIsOpen(false)
  }, [direct]) // TODO: must code [direct]

  const onOpenModal = (direct: Direct) => {
    setDirect(direct)
    setIsOpen(true)
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  const onSwap = () => {
    getSwapOptions()
  }

  return (
    <Box w={480}>
      <Box position='relative'>
        {/* from */}
        <Box bg='rgba(255, 255, 255, 0.1)' px='16px' py='12px' borderRadius={8}>
          <Flex justify='space-between' align='center'>
            <Text as='span' fontSize={16} color='#FFFFFF' opacity={0.6} >From</Text>
            <Text as='span' fontSize={16} color='#FFFFFF' opacity={0.6}>Balance: 0</Text>
          </Flex>

          <Flex justify='space-between' align='center'>
            <Input bg='transparent' color='#FFFFFF' fontSize='24px' variant='unstyled' placeholder='0.00' height='33px' lineHeight='33px' type='number' w='auto' isDisabled={!tokenIn} onChange={onInputIn}></Input>
            <Box display='flex' justifyContent='space-between' textAlign='right' alignItems='center' cursor='pointer' onClick={ () => onOpenModal(Direct.in) }>
              <Image src={tokenIn?.icon} w='16px' borderRadius='50%' mr='12px'></Image>
              <Text as='span' color='#FFF' fontSize='16px' fontWeight='500' mr='12px'>{ tokenIn ? tokenIn.name : 'select token' }</Text>
              <Image src={ArrowDownIcon} w='16px'></Image>
            </Box>
          </Flex>
        </Box>

        {/* to */}
        <Box bg='rgba(255, 255, 255, 0.1)' px='16px' py='12px' borderRadius={8} mt='12px'>
          <Flex justify='space-between' align='center'>
            <Text as='span' fontSize={16} color='#FFFFFF' opacity={0.6} >To</Text>
            <Text as='span' fontSize={16} color='#FFFFFF' opacity={0.6}>Balance: 0</Text>
          </Flex>

          <Flex justify='space-between' align='center'>
            <Input bg='transparent' color='#FFFFFF' fontSize='24px' variant='unstyled' placeholder='0.00' height='33px' lineHeight='33px' type='number' w='auto' isDisabled={!tokenOut} onChange={onInputOut}></Input>
            <Box display='flex' justifyContent='space-between' textAlign='right' alignItems='center' cursor='pointer' onClick={() => onOpenModal(Direct.out)}>
              <Image src={tokenOut?.icon} w='16px' borderRadius='50%' mr='12px'></Image>
              <Text as='span' color='#FFF' fontSize='16px' fontWeight='500' mr='12px'>{ tokenOut ? tokenOut.name : 'select token' }</Text>
              <Image src={ArrowDownIcon} w='16px'></Image>
            </Box>
          </Flex>
        </Box>

        <Box position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' borderRadius={12} border='3px solid #271919' p='10px' bg='#3a2e2e' cursor='pointer' onClick={onSwitchPos}>
          <Image src={SwapIcon}></Image>
        </Box>
      </Box>

      {/* swap button */}
      <Button w='100%' h='56px' lineHeight='56px' mt='16px' variant='solid' bg='#FFFFFF' color='#000000' fontSize='18px' fontWeight='700' onClick={isConnected ? onSwap : () => openConnectModal(true)}>
        { isConnected ? 'Swap' : 'Connect' }
      </Button>

      <Modal isOpen={isOpen} onClose={ onCloseModal }>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>选择代币</ModalHeader>
          <ModalCloseButton variant='unstyled'></ModalCloseButton>
          <ModalBody>
            <TokenList onSelectedToken={ onSelectedToken }></TokenList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
