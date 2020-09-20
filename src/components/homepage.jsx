import React, { Fragment } from 'react';
import { Flex, Box, Text, Tabs, Tab, TabList, TabPanel, TabPanels, Input, Button } from '@chakra-ui/core';
const HomePage = () => {
    return (
        <Fragment className="App">
            <Flex height="100vh" align="center" justify="center">
                <Box p="20px" backgroundColor="#C3C3C3" rounded="20px">
                    <Flex align="center" justify="center" direction="column">
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
                                        login
                                    <Input placeholder="UserName" size="lg" type="email" />
                                        <Input placeholder="Password" size="lg" type="password" mt="10px" />
                                        <Button size="lg" backgroundColor="primary" mt="20px" >Login</Button>
                                    </Flex>
                                </TabPanel>
                                <TabPanel mt='15px'>
                                    <Flex align="center" justify="center" direction='column' >
                                        <Input placeholder="FirstName" size="lg" type="text" mt="10px"/>
                                        <Input placeholder="LastName" size="lg" type="text"mt="10px" />

                                        <Input placeholder="Password" size="lg" type="password" mt="10px" />
                                        <Input placeholder="Confirm Password" size="lg" type="password" mt="10px" />
                                        <Button size="lg" backgroundColor="primary" mt="20px" >Register</Button>

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