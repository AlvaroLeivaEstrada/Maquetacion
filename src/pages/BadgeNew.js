import React from 'react';
import Badge from '../components/Badge';
import BadgeProfile from '../components/BadgeProfile'
import BadgesList from '../components/BadgesList'
import Navbar from '../components/Navbar';
import logo1 from '../images/1.jpg'
import logo2 from '../images/2.jpeg'
import logo3 from '../images/3.jpg'
import logo4 from '../images/4.jpg'
import logo5 from '../images/5.jpg'
import logo6 from '../images/random.jpg'

class BadgeNew extends React.Component {
    state={
        data:[
            {
                username:'dulquer salman',
                slug:'dulQuer . 59m',
                text:'Hearing extremely positive reviews for my brother @IamVikraPrahu #SigramThodu!! Back to back hits Vik :) :) so happy for you',
                logo:logo1
            },
            {
                username:'Mamootly',
                slug: 'mammuka . 2h',
                text :'Rajadhi Raja',
                logo:logo2
            },
            {
                username:'Aashid Abu',
                slug: 'talkaasquid .4h',
                text: 'This is some text to fill in the field, as I do not understand to original text :)',
                logo:logo3
            },
            {
                username:'J',
                slug:'jitesjpillai .5h',
                text:'No one start off wanting to make a bad film ya. But few hoestly stick to their visions, There are just too many forces at play',
                logo:logo4
            },
            {
                username:'HostOnNet.com',
                slug: 'hostonnet .6h',
                text: 'How to install pip on linux ',
                logo:logo5
            },
            {
                username: 'Shubba',
                slug:'ShubaOfficial .6h',
                text:'7.5 lakh views. Lets make it 1 million',
                logo:logo6
            }
        ]
    }
	render() {
		return (
			<div className="container ">
                <div className="row">
                    <Navbar/>
                </div>
				<div className="row">
					<div className="col-4">
						<div className="row">
							<BadgeProfile/>
						</div>
                        <div className="row">
                            <Badge/>
                        </div>
					</div>
					<div className="col-sm-8">
                        <BadgesList tweets={this.state.data} />
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
