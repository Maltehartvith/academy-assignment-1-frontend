import React from 'react';
import { IonRouterLink } from '@ionic/react';
import { useDarkMode, useGoBack } from 'store/user';
import './game-card.module.css';

type CardProps = {
  title: string;
  gameName: string;
  backgroundImg?: string;
  color?: string;
};

const GameCard: React.FC<CardProps> = ({ title, gameName, backgroundImg, color }) => {
  const { darkMode } = useDarkMode();

  let fuckingBackgroundStyle;
  if (backgroundImg) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const backgroundImageReq = require(`static/assets/img/${backgroundImg}`);

    fuckingBackgroundStyle = {
      backgroundImage: `url(${backgroundImageReq})`,
      backgroundSize: 'cover',
      borderRadius: '0.5rem',
    };
  }
  if (!backgroundImg && color) {
    fuckingBackgroundStyle = {
      borderRadius: '0.5rem',
      background: color,
    };
  }

  const contentStyle: React.CSSProperties = {
    height: '10rem',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column-reverse',
    borderRadius: '0.5rem',
  };
  const { toggleGoBack } = useGoBack();

  return (
    <IonRouterLink routerLink={'/game/' + gameName} onClick={() => toggleGoBack()}>
      <div style={fuckingBackgroundStyle} className="flex mx-5 mt-5">
        <div style={contentStyle} id="container" className={`w-full p-3 !bg-gradient-to-b !from-transparent ${darkMode ? '!to-gray-700' : '!to-black'}`}>
          <h3 className={`flex ${darkMode ? 'text-black' : 'text-white'}`}>{title}</h3>
        </div>
      </div>
    </IonRouterLink>
  );
};

export default GameCard;
