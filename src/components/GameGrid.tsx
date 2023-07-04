import { SimpleGrid, Text } from "@chakra-ui/layout";
import useGames from "../hook/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Skeleton } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 5 }}
        spacing={10}
        // spacingX={10}
        padding="10px"
      >
        {loading && Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
