const lockedScreen=document.querySelector("#locked-screen");
const backgroundsPath="../assets/images/pictures/";
const background1="background_1.jpg";
const lockedScreenBlur=document.querySelector("#locked-screen-blur");
const loginInput=document.querySelector("#login-input");
const loginInputIcon=document.querySelector("#login-input-icon");

lockedScreen.style.backgroundImage=`url(${backgroundsPath}/${background1})`;
lockedScreen.addEventListener("click",()=>{
    lockedScreenBlur.classList.add("blur")
})

loginInputIcon.addEventListener("click",()=>{
    loginInputIcon.classList.toggle("fa-eye");
    loginInputIcon.classList.toggle("fa-eye-slash");
    (loginInput.type=="text")?loginInput.type="password":loginInput.type="text";
})

// Create a variable to set html tag
const html=document.querySelector("html");

// Create a variable to set languge buttons
const langEn=document.querySelector(".lang-en");
const langEs=document.querySelector(".lang-es");
const langIt=document.querySelector(".lang-it");
const langPt=document.querySelector(".lang-pt");

// Create an array that contains the languege buttons
const langList=[langEn,langEs,langIt,langPt];

// Add an event to each languege button 
// Send as argument (Object)selected lang button and (String)lang abbreviation
langEn.addEventListener("click",()=>{changeLanguage(langEn,"en");});
langEs.addEventListener("click",()=>{changeLanguage(langEs,"es");});
langIt.addEventListener("click",()=>{changeLanguage(langIt,"it");});
langPt.addEventListener("click",()=>{changeLanguage(langPt,"pt");});

// Create a function to change language
// Receive as Parameter (Object)selected lang button and (String)lang abbreviation
function changeLanguage(selectedlangButton,newLanguage){

    // Create an if to validate if the selected lang button has the "active" class
    if(selectedlangButton.classList.contains("active")==false){

        // Create an loop to remove the "active" class for each element of "langList" array
        for(language in langList){
            langList[language].classList.remove("active");
        }

        // Add "active" class to selectedlangButton
        selectedlangButton.classList.add("active");

        // Change current html tag lang attribute value to newLanguage
        html.lang=newLanguage;
        
        // Create a switch conditional to compare the (String)lang abbreviation, and return a function to set the new language
        switch (newLanguage) {
            case "en":
                changeContentLanguage("Languages","English (United States)","Spanish (Colombia)","Italian (Italia)","Portugues (Brasil)","Enter your password");
                break;
            case "es":
                changeContentLanguage("Idiomas","Inglés (Estados Unidos)","Español (Colombia)","Italiano (Italia)","Portugués (Brasil)", "Ingresa tu contraseña");
                break;
            case "it":
                changeContentLanguage("Lingue","Inglese (Stati Uniti)","Spagnolo (Colombia)","Italiano (Italia)","Portoghese (Brasile)","Inserisci la tua password");
                break;
            case "pt":
                changeContentLanguage("Línguas","Inglês (Estados Unidos)","Espanhol (Colômbia)","Italiano (Itália)","Portugues (Brasil)","Coloque sua senha");
                break;
        }
    }
}

// Create a function to find the elements who change the language, and set the new language, using innerText method
function changeContentLanguage(langTitle,lanInfoEng,lanInfoSpa,lanInfoIta,lanInfoPor,loginInputPlaceholder){
    const languagesTitle=document.querySelector(".languages-title");
    const langInfoEnglish=document.querySelector(".lang-info-english");
    const langInfoSpanish=document.querySelector(".lang-info-spanish");
    const langInfoItalian=document.querySelector(".lang-info-italian");
    const langInfoPortugues=document.querySelector(".lang-info-portugues");
    languagesTitle.innerText=langTitle;
    langInfoEnglish.innerText=lanInfoEng;
    langInfoSpanish.innerText=lanInfoSpa;
    langInfoItalian.innerText=lanInfoIta;
    langInfoPortugues.innerText=lanInfoPor;
    loginInput.placeholder=loginInputPlaceholder;
}