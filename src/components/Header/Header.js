import './Header.css';
import day from '../../imgs/adassdasd.svg'
import night from '../../imgs/sun.svg';
import SearchInput from '../SearchInput/SearchInput';
import {Component} from 'react';

class Header extends Component {

    state = {
        showMenu: false,
        selectedValue: 'All',
    }


    onToggleMenu = () => {
        this.setState(state => {
            return {
                showMenu : !state.showMenu,
            }
        })

    }

    onChangeValue = (element) => {
        this.setState(({
            selectedValue : element.target.textContent,
        }))

        this.props.onChangeCurrentMenuValue(element.target.textContent);

    }



    render() {
        const {showMenu, selectedValue} = this.state;
        const {nightMode, onChangeMode} = this.props;
        const menuClasses = showMenu
        ? 'header__list-items header__list-items_active'
        : 'header__list-items';
        
        const rotateSquare = showMenu ? 
        'header__list-selected__square header__list-selected__square_active' 
        : 'header__list-selected__square';
        
        const imgs = nightMode ? night : day
        
        const fontSize = ( selectedValue === 'Complete') 
        ? {'fontSize': '16px'} 
        : (selectedValue === 'Incomplete') 
        ? {'fontSize': '14px'}
        : {'fontSize' : '18px'}
        

        return (
            <header className="header">
                <h1 className="header__title">TODO LIST</h1>
                <div className="container">
                    <div className="header__menu">
                       <SearchInput setSearchValue={this.props.setSearchValue}/>
                    <div className="header__list">
                        <div className="header__list-selected"
                        onClick={this.onToggleMenu}>
                            <div className="header__list-selected__current"
                            style={fontSize}
                            >{selectedValue}</div>
                            <div className={rotateSquare}></div>
                        </div>
                            <ul className={menuClasses}>
                               <Buttons onChangeValue={this.onChangeValue}/>
                            </ul>   
                    </div>
                    <div 
                    className="header__menu-switch"
                    onClick={onChangeMode}>
                        <img src={imgs} alt="" />
                    </div>
                    </div>
                </div>
            </header>

        )
    }
}


const Buttons = (props) => {
    const btnsData = [
        {
            classes: 'header__list-item',
            content: 'All'
        },
        {
            classes: 'header__list-item',
            content: 'Complete'
        },
        {
            classes: 'header__list-item',
            content: 'Incomplete',
        },  
        
        
        ]
        

        return (
            btnsData.map((i,index) => (
                <li 
                    className={i.classes}
                    onClick={props.onChangeValue}
                    key={index}
                    >{i.content}
                </li>
            ))
        )

      
}

export default Header;