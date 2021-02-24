import React from "react";
import TimeLine from "../../components/TimeLine/timeline";

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            educationList: [
                {
                    logoPath: "/images/scale_agile_logo.png",
                    name: "Scaled Agile, Inc.",
                    date: "Issued September 2020 : Expires September 2021",
                    description: "SAFe 5 Practitioner Exam",
                },
                {
                    logoPath: "/images/csu_logo.png",
                    name: "California State University, Chico",
                    date: "January 2018 - June 2020",
                    description: "Bachelor’s Degree, Computer Science",
                },
                {
                    logoPath: "/images/rcc_logo.png",
                    name: "Riverside City College",
                    date: "August 2014 – December 2017",
                    description: "Bachelor’s Degree, Computer Science",
                },
            ],
        };
    }

    render() {
        return <TimeLine items={this.state.educationList} />;
    }
}

export default Education;
