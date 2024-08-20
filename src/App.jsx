import HomePage from './components/Pages/HomePage'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
//const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <HomePage/>
    </QueryClientProvider>
  )
}

export default App
