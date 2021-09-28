import { LinkProps, Button } from '@chakra-ui/react';

interface PaginationItemProps extends LinkProps {
  number: number;
  isCurent?: boolean;
}

export function PaginationItem({
  isCurent = false,
  number,
}: PaginationItemProps) {
  if (isCurent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
    >
      {number}
    </Button>
  );
}
