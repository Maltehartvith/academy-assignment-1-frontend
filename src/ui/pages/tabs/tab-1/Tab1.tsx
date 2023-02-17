import React, { useEffect } from 'react';
import { IonContent } from '@ionic/react';
import { Carousel } from 'antd';
import GameCard from '../../../components/ui-library/game-card/GameCard';
import { useGoBack } from 'store/user';
import ArticleComp from 'ui/components/ui-library/article-component/ArticleComp';

const Tab1: React.FC = () => {
  const { goBack, toggleGoBack } = useGoBack();

  useEffect(() => {
    if(goBack)
    toggleGoBack();
  }, []);
  return (
    <IonContent >
      <div id="herherherher" className=" flex flex-col !rounded-lg">
        <Carousel>
          <div>
            <GameCard title="tester jester" gameName={'jester'} backgroundImg="Preda.jpg" />
          </div>
          <div>
            <GameCard title="tester mester" gameName={'mester'} backgroundImg="Preda.jpg" />
          </div>{' '}
          <div>
            <GameCard title="tester shjester" gameName={'shjester'} backgroundImg="Preda.jpg" />
          </div>
        </Carousel>
      </div>
      <div>
        <ArticleComp />
      </div>
    </IonContent>
  );
};

export default Tab1;
