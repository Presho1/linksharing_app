import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import AuthProvider from './contexts/AuthContext'
import DataProvider from './contexts/DataContext'
import Home from './routes/home/Home'
import Preview from './routes/preview/Preview'
import Login from './routes/authentication/Login'
import Signup from './routes/authentication/Signup'
import User from './routes/user/User'

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}> 
        <AuthProvider>
          <DataProvider> 
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/preview' element={<Preview/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/:userSlug' element={<User />} />
            </Routes>
          </DataProvider>
        </AuthProvider> 
      </QueryClientProvider> 
    </>
  )
}

export default App
