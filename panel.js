document.querySelector("button").addEventListener("click", async () => {
    try {
        const result = navigator.mediaDevices.getDisplayMedia({
            video: true,
        });

        console.log(result);
    } catch(e) {
        console.error(e);
    }
    
});