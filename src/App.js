import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import {Container} from './components/styles/Container.styled.js'
import content from './content'

const theme = {

    colors:{
      header: '#e9c6afff',
      body: '#f4e3d7ff',
      footer: '#003333'
    },

    mobile: '760px'

}
function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
            {content.map((item,index)=>(
              <Card key={index} item={item} />
              
            ))}
        </Container>
        <Footer />
      </>
  </ThemeProvider>
  );
}

export default App;
