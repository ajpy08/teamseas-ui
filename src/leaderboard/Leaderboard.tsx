import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { LeaderboardItem } from './LeaderboardItem'

interface Props {
  
}

export const LeaderBoard = (props: Props) => {
  return (
    <Box w="100%">
      <Heading>LEADERBOARD</Heading>
      <VStack spacing={4}>
        <LeaderboardItem donation={{
          displayName: 'Mr Beast',
          count: 1000,
          createdAt: '2021-10-29T17:31:11.795',
          team: 'team',
          message: 'some message'
        }}
        />
        <LeaderboardItem donation={{
          displayName: 'Mr Beast',
          count: 100,
          createdAt: '2021-10-29T17:31:11.795'
        }}
        />
        <LeaderboardItem donation={{
          displayName: 'Mr Beast',
          count: 1000,
          createdAt: '2021-10-29T17:31:11.795'
        }}
        />
      </VStack>
    </Box>
  )
}
