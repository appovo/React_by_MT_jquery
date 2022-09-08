import React from "react";
import classNames from "classnames";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.progressBarContainer = React.createRef()
    }
    componentDidMount() {
        window.$(this.progressBarContainer.current).progressbar({
            value: this.props.value
        })
    }
    componentWillUnmount() {
        window.$(this.progressBarContainer.current).progressbar("destroy")
    }
    render() {
        return <div ref={this.progressBarContainer} />
    }
}

function ProgressBarJui({ className = "", percent = 33, big = false, color = null }) {
    let progressClassName = classNames(
        "progress",
        className,
        {
            "progress--big": big,
            "progress--color-red": color === "red"
        }
    );
    return (
        <div className={progressClassName}>
            <ProgressBar value={percent} />
        </div>
    );
}

export default ProgressBarJui;