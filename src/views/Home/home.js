import "./home.scss";

function Home() {
    return (
        <div id="home">
            <div className="portfile-pic">
                <img src="/images/portfile_pic.jpg" alt="portfile" />
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
