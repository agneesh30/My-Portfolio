import { useState, useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from 'react-router-dom';

const ProductList = [
    {
        "id": 0,
        "name": "Chat Me",
        "description": "ChatMe application is a platform that allows users to communicate with each other in real-time via text messages.Users should be able to create an account or sign up using their email, username, and password. User authentication is important to ensure the security and privacy of the chat conversations.Once registered, users should be able to log in using their credentials in order to access the chat application.The chat application should have a user-friendly interface that displays the list of available chat rooms or contacts, a chat window, and input field to type and send messages.",
        "skills": "HTML, CSS, Material UI, JavaScript, React.Js, and Firebase",
        "images": ["../my-work/chat-me/login.png", "../my-work/chat-me/register.png", "../my-work/chat-me/chat.png"],
        "gitHub": "https://github.com/agneesh30/ChatMe",
        "netlifyUrl": "https://chatmereact.netlify.app",
        "reference": "YouTube(Lama Dev)"
    },
    {
        "id": 1,
        "name": "E-Commerse",
        "description": "Our site showcases an extensive collection of wooden furniture, including beds, chairs, tables, cabinets, and more. Each product listing includes detailed descriptions, specifications, and high-resolution images to help customers make informed purchasing decisions.To simplify the browsing process, customers can utilize our search and filter options. They can search for specific furniture items or apply filters such as price range, style, material, and dimensions to narrow down their options according to their preferences.",
        "skills": "HTML, SCSS, React.Js, JavaScript, and Redux",
        "images": ["../my-work/e-commerse/home.png", "../my-work/e-commerse/home1.png", "../my-work/e-commerse/home3.png", "../my-work/e-commerse/products.png", "../my-work/e-commerse/products1.png", "../my-work/e-commerse/product.png", "../my-work/e-commerse/carts.png"],
        "gitHub": "https://github.com/agneesh30/e-commerce",
        "netlifyUrl": "https://a-ecommerce-react.netlify.app/",
        "reference": "Udemy"
    },
    {
        "id": 2,
        "name": "StayFit",
        "description": "Users can access a wide range of exercises targeting different muscle groups and fitness levels. These exercises may include cardio workouts, strength training exercises, flexibility routines, and even specialized workouts such as yoga or pilates.",
        "skills": "React.Js, JavaScript, Bootstrap, HTML, and SCSS",
        "images": ["../my-work/stay-fit/home.png"],
        "gitHub": "https://github.com/agneesh30/StayFit",
        "netlifyUrl": "https://stay-fit-react.netlify.app",
        "reference": "YouTube (JavaScript Mastery)"
    },

    {
        "id": 3,
        "name": "Flipkart Clone",
        "description": "The website displays a catalog of products or services, including descriptions, images, prices, and other relevant details. The catalog should be well-organized, searchable, and easily navigable",
        "skills": " React.Js, HTML, CSS, Material UI, and JavaScript",
        "images": ["../my-work/flipkart/home1.png", "../my-work/flipkart/category.png", "../my-work/flipkart/about.png", "../my-work/flipkart/footer.png"],
        "gitHub": "https://github.com/agneesh30/flipkart-react",
        "netlifyUrl": "https://react-flipkart-clone.netlify.app",
        "reference": "Flipkart"
    },
    {
        "id": 4,
        "name": "Youtube Clone",
        "description": "YouTube is widely used online video sharing platform. It offers a diverse range of content, including blocks, tutorials, music videos, and more.",
        "skills": "HTML, CSS, Material UI, JavaScript and React.Js",
        "images": ["../my-work/youtube/yt-1.png",
            "../my-work/youtube/yt-2.png",
            "../my-work/youtube/yt-3.png",
            "../my-work/youtube/yt-4.png"],
        "gitHub": "https://github.com/agneesh30/YouTube-Clone",
        "netlifyUrl": "https://a-youtube-react.netlify.app/home",
        "reference": "YouTube (JavaScript Mastery)"
    }
]

const ProjectDetails = () => {

    const { id } = useParams();
    const val = id || "1";
    const [projects, setProjects] = useState(ProductList[+val]);
    console.log(ProductList);
    console.log(id);

    console.log(projects)

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });


    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };

    return (
        <>
            <div className="breadcrumb row">
                <div className="offset-md-1 d-flex col-md-4 justify-content-start align-items-center">
                    <span><Link className="navLink" to="/home">Home</Link>&nbsp;</span>
                    <span style={{ color: "", fontSize: "1.5rem" }}> / {projects.name}</span>
                </div>
            </div>
            <div className="row container mx-auto">
                <div className="col-md-6">
                    <div className="slider-wrapper">

                        {projects.images && <Slider
                            {...settingsMain}
                            asNavFor={nav2}
                            ref={slider => (setSlider1(slider))}
                        >

                            {projects.images.map((slide) =>

                                <div className="slick-slide" key={slide}>
                                    <img className="slick-slide-image" src={slide} />
                                </div>

                            )}

                        </Slider>}
                        <div className="thumbnail-slider-wrap">
                            {projects.images.length > 1 && <Slider
                                {...settingsThumbs}
                                asNavFor={nav1}
                                ref={(slider) => (setSlider2(slider))}>
                                {projects.images.map((slide) =>
                                    <div className="slick-slide" key={slide}>
                                        <img className="slick-slide-image" src={slide} />
                                    </div>
                                )}
                            </Slider>}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>{projects.name}</h2>
                    <p>{projects.description}</p>
                    <div><span className="highlight">Skills: </span>{projects.skills}</div>
                    <div>
                        <span className="highlight">GitHub: <a href={`${projects.gitHub}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-github" style={{ fontSize: "36px", color: "black" }}></i></a></span>
                    </div>
                    {projects.netlifyUrl && <div className='mt-3'>
                        <span className="highlight">Play Around: </span><a href={`${projects.netlifyUrl}`} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>{projects.name}</a>
                    </div>}
                    {projects.reference && <div className='mt-3'>
                        <span className="highlight">Reference: </span>{projects.reference}
                    </div>}

                </div>
            </div >
        </>
    );
}

export default ProjectDetails