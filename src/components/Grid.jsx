import React from 'react';
import { Grid, Box, useColorMode } from "@chakra-ui/core";



const LayOut = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = { light: "white.500", dark: "white.200" };
    const color = { light: "white", dark: "white.800" };
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mb='200' bg={bgColor[colorMode]} color={color[colorMode]}>
            <Box w="100%" h="10" bg="green.600" p='2' rounded='15%' textAlign='center' >Hello</Box>
            <Box w="100%" h="10" bg="green.600" p='2' rounded='15%' textAlign='center' >From</Box>
            <Box w="100%" h="10" bg="green.600" p='2' rounded='15%' textAlign='center'>Charka</Box>
            <Box w="100%" h="10" bg="green.600" p='2' rounded='15%' textAlign='center'>Ui</Box>
            <Box w="100%" h="10" bg="green.600" p='2' rounded='15%' textAlign='center'>Components</Box>
        </Grid>
    )
};

export default LayOut;