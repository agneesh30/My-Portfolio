import "./landing-page1.scss"

const LandingPage = () => {
    return (
        <>
            <div className="landing-page">
                <div className="intro my-auto ml-5">
                    <div className="h1">Hey I'm Agneesh &#128075;</div>
                    <div className="lead pt-2">
                        I'm a full-stack web developer who is enthusiastic about building interactive applications and learning new stuffs!!.
                    </div>
                    <a href='../my-work/Agneesh_resume.pdf' download className="btn seemore mt-3">
                        Download Resume
                    </a>
                </div>
            </div>

        </>
    )
}

export default LandingPage