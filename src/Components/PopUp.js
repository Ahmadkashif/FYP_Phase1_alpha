import * as React from 'react';
import './Components.css'
import { Popup } from '@progress/kendo-react-popup';

export class CustomPopup extends React.Component {
    render() {
        return (
            <Popup
                {...this.props}
                anchorAlign={{
                    horizontal: 'center',
                    vertical: 'middle'
                }}
                popupAlign={{
                    horizontal: 'center',
                    vertical: 'middle'
                }}
                popupClass={'popup-content'}
            />
        );
    }
}