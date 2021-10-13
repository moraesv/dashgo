import { ElementType } from 'react';
import { Icon, Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react';

import { ActiveLink } from './ActiveLink';

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medim">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
