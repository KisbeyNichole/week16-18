import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SurveyModal({ show, handleClose }) {
  const [authorized, setAuthorized] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  
  useEffect(() => {
    const CLIENT_ID = '576499967489-48cq5afdt1vbq3ppc0tj18hubpbt3hhi.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyBPeISJgOqK0Yl2Rw39wh_2ro09sADacUE';
    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';
    const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

    let tokenClient;
    let gapiInited = false;
    let gisInited = false;

    function gapiLoaded() {
      window.gapi.load('client', initializeGapiClient);
    }

    async function initializeGapiClient() {
      await window.gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
      gapiInited = true;
      maybeEnableButtons();
    }

    function gisLoaded() {
      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: async (resp) => {
          if (resp.error !== undefined) {
            throw (resp);
          }
          setSignedIn(true);
          setAuthorized(true);
          await listLabels();
        },
      });
      gisInited = true;
      maybeEnableButtons();
    }

    function maybeEnableButtons() {
      if (gapiInited && gisInited) {
        setAuthorized(true);
      }
    }

    async function listLabels() {
      let response;
      try {
        response = await window.gapi.client.gmail.users.labels.list({
          'userId': 'me',
        });
      } catch (err) {
        console.error(err.message);
        return;
      }
      const labels = response.result.labels;
      if (!labels || labels.length === 0) {
        console.log('No labels found.');
        return;
      }
      const output = labels.reduce((str, label) => `${str}${label.name}\n`, 'Labels:\n');
      console.log(output);
    }

    const loadScripts = () => {
      const scriptApi = document.createElement('script');
      scriptApi.src = "https://apis.google.com/js/api.js";
      scriptApi.onload = gapiLoaded;
      document.body.appendChild(scriptApi);

      const scriptGsi = document.createElement('script');
      scriptGsi.src = "https://accounts.google.com/gsi/client";
      scriptGsi.onload = gisLoaded;
      document.body.appendChild(scriptGsi);
    };

    loadScripts();

    return () => {
      const scripts = document.querySelectorAll('script[src="https://apis.google.com/js/api.js"], script[src="https://accounts.google.com/gsi/client"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  function handleAuthClick() {
    if (window.gapi.client.getToken() === null) {
      window.tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      window.tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  function handleSignoutClick() {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
      setSignedIn(false);
      setAuthorized(false);
      console.log('Signed out');
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Survey</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Survey content goes here */}
        Woohoo, you are reading this text in a modal!
      </Modal.Body>
      <Modal.Footer>
        {authorized && (
          <Button onClick={handleAuthClick}>
            {signedIn ? 'Refresh' : 'Authorize'}
          </Button>
        )}
        {signedIn && (
          <Button onClick={handleSignoutClick}>
            Sign Out
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SurveyModal;
