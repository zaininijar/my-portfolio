import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

type NavbarDesktopProps = {}

const NavbarDesktop = (props: NavbarDesktopProps) => {
    return (
        <HStack w={`100%`} px={`100px`} justifyContent={`space-between`} py={`20px`}>
            <Text color={`secondary`} w="220px" fontSize={`20px`} fontWeight={`bold`}>Ahmad Zaini N.</Text>
            <HStack>
                {menu.map(menu => (
                    <Text key={menu.id}>{menu.title}</Text>
                ))}
            </HStack>
            <Text textAlign={`right`} color={`secondary`} w="220px">Download CV</Text>
        </HStack>
    )
}

const menu = [
    {
        id: 1,
        name: 'home',
        title: '// home',
    },
    {
        id: 2,
        name: 'expertise',
        title: '// expertise'
    },
    {
        id: 3,
        name: 'work',
        title: '// work',
    },
    {
        id: 4,
        name: 'experience',
        title: '// experience',
    },
    {
        id: 5,
        name: 'contact',
        title: '// contact',
    },
]

export default NavbarDesktop