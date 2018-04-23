import React from 'react'
import star from '../../assets/icons/filters/star.svg'

function Stars({ quantity, width }) {
    if (quantity === 5) {
        return (
            <React.Fragment>
                <ul className="list-inline">
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                </ul>
            </React.Fragment>
        )
    }else if(quantity === 4){
        return (
            <React.Fragment>
                <ul className="list-inline">
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                </ul>
            </React.Fragment>
        )
    }else if(quantity === 3){
        return (
            <React.Fragment>
                <ul className="list-inline">
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                </ul>
            </React.Fragment>
        )
    }else if(quantity === 2){
        return (
            <React.Fragment>
                <ul className="list-inline">
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                </ul>
            </React.Fragment>
        )
    }else if(quantity === 1){
        return (
            <React.Fragment>
                <ul className="list-inline">
                    <li>
                        <img src={star} alt="star" width={width} />
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Stars