let userInfoDisplay = document.querySelector("#userInfoDisplay");
let userInfoDisplay2 = document.querySelector("#userInfoDisplay2");
let error = document.querySelector("#error");

class userInfo{
    constructor(username,email,phone){
        this.userkaNaam = username;
        this.email = email.toLowerCase();
        this.phone = phone;
    }
}

class animal{
    constructor(animalName,animalType){
        this.animalName = animalName;
        this.animalType = animalType;
    }
}
 const animal1 = new animal("dog","teristial");
 const animal2 = new animal("cat fish","aquatic");
 const user1 = new userInfo('AVISHERE','Akashvyas2006@gmail.com',7888082956);
const user2 = new userInfo('imStupid','haRamI@gmail.com',9096);
console.log(user1)
console.log(animal2)  

userInfoDisplay.textContent = `${user1.userkaNaam},${user1.phone},${user1.email}`;

userInfoDisplay2.textContent = `Name of the animal is ${animal2.animalName} and it's type is ${animal1.animalType}`;





