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
    <Card width='270px' borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlarformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default gameCard;
