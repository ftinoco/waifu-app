import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image, SimpleGrid } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";
import { ServiceContext } from "../services";
import { IFilterProps, IImage } from "../utils/interfaces";

export const Random = () => {
    const [images, setImages] = useState([] as IImage[]);
    const {
        orientation,
        isNSFW,
        isGIF,
        many
    } = useContext(DataContext);

    const {
        getRandomImage
    } = useContext(ServiceContext);

    useEffect(() => {
        const apiProps = {
            orientation,
            isNSFW,
            isGIF,
            many
        } as IFilterProps;

        getRandomImage(apiProps).then((res) => {
            const response = res as any;
            setImages(response.images);
            console.log(response.images);
        });
    }, [
        orientation,
        isNSFW,
        isGIF,
        many
    ]);


    return (
        <SimpleGrid columns={[2, 3, 5]} spacing='30px'>
            {
                images.map((img, idx) =>
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg'
                        overflow='hidden' boxShadow='dark-lg' key={idx}>
                        <Image src={img.url} alt={img.file} />
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                {img.is_nsfw &&
                                    <Badge borderRadius='full' px='2' colorScheme='red'>
                                        Lewd
                                    </Badge>
                                }
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    ml='2'>
                                    {img.height}px Height &bull; {img.width}px Width
                                </Box>
                            </Box>
                            <Box display='flex' mt='2' alignItems='center'>
                                {Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            color={i < img.favourites ? 'teal.500' : 'gray.300'}
                                        />
                                    ))}
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </SimpleGrid>
    )
}