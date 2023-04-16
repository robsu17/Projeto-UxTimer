import styled from "styled-components";

export const Wrapper = styled.main`
    height: 100vh;
    background: var(--primary-color-dark);
    display: grid;
    justify-content: center;
    align-items: center;
    font-family: Arial;
`;

export const Main = styled.div`
    width: 487.62px;
    height: 612px;
    display: flex;
    justify-content; center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: var(--primary-color);
        font-family: 'Arial';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 75px;
        margin 0px;
    }

    p {
        color: var(--white);
        font-family: 'Arial';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        margin 0px;
    }
`;

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15.24px;

    input {
        width: 487.62px;
        height: 59px;
        background: #FFFFFF;
        box-shadow: 0px 0px 19.0476px rgba(0, 0, 0, 0.1);
        border-radius: 951.429px;

        flex: none;
        border: 0;
        align-self: stretch;
        flex-grow: 0;
        
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: var(--primary-color-darkness);

        padding: 18px 28px;

    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;

export const ButtonBox = styled.div`
    width: 291.43px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 100%;
        height: 100%;
        background: #11C793;
        box-shadow: 0px 0px 19.0476px rgba(0, 0, 0, 0.1);
        border-radius: 30.4762px;
        border: none;

        font-family: Arial;
        color: #FFFFFF;
        font-style: normal;
        font-size: 20px;
        line-height: 19px;

        transition: transform 0.1s ease-in;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const FooterBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 7.67px;

    font-family: Arial;

    p {
        color: #FFFFFF;
        margin: 0px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    } 

    a {
        color: var(--White);
    }
`;

export const FooterMain = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0px;
    
    p {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF; 
    }
`;