import React, { useState, Component } from 'react';

//import fetchData from './components/fetchData'

import Table from './components/Table'

import Navbar from './components/Navbar'

class App extends Component {
  
  state = {
   // data: fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json").then(res => res.json())
    values: [{}],
    medium: [{}],
    large: [{}]
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json").then(res => res.json()).then(response => {
    //const json = JSON.stringify(response);
    var arr = []
    var i = 0

    while (response[i]) {
      arr.push(response[i])
      console.log(arr[i])
      i+=1
    }
    this.setState({values: arr})
    //console.log(arr[0])
    //return arr
    });

    //medium
    fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json").then(res => res.json()).then(response => {
    //const json = JSON.stringify(response);
    var arrm = []
    var i = 0

    while (response[i]) {
      arrm.push(response[i])
      console.log(arrm[i])
      i+=1
    }
    this.setState({medium: arrm})
    //console.log(arr[0])
    //return arr
    });

    //large
    fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json").then(res => res.json()).then(response => {
    //const json = JSON.stringify(response);
    var arrl = []
    var i = 0

    while (response[i]) {
      arrl.push(response[i])
      console.log(arrl[i])
      i+=1
    }
    this.setState({large: arrl})
    //console.log(arr[0])
    //return arr
    });
  }
   

  render() {
    
    //this.state.data.then(res => console.log(res))
    console.log(this.state.values[0].id)
    //console.log(this.state.data[0].small)
    
    
    return (
      <div>

        <Navbar small={this.state.values} medium={this.state.medium} large={this.state.large}/>

        <Table values={this.state.values} />

      </div>
    )  
    
  }

}

export default App;

