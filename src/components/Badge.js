import React from 'react';
import '../styles/Badge.css';

class Badge extends React.Component{

    render(){
        return (
            
            <div className = "container Badge">
                <div className="Badge__header">
                    <h2> Trends</h2> 
                     
                </div>
                <p className="par_small"><small>.Change</small></p>   
                <div className = "Badge_header">
                    <dl>
                        <p className="par">#ManwaLage</p> 
                        <p className="par">#MyntaTreasuHult</p> 
                        <p className="par">#MyntaTreasuHult</p> 
                        <p className="par">#SalmanTheEmperorOfBollywood</p> 
                        <p className="par">#Praxis2014</p> 
                        <p className="par">#||AI||Starts</p> 
                        <p className="par">BramikRakshas</p> 
                        <p className="par">Vinod Rai </p>
                        <p className="par">Apple watch</p> 
                        <p className="par">Glendal Forest Hotel</p>
                    </dl>
                </div>
            </div>
            
           
        )
    }

}

export default Badge;