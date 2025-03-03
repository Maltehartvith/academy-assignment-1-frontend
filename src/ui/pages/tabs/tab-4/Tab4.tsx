import React, { useEffect, useState } from 'react';
import './tab-4.module.css';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  useIonRouter,
  isPlatform,
} from '@ionic/react';
import { arrowBackOutline, arrowForward, chatboxEllipsesOutline, cloudUploadOutline, ellipsisHorizontal, logOutOutline } from 'ionicons/icons';
import EditNameExample from 'ui/components/frontpage/edit-name/EditName';
import { useAuthUserStore, useGoBack } from 'store/user';
import { supabase } from 'apis/supabaseClient';
import ImageUpload from 'ui/components/frontpage/image-upload/ImageUpload';

const Tab4: React.FC = () => {
  const router = useIonRouter();
  const [avatarUrl, setAvatarUrl] = useState<string>(''); // Add state for the avatar URL
  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);
  const { goBack, toggleGoBack } = useGoBack();

  useEffect(() => {
    if (goBack) toggleGoBack();
  }, []);

  const handleLogOut = async () => {
    resetAuthUser();
    await supabase.auth.signOut();
    router.push('/login');
  };

  const updateProfilePicture = async (avatarUrl: string) => {
    // const {data, error} = await supabase.storage.from('profiles')
  };

  return (
    <IonContent>
      <IonButtons slot="start">
        <IonButton color="light">
          <IonIcon icon={arrowBackOutline} />
        </IonButton>
      </IonButtons>

      <IonButtons slot="end">
        <IonButton color="light">
          <IonIcon icon={ellipsisHorizontal} />
        </IonButton>
      </IonButtons>
      <IonContent>
        <div className="topHeader"></div>

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCard className="profileHeader">
                <IonCardContent>
                  <IonRow>
                    <IonCol size="6">
                      {/* Pass the avatarUrl state and setAvatarUrl function to the Avatar component */}
                      <ImageUpload
                        url={avatarUrl}
                        size={150}
                        onUpload={(url: string) => {
                          setAvatarUrl(url);
                          updateProfilePicture( url );
                        }}
                      />
                    </IonCol>

                    <IonCol size="6">
                      <IonRow className="profileInfo justify-center">
                        <IonCol size="6">
                          <IonText color="dark" className="profileName">
                            <p>Patrick Lindahl</p>
                          </IonText>
                          <IonText color="medium">
                            <p>Head of head</p>
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="6">
                      {/* Use the onUpload function passed to the Avatar component to update the avatarUrl state */}
                      <IonButton
                        color="secondary"
                        expand="block"
                        onClick={() => {
                          const fileInput = document.getElementById('fileInput');
                          if (fileInput) {
                            fileInput.click();
                          }
                        }}
                      >
                        <IonIcon icon={cloudUploadOutline} size="small" />
                        &nbsp; Upload Profile
                      </IonButton>
                    </IonCol>

                    <IonCol size="6">
                      <EditNameExample />
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="profileStatusContainer">
            <IonCol size="12">
              <IonCard className="profileCard">
                <IonCardHeader>
                  <IonRow className="profileStatus">
                    <IonIcon icon={chatboxEllipsesOutline} />
                    <IonCardSubtitle>Status</IonCardSubtitle>
                  </IonRow>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>Im not a rapper!</p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="profileActionContainer">
            <IonCol size="12">
              <IonCard className="profileActionCard">
                <IonCardContent>
                  <IonRow className="ion-justify-content-between">
                    <IonCardSubtitle>View latest project</IonCardSubtitle>
                    <IonIcon icon={arrowForward} />
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {!isPlatform('desktop') && (
            <IonRow className="justify-center">
              <IonCol size="6">
                <IonButton color="secondary" expand="block" onClick={() => handleLogOut()}>
                  <IonIcon icon={logOutOutline} size="small" />
                  &nbsp; Log Out
                </IonButton>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonContent>
  );
};

export default Tab4;
