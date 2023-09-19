const butInstall = document.getElementById('buttonInstall');

let beforeInstallPrompt = null;

const beforeInstall = (event) => {
  beforeInstallPrompt = event;
  butInstall.classList.remove("hidden");
};

const installApp = async () => {
  if (beforeInstallPrompt) {
    beforeInstallPrompt.prompt();
    beforeInstallPrompt = null;
    butInstall.classList.add("hidden");
  }
};

const appInstalled = async () => {
  if (beforeInstallPrompt) {
    beforeInstallPrompt = null;
  }
};

window.addEventListener("click", beforeInstall);
window.addEventListener("click", installApp);
window.addEventListener('appinstalled', appInstalled);
