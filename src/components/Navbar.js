import React from 'react';
import twiter from '../images/twiter.jpg'
import me from '../images/me.jpg'
import bell from '../images/bell.png'
import numeral from '../images/numeral.jpg'
import home from '../images/home.png'

class Navbar extends React.Component {
	render() {
		return (
			<nav className=" container-fluid bg-light ">
				<div className="container-fluid">
                    
                    <div className="navbar-brand col-1">
                        <img src={home} width="40" height="20" alt=""/>
                        <button type="button" class="btn btn-light">Home</button>
                    </div>
                    <div className="navbar-brand col-2">
                        <img src={bell} width="30" height="20" alt="" />
                        <button type="button" class="btn btn-light">Notifications</button>
                    </div>
                    <div className="navbar-brand col-2">
                        <img src={numeral} width="30" height="20" alt=""/>
                        <button type="button" class="btn btn-light">Disover</button>
                    </div>
                    <div className="navbar-brand col-2">
                        <img src={me} width="20" height="20" alt=""/> 
                        <button type="button" class="btn btn-light">Me</button>
                    </div>
					<div className="navbar-brand col-2">
                       <img src={twiter} width="30" height="20" alt=""/>
                    </div>

					<div className="navbar-brand col-1">
                      <input className="rounded" placeholder="Search Tweet"></input>
                    </div>

				</div>
			</nav>
		);
	}
}

export default Navbar;
