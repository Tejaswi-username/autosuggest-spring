//alert("exam postponed")
console.log("Hello from tej!")

var users = [
    {
        "name" : "Bruce Wayne",
        "gender" : "Male",
        "img" : "bru.jpg"
    },
    {
        "name" : "BATMAN",
        "gender" : "Male",
        "img" : "bat.png"
    }
]

var id = 0;

function toggleUser(){
    id = (id + 1)%2
    // get the elements

    // 1: image
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    // 2: name
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;

    // 3: gender
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;

}

function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
             return response.json();
        })
        .then(function(data){
            var userData=data.results[0];
            var userImage=document.getElementById("user-image");
            userImage.src=userData.picture.large;
            var userName=document.getElementById("user-name")
            userName.innerHTML=userData.name.first+" "+userData.name.last;
            var userGender=document.getElementById("user-gender");userGender.innerHTML=userData.gender;
        })
        .catch(function(err){
            console.log(err);
        })
}