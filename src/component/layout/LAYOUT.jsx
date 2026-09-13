import Footer from "../Footer/Footer"; 
import Nav from '../NAV/nav'
import { Outlet } from 'react-router-dom'

export default function LAYOUT() {
  return (
    <div>
    <Nav />
    <Outlet />
    <Footer/>
</div>
  )
}
