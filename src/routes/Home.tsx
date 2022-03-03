import React from 'react'
import { Stack } from '@mui/material'

import '../styles/home.scss'
import { Link } from '@mui/material'
import {black, red, green, blue, white} from '../helpers/elementImports'

const Home = () => {
  return (
    <Stack marginTop={75} spacing={6} direction="row" justifyContent="center">
      <Link href="/search"><img src={black} className="element-button" /></Link>
      <Link href="/search"><img src={red} className="element-button" /></Link>
      <Link href="/search"><img src={blue} className="element-button" /></Link>
      <Link href="/search"><img src={white} className="element-button" /></Link>
      <Link href="/search"><img src={green} className="element-button" /></Link>
    </Stack>
  )
}

export default Home