import { SimpleGrid, Text } from "@chakra-ui/layout";
import useGames from "../hook/useGames";
import { Spinner } from "@chakra-ui/react";
import GameCard from "./gameCard";

const GameGrid = () => {
  const { games, error, loading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && (
        <Spinner
          thickness="8px"
          speed="0.45s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
        />
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
