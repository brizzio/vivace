
import { StyledHeader, Nav, Logo, Image} from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from  './styles/Button.styled'
import { Flex } from './styles/Flex.styled'


export default function Header() {
  return (
      <StyledHeader>
          <Container>
              <Nav>
                  <div>
                  <Logo src="./images/vivace.png"/>
                  <span>Market Intelligence</span>
                  </div>
                  
                  <Button>Login</Button>
              </Nav>

              <Flex>
                  <div>
                       <h1>
                            Estratégia e gestão em uma só ferramenta
                       </h1>
                       <p>
                            Vivace re-inventou a gestão de marketing. Você tem uma voz-ativa, assim como a tua equipe de vendas, o lojista e, principalmente o consumidor de seus produtos. Que tal ter todos esses insights de forma clara e organizada para a sua tomada de decisão?
                       </p>
                       <Button bg='#D45500' color="#fff">
                            Saiba Mais
                       </Button>
                  </div>

                  <Image src='./images/illustration-mockups.svg' alt='' />
               


              </Flex>
          </Container>
      </StyledHeader>
    
  )
}
