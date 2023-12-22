
const Skills = () => {
    const mySkills = [
        {
            name: "Angular",
            url: '/angular.png'
        },
        {
            name: "React JS",
            url: "/react.png"
        },
        {
            name: "HTML",
            url: "/html.png"
        },
        {
            name: "CSS",
            url: "/css.png"
        },
        {
            name: "SASS",
            url: "/sass.png"
        },
        {
            name: "Bootstrap",
            url: "/bs.png"
        },
        {
            name: "Java Script",
            url: "/js.png"
        },
        {
            name: "Type Script",
            url: "/ts.png"
        },
        {
            name: "Material UI",
            url: "/mui.png"
        },
        {
            name: "Redux",
            url: "/redux.jpg"
        },
        {
            name: "Java",
            url: "/java.png"
        },
        {
            name: "Spring",
            url: "/spring.png"
        }
    ]
    return (
        <section className="container" id="skills">
            <h4 className="text-center py-5 pb-3">
                <span className="h4 heading">Skills</span>
            </h4>
            <div className="mycards">
                <div className="icon-card d-flex flex-wrap">
                    {
                        mySkills.map(item => {
                            return <div className="cards">
                                <img src={item.url} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills