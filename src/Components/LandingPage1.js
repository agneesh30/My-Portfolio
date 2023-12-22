
import "./landing-page1.scss";

const LandingPage1 = () => {
    return (
        <div className="landing-page1 row no-gutters pt-5">
            <div className="col">
                <div className="myCard card1 p-4">
                    <div className="h4">Hey I'm Agneesh &#128075;</div>
                    <div className="lead">
                        I'm a full-stack web developer who is enthusiastic about building interactive applications and learning new stuffs!!.
                    </div>
                    <a href='/Agneesh_resume.pdf' download className="btn seemore mt-3">
                        Download Resume
                    </a>
                </div>
                <div className="myCard card2">
                    <img src="/bg1.jpg" alt="Title" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage1