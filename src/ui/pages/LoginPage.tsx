import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import LoginForm from 'ui/components/authentication/login/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="h-full w-full flex justify-center items-center">
        <LoginForm togglePasswordButtonType="icon" />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
