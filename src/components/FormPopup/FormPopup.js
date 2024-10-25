import './FormPopup.css';
import { Component } from 'react';


class FormPopup extends Component {

    state = {
        value : '',
    }

    setValue = (e) => {
        this.setState({
            value: e.target.value,
        })

        this.props.setValue(e.target.value);
    }



    render() {

        const {value} = this.state;
        const valueLength = value.trim().length;
        
        const btnDisabled = valueLength > 0  ? 'form__apply' : 'form__apply form__apply_disabled'; 

        return (
            <div className="form form_active">
                <div className="form__wrapper">
                    <div className="form__title">NEW NOTE</div>
                    <input
                        placeholder="Input your note..."
                        type="text"
                        name=""
                        id=""
                        value={value}
                        className='form__input'
                        maxLength={32}
                        onChange={this.setValue}
                    />
                    <div className="form__buttons">
                        <div className="form__cancel"
                        onClick={this.props.onChangePopup}>CANCEL</div>
                        <button type="submit" className={btnDisabled} onClick={() => {
                            this.props.addItem()
                            this.props.onChangePopup();
                        }}>APPLY</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default FormPopup;


