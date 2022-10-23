import { Box, Input, InputGroup, InputLeftElement, Tag, TagLabel } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { tokens } from './usual'
import { Token } from '../../types/token'

interface TokenListProps {
  onSelectedToken: (token: Token) => void
}

export default function TokenList (props: TokenListProps) {
  const { onSelectedToken } = props
  const choosedItem = (item: Token) => {
    onSelectedToken(item)
  }
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon />}
        />
        <Input placeholder='搜索名称或粘贴地址'></Input>
      </InputGroup>

      <Box mt='16px'>
        {
          tokens.map((token, index) => {
            return (
              <Tag
                key={index}
                mr='5px'
                mb='5px'
                p='5px 10px'
                cursor='pointer'
                onClick={() => choosedItem(token)}
              >
                <img src={ token.icon } width='24' style={{
                  marginRight: '5px'
                }} />
                <TagLabel>{ token.name }</TagLabel>
                {/* <Image src={ token.icon }></Image> */}
              </Tag>
            )
          })
        }
      </Box>

      {/* <Box>
        {
          tokens.map((token, index) => {
            return (
              <Box
                key={index}
                mr='5px'
                mb='5px'
                p='5px 10px'
                cursor='pointer'
                display='flex'
                alignItems='center'
              >
                <img src={ token.icon } width='36' style={{
                  marginRight: '5px'
                }} />
                <Box>
                  <Box>{ token.name }</Box>
                  <Box color='#3a4257' fontSize='12px'>{ token.symbol }</Box>
                </Box>
              </Box>
            )
          })
        }
      </Box> */}
    </Box>
  )
}
