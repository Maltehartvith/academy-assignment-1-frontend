import React, { useEffect } from 'react';
import { IonContent, IonTitle } from '@ionic/react';
import TakePicture from 'ui/components/frontpage/take-picture/TakePicture';
import { Photo } from '@capacitor/camera';
import { useGoBack } from 'store/user';

const Tab3: React.FC = () => {

  const [picture, setPicture] = React.useState<Photo>();

  const { goBack, toggleGoBack } = useGoBack();

  useEffect(() => {
    if(goBack)
    toggleGoBack();
  }, []);

  return (
    <IonContent color={'white-background'}>
      {!picture && <IonTitle>Take a photo!</IonTitle>}
      {picture && <img src={picture?.webPath} alt="your upload" className="h-full w-auto m-auto" />}

      <TakePicture onPictureTaken={(p) => setPicture(p)} />
    </IonContent>
  );
};

export default Tab3;
