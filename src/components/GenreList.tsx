import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres from "../hook/useGenre";
import { Image, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, loading, error } = useGenres();
  return (
    <div>
      <List>
        {loading && <Spinner />}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
