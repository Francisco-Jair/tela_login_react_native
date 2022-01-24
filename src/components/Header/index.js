import { Text, Image } from "react-native"
import { Container } from './styles'
import React from "react"

import logoImg from '../../../assets/logo-makerclub.png'

function Header(props) {
    return <Container>
        <Image source={logoImg} />
    </Container>
}

export default Header