import { useEffect, useState } from 'react';
import WaifuService from '../services/AnimeService';
import Carousel from 'nuka-carousel';


interface Props {
    isNsfw: boolean;
    tag: string;
}

const RandomPicture = ({isNsfw, tag}: Props) => {

    const { getRandomWaifu } = WaifuService();

    const [firstImageUrl, setFirstImageUrl] = useState('');
    const [secondImageUrl, setSecondImageUrl] = useState('');

    const updateFirstImageUrl = () => {
        getRandomWaifu(isNsfw, tag).then((url: string) => setFirstImageUrl(url));
    }

    const updateSecondImageUrl = () => {
        getRandomWaifu(isNsfw, tag).then((url: string) => setSecondImageUrl(url));
    }

    useEffect(() => {
        updateFirstImageUrl()
    }, [])

    return (
        <Carousel
            wrapAround={true}
            withoutControls={false}
            renderBottomCenterControls={null}
            enableKeyboardControls={true}
            defaultControlsConfig={{
                prevButtonClassName: 'text-4xl m-0 2xl:m-80',
                prevButtonText: '<',
                nextButtonText: '>',
                nextButtonClassName: 'text-4xl m-0 2xl:m-80',

            }}
            dragThreshold={0.1}
            speed={400}
            afterSlide={((currentSlideIndex: number) => currentSlideIndex === 0 ? updateSecondImageUrl() : updateFirstImageUrl())}>
            <div className='h-screen flex flex-col justify-center image-wrapper'>
                <img className={`sm:w-fit sm:max-w-screen-lg m-auto sm:h-screen object-contain ${firstImageUrl ? 'block' : 'hidden'}`} src={firstImageUrl}/>
            </div>
            <div className='h-screen flex flex-col justify-center image-wrapper'>
                <img className={`sm:w-fit sm:max-w-screen-lg m-auto sm:h-screen object-contain ${secondImageUrl ? 'block' : 'hidden'}`} src={secondImageUrl}/>
            </div>
        </Carousel>
    )

}

export default RandomPicture;