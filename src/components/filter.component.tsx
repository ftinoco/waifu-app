import {
    Box, Center,
    Checkbox, Flex,
    FormControl,
    FormLabel,
    Input, Select,
    Square,
    Stack
} from "@chakra-ui/react";
import { ChangeEvent, MutableRefObject, useContext, useRef } from "react";
import { DataContext } from "../context";
import { OrientationType } from "../utils/interfaces";

export const Filter = () => {
    const {
        setIsNSFW,
        setIsGIF,
        setMany,
        setOrientation,
        setSelectedTags,
        setExcludedTags
    } = useContext(DataContext);

    const tagRef = useRef() as MutableRefObject<HTMLSelectElement>;
    const orientationRef = useRef() as MutableRefObject<HTMLSelectElement>; 

    const onSelectTag = () =>
        setSelectedTags((prevValue) => [...prevValue, tagRef.current.value]);

    const onSelectOrientation = () =>
        setOrientation(orientationRef.current.value as OrientationType);

    const onCheckedNSFW = (e: ChangeEvent<HTMLInputElement>) => 
        setIsNSFW(e.target.checked); 

    const onCheckedGIF = (e: ChangeEvent<HTMLInputElement>) =>
        setIsGIF(e.target.checked);

    const onCheckedMany = (e: ChangeEvent<HTMLInputElement>) =>
        setMany(e.target.checked);

    return (
        <Flex color='white' mb='10'>
            <Center mr='5'>
                <FormControl>
                    <FormLabel htmlFor='country'>Tags</FormLabel>
                    <Select ref={tagRef} id='country'
                        placeholder='Select country'
                        onChange={onSelectTag}>
                        <option value='UAE'>United Arab Emirates</option>
                        <option value='NI'>Nigeria</option>
                    </Select>
                </FormControl>
            </Center>
            <Center mr='5'>
                <FormControl>
                    <FormLabel htmlFor='orientation'>Orientation</FormLabel>
                    <Select ref={orientationRef} id='orientation'
                        onChange={onSelectOrientation}>
                        <option>-- Select Orientation --</option>
                        <option value='LANDSCAPE'>Landscape</option>
                        <option value='PORTRAIT'>Portrait</option>
                    </Select>
                </FormControl>
            </Center>
            <Stack spacing={5} pt='5' direction='row'>
                <Checkbox onChange={onCheckedNSFW} colorScheme='red'>NSFW</Checkbox>
                <Checkbox onChange={onCheckedGIF}>GIFs</Checkbox>
                <Checkbox onChange={onCheckedMany}>Many</Checkbox>
            </Stack>
        </Flex>
    );
} 