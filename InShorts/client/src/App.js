import './App.css';

import { Box,styled } from '@mui/material';

import Header from './components/Header';
import InfoHeader from './components/InfoHeader';

const Container=styled(Box)`
  width : 60%;
  margin : 40px auto 0 auto;
`

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
      </Container>

    </Box>
  );
}

export default App;