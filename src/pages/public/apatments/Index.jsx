import { Route, Routes } from 'react-router-dom'
import Apartments from './Apartments'
import Details from './Details'

const Index = () => {
    return (
        <Routes>
            <Route path='/' element={<Apartments />} />
            <Route path='/details/:id' element={<Details />} />
        </Routes>
    )
}

export default Index
