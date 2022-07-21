
const WaifuService = () => {
    interface Response { 
        data: {
            images: [
                {
                    url: string 
                }       
            ]
        }
    }

    const getRandomWaifu = (isNsfw: boolean, tag: string) => {
        
        const urlTag = tag === "all" ? '' : `&selected_tags=${tag}`

        const axios = require('axios').default;
        return axios.get(`https://api.waifu.im/random/?is_nsfw=${isNsfw}${urlTag}`).then((res: Response) => res.data.images[0].url)
    }

    return { getRandomWaifu }

}

export default WaifuService;