import React, { useRef } from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonItem, IonLabel, IonInput, IonIcon } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';

const EditNameExample: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const confirm = () => modal.current?.dismiss(input.current?.value, 'confirm');

  return (
    <>
      <IonButton id="open-modal" expand="block" color={'secondary'}>
        <IonIcon icon={settingsOutline} size="small" />
        &nbsp; Change Username
      </IonButton>
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="stacked">Enter your username</IonLabel>
            <IonInput ref={input} type="text" placeholder="Your name" />
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  );
};

export default EditNameExample;
