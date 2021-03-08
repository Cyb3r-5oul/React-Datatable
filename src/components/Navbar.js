import React, { Component } from 'react';

import Table from './Table'



class Navbar extends Component {
    container = React.createRef();

    state = {
        data: "small",
        searchRes: [{}],
        results: false,
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
        if(this.state.results){
            this.setState({results: false})
        }
        this.setState({data: option})
        //this.setState({data: "small"})
        console.log(this.state.data)
    }

    searchResults = []

    search = e => {
        console.log(e.target.value)
        this.setState({searchRes: []})
        this.searchResults = []
        if (this.state.data == "small"){
            var i = 0
            while(this.props.small[i]){
                if(this.props.small[i].firstName.includes(e.target.value) || this.props.small[i].lastName.includes(e.target.value)) {
                    this.searchResults.push(this.props.small[i]) 
                    //console.log(this.searchResults)
                }
                i+=1
            }this.setState({searchRes: this.searchResults})
            this.setState({results: true})
        }
        else if (this.state.data == "medium"){
            var i = 0
            while(this.props.medium[i]){
                if(this.props.medium[i].firstName.includes(e.target.value) || this.props.medium[i].lastName.includes(e.target.value)) {
                    this.searchResults.push(this.props.medium[i]) 
                    //console.log(this.searchResults)
                }
                i+=1
            }this.setState({searchRes: this.searchResults})
            this.setState({results: true})
        }
        else if (this.state.data == "large"){
            var i = 0
            while(this.props.large[i]){
                if(this.props.large[i].firstName.includes(e.target.value) || this.props.large[i].lastName.includes(e.target.value)) {
                    this.searchResults.push(this.props.large[i]) 
                    //console.log(this.searchResults)
                }
                i+=1
            }this.setState({searchRes: this.searchResults})
            this.setState({results: true})
        }
    }

    render() {
        let dat
        //let search = React.createElement("input", {id: "searchbar", placeholder: "Search"})

        if(this.state.data == 'small') {
            if (this.state.results){
                console.log(this.state.searchRes)
                dat = <Table values={this.state.searchRes}></Table> 
            }
            else {
                dat = <Table values={this.props.small}></Table> 
            }
        }
        else if (this.state.data == "medium") {
            if (this.state.results){
                console.log(this.state.searchRes)
                dat = <Table values={this.state.searchRes}></Table> 
            }
            else {
                dat = <Table values={this.props.medium}></Table> 
            }
        }
        else if (this.state.data == "large") {
            if (this.state.results){
                console.log(this.state.searchRes)
                dat = <Table values={this.state.searchRes}></Table> 
            }
            else {
                dat = <Table values={this.props.large}></Table> 
            }
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
            
            <input type="text" id="searchbar" placeholder="Search" onChange={this.search}></input>

            {dat}
            
            </div>
        )
    }
}

export default Navbar

//<Table values={this.props.small}></Table> 