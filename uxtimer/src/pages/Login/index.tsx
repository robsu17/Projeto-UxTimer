import { Wrapper, Main, Header, InputBox, ButtonBox, FooterBox, FooterMain } from "./style";

export default function Login() {
    return (
        <Wrapper>
            <Main>
                <Header>
                    <h1>Timer</h1>
                    <p>Seja você o senhor do seu próprio tempo</p>
                </Header>
                <InputBox>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"></input>
                </InputBox>
                <ButtonBox>
                    <button>Entrar</button>
                </ButtonBox>
                <FooterBox>
                    <p>É seu primeiro acesso?</p>
                    <p>Criar uma conta</p>
                </FooterBox>
            </Main>
            <FooterMain>
                <p>Desenvolvido com ❤ por UX Software</p>
        </FooterMain>
        </Wrapper>
    )
}