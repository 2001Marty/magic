import React from 'react'
import {Container, Link} from '@mui/material'

import '../../styles/navigation.scss'
const logo = require('../../asset/images/magic-logo.png');

const Navigation = () => {

    return(
        <Container className={"navigation"}>
            <Link href='/'><img src={logo}/></Link>
        </Container>
    )
}

export default Navigation