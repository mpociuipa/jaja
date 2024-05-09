// [
//     {
//       "id": 1,
//       "patarimas": "Kiekvieną dieną užrašykite, ką išmokote ir ką norėtumėte dar išmokti. Tai padės jums stebėti savo pažangą ir identifikuoti sritis, kuriose reikia tobulėti."
//     },
//     {
//       "id": 2,
//       "patarimas": "Ieškokite mokymosi partnerio arba draugo, su kuriuo galėtumėte dalintis žiniomis ir mokytis kartu. Diskutuodami su kitu žmogumi galite giliau suprasti temą ir lengviau įsisavinti naują medžiagą."
//     },
//     {
//       "id": 3,
//       "patarimas": "Sukurkite efektyvią laiko valdymo sistemą, kuri padės jums efektyviau planuoti mokymosi laiką ir išlaikyti produktyvumą."
//     },
//     {
//       "id": 4,
//       "patarimas": "Naudokite mokymosi programas ir technologijas, kurios gali padėti jums įsisavinti medžiagą interaktyviai ir įdomiai."
//     },
//     {
//       "id": 5,
//       "patarimas": "Pasirinkite kokybiškus mokymosi vadovėlius, kurie gerai struktūruoti ir pateikia aiškią informaciją. Tai padės jums suprasti sunkias temas lengviau."
//     },
//     {
//       "id": 6,
//       "patarimas": "Kiekvieną dieną sukurti mokymosi įpročius ir laikytis jų. Nuoseklumas yra labai svarbus norint pasiekti mokymosi tikslus."
//     },
//     {
//       "id": 7,
//       "patarimas": "Sukurkite raminančią mokymosi aplinką, kurioje galėtumėte susikoncentruoti ir dirbti be pertraukų."
//     },
//     {
//       "id": 8,
//       "patarimas": "Nustatykite aiškius ir realistiškus mokymosi tikslus, kurie padės jums sukoncentruoti pastangas į svarbiausias sritis."
//     },
//     {
//       "id": 9,
//       "patarimas": "Išmokite įvairias mokymosi strategijas, kurios geriausiai atitinka jūsų mokymosi stilių ir poreikius."
//     },
//     {
//       "id": 10,
//       "patarimas": "Nustatykite sau mokymosi apdovanojimus už pasiektus tikslus arba sėkmes mokymosi procese. Tai padės jums išlaikyti motyvaciją ir džiugintis savo pažanga."
//     }
//   ]
   

//   $(document).ready(function(){
//     let arrayOfArrays = [
//         ["Item 1", "Item 2", "Item 3"]
//         ["Item 4", "Item 5", "Item 6"]
//         ["Item 7", "Item 8", "Item 9"]
//         ["Item 10"]
//     ];

//     arrayOfArrays.forEach(function(array){
//         let carouselContent = '<div class="carousel-item"><ul>';
//         array.forEach(function(item){
//             carouselContent += '<li>' + item  + '</li>';
//         });
//         carouselContent += '</ul></div>';
//         $('.carousel').append(carouselContent);
//     });

//     $('.carousel').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         arrows: true
//     });
//   });
//2 dalis pamoka

// const students = ['Ieva', 'Tomas', 'Kristina'];


// localStorage.setItem('studentsList',JSON.stringify(students));
//JSON apraso

// console.log(JSON.parse(localStorage.getItem('studentsList')))

// localStorage.removeItem('studentsList')

// localStorage.clear()

//2.1 pamoka

// "use strict"

// // firstName = "Jonas";
// //array destructing
// let [firstName, lastName, email] = ['Jonas', 'Jonaitis', 'jonas@gmail.com'];

// //Object destructing. objekto destruktivizavimas

// const personalInformation = {
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     email: "jonas@gmail.com"
    
// };

// const {firstName: vardas} = personalInformation;

// // firstName = "Kristina";
// console.log(vardas)

//2.2 pamoka
// "use strict"

// let items = ['Computer', 'Tablet', 'Phone'];

// if(items.includes('Tablet')){
//     console.log('Item found')
// }else{
//     console.log('Item not found')
// }

// const sum = (...numbers)=>{
//     console.log('List of numbers: ${numbers}')
// }

// sum(222,333,222,888,777)

//3.3 paoka. sudomin turiniu ir reklama po 5 sekundziu
// "use strict"

// setTimeout(()=>{
//     console.log("Labas")
// },5000)

//3.4 pamoka
"use strict"

const syHi = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            const firstName = "Kristinaa";
            resolve{firstName};
        },5000)
    })
}
syHi()
.then((firstName)=>{console.log(firstName)})
.then(()=>{console.log('Viskas veikia')})

const greet = async()=>{
    const firstName = await syHi();
    console.log(firstName)
}
greet()

//pasigooglinti callbackhell

//3.5 pamoka
