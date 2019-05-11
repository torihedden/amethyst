import React from 'react';

import './style.scss';

export class Callout extends React.PureComponent {
    state = {
    }

    render() {
        return (
            <div className="callout">
                <h3>Test text here</h3>
                <p>Callout text</p>
            </div>
        )
    }
}


export default Callout;