import React, {useState} from 'react'

import fetchData from './fetchData'
//import Rows from './Rows'

var arr = []

const Table = (props) => {

    console.log(props.values[0])
    //console.log(values[0])
    console.log('hi')

    var x = React.createElement("h4", null, "New react element")

    arr = props.values

    var i = 0

    return (   
        <div>
            <div className="Table" id="table">
                <div className="Heading">
                    <div className="Cell">
                        <p>Id</p>
                    </div>
                    <div className="Cell">
                        <p>First Name</p>
                    </div>
                    <div className="Cell">
                        <p>Last Name</p>
                    </div>
                    <div className="Cell">
                        <p>Location</p>
                    </div>
                    <div className="Cell">
                        <p>Date</p>
                    </div>
                    <div className="Cell">
                        <p>Salary</p>
                    </div>
                </div>

                {arr.map((val) => 
                <div className="Row">
                    <div className="Cell">
                        <p>{val.id}</p>
                    </div>
                    <div className="Cell">
                        <p>{val.firstName}</p>
                    </div>
                    <div className="Cell">
                        <p>{val.lastName}</p>
                    </div>
                    <div className="Cell">
                        <p>{val.location}</p>
                    </div>
                    <div className="Cell">
                        <p>{val.date}</p>
                    </div>
                    <div className="Cell">
                        <p>{val.salary}</p>
                    </div>
                </div>  )}
                
            </div>

        </div>
    )
}

export default Table

/*
const rows = () => {
    var i = 0
    console.log(arr[i])
    
    return  (<div className="Row">
                <div className="Cell">
                    <p>{arr[i].id}</p>
                </div>
                <div className="Cell">
                    <p>{arr[i].firstName}</p>
                </div>
                <div className="Cell">
                    <p>{arr[i].lastName}</p>
                </div>
                <div className="Cell">
                    <p>{arr[i].location}</p>
                </div>
                <div className="Cell">
                    <p>{arr[i].date}</p>
                </div>
                <div className="Cell">
                    <p>{arr[i].salary}</p>
                </div>
            </div>)
}
*/