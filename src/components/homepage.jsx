import React, { Fragment } from 'react';
import { Flex, Box, Text, Tabs, Tab, TabList, TabPanel, TabPanels, Input, Button, useColorMode, Icon, useToast } from '@chakra-ui/core';
import LayOut from './Grid'
const HomePage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const toast = useToast();

    return (
        <Fragment className="App">
            <Flex height="100vh" align="center" justify="center">
                <Box p="20px" backgroundColor={colorMode === "light" ? "#C3C3C3" : "#313641"} rounded="20px">
                    <Flex align="center" justify="center" direction="column">
                        <Button position="absolute" top='0' left='5' rounded='50%' onClick={() => toggleColorMode()}>
                            <Icon name={colorMode === "light" ? "moon" : "sun"} onClick={() => toast({
                                isClosable: false,
                                title: 'Mood Changing',
                                description: 'Enjoy with Your Mood',
                                duration: 5000,
                                position: 'bottom-right',
                                status: "warning"
                            })} />
                        </Button>
                        <Tabs >
                            <LayOut />
                        </Tabs>
                        <Text fontSize="20px" >Authentcation Form</Text>
                        <Tabs mt="20px">
                            <TabList>
                                <Tab w="50%">
                                    Login
                            </Tab>
                                <Tab w="50%">
                                    Register
                            </Tab>
                            </TabList>
                            <TabPanels mt='15px'>
                                <TabPanel>
                                    <Flex align="center" justify="center" direction='column' mt="10px" >

                                        <Input placeholder="UserName" size="lg" type="email" />
                                        <Input placeholder="Password" size="lg" type="password" mt="10px" />
                                        <Button size="lg" mt="20px" variantColor={colorMode === 'light' ? "green" : 'pink'}>Login</Button>
                                    </Flex>
                                </TabPanel>
                                <TabPanel mt='15px'>
                                    <Flex align="center" justify="center" direction='column' >
                                        -
                                        <Input placeholder="FirstName" size="lg" type="text" mt="10px" />
                                        <Input placeholder="LastName" size="lg" type="text" mt="10px" />

                                        <Input placeholder="Password" size="lg" type="password" mt="10px" />
                                        <Input placeholder="Confirm Password" size="lg" type="password" mt="10px" />
                                        <Button size="lg" mt="20px" variantColor={colorMode === 'light' ? "green" : 'pink'}  >Register</Button>


                                    </Flex>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Box>

            </Flex>
        </Fragment >
    );
};



export default HomePage;