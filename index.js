// Initialize button with users' preferred color
const doneID = "1199";
const verifyInProdID = "1232";
const readyToMigrateID = "1218";

let doneButton = document.getElementById(doneID);
let verifyInProdButton = document.getElementById(verifyInProdID);
let readyToMigrateButton = document.getElementById(readyToMigrateID);

doneButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['index.js'],
    function: toggleVisibility(doneID),
  });
});

verifyInProdButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['index.js'],
    function: toggleVisibility(verifyInProdID),
  });
});

readyToMigrateButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['index.js'],
    function: toggleVisibility(readyToMigrateID),
  });
});

// The body of this function will be executed as a content script inside the
// current page
function toggleVisibility(dataId) {
    alert("toggling visibility for " + dataId);
    alert(document.body.innerText);
}
    //data-id "Done" = 1199
    //data-id "Verifying in Production" = 1232
    //data-id "Ready to Migrate" = 1218

    //need to get the data-id field from the header (#ghx-column-headers), then 
    //find all (.ghx-column) where data-column-id = data-id
    //add style="display:none"

    //and vice versa

    //<li class="ghx-column ghx-narrow-card ghx-xtra-narrow-card" data-id="1232">
    //<div class="ghx-column-header-flex">
    //<div class="ghx-column-header-flex-1">
    //<h2 data-tooltip="Verifying in Production">Verifying in Production</h2></div></div></li>