const butInstall = document.getElementById('buttonInstall');

const beforeInstall = (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden");
};

const installApp = async () => {
    const beforeInstallPrompt = window.deferredPrompt;

    if (!beforeInstallPrompt) return;

    beforeInstallPrompt.prompt();
    beforeInstallPrompt = null;
    butInstall.classList.toggle("hidden");
};

const appInstalled = async () => {
    window.deferredPrompt = null;
};

window.addEventListener("beforeinstallprompt", beforeInstall);
butInstall.addEventListener("click", installApp);
window.addEventListener('appinstalled', appInstalled);
