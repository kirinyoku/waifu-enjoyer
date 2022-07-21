import Button from "../../UI/Button";
import { Link } from 'react-router-dom'


interface Props {
    isNsfw: boolean;
}

const TagsPage = ({isNsfw}: Props) => {

    const nsfwTags: string[] = ['all', 'ass', 'milf', 'oral','paizuri', 'ecchi'];
    const sfwTags: string[] = ['all', 'uniform', 'maid', 'oppai','selfies', 'waifu'];

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="grid grid-rows-1 sm:grid-rows-2 sm:grid-cols-3">
                {isNsfw 
                    ? nsfwTags.map(tag => (
                        <Link to={`/nsfw/:${tag}`} key={tag}>
                            <Button>{tag}</Button>
                        </Link>
                        )) 
                    : sfwTags.map(tag => (
                        <Link to={`/sfw/:${tag}`} key={tag}>
                            <Button>{tag}</Button>
                        </Link>
                    ))
                } 
            </div>
        </div>
    )
}

export default TagsPage;