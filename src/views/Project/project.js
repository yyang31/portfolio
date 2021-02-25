import React from "react";
import TimeLine from "../../components/TimeLine/timeline";

class Project extends React.Component {
    constructor() {
        super();
        this.state = {
            educationList: [
                {
                    logoPath: "/images/chewsr_logo.png",
                    name: "Chewsr",
                    entries: [
                        {
                            date: "Jan 2020 – May 2020",
                            description:
                                "Chewsr is a web application for an individual or a group of people easily decided where to dine out. The main appeal of the application is the ease of use, where users can swipe left to dislike a restaurant or right to like a restaurant. By the end of the swiping, the application will suggest the restaurants that everyone swiped right (liked) on.\n\nChewsr is created using the React JS framework. The location and restaurant data are gathered using google place API. Google Firebase is used for groups to share data such as search location and commonly liked restaurants.",
                            links: [
                                {
                                    type: "github",
                                    url: "https://github.com/yyang31/chewsr",
                                },
                                {
                                    type: "hyperlink",
                                    ulr: "https://www.chewsr.net/",
                                },
                            ],
                        },
                    ],
                },
                {
                    logoPath: "/images/apetur_logo.png",
                    name: "Apetur",
                    entries: [
                        {
                            date: "Jun 2019 – Dec 2019",
                            description:
                                "Apetur is a web application where users can easily discover and book an appointment with local photographers. While photographers will be able to easily manage and view their appointments. More features will be added as the development continues.\n\nTools such as bootstrap and jQuery were used for the front end development, while the Django framework and MySql were used for the back end development of this project.",
                            links: [
                                {
                                    type: "github",
                                    url: "https://github.com/ChicoState/Apetur",
                                },
                            ],
                        },
                    ],
                },
                {
                    logoPath: "/images/react_logo.png",
                    name: "Rate Me",
                    entries: [
                        {
                            date: "Apr 2019 – May 2019",
                            description:
                                "This is individual project for the class CINS 465, Web Programming Fundamentals. This is a web application that allows the user to rate and add movies and series. User can also hover or click on the image to see details on the show and ratings. User also have to option to filter the shows by types (movies, series, or all) and order the show by its title in ascending or descending order.\n\nThe web application build using ReactJs and CSS for the client side interaction. On the server side, Express was used to handle any database requests such as fetching shows and inserting new shows. The database is build using MySql.",
                            links: [
                                {
                                    type: "github",
                                    url: "https://github.com/yyang31/rate-me",
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return <TimeLine items={this.state.educationList} title="project" />;
    }
}

export default Project;
