import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { useDarkMode, useGoBack } from '../../store/user';
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTabs,
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonButtons,
  useIonRouter,
  IonLabel,
  IonToggle,
  isPlatform,
} from '@ionic/react';
import { people, home, dice, person } from 'ionicons/icons';
import Tab1 from './tabs/tab-1/Tab1';
import Tab2 from './tabs/tab-2/Tab2';
import Tab3 from './tabs/tab-3/Tab3';
import Tab4 from './tabs/tab-4/Tab4';
import GameComp from '../components/ui-library/game-component/GameComp';
import { supabase } from 'apis/supabaseClient';
import { useAuthUserStore } from 'store/user';
import './home-page.module.css';
import { arrowBackOutline } from 'ionicons/icons';

const HomePage: React.FC = () => {
  const router = useIonRouter();
  const authUser = useAuthUserStore((state) => state.authUser);
  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { goBack, toggleGoBack } = useGoBack();
  const history = useHistory();

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle('dark');
    toggleDarkMode();
  };

  useEffect(() => {
    if (!authUser) router.push('/login');
  }, [router, authUser]);

  const handleLogOut = async () => {
    resetAuthUser();
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {goBack && (
              <div className="flex items-center">
                <IonIcon icon={arrowBackOutline} />

                <IonButton
                  onClick={() => {
                    toggleGoBack();
                    history.goBack();
                  }}
                >
                  Back
                </IonButton>
              </div>
            )}
          </IonButtons>
          <IonButtons slot="end" className="flex items-center">
            <div className="flex items-center justify-end pr-2">
              <IonToggle checked={darkMode} onIonChange={toggleDarkModeHandler} class="toggle-button"></IonToggle>
              <IonLabel className="ml-2">{darkMode ? 'Dark' : 'Light'} Mode</IonLabel>
            </div>
            {isPlatform('desktop') && (
              <IonButton onClick={handleLogOut} className="w-[4rem] border-2 border-indigo-500/75">
                Log ud
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Redirect exact path={'/home'} to="/tab1" />
              <Redirect exact path={'/'} to="/tab1" />
              {pages.map((p, i) => {
                return <Route key={i} exact path={p.path} component={p.component} />;
              })}
            </IonRouterOutlet>

            <IonTabBar slot="bottom" class={'h-[70px] border-t-[1px] border'}>
              {tabs.map((p, i) => {
                return (
                  <IonTabButton key={i} tab={`tab${i}`} href={p.path}>
                    <IonIcon icon={p.icon} />
                  </IonTabButton>
                );
              })}
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

const tabs = [
  {
    name: 'home',
    icon: home,
    path: '/tab1',
    component: Tab1,
    redirect: true,
  },
  {
    name: 'dice-games',
    icon: dice,
    path: '/tab2',
    component: Tab2,
    redirect: false,
  },
  {
    name: 'chatroom',
    icon: people,
    path: '/tab3',
    component: Tab3,
    redirect: false,
  },
  {
    name: 'profile',
    icon: person,
    path: '/tab4',
    component: Tab4,
    redirect: false,
  },
];

const pages = [
  ...tabs,
  {
    path: '/game/:name',
    component: GameComp,
    redirect: false,
  },
];
