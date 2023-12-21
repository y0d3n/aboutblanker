chrome.commands.onCommand.addListener((command) => {
    if (command === "openBlankTab") {
        chrome.tabs.create({ url: "about:blank" });
    }
});