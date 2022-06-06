import {FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialicons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialicons>
        <li>
            <a href="Https://twitter.com">
            <FaTwitter />    
            </a>
        </li>
        <li>
            <a href="Https://facebook.com">
            <FaFacebook />    
            </a>
        </li>
        <li>
            <a href="Https://linkedin.com">
            <FaLinkedin />    
            </a>
        </li>
    </StyledSocialicons>
  )
}
