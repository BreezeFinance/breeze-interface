import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import wallets from '../../constants/wallet'

interface IWalletListProps {
  onConnect: () => void
}

function WalletList (props: IWalletListProps) {
  return (
    <Box pb='20px'>
      {
        wallets.map((wallet, index) => {
          return (
            <Flex key={index} justify='space-between' align='center' border='1px solid #e5e7eb' borderRadius='10px' p='12px 18px' mt='10px'>
              <Flex align='center' gap='8px'>
                <Image src={wallet.logo} w='30px' h='30px'></Image>
                <Text as='span' fontWeight='600' fontSize='16px'>{ wallet.name }</Text>
              </Flex>
              <Button colorScheme='teal' onClick={props.onConnect}>Connect</Button>
            </Flex>
          )
        })
      }
    </Box>
  )
}

export default WalletList
