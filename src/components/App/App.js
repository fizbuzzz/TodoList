import './App.css';
import { Component } from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Circle from "../Circle/Circle";
import FormPopup from '../FormPopup/FormPopup';




class App extends Component {
    id = 4;
    state = {
        notesData : [
            {
                text: 'Hello',
                checked: false,
                id: 1,
            },
            {
                text: 'Welcome',
                checked: false,
                id: 2,
            },

            {
                text: 'Text',
                checked: false,
                id: 3,
            },
 
        ],
        currentSearchValue: '',
        currentMenuValue: 'All',
        nightMode : false,
        popupForm : false,
        newNote: '',
    }
    
    


    onChangeMode = () => {
        this.setState(({nightMode}) => {
            return {
                nightMode: !nightMode,
            }
        })
    }

    onChangePopup = () => {
        this.setState(({popupForm}) => {
            return {
                popupForm: !popupForm,
            }
        })
    }

    deleteItem = (id, arr) => {
        let cutedArr = arr.filter(i => i.id !== id);


        this.setState(({
            notesData: cutedArr,
        }))

      
    }

    setSearchValue = (newValue) => {
        this.setState({
            currentSearchValue: newValue,
        })
    }

    setValue = (newNote) => {
        this.setState({
            newNote
        })
    }

    addItem = (newText, data) => {
        const newObject = {
            text: newText,
            checked: false,
            id: this.id++,
        }

        const updatedArr = [...data, newObject]

        this.setState({
            notesData: updatedArr,
        })


    }

    onChangeChecked = (id) => {
        this.setState(({notesData}) => {
            return {
                notesData: notesData.map((item) => {
                    if (item.id === id) {
                        return {...item, checked: !item.checked}
                    }

                    return item;
                })


            }
        })

    }

    searchByChecked = (str, arr) => {
        switch(str) {
            case 'Complete':
                return arr.filter(i => i.checked === true)
            case 'Incomplete':
                return arr.filter(i => i.checked === false)
            default:
                return arr;
        }
    }

    onChangeCurrentMenuValue = (newValue) => {
        this.setState({
            currentMenuValue: newValue,
        })
    }

    searchItem = (arg, arr) => {
        return arr.filter(i => i.text.toLowerCase().includes(arg.toLowerCase()));
    }


    render() {
        const {nightMode, popupForm, currentSearchValue, notesData, newNote, currentMenuValue} = this.state;
        const appStyles = nightMode ? 'app app_night-mode' : 'app';
        const viewPopup = popupForm ? <FormPopup 
        addItem={() => this.addItem(newNote , notesData)} 
        setValue={this.setValue} 
        onChangePopup={this.onChangePopup}/> 
        : null;
        const filteredData =  currentSearchValue.length  ? this.searchItem(currentSearchValue, notesData) : notesData;
        const visibleArr = this.searchByChecked(currentMenuValue, filteredData);

        return (
            <div className={appStyles}>
                <Header 
                    nightMode={this.state.nightMode}
                    onChangeMode={this.onChangeMode}
                    setSearchValue={this.setSearchValue}
                    onChangeCurrentMenuValue={this.onChangeCurrentMenuValue}/>
                <Main 
                    visibleArr={visibleArr}
                    realData={notesData}
                    currentSearchValue={currentSearchValue}
                    deleteItem={this.deleteItem}
                    onChangeChecked={this.onChangeChecked}
                    />
                <Circle 
                    onChangePopup={this.onChangePopup}/>
                {viewPopup}
            </div>
        )
    }
}


export default App;