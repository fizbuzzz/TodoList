import './Main.css'
import { Component } from 'react';
import MainList from '../MainList/MainList';

class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="container">
                    <MainList 
                    realData={this.props.realData}
                    visibleArr={this.props.visibleArr}
                    currentSearchValue={this.props.currentSearchValue}
                    deleteItem={this.props.deleteItem}
                    onChangeChecked={this.props.onChangeChecked}
                    />
                </div>
            </section>

        )
    }
}

export default Main;