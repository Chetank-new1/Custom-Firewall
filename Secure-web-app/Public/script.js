// public/scripts.js
function requestContent(type) {
    fetch(`/content/${type}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            document.getElementById('response').innerText = 'An error occurred while fetching the content.';
        });
}
