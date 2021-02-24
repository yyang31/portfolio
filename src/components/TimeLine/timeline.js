import React from "react";
import "./timeline.scss";

class TimeLineItem extends React.Component {
    render() {
        return (
            <div className="time-line-item">
                <div className="logo">
                    <img src={this.props.item.logoPath} />
                </div>
                <div className="body">
                    <div className="name">
                        <span>{this.props.item.name}</span>
                        <span className="background-text">
                            {this.props.item.name}
                        </span>
                    </div>
                    <div className="date">{this.props.item.date}</div>
                    <div className="description">
                        {this.props.item.description}
                    </div>
                </div>
            </div>
        );
    }
}

class TimeLine extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="time-line">
                {this.props.items.map(function (item, i) {
                    return <TimeLineItem item={item} key={i} />;
                })}
            </div>
        );
    }
}

export default TimeLine;
