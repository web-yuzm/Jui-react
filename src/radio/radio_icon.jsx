import React from 'react';
import classNames from 'classnames';

export default class Radio extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  }
  	}

	render(){

		const {children, className, value, name, disabled, RadioChoose, checked, ...others} = this.props;
	
		const cls = classNames({
            'Jui-radio-core': true,
        }, className);
		return (<input type='radio' className={cls} value={value} name={name} disabled={disabled} onChange={RadioChoose} checked={checked} />)
	}
}