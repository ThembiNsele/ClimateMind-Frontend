import { useContext, useEffect, useCallback } from 'react';
import { SessionContext, SessionDispatch } from '../contexts/session';
import { climateApi } from '../api/apiHelper';

// TODO: Quiz Session needs update to the new thing
export const useSession = () => {
  const session = useContext(SessionContext);
  const setSession = useContext(SessionDispatch);

  const {
    sessionId,
    zipCode,
    hasAcceptedCookies,
    setHasAcceptedCookies,
    quizId,
  } = session;

  // We dont want to clear has acceptedPrivacyPolicy or the session Id then retaiking the quiz
  const clearSession = () => {
    if (setSession) {
      setSession((prevSession) => ({
        ...prevSession,
        zipCode: null,
        quizId: null,
      }));
    }
  };

  const setSessionId = useCallback(
    (sessionId: string) => {
      if (setSession) {
        setSession((prevSession) => ({
          ...prevSession,
          sessionId: sessionId,
        }));
      }
    },
    [setSession]
  );

  const setZipCode = (zipCode: string) => {
    if (setSession) {
      setSession({
        ...session,
        zipCode: zipCode,
      });
    }
  };

  const setQuizId = (quizId: string) => {
    if (setSession) {
      setSession({
        ...session,
        quizId,
      });
    }
  };

  // TODO: Tidy UP
  // // intialise session-id
  // useEffect(() => {
  //   initSessionId && setSessionId(initSessionId);
  // }, [initSessionId, setSessionId]);

  // add session id to all api requests as a custom header
  useEffect(() => {
    sessionId &&
      climateApi.interceptors.request.use((config) => {
        config.headers['X-Session-Id'] = sessionId;

        return config;
      });
  }, [sessionId]);

  return {
    sessionId,
    zipCode,
    setSessionId,
    setZipCode,
    clearSession,
    quizId,
    setQuizId,
    hasAcceptedCookies,
    setHasAcceptedCookies,
  };
};
