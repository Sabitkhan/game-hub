import React from "react";
import { Game } from "../hook/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
interface prop {
  game: Game;
}
const gameCard = ({ game }: prop) => {
  return (
    <Card borderRadius={10} overflow="hidden" >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default gameCard;
