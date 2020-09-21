import React from 'react'

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    useColorMode
} from "@chakra-ui/core";
const Trig = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (

        <>
            <Popover>
                <PopoverTrigger>
                    <Button variantColor={colorMode === 'light' ? "green" : 'pink'} >Trigger</Button>
                </PopoverTrigger>
                <PopoverContent zIndex={4}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation You May Need help !</PopoverHeader>
                    <PopoverBody>Are you sure you want read Ducemntation For  HelpCenter</PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
};
export default Trig;