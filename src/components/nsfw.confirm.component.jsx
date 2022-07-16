import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button
} from "@chakra-ui/react"
import { useRef } from "react"

export const NSFWConfirm = ({ isOpen, onClose, onConfirm }) => {
    const cancelRef = useRef();

    return (
        <>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Are you sure?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        With this option enabled you are likely to see perverted content.
                        <br />
                        Discretion is recommended.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={onConfirm}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}