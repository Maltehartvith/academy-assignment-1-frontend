import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { IonButton, IonIcon, IonInput, IonItem, IonText, useIonRouter, useIonLoading, useIonAlert } from '@ionic/react';
import { supabase } from 'apis/supabaseClient';
import { chevronBackCircle, eyeOffOutline, eyeOutline, lockClosedOutline } from 'ionicons/icons';
import { t } from 'i18next';

type ResetPasswordProps = {
  togglePasswordButtonType?: 'text' | 'icon' | 'none';
};

const ResetPasswordForm: React.FC<ResetPasswordProps> = ({ togglePasswordButtonType = 'icon' }) => {
  const router = useIonRouter();
  const history = useHistory();

  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [repeatedPasswordShown, setRepeatedPasswordShown] = useState<boolean>(false);
  const [present, dismiss] = useIonLoading();
  const [presentAlert] = useIonAlert();
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [repPasswordValid, setRepPasswordValid] = useState<boolean>(true);

  useEffect(() => {
    const passwordCheck = password.length >= 8 && password !== '';
    const repPasswordCheck = password === repeatedPassword && repeatedPassword !== '';

    setPasswordValid(passwordCheck || password === '');
    setRepPasswordValid(repPasswordCheck || repeatedPassword === '');

    setIsDisabled(!passwordCheck || !repPasswordCheck);
  }, [password, repeatedPassword]);

  const handleResetPassword = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== repeatedPassword) {
      return await presentAlert({ header: t('authentication.passwordResetFailed'), message: t('authentication.passwordMustMatch'), buttons: ['OK'] });
    }
    await present({ message: t('authentication.resetting') });
    const { data, error } = await supabase.auth.updateUser({ password: password });
    if (data.user) {
      await dismiss();
      await presentAlert({ header: t('authentication.resetSuccessful'), buttons: ['OK'] });
      router.push('/login');
    } else {
      await dismiss();
      await presentAlert({ header: t('authentication.passwordResetFailed'), message: error?.message, buttons: ['OK'] });
    }
  };

  const togglePasswordButton = (isRepeatedPassword: boolean) => {
    if (togglePasswordButtonType === 'text') {
      if (isRepeatedPassword) {
        return (
          <div className="mr-1 text-sm font-bold cursor-pointer text-primary-brand" onClick={() => setRepeatedPasswordShown(!repeatedPasswordShown)}>
            {repeatedPasswordShown ? <IonText>{t('authentication.hide')}</IonText> : <IonText>{t('authentication.show')}</IonText>}
          </div>
        );
      } else {
        return (
          <div className="mr-1 text-sm font-bold cursor-pointer text-primary-brand" onClick={() => setPasswordShown(!passwordShown)}>
            {passwordShown ? <IonText>{t('authentication.hide')}</IonText> : <IonText>{t('authentication.show')}</IonText>}
          </div>
        );
      }
    }
    if (togglePasswordButtonType === 'icon') {
      if (isRepeatedPassword) {
        return (
          <IonIcon
            className="text-primary-brand"
            icon={repeatedPasswordShown ? eyeOutline : eyeOffOutline}
            size="medium"
            onClick={() => setRepeatedPasswordShown(!repeatedPasswordShown)}
          />
        );
      } else {
        return (
          <IonIcon
            className="text-primary-brand"
            icon={passwordShown ? eyeOutline : eyeOffOutline}
            size="medium"
            onClick={() => setPasswordShown(!passwordShown)}
          />
        );
      }
    }
  };

  return (
    <div className="flex h-full justify-center items-center w-full">
      <form className="sm:w-[400px] w-3/4 relative" onSubmit={handleResetPassword}>
        <div className="flex items-center">
          <IonIcon onClick={() => history.goBack()} icon={chevronBackCircle} size={'large'} color={'primary-brand'} className="pr-2 cursor-pointer" />
          <IonText className="text-primary-brand text-xl font-extrabold">{t('authentication.resetPassword')}</IonText>
        </div>

        <IonItem lines="none" className={`border ${passwordValid ? 'border-grey-text' : 'border-red-300'} mt-8`}>
          <IonInput
            value={password}
            placeholder={t('authentication.password')}
            onIonChange={(e) => setPassword(e.detail.value ?? '')}
            type={passwordShown ? 'text' : 'password'}
            required
            class="h-[59px] items-center"
          />
          {password !== '' && togglePasswordButton(false)}
          {password === '' && <IonIcon icon={lockClosedOutline} size="medium" className="text-primary-brand" />}
        </IonItem>

        <IonText className={`text-red-500 ${passwordValid && 'opacity-0'}`}>{t('authentication.passwordMinLength')}</IonText>

        <IonItem lines="none" className={`border ${repPasswordValid ? 'border-grey-text' : 'border-red-300'}`}>
          <IonInput
            value={repeatedPassword}
            placeholder={t('authentication.repeatPassword')}
            onIonChange={(e) => setRepeatedPassword(e.detail.value ?? '')}
            type={repeatedPasswordShown ? 'text' : 'password'}
            required
            class="h-[59px] items-center"
          />
          {repeatedPassword !== '' && togglePasswordButton(true)}
          {repeatedPassword === '' && <IonIcon icon={lockClosedOutline} size="medium" className="text-primary-brand" />}
        </IonItem>

        <IonText className={`text-red-500 ${repPasswordValid && 'opacity-0'}`}>{t('authentication.passwordMustMatch')}</IonText>

        <IonButton expand="full" className="w-full mb-2" onClick={handleResetPassword} disabled={isDisabled}>
          {t('authentication.resetPassword')}
        </IonButton>
        <button className="hidden" type="submit" />
      </form>
    </div>
  );
};

export default ResetPasswordForm;
