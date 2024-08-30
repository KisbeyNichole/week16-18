import { useEffect } from 'react';

function useGmailClient() {
    useEffect(() => {
        const loadGapiClient = () => {
          const script = document.createElement('script');
          script.src = 'https://apis.google.com/js/api.js';
          script.onload = () => {
            if (window.gapi) {
              window.gapi.load('client:auth2', initializeGapiClient);
            } else {
              console.error('GAPI script failed to load');
            }
          };
          script.onerror = () => {
            console.error('Failed to load the GAPI script');
          };
          document.body.appendChild(script);
        };
      
        const initializeGapiClient = () => {
          window.gapi.client.init({
            apiKey: 'your-api-key', // replace with your API key
            clientId: 'your-client-id', // replace with your Client ID
            scope: 'https://www.googleapis.com/auth/gmail.compose',
          }).catch(error => {
            console.error('Error initializing GAPI client', error);
          });
        };
      
        loadGapiClient();
      }, []);
}

export function createDraftMessage(fromEmailAddress, toEmailAddress) {
  try {
    const response = window.gapi.client.gmail.users.drafts.create({
      userId: 'me',
      resource: {
        message: {
          raw: btoa( // Base64 encoding
            `From: ${fromEmailAddress}\nTo: ${toEmailAddress}\nSubject: Test message\n\nlorem ipsum.`
          ),
        },
      },
    });

    console.log('Draft created:', response);
  } catch (error) {
    console.error('Error creating draft:', error);
  }
}

export default useGmailClient;