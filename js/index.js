console.log('hello')

fetch('https://87197325.blob.core.windows.net/fed-technical-test/events.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("events");
    for (let i = 0; i < data.length; i++) {
        const event = document.createElement("article");
        event.className = "events__detail"
        event.innerHTML = `<img src="${data[i].imgUrlDesktop}"> 
                            <div class="events__detail--inner"> 
                                <h3>${data[i].title}</h3> <p>${data[i].description}</p> 
                             </div>`
        mainContainer.appendChild(event);
    }
}
