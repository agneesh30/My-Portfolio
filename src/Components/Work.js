import { Link } from "react-router-dom";

const Work = () => {

    const productList = [
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
            "name": "E-Commerce",
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

    return (
        <>
            <section className="container" id="work">
                <h4 className="text-center py-5">
                    <span className="h4 heading">Hands on Projects</span>
                </h4>
                <div className="mycards">
                    <div className="work w-75 d-flex flex-wrap gap-3 justify-content-center">
                        {productList.map(item => {
                            return (
                                <>
                                    <Link to={`/projects/${item.id}`} className="my-card">
                                        <img src={item.images[0]} alt="Staty-fit application home page" />
                                        <div className="overlay">
                                            <div className="content">
                                                {item.name}
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work