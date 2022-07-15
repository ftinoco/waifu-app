import axios from "axios"
import { API_URL_BASE } from "../utils/consts"
import { IFilterProps, IImage } from "../utils/interfaces";

export const getRandomImage = async (props: IFilterProps) => {
    const {
        orientation,
        isNSFW,
        many,
        isGIF
    } = props;
    const res = await axios.get(`${API_URL_BASE}random/?many=${many}&is_nsfw=${isNSFW}&orientation=${orientation}&gif=${isGIF}`);
    return res.data as IImage[];
}