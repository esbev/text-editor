const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
  butInstall.addEventListener('click', async () => {
    const answer = await event.prompt();
    if(answer === 'accepted') {
      butInstall.setAttribute('disabled', true);
      butInstall.textContent = 'Installed!';
    }
  });
  
});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

});
