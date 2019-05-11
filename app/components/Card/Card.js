import React from 'react';

import './style.scss';

export class Card extends React.PureComponent {
    state = {
    }

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src="https://via.placeholder.com/250" />
                </div>
                <div>
                    <h3>User Name</h3>
                    <p>Developer</p>
                    <p>Vegetarian</p>
                    <p>North Carolina</p>
                </div>
            </div>
        )
    }
}


export default Card;