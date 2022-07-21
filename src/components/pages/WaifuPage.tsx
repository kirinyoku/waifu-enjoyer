import RandomPicture from "../RandomPicture";
import { useParams } from 'react-router-dom';

interface Props {
    isNsfw: boolean;
}

const WaifuPage = ({isNsfw}: Props) => {

    const {tag} = useParams();

    return (
        <RandomPicture isNsfw={isNsfw} tag={tag ? tag.slice(1) : 'all'}/>
    )
        
}

export default WaifuPage;