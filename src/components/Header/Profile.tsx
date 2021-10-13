import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinícius de Moraes</Text>
          <Text color="gray.300" fontSize="small">
            vimoraescarvalho@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vinícius de Moraes"
        src="http://github.com/moraesv.png"
      />
    </Flex>
  );
}
