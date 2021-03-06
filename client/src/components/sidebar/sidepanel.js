import React, { Component } from 'react'
import dot from '../../assets/dot.svg'
import '../../styles/main.scss'

class SidePanel extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {

    }

    handleClick() {
        this.props.handleClick(this.props.name);
    }

    render() {
        return(
            <div className='sidepanel' style={{ borderLeft: this.props.active === this.props.name ? '10px solid #08BBF4' : '0px' }} onClick={this.handleClick}>
                <span className='sidepanel--state'>
                { this.props.name === this.props.active ? <span/> : <span>(<img src={dot} className='sidepanel--dot' alt='' />)</span> }
                </span>
                <span className='sidepanel--name' style={{ color: this.props.active === this.props.name ? '#08BBF4' : '#FFFFFF', marginLeft: this.props.active === this.props.name ? '22px' : '12px' }}>
                    {this.props.name.toUpperCase()}
                </span>
            </div>
        )
    }
}

export default SidePanel
