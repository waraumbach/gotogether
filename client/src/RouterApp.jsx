
import {Routes,Route}  from'react-router-dom'
import Home from './Home'

const RouterApp =()=>{
return (
<>
<Routes>
    <Route path='/' element={<Home/>} />
</Routes>

</>)
}
export default RouterApp