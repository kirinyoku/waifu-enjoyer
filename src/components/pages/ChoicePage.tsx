import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const ChoicePage = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center h-screen">
            <Link to='/sfw-tags'>
                <Button>SAFE</Button>
            </Link>
            <span className="font-medium text-xl hidden sm:inline">OR</span>
            <Link to='/nsfw-tags'>
                <Button>NSFW</Button>
            </Link>
        </div> 
    )
}

export default ChoicePage;