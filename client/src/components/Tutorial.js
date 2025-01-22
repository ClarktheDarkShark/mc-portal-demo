import React from 'react';
import Joyride from 'react-joyride';

const Tutorial = ({ run, setRun }) => {
  const steps = [
    {
      target: 'body',
      content: 'Welcome to the USMC Data & AI Portal! Let me show you around.',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.navbar-home',
      content: 'Click here anytime to return to the main dashboard.',
    },
    {
      target: '.feature-grid',
      content: 'Browse our comprehensive suite of data and AI tools. Each card provides access to different services and resources.',
    },
    {
      target: '.chat-assistant',
      content: 'Need help? Click this AI chat assistant icon to get instant support and answers to your questions!',
    }
  ];

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous={true}
      showProgress={true}
      showSkipButton={true}
      scrollToFirstStep={true}
      styles={{
        options: {
          primaryColor: '#d32f2f',
        },
      }}
      callback={({ status }) => {
        if (['finished', 'skipped'].includes(status)) {
          setRun(false);
          localStorage.setItem('tutorialComplete', 'true');
        }
      }}
    />
  );
};

export default Tutorial;
