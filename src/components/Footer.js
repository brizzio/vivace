import SocialIcons from "./SocialIcons"

import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

function Footer() {
  return (
    <StyledFooter>
        <Container>
            
            <Flex>
                <ul>
                <li>
                <span>VIVACE</span> <br/> <br/>
                Entre em contato conosco. Será um prazer poder colaborar nessa jornada.
                </li>
                <li>+55 11 98844-6266</li>
                <li>central@vivace.com.br</li>
            </ul>
            <ul>
                <li>Sobre...</li>
                <li>O que fazemos...</li>
                <li>FAQ</li>
            </ul>

            <ul>
                <li>Trabalhe conosco...</li>
                <li>Notícias</li>
                <li>Siga-nos aqui...</li>
            </ul>
            <SocialIcons />
          </Flex>
          <p>&copy; 2022 VIVACE. Todos os direitos reservados.</p>
        </Container>
    </StyledFooter>
  )
}

export default Footer