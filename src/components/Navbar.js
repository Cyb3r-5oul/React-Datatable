import React, { Component } from 'react';


class Navbar extends Component {
    container = React.createRef();

    state = {
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

    render() {
        return (
            <div className="container" ref={this.container}>
                <button type="button" className="button" onClick={this.handleButtonClick}>
                    ☰
                </button>
                {this.state.open && (
                <div className="dropdown">
                    <ul>
                    <li>Small</li>
                    <li>Medium</li>
                    <li>Large</li>
                    </ul>
                </div>
                )}
            </div>
        )
    }
}


export default Navbar