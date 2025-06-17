import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard'
import Apartment from './apartment/Apartment'
import Create from './apartment/create/Create'
import Details from './apartment/details/Details'
import Client from './client/Client'

const Admin = () => {
    const token = window.localStorage.getItem('token');
    if (!token) return <Navigate to='/auth/login' />

    return (
        <section style={{ display: 'flex', background: '#f8f8f8', height: '100vh', overflow: 'hidden' }}>
            <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', zIndex: 1000, overflowY: 'auto', width: '250px', }}>
                <Sidebar />
            </div>
            <div style={{ width: '100%', marginLeft: '250px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'sticky', top: 0, zIndex: 999, }}>
                    <Navbar />
                </div>
                <div style={{ flex: 1, overflowY: 'auto', background: '#e7e5e5' }}>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/apartments' element={<Apartment />} />
                        <Route path='/apartments/details/:id' element={<Details />} />
                        <Route path='/apartments/register' element={<Create />} />
                        <Route path='/clients' element={<Client />} />
                    </Routes>
                </div>
            </div>
        </section>
    )
}

export default Admin