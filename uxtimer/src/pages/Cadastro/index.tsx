import { Header, Wrapper, Main, InputBox, ButtonBox, FooterBox, FooterMain } from "./style"


export default function Cadastro() {
    return (
        <Wrapper>
            <Main>
                <Header>
                    <h1>Timer</h1>
                    <p><strong>Cadastre-se</strong> e seja o senhor do seu próprio tempo</p>
                </Header>
                <InputBox>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmar senha"/>
                </InputBox>
                <ButtonBox>
                    <button>CADASTRAR</button>
                </ButtonBox>
                <FooterBox>
                    <p>Já tem uma conta?</p>
                    <p><a href="#">Voltar para o login</a></p>
                </FooterBox>
                <FooterMain>
                    <p>Desenvolvido com ❤ por UX Software</p>
                </FooterMain>
            </Main>
        </Wrapper>
    )
}