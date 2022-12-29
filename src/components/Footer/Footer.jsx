import {FooterSection, FooterP, FooterSpan, FooterA} from './styles.js'
const Footer = () => {
  return (
    <FooterSection>
      <FooterP>Made by 
        <FooterSpan>
          <FooterA href='https://github.com/alessandrovaru'>
            Alessandrovaru
            </FooterA>
          </FooterSpan>
        </FooterP>
    </FooterSection>
  )
}

export default Footer