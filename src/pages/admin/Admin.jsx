import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard'
import Apartment from './apartment/Apartment'
import Create from './apartment/create/Create'

const Admin = () => {
    const token = window.localStorage.getItem('token');
    if(!token) return <Navigate to='/auth/login' />
    return (
        <section style={{ display: 'flex', background: '#f8f8f8' }}>
            <Sidebar />
            <div style={{width: '100%'}}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/apartments' element={<Apartment />} />
                    <Route path='/apartments/register' element={<Create />} />
                </Routes>
            </div>
        </section>
    )
}

export default Admin
