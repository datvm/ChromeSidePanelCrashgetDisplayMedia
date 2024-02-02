chrome.sidePanel.setOptions({
    enabled: true,
    path: "/panel.html",
}, () => {
    chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick: true,
    });
});



// chrome.action.onClicked.addListener(() => {
    
// });