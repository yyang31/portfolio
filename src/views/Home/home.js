import "./home.scss";
import portfile_pic from "../../assets/portfile_pic.jpg";

function Home() {
    return (
        <div id="home">
            <div className="portfile-pic">
                <img src={portfile_pic} alt="portfile picture" />
            </div>
            <div className="name">
                <span className="first-name">
                    Youwei
                    <span className="background-text">Stanley</span>
                </span>
                <span className="last-name">
                    Yang
                    <span className="background-text">Yang</span>
                </span>
            </div>
        </div>
    );
}

export default Home;
