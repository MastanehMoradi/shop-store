import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { FaHome } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { MdFace4 } from "react-icons/md";


interface Props {
    type: string
}

export const ProductTypeIcons = ({type}: Props) => {

  console.log(type);
    const iconMap : {[key: string]: IconType} = {
        home: FaHome,
        electric: MdElectricalServices,
        cosmetic: MdFace4
    }

  return (
    <HStack marginY={1}>
        <Icon key={type} as={iconMap[type]} color='gray.500'></Icon>
    </HStack>
  )
}
