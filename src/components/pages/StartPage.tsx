import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const StartPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-11/12 sm:w-6/12 sm:text-xl leading-7 sm:h-max h-screen">
                <div className="flex justify-between items-center border border-solid broder-white rounded mx-2 my-10 sm:w-9/12 px-3">
                    <div className="typing">Anime waifu.</div>
                    <svg className="cursor-pointer" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="white" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                </div>
                <h1 className="text-4xl mb-2">👋</h1>
                <p className="m-2">
                    Hi, this is an app for enjoying anime girls. <span className="text-xl">🤤</span>
                </p>
                <p className="mx-2 my-2 sm:w-8/12">
                    The application uses the API from <a href="https://waifu.im/" target="_blank">waifu.im</a>. There are about 4500 images in the database. You can also expand the list by uploading your images <a target="_blank" href="https://waifu.im/upload/">here</a>. 
                </p>
                <p className="mx-2 mb-8">
                    Have a good time! <span className="text-xl">❤️</span>
                </p>
                <Link to="/choice">
                    <Button>Get started</Button>
                </Link>
            </div>
        </div>
    )
}

export default StartPage;