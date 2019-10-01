export const gaTrackAnswer = (title, answer, correct) => {
  if (window.ga) {
    window.ga('send', {
      hitType: 'event',
      eventCategory: 'SubmitAnswer',
      eventAction: 'click',
      eventLabel: title,
      eventValue: answer === correct ? 1 : 0
    });
  } else {
    console.error('ga unavailable');
  }
};
