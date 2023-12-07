import React from 'react';
import {
    Flex,
    Spacer,
    Box,
    Center,
    Circle,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Divider,
    
} from '@chakra-ui/react';
import CartWidget from './cartwidget';

const NavBar = () => {
    return (
        <div style={{ backgroundColor: '#1c1c1c', color: 'white' }}>
            <Center fontSize='5xl' p='4' as='i'>
                Tienda para mascotas Mora
            </Center>

            <Divider orientation='horizontal' />

            <Flex alignItems='center'>
                <Box p='2'>Inicio</Box>
                <Box p='2'>
                    <Menu p='2' >
                        <MenuButton >Categorias</MenuButton>
                        <MenuList color="black">
                            <MenuItem>Juguetes</MenuItem>
                            <MenuItem>Alimento</MenuItem>
                            <MenuItem>Ropa</MenuItem>
                            <MenuItem>Accesorios</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />

                <Flex p='2'>
                    <Center p='2' fontWeight='bold' fontSize='xs'>
                        <Circle as='span' color='black' bg='red' w='18px' h='18px'>
                            15
                        </Circle>
                    </Center>
                    <Box>
                        <CartWidget />
                    </Box>
                </Flex>
            </Flex>

            <Divider orientation='horizontal' />
        </div>
    );
};

export default NavBar;
