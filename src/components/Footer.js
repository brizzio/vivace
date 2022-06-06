import SocialIcons from "./SocialIcons"

import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

function Footer() {
  return (
    <StyledFooter>
        <Container>
            <span>VIVACE</span>  
            <Flex>
                <ul>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li>+1-543-123-4567</li>
                <li>example@huddle.com</li>
            </ul>
            <ul>
                <li>About Us</li>
                <li>What We Do</li>
                <li>FAQ</li>
            </ul>

            <ul>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <SocialIcons />
          </Flex>
          <p>&copy; 2022 BRIZZIO. Todos os direitos reservados.</p>
        </Container>
    </StyledFooter>
  )
}

export default Footer