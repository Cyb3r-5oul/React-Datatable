import React from 'react'

const Rows = (arr, i) => {
    console.log(arr[0])

    return
        
        <div className="Row">
            <div className="Cell">
                <p>{arr[i].date}</p>
            </div>
            <div className="Cell">
                <p>{arr[i].firstName}</p>
            </div>
            <div className="Cell">
                <p>{arr[i].id}</p>
            </div>
            <div className="Cell">
                <p>{arr[i].lastName}</p>
            </div>
            <div className="Cell">
                <p>{arr[i].location}</p>
            </div>
            <div className="Cell">
                <p>{arr[i].salary}</p>
            </div>
        </div>
}

export default Rows