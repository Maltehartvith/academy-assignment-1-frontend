import { IonRouterLink } from '@ionic/react';
import { Articles } from 'apis/supabaseClient';
import React from 'react';
import { useGoBack } from 'store/user';

type ArticleProps = {
  article: Articles;
};

const ArticleComp: React.FC<ArticleProps> = ({ article }) => {
  const { toggleGoBack } = useGoBack();

  return (
    <>
      {article ? (
        article.map((a, i) => {
          return (
            <IonRouterLink routerLink={'/game/'} key={i} onClick={() => toggleGoBack()}>
              <div>{a.description}</div>
            </IonRouterLink>
          );
        })
      ) : (
        <div>Nothing here main</div>
      )}
    </>
  );
};

export default ArticleComp;
