import React, { Component } from 'react';

import Table from './Table'



class Navbar extends Component {
    container = React.createRef();

    state = {
        data: "small",

        open: false,
    };

    handleButtonClick = () => {
        this.setState(state => {
            return {
            open: !state.open,
            };
        });
    };

    handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
        this.setState({
        open: false,
        });
    }
    };  

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    clicked = (option) => {
        this.setState({data: option})
        //this.setState({data: "small"})
        console.log(this.state.data)
    }

    render() {
        let dat
        if(this.state.data == 'small') {
            dat = <Table values={this.props.small}></Table> 
        }
        else if (this.state.data == "medium") {
            dat = <Table values={this.props.medium}></Table> 
        }
        else if (this.state.data == "large") {
            dat = <Table values={this.props.large}></Table> 
        }
        return (
            <div>
            <div className="container" ref={this.container}>
                <button type="button" className="button" onClick={this.handleButtonClick}>
                    ☰
                </button>
                {this.state.open && (
                <div className="dropdown">
                    <ul>
                    <li onClick={() => this.clicked("small")}>Small</li>
                    <li onClick={() => this.clicked("medium")}>Medium</li>
                    <li onClick={() => this.clicked("large")}>Large</li>
                    </ul>
                </div>
                )}
            </div>
            
            {dat}
            
            </div>
        )
    }
}

export default Navbar

//<Table values={this.props.small}></Table> 