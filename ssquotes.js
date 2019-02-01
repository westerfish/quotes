function getQuotes(){
    fetch('http://localhost:3000/api/quotes')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        //fill the <p> tag
        document.getElementById("result").innerHTML = JSON.stringify(myJson);
    });
}