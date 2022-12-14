import { Routes, Route} from 'react-router-dom'
import Navbar from './navBar'
import HomeRoutes from '../routes/home'

import { getUser } from '../redux/oauth/Slice';
import { useSelector } from 'react-redux';

function HomeWrapper(){

    const subRutas = HomeRoutes.subRutas
    const ruta     = HomeRoutes.ruta
    const path = window.location.pathname
    const RutasRevi = []

    const user = useSelector(getUser)

    if(user.value == null){
        window.location.href = '../'
    }
    
    subRutas.map((v) => RutasRevi.push(ruta + v.name))
    
    if(!RutasRevi.includes(path)){
        window.location.href = '../page-not-found'
    }
    //queda asi top 86 y height 150px
    return <>
      <div className="contHome">
          <div className='contPublic'>
            <Navbar buttons={HomeRoutes}/>
              <div className='contBody'>
              <Routes>
                  {subRutas.map((v, i) => <Route path = {ruta + v.name} element = {v.component} key = {i}/>)}
              </Routes>
              </div>
              <div className='contFlotante'>
                <p>Contacto</p>
                <p>Platech</p>
                <p>+57-3148186762</p>
                <p>platechoficial@gmail.com</p>
              </div>
          </div>
        </div>
    </>
}

export default HomeWrapper