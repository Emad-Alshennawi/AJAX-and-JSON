let btn = document.getElementById('btn'),
    details = document.getElementById('details');

btn.addEventListener('click', function() {
    let theRequest = new XMLHttpRequest ();
    theRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');

    theRequest.onload = () => {
        if(theRequest.status >= 200 && theRequest.status < 400) {
            let theData =JSON.parse(theRequest.responseText);
            showElements(theData)
        } else {
            details.insertAdjacentText('beforeend','sorry there are a drop on the Link that you atached') 
        }
    }
    theRequest.send();
});

const showElements = data => {
    let texts = "";

    for( i=0; i < data.length; i++){
        texts += `<p> the name is : ${data[i].name} <br> 
        the email is : ${data[i].email} <br> 
        the body is : ${data[i].body} </p>`;
    }

    details.insertAdjacentHTML('beforeend',texts);
}
