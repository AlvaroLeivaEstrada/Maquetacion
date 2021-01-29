
import React from 'react'


import '../styles/Profile.css';
import '../styles/Tweet.css';

class Tweet extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                         <img className="rounded-circle"  src={this.props.logo} width="70px" height="80px" alt=""/>
                    </div>
                    <div className='col-6'>
                        <h6 className ="Profile_user-mod">{this.props.username} <small>@{this.props.slug}</small></h6><br/>
                        <p className ="Profile_user-mod">{this.props.text}</p>
                    </div>
                </div>
                <div className="row">
                    <h6 className="p" >Expand</h6>
                    <h6 className="p1">Replay      Retweet     Favorite     More</h6>
                </div>
            </div>
        )
    }
    
}

export default Tweet;