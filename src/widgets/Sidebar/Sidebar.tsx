import { useRef, } from "react";
import { Link } from "react-router-dom";

import {
	Button,
	Drawer,
	DrawerBody, DrawerCloseButton,
	DrawerContent, DrawerFooter,
	DrawerHeader,
	DrawerOverlay, Flex, Menu, MenuItem, MenuList, Text, useDisclosure
} from "@chakra-ui/react";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement | null>(null);

  return (
	<>
		<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
			Open
		</Button>
		<Drawer
			isOpen={isOpen}
			placement="left"
			onClose={onClose}
			finalFocusRef={btnRef}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>
					Menu
				</DrawerHeader>

				<DrawerBody>
					<Menu>
						<Link to="/">
							<MenuItem fontSize="15px" fontWeight="bold">
								Home
							</MenuItem>
						</Link>
						<Link to="/backlog">
							<MenuItem fontSize="15px" fontWeight="bold">
								Backlog
							</MenuItem>
						</Link>
					</Menu>

				</DrawerBody>

				<DrawerFooter>
					<Button variant="outline" mr={3} onClick={onClose}>
						Cancel
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	</>
  );
};
