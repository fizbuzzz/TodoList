import './Circle.css';
import { Component } from 'react';


class Circle extends Component {
    render() {
        return (
            <div className="circle"
            onClick={this.props.onChangePopup}
            >
                <div className="circle__item"></div>
                <div className="circle__item"></div>
            </div>
        )
    }
}

export default Circle;