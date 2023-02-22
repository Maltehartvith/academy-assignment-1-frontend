import React, { useEffect, useState } from 'react';
import { IonContent } from '@ionic/react';
import { Carousel } from 'antd';
import GameCard from '../../../components/ui-library/game-card/GameCard';
import { useGoBack } from 'store/user';
import ArticleComp from 'ui/components/ui-library/article-component/ArticleComp';
import { Articles, fetchArticles } from 'apis/supabaseClient';



const Tab1: React.FC = () => {
  const [articles, setArticles] = useState<Articles>(null);
  const { goBack, toggleGoBack } = useGoBack();

  useEffect(() => {
    let willUnmount = false;
    if (goBack) toggleGoBack();

    const fetchData = async () => {
      const getArticle = await fetchArticles();
      if (!willUnmount) {
        setArticles(getArticle.data);
      }
    };
    fetchData();

    return () => {
      willUnmount = true;
      if (willUnmount) {
        setArticles(null);
      }
    };
  }, []);
  return (
    <IonContent>
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
        {
          articles ? (

            <ArticleComp article={articles}></ArticleComp>
          ):(

            <div>nothing here </div>
          )

        }

      </div>
    </IonContent>
  );
};

export default Tab1;
