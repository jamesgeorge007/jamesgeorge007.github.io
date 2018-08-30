import * as React from 'react';
import './assets/css/Home.css';

class Home extends React.Component<{}, any>{
    public render() {
        return (
            <div>
                <div className="bg" />
                <div className='home-wrapper'>
                <div className="image-wrapper">
                    <img className="profile-img" src="https://avatars2.githubusercontent.com/u/25279263?s=400&v=4" alt="profile-image"/>
                </div>
                    <h1>James George</h1>
                    <p className="lead" style={{fontWeight: 400}}>Yet another Developer</p>
                    <div className="social-profile-icons">
                        <i className="fab fa-twitter icon" />
                        <i className="fab fa-github icon" />
                        <i className="fab fa-linkedin-in icon" />
                    </div>
                </div>
                </div>
        );
    }
}

export default Home;