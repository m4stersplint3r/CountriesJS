class Country {
    constructor(name, language, greeting, colors) {
        this.name = name;
        this.language = language;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let USA = new Country("United States of America", "English","Hello friend, this is America.",["red","white","blue"]);
let Mexico = new Country("Mexico", "Espanol","Hola amigo.",["green","white","red"]);
let Japan = new Country("Japan", "Japanese","Kon'nichiwa tomodachi.",["red","white"]);
let Venezuela = new Country("Venezuela", "Spanish","Hola amigo.",["yellow","blue", "red"]);
let China = new Country("China", "Chinese","Nǐ hǎo, shìjiè.",["red","yellow"]);

function switchCountry() {
    let input = document.getElementById("CountryList").value;
    let Country;

    if (input === "USA") {
        //set country to usa 
        Country = USA;
        document.getElementById("flagImg").attributes.src.value = "images/USA.jpg"
    }
    else if (input === "Mexico") {
        Country = Mexico;
        document.getElementById("flagImg").attributes.src.value = "images/Mexico.jpg"
    }
    else if (input === "Japan") {
        Country = Japan;
        document.getElementById("flagImg").attributes.src.value = "images/Japan.jpg"
    } 
    else if (input === "Venezuela") {
        Country = Venezuela;
        document.getElementById("flagImg").attributes.src.value = "images/Venezuela.jpg"
    }
    else if (input === "China") {
        Country = China;
        document.getElementById("flagImg").attributes.src.value = "images/China.jpg"
    } 
    // change text on html
    document.getElementById("CountryName").innerText = Country.name;
    document.getElementById("OfficialLanguage").innerText = Country.language;
    document.getElementById("HelloWorld").innerText = Country.greeting;
    // change colors
    document.getElementById("Color1").style.backgroundColor = Country.colors[0];
    document.getElementById("Color2").style.backgroundColor = Country.colors[1];
    if(Country.colors.length > 2) {        
        document.getElementById("Color3").style.backgroundColor = Country.colors[2];
    }
    else {
        document.getElementById("Color3").style.backgroundColor = Country.colors[1];
    }
}