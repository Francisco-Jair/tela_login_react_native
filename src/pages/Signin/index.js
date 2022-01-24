import { KeyboardView, Title, Container, Input, ButtonSubmit, TextButton } from "./styles";
import React from "react";
import Header from '../../components/Header'


function Signin(props) {
    return (<KeyboardView>
        <Header />
        <Container>
            <Title>Página de Login</Title>
            <Input placeholderTextColor="#FFF" placeholder="E-mail" />
            <Input placeholderTextColor="#FFF" placeholder="Senha" secureTextEntry/>
            <ButtonSubmit>
                <TextButton>Entrar</TextButton>
            </ButtonSubmit>
        </Container>
    </KeyboardView>)
}


export default Signin