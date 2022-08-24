import './App.scss';
import { FlagshipProvider } from '@flagship.io/react-sdk';
import { Container } from 'react-bootstrap'
import Menu from './components/Menu';
import { Routes, Route, useSearchParams } from "react-router-dom";
import { routesList } from './constants/routesList';
import Index from './pages';


function App() {

  let [searchParams] = useSearchParams();
  const envId = searchParams.get('envId');
  const apiKey = searchParams.get('apiKey')

  return (
    <FlagshipProvider
      envId={envId}
      apiKey={apiKey}
    >
      <Menu />
      <Container fluid="md">
        <Routes>
          <Route path="/" element={<Index />} />
          {
            routesList.map((item, index) => (<Route key={index} path={item.path} element={<item.element />} />))
          }
        </Routes>
      </Container>
    </FlagshipProvider>

  );
}


export default App;
