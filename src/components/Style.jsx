import React from 'react';

import './Style.css';

export default class Style extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            masking: false
        };

        // TODO
    }

    render() {
        return (
            <div className={`styleTransfer`}>
                <div >
                    <h1 className='text-center'>Implement style transfer</h1>
                </div>
            </div>
        );
    }
}
