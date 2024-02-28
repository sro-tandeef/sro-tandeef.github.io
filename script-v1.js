const timeZones = {
    uae: 'Asia/Dubai',
    saudi: 'Asia/Riyadh',
    egypt: 'Africa/Cairo',
  };

  const clocks = Object.keys(timeZones).map((country) => {
    const clockElement = document.getElementById(`${country}Clock`);
    const options = {
      //year: 'numeric',
      //month: 'long',
      //day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      //second: 'numeric',
      timeZone: timeZones[country],
    };

    const updateClock = () => {
      clockElement.innerText = new Intl.DateTimeFormat('en-EN', options).format(new Date());
    };

    updateClock();
    setInterval(updateClock, 1000);
  });