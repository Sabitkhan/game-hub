import { SimpleGrid, Text } from "@chakra-ui/layout";
import useGames, { Platform } from "../hook/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hook/useGenre";

interface Props{
  selectedGenre: Genre | null;
  selectedPlatform:Platform|null
}
const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
  const { data, error, loading } = useGames(selectedGenre,selectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {loading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
