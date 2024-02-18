import React from 'react'
import Homedesktop from './Homedesktop'
import Homemobile from './Homemoblile'
import { useMediaQuery } from '@chakra-ui/react';
function Home() {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <>{isLargerThan600 ? <Homedesktop/> : <Homemobile/>}</>
  )
}

export default Home