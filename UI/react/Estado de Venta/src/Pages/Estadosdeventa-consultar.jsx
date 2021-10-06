import '../Styles/Styles.css';
import Logo from '../Media/Logo.png'
import {Link} from 'react-router-dom'

function Estadosdeventaconsultar() {
  return (
    <div className="Estadosdeventa">
      <div className="header">
        <header>
          <img src={Logo} className="logo" alt="Logo Harambee" className="logo"/>
        </header>
      </div>
       
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
           <div class="consultar">
                    <ul>
                        <li>IU Ventas <input type="text" name="IUVentas"></input>
                        </li>
                        <button> Buscar </button>
                    </ul>
            </div>
         </section>

      </main>
      <footer>
       Copyright © 2021 Harambee
      </footer>
      
    </div>
  );
}

export default Estadosdeventaconsultar;