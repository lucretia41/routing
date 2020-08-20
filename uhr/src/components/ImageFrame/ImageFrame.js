import React from "react"
import "./ImageFrame.css"

export default class ImageFrame extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div
                className="IamgeFrame">
                <h2>Image Frame</h2>
                <div
                    className="frame">
                    <img src={this.props.image} alt={this.props.alt} />

                </div>
            </div>
        )
    }
}
