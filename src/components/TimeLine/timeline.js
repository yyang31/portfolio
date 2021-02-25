import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import "./timeline.scss";

class TimeLineLink extends React.Component {
    render() {
        return (
            <div className="time-line-link">
                {this.props.links.map(function (link, i) {
                    return link.type === "github" ? (
                        <a
                            className="github"
                            key={i}
                            href={link.url}
                            target="blank"
                        >
                            <FaGithubAlt />
                        </a>
                    ) : (
                        <a
                            className="hyperlink"
                            key={i}
                            href={link.url}
                            target="blank"
                        >
                            <BiLink />
                        </a>
                    );
                })}
            </div>
        );
    }
}

class TimeLineItem extends React.Component {
    render() {
        return (
            <div className="time-line-item">
                <div className="logo">
                    <img
                        src={this.props.item.logoPath}
                        alt={this.props.item.name}
                    />
                </div>
                <div className="body">
                    <div className="name">
                        <div className="mobile-logo">
                            <img
                                src={this.props.item.logoPath}
                                alt={this.props.item.name}
                            />
                        </div>
                        <span>{this.props.item.name}</span>
                        <span className="background-text">
                            {this.props.item.name}
                        </span>
                    </div>
                    {this.props.item.entries.map(function (entry, i) {
                        return (
                            <div className="entry" key={i}>
                                {entry.name ? (
                                    <div className="entry-name">
                                        {entry.name}
                                    </div>
                                ) : null}
                                <div className="date">{entry.date}</div>
                                <div className="description">
                                    {entry.description}
                                </div>
                                {entry.links ? (
                                    <TimeLineLink links={entry.links} />
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

class TimeLine extends React.Component {
    render() {
        return (
            <div className="time-line">
                {this.props.title ? (
                    <div className="title">
                        {this.props.title}
                        <span className="background-text">
                            {this.props.title}
                        </span>
                    </div>
                ) : null}
                {this.props.items.map(function (item, i) {
                    return <TimeLineItem item={item} key={i} />;
                })}
            </div>
        );
    }
}

export default TimeLine;
