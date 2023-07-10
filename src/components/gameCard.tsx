import { Game } from "../hook/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlarformIcons from "./PlarformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
interface prop {
  game: Game;
}
const gameCard = ({ game }: prop) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlarformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default gameCard;
