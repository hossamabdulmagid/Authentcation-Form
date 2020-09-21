import React, { useRef } from 'react'

import Lorem from './lorem'

import { useColorMode, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/core'

const Modall = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();
    const { colorMode, toggleColorMode } = useColorMode();

    return (

        <>
            <Button onClick={onOpen}  variantColor={colorMode === 'light' ? "green" : 'pink'}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Lorem count={2} />
                    </ModalBody>

                    <ModalFooter>
                        <Button variantColor={colorMode === 'light' ? "green" : 'pink'} mr={3} onClick={onClose} >
                            Close
            </Button>
                        <Button variantColor={colorMode === 'light' ? "green" : 'pink'} >Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modall;