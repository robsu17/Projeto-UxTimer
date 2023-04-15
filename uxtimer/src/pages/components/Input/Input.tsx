import { InputBox } from "./input.module";

interface INput {
    type: string;
}

export default function Input({type}: INput) {
    return (
        <InputBox>
            <input type={type} name="" id="" />
        </InputBox>
    )
}