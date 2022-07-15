import { Dispatch, ReactNode, SetStateAction } from "react";

export type Props = {
    children: ReactNode;
};

export type OrientationType = 'LANDSCAPE' | 'PORTRAIT' | null;

export interface IImage {
    image_id: number;
    file: string;
    url: string;
    extension: string;
    dominant_color: string;
    height: number;
    is_nsfw: boolean;
    preview_url: string;
    tags: ITag[];
    source: string;
    uploaded_at: string;
    width: number;
    favourites: number;
}

export interface ITag {
    description: string;
    name: string;
    tag_id: number;
    is_nsfw: boolean;
}

export interface IServiceContextProps {
    getRandomImage: (props: IFilterProps) => Promise<IImage[]>;
}

export interface IFilterProps {
    isNSFW: boolean;
    isGIF: boolean;
    orientation: OrientationType;
    many: boolean;
    selectedTags: string[];
    excludedTags: string[];
}

export interface IDataContextProps extends IFilterProps {
    setIsNSFW: Dispatch<SetStateAction<boolean>>;
    setIsGIF: Dispatch<SetStateAction<boolean>>;
    setOrientation: Dispatch<SetStateAction<OrientationType>>;
    setMany: Dispatch<SetStateAction<boolean>>;
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
    setExcludedTags: Dispatch<SetStateAction<string[]>>;
}