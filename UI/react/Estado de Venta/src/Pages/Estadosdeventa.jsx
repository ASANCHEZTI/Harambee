import '../Styles/Styles.css';
import Logo from '../Media/Logo.png'
import {Link} from 'react-router-dom'


function Estadosdeventa() {
  return (
    <div className="Estadosdeventa"> 
      <header className="header">
        <img src={Logo} className="logo" alt="Logo Harambee" />
      </header>      
      <ul class="navbar">
          <li>
            <button className="mainButton">Inicio</button>
          </li>  
          <li>
            <button className="mainButton">Nuestro Equipo</button>
          </li> 
          <li>
            <button className="mainButton">Información de Ventas</button>
          </li> 
          <li>
            <button className="mainButton">Informacion de Personal</button>
          </li> 
          <li>
            <button className="mainButton">Permisos de Usuario</button>
          </li> <li>
            <button className="mainButton">Salir</button>
          </li> 
          <li>
            <input type="search"></input>
          </li>  
        </ul>
      <main>
         <section>
           <form class="form">
             <fieldset className="fielset">
               <legend>
                 Estado de Ventas
               </legend>
               <label>
                <Link to='/Estadosdeventa-registrar'>                    
                    <button className="mainButton"> Registar </button>
                </Link> 
                <Link to='/Estadosdeventa-consultar'>        
                    <button className="mainButton"> Consultar </button>   
                </Link>
                <Link to='/Estadosdeventa'>        
                    <button className="mainButton"> Volver </button>   
                </Link>
               </label>
             </fieldset>
           </form>  

         </section>
      </main>
      <footer>
        Copyright © 2021 Harambee
      </footer>
      
    </div>
  );
}

export default Estadosdeventa;