import { Box, Image, Stack, Text } from "@chakra-ui/core";

export default function ProductCard({ pictureUrl, title, price }) {
  return (
    <Box>
      <Image src={pictureUrl} />
      <Stack>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </Stack>
    </Box>
  );
}
