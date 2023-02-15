import React from 'react';
import { useParams } from 'react-router';

type GameProps = {
  //   name: string;
};

const GameComp: React.FC<GameProps> = ({}) => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default GameComp;
