import React, { useEffect, useState } from 'react';
import './tab-2.module.css';
import { IonContent, IonList, IonSearchbar } from '@ionic/react';
import GameCard from 'ui/components/ui-library/game-card/GameCard';
import { useGoBack } from 'store/user';

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const { goBack, toggleGoBack } = useGoBack();

  useEffect(() => {
    if (goBack) toggleGoBack();
  }, []);

  const cardStyle: React.CSSProperties = {
    marginTop: '1.25rem',
  };
  const games = [
    { title: 'Game 1', gameName: 'game1', backgroundImg: 'dice1.jpg' },
    { title: 'Game 2', gameName: 'game2', backgroundImg: 'dice2.jpg' },
    { title: 'Game 3', gameName: 'game3', backgroundImg: 'sekz.jpeg' },
    { title: 'Game 4', gameName: 'game4', color: '#06b867' },
    { title: 'Game 5', gameName: 'game5', color: '#9ab806' },
    { title: 'Game 6', gameName: 'game6', color: '#c90a3d' },
  ];
  return (
    <IonContent>
      <IonSearchbar
        showClearButton="always"
        animated={true}
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        placeholder="Search games"
      />
      <div className="mx-5 mt-5 flex flex-col">
        <IonList>
          {games
            .filter((game) => game.title.toLowerCase().includes(searchText.toLowerCase()) || game.gameName.toLowerCase().includes(searchText.toLowerCase()))
            .map((game) => (
              <div style={cardStyle} key={game.gameName}>
                <GameCard {...game} />
              </div>
            ))}
        </IonList>
      </div>
    </IonContent>
  );
};

export default Tab2;
