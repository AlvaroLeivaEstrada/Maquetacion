import React from 'react';
import '../styles/Badge.css';
import logo from '../images/logo192.png'

class BadgeProfile extends React.Component {
	render() {
		return (
			<div className="container ">
				<div className="row">
					<div className="container Badge_header bg-primary">
					</div>
				</div>
				<div className="row">
					<div className="container">
                        <div className ="row align-items-start">
                            <div className="Badge__section-name">
                                <img src={logo}  width="140" height="120"alt=""/>
                                <h6>Sherly <br/> @sherlymook2000</h6>
                            </div>      
                        </div>
						<div className="row align-items-start">
							<div className="col"> <p>Tweets <br/>9 </p> </div>
							<div className="col"><p>FOLLOWING <br/>12 </p></div>
							<div className="col">FOLLOWERS <br/>2 </div>
						</div>
					</div>
                    <div className ="Badge_footer container"  >
                        <div className="form-group">
                            <input type="text" size="40" placeholder="Compose new Tweet...  "></input>
                        </div>                
                    </div>
				</div>
				
			</div>
		);
	}
}
export default BadgeProfile;





