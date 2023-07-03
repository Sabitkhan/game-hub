import { Text } from "@chakra-ui/layout";
import useGames from "../hook/useGames";
import { Spinner } from "@chakra-ui/react";

const GameGrid = () => {

    const { games, error ,loading  } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && <Spinner color="red.500" />}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
