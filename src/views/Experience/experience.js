import React from "react";
import TimeLine from "../../components/TimeLine/timeline";

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            experienceList: [
                {
                    logoPath: "/images/chevron_logo.png",
                    name: "Chevron",
                    entries: [
                        {
                            name: "Software Engineer",
                            date: "Nov 2020 – Present",
                            description:
                                "- Develop Ansible roles to automate machine learning experience and model promotion.\n- Develop Python library to simplify data science workflow",
                        },
                        {
                            name: "Software Engineer",
                            date: "Jul 2020 – Nov 2020",
                            description:
                                "- Design and develop API using the best practice\n- Design and develop web application in an Agile environment\n- Cooperate with other software development teams to solve problems",
                        },
                    ],
                },
                {
                    logoPath: "/images/fifthsun_logo.jpeg",
                    name: "Fifth Sun",
                    entries: [
                        {
                            name: "Junior Web Engineer",
                            date: "June 2019 – June 2020",
                            description:
                                "- Third-party API implementation\n- Creating mobile responsive web pages based on design mockups\n- Backend feature development and bug fixes",
                        },
                    ],
                },
                {
                    logoPath: "/images/morecommerce_logo.png",
                    name: "MoreCommerce",
                    entries: [
                        {
                            name: "Software Developer Internship",
                            date: "June 2019 – June 2020",
                            description:
                                "- Cooperating with different department in front end web development\n- Localizing web application\n- Backend business logic development with .Net",
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return <TimeLine items={this.state.experienceList} />;
    }
}

export default Experience;
