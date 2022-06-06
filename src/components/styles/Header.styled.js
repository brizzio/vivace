import styled from "styled-components";

export const StyledHeader = styled.header
`
    background-color: ${({ theme })=>theme.colors.header};
    padding: 10px 0;



`
export const Nav = styled.nav
`

display:flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;



& > div {
    margin-top:10px;
    vertical-align: top;
    display: inline-block;
    /* To horizontally center images and caption */
    text-align: center;
    align-items: center;
    width:140px;
}

span {
    
    font-size:0.8rem;
    
}

@media(max-width:${({ theme })=> theme.mobile}){
    flex-direction: column;
}

`

export const Logo = styled.img
`
height:60px;
margin-bottom: 0px;

@media(max-width:${({ theme })=> theme.mobile}){
    
}

`

export const Image = styled.img
`
width:375px;
margin-left: 40px;

@media(max-width:${({ theme })=> theme.mobile}){
    margin: 40px 0 30px;
}

`
