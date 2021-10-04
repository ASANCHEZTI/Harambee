import React from 'react'
import fondoImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component{

    render(){
        const {tittle, description, img, leftColor, rightColor} = this.props
        return(
            <div className="card mx-auto Fondo"
            style={{
                backgroundImage: `url(${fondoImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} width="280" alt="100" className="float-right"/>
                        </div>
                        <div className="col-6 Info">
                            <h1>{tittle}</h1>
                            <p>{description}</p>
                         </div>                
                    </div>
                </div>
            </div>
            

        ) 
    }
}

export default Card