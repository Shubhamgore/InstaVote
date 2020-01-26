import React, { Component, Fragment } from 'react'
import ConstituencyPanel from './constituencypanel'
import ConstituencyCard from './constituencycard'
import search from '../../assets/search.svg'
import '../../styles/main.scss'
import contents from '../../constituency.json'

class Constituency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            active: '',
            activeId: '',
            search: ''
        }

        this.list = []
        this.items = []

        this.close = this.close.bind(this)
        this.start = this.start.bind(this)
        this.click = this.click.bind(this)
        this.splice = this.splice.bind(this)
    }

    close() {
        this.setState({ start:false })
    }

    start(active, activeId) {
        this.setState({ start:true })
        this.setState({
            active:active,
            activeId:activeId
        })
    }

    click() {
        this.props.hidesignout()
        if(!this.state.search)
        this.items = this.list
        this.forceUpdate()
    }

    search(event) {
        this.setState({ search:event.target.value })
        this.items = []
        this.list.forEach(place => {
            if (place[0].toLowerCase() == event.target.value.toLowerCase())
            this.items.push(place)
        })
        if(!event.target.value)
        this.items = this.list
        this.forceUpdate()
    }

    splice(text) {
        this.items = this.items.splice(this.items.indexOf(text),1)
        this.forceUpdate()
    }

    componentDidMount() {
        // election.methods.getConstituencies(this.state.AdminId).call((res) => {
        //     console.log(res)
        // })
        // JSON.stringify(contents);
        for(var i in contents)
            this.list.push([i, contents[i]])
        this.items = this.list;
    }

    render() {
        return(
            <div className='constituency' onClick={this.click}>
                <div className='constituency--heading'>Constituency</div>
                <div className='constituency--search'>
                    <input className='constituency--search-input' placeholder='Search' onChange={this.search.bind(this)}/>
                    <img className='constituency--search-icon' src={search} alt='search' />
                </div>
                <div className='constituency--list'>
                    {this.items.map((place) => (<ConstituencyPanel name={place} handleClick={this.start}/>))}
                </div>
                { this.state.start ? (<ConstituencyCard name={this.state.active} Id={this.state.activeId} close={this.close} splice={this.splice} items={this.items}/>) : (<Fragment />) } 
            </div>
        )
    }
}

export default Constituency
