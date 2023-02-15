import React, { useEffect } from 'react';
import './tab-2.module.css';
import { IonContent, IonList } from '@ionic/react';
import GameCard from 'ui/components/ui-library/game-card/GameCard';
import { useGoBack } from 'store/user';

const Tab2: React.FC = () => {
  const { goBack, toggleGoBack } = useGoBack();

  useEffect(() => {
    if (goBack) toggleGoBack();
  }, []);

  const cardStyle: React.CSSProperties = {
    marginTop: '1.25rem',
  };
  return (
    <IonContent>
      <div className="mx-5 mt-5 flex flex-col">
        <IonList>
          <div style={cardStyle}>
            <GameCard title={'shieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet'} gameName={'shiet'} backgroundImg={'dice1.jpg'} />
          </div>
          <div style={cardStyle}>
            <GameCard title={'shieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet'} gameName={'shiet'} backgroundImg={'dice2.jpg'} />
          </div>
          <div style={cardStyle}>
            <GameCard title={'shieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet'} gameName={'shiet'} backgroundImg={'sekz.jpeg'} />
          </div>
          <div style={cardStyle}>
            <GameCard title={'shieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet'} gameName={'shiet'} color="#06b867" />
          </div>
          <div style={cardStyle}>
            <GameCard title={'shieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet'} gameName={'shiet'} color="#9ab806" />
          </div>
          <div style={cardStyle}>
            <GameCard title={'shieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet'} gameName={'shiet'} color="#c90a3d" />
          </div>
        </IonList>
      </div>
    </IonContent>
  );
};

export default Tab2;
