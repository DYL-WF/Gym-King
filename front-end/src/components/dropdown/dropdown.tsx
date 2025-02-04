import {IonSelect, IonSelectOption} from '@ionic/react';
import React from 'react'
import './dropdown.css'
import '../../theme/variables.css'
//creating a type so props can be entered
export type DropDownProps = {list?:Array<string>};

export class DropDown extends React.Component<DropDownProps>{
    render(){
        const {list} = this.props;
        return(
                <IonSelect placeholder='Select One' class="dropDown centerComp shadow">
                    {
                        list?.map(el =>{
                            console.log(el);
                            return (<IonSelectOption value={el} key={el}>{el}</IonSelectOption>)
                        })
                    }
                </IonSelect>
        )
        
    }
}

export default DropDown;