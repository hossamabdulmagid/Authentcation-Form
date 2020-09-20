import React, { Fragment } from 'react';
import { Flex, Box, Text, Tabs, Tab, TabList, TabPanel, TabPanels, Input, Button, useColorMode, Icon } from '@chakra-ui/core';
const HomePage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Fragment className="App">
            <Flex height="100vh" align="center" justify="center">
                <Box p="20px" backgroundColor={colorMode === "light" ? "#C3C3C3" : "#1a202c "} rounded="20px">
                    <Flex align="center" justify="center" direction="column">
                        <Button position="absolute" top='5' left='5' rounded='50%' onClick={() => toggleColorMode()}>
                            <Icon name={colorMode === "light" ? "moon" : "sun"} />
                        </Button>
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
                                    Login
                                    <Input placeholder="UserName" size="lg" type="email" />
                                        <Input placeholder="Password" size="lg" type="password" mt="10px" />
                                        <Button size="lg" mt="20px" variantColor={colorMode === 'light' ? "green" : 'pink'}>Login</Button>
                                    </Flex>
                                </TabPanel>
                                <TabPanel mt='15px'>
                                    <Flex align="center" justify="center" direction='column' >
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