/* global chrome */

(function() {
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text === 'is_test_lock') {
      sendResponse({
        is_test_lock: document.body.getAttribute('data-is-test-locked')
      });
    }
  });

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text === 'is_student') {
      sendResponse({
        is_student: document.body.getAttribute('data-student-id')
      });
    }
  });

  window.postMessage({edoctrina_locker_active: true}, '*');

})();