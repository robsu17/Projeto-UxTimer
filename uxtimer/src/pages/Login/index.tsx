import Input from "../components/Input/Input";
import { Wrapper, Main, Header } from "./style";

export default function Login() {
    return (
        <Wrapper>
            <Main>
                <Header>
                    <h1>Timer</h1>
                    <p>Seja você o senhor do seu próprio tempo</p>
                </Header>
                <Input type="text"></Input>
            </Main>
        </Wrapper>
    )
}