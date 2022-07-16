import {
    ChangeEvent,
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import {
    Center,
    Checkbox, Flex,
    FormControl,
    FormLabel,
    Stack,
    useDisclosure
} from "@chakra-ui/react";
import { Select as SingleSelect } from "@chakra-ui/react";
import { GroupBase, MultiValue, Select } from "chakra-react-select";
import { DataContext } from "../context";
import { ServiceContext } from "../services";
import { IGroupedOptions, IOption, OrientationType } from "../utils/interfaces";
import { NSFWConfirm } from "./nsfw.confirm.component";

export const Filter = () => {
    const { getTags } = useContext(ServiceContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [groupedTags, setGroupedTags] = useState([] as IGroupedOptions[]);
    const {
        isNSFW,
        setIsNSFW,
        setIsGIF,
        setMany,
        setOrientation,
        setSelectedTags,
        setExcludedTags
    } = useContext(DataContext);

    useEffect(() => {
        getTags(isNSFW).then((res) => {
            setGroupedTags(res);
        });
    }, [isNSFW]);

    const orientationRef = useRef() as MutableRefObject<HTMLSelectElement>;

    const onSelectTag = (newValue: MultiValue<IOption>) =>
        setSelectedTags(newValue.map((x) => x.value));

    const onSelectOrientation = () =>
        setOrientation(orientationRef.current.value as OrientationType);

    return (
        <Flex color='white' mb='5' justifyContent='space-around'>
            <NSFWConfirm isOpen={isOpen}
                onClose={() => { onClose(); setIsNSFW(false); }}
                onConfirm={() => { onClose(); setIsNSFW(true); }} />
            <Stack mr='5' width='25%'>
                <FormControl>
                    <FormLabel htmlFor='tags'>Tags</FormLabel>
                    <Select<IOption, true, GroupBase<IOption>>
                        isMulti
                        id='tags'
                        options={groupedTags}
                        placeholder="-- Select Tag --"
                        closeMenuOnSelect={false}
                        selectedOptionStyle="check"
                        hideSelectedOptions={false}
                        onChange={onSelectTag}
                    />
                </FormControl>
            </Stack>
            <Center mr='5' width='25%'>
                <FormControl>
                    <FormLabel htmlFor='orientation'>Orientation</FormLabel>
                    <SingleSelect ref={orientationRef} id='orientation'
                        onChange={onSelectOrientation}>
                        <option>-- Select Orientation --</option>
                        <option value='LANDSCAPE'>Landscape</option>
                        <option value='PORTRAIT'>Portrait</option>
                    </SingleSelect>
                </FormControl>
            </Center>
            <Stack spacing={5} pt='5' direction='row' width='25%'>
                <Checkbox
                    onChange={(e) => {
                        e.currentTarget.checked ? onOpen() : setIsNSFW(false);
                    }}
                    colorScheme='red'
                    isChecked={isNSFW}>NSFW</Checkbox>
                <Checkbox onChange={(e) => setIsGIF(e.target.checked)}>GIFs</Checkbox>
                <Checkbox onChange={(e) => setMany(e.target.checked)}>Many</Checkbox>
            </Stack>
        </Flex>
    );
} 