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
        event.innerHTML = `<img class="events__detail--img" srcset="${data[i].imgUrlMobile} 768w, ${data[i].imgUrlDesktop} 1200w"  sizes="(max-width: 768px) 768px,
            1200px" src="${data[i].imgUrlDesktop}"> 
                            <div class="events__detail--inner"> 
                                <h3>${data[i].title}</h3> <p>${data[i].description}</p> 
                                <img class="events__detail--btn" src="./assets/right_chevron.svg" alt="button right">
                             </div>`
        mainContainer.appendChild(event);
    }
}
