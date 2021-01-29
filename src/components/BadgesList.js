import React from 'react';
import Tweet from './Tweet';
import '../styles/Badge.css';

class BadgesList extends React.Component{
    render() {
        return (
          <div className="container-fluid Badge_list" >
            <div>
              <h3>Tweets</h3>
            </div>
            <ul className="container list-unstyled">
              {this.props.tweets.map(tweet => {
                return (
                  <li className="container" >
                    <Tweet 
                    username={tweet.username} 
                    slug={tweet.slug} 
                    text={tweet.text} 
                    logo={tweet.logo}/>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
}

export default BadgesList