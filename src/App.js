import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Shopping from './Components/Shopping';
import Axios from "axios";
import { QueryClient, QueryClientProvider } from 'react-query'

// Axios.defaults.baseURL =  process.env.REACT_APP_BASE_URL+contextVersion;
Axios.defaults.headers.common = {
  'Authorization': "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
  "Accept":"*/*"
}

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
          <Navbar/>
          <LandingPage/>
          <Shopping/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
