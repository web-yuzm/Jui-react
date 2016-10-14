import React from 'react';
import classNames from 'classnames';
import PickerSlot from './picker_slot'

export default class PickerChoose extends React.Component{

	constructor(props) {
	  super(props);
  	}	

  	PickerSlot(data){
  		if(!data.length){
  			return <PickerSlot data={data}></PickerSlot>
  		}else{
  			return data.map((v,i)=>{
  				return <PickerSlot data={v} key={i}></PickerSlot>
  			})
  		}
  	}

  	componentWillUnmount(){

  	}

	render(){

		const {children, className, data, cancel, ...others} = this.props;
	
		const cls = classNames({
            'Jui-picker-choose': true,
        }, className);
		
		return (<div className={cls}>
			<div className="Jui-picker-mask"></div>
			<div className="Jui-picker-content">
				<nav className="Jui-picker-menu">
				<a onClick={cancel}>取消</a>
				<a className="active">确定</a>
				</nav>
				<div className="Jui-picker-select">	
					<div className="Jui-picker-highlight"></div>
					{this.PickerSlot(data)}
				</div>
			</div>
	</div>)
	}
}