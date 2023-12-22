import "./Navbar.scss"

const Navbar = () => {

    return (
        <div className="navbar row no-gutters">
            <div className="text-sm-center">
                <a href='#about' className="btn navbtn">About</a>
                <a href='#skills' className="btn navbtn">Skills</a>
                <a href='#work' className="btn navbtn">Work</a>
                <a href='#contact' className="btn navbtn"> Contact</a>
            </div>
        </div>
    );
}

export default Navbar