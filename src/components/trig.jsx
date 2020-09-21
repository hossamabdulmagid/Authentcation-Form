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
    Button
} from "@chakra-ui/core";
const Trig = () => (
    <>
        <Popover>
            <PopoverTrigger>
                <Button>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent zIndex={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
        </Popover>
    </>
);
export default Trig;