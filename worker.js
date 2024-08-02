// worker.js
self.onmessage = function(e) {
    if (e.data === 'start') {
        let countdownTime = 120; // 2 minutes in seconds

        let interval = setInterval(() => {
            if (countdownTime >= 0) {
                postMessage({ type: 'countdown', time: countdownTime });

                // Send AJAX call at the end of the countdown
                if (countdownTime === 0) {
                    sendAjaxCall('/url');
                }

                countdownTime--;
            } else {
                clearInterval(interval);
                postMessage({ type: 'done' });
            }
        }, 1000);
    }
    else if(e.data === 'AJAX call')
    {
       sendAjaxCall('/url');
    }
};

// Function to send AJAX call
function sendAjaxCall(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle response and send redirection URL back to main thread
            const response = JSON.parse(xhr.responseText);
            postMessage({ type: 'redirect', url: response.redirectUrl });
        }
    };
    xhr.send(JSON.stringify({ message: 'Countdown complete' }));
}
