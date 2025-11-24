// Minimal loader to register Scramjet worker
(function () {
  const register = async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/scramjet.sw.js');
        console.log("Scramjet worker registered");
      } catch (e) {
        console.error("Failed to register Scramjet worker:", e);
      }
    } else {
      console.warn("Service workers not supported in this browser");
    }
  };

  window.scramjet = {
    loadWorker: register
  };
})();
