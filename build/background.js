chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://barcode-by-link.vercel.app/" });
});