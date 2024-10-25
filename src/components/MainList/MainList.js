import './MainList.css';
import { Component } from "react";
import MainListItem from '../MainListItem/MainListItem';
import Empty from '../Empty/Empty';

class MainList extends Component {
    

    render() {
        const {realData, deleteItem, visibleArr, currentSearchValue,onChangeChecked} = this.props;
        const realDataLength = realData.length;
        const visibleArrDataLength = visibleArr.length;

        const elems = visibleArr.map((element) => {
            const {id, ...restProps} = element;
            const spanClasses = element.checked ? 'main__item-note main__item-note_done' : 'main__item-note';
            const checboxClasses = element.checked ? 'main__item-checkbox main__item-checkbox_checked' : 'main__item-checkbox';
            return (
                <MainListItem 
                    key={id}
                    {...restProps}
                    onChangeChecked={() => onChangeChecked(id)}
                    realData={realData}
                    spanClasses={spanClasses}
                    checboxClasses={checboxClasses}
                    deleteItem={() => deleteItem(id, realData)}
                />
            )
        })

        const n = (!realDataLength && !currentSearchValue) || !visibleArrDataLength;
        const z = visibleArrDataLength === 0 && currentSearchValue.length > 0;
        console.log(visibleArr)
        
        return (
            <ul className="main__list">
                {n || z ? <Empty/> : elems}
            </ul>
        )
    }
}


export default MainList;