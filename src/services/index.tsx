import { createContext } from "react"; 
import { IServiceContextProps, Props } from "../utils/interfaces";
import { getRandomImage, getTags } from "./api"; 

export const ServiceContext = createContext({} as IServiceContextProps);

export const ServiceProvider = (props: Props) => {
    const { children } = props;
    const serviceState: IServiceContextProps = {
        getRandomImage,
        getTags
    };

    return (
        <ServiceContext.Provider value={serviceState}>
            {children}
        </ServiceContext.Provider>
    )
};