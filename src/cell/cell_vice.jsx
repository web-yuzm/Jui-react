import React from 'react';
import classNames from 'classnames';

export default class Cell extends React.Component{

	constructor(props){
		super(props)
	}

	render(){

		const {children, className, ...others} = this.props;
	
		const cls = classNames({
            'Jui-cell-value': true,
        }, className);

		return(<div className={cls}>
			{children}
		</div>)
	}
}
