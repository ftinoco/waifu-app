import axios from "axios"
import { API_URL_BASE } from "../utils/consts"
import { IFilterProps, IGroupedOptions, IImage, ITagResponse, IOption } from "../utils/interfaces";

export const getRandomImage = async (props: IFilterProps) => {
    const {
        orientation,
        isNSFW,
        many,
        isGIF,
        selectedTags
    } = props;

    let url: string[] = [`${API_URL_BASE}random/`];
    url = [...url, `?many=${many}`];
    url = [...url, `&is_nsfw=${isNSFW}`];
    url = [...url, `&gif=${isGIF}`];

    if (selectedTags && selectedTags.length > 0) {
        selectedTags.forEach((tag) => {
            url = [...url, `&selected_tags=${tag}`];
        });
    }

    if (orientation != null)
        url = [...url, `&orientation=${orientation}`];

    console.log(url.join('').trim())        ;
    const res = await axios.get(url.join('').trim());
    return res.data as IImage[];
}

export const getTags = async (isNSFW: boolean) => {
    const response = await axios.get(`${API_URL_BASE}tags/?full=false`);
    const tags = response.data as ITagResponse;
    let groupedOption = [] as IGroupedOptions[];
    if (tags) {
        if (tags.versatile) {
            groupedOption = [...groupedOption, {
                label: 'Versatile',
                options: tags.versatile.map((tag) => (
                    {
                        label: tag,
                        value: tag
                    } as IOption
                ))
            } as IGroupedOptions]
        }
        if (isNSFW && tags.nsfw) {
            groupedOption = [...groupedOption, {
                label: 'NSFW',
                options: tags.nsfw.map((tag) => (
                    {
                        label: tag,
                        value: tag
                    } as IOption
                ))
            } as IGroupedOptions]
        }
    }

    return groupedOption;
} 