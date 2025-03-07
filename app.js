

const closeButton = document.getElementsByClassName('closeButton')[0];
const welcomeCard = document.querySelector('.welcomeCard');
const coloredText = document.getElementById('coloredText');
const send = document.getElementById('send');
const convo = document.getElementById('convo');
const moreSpace = document.querySelector('.moreSpace');

const myArray = '9-2';
const splitArray = myArray.split('');
let newValueAdded = 0;
let newValueSubtracted = 0;


    const addingFunction = (param) => {

    // if(param.join('').includes('+')){}
    for(let i = 0; i< param.length; i++){

        if(param[i] !== '+'){
            newValueAdded += Number(param[i]);
        }      
    }

}

const subtractFunction = (param) => {

    // if(param.join('').includes('+')){}
    for(let i = 0; i< param.length; i++){

        if(param[i] !== '-'){
            newValueSubtracted -= Number(param[i]);
            newValueSubtracted = Math.abs(-(newValueSubtracted));
        }      
    }

}



const profilePictures = [
    {
        id: 1,
        title: "Chimdi",
        img: "./3D Avatars/26.png" 
    },
    {
        id: 2,
        title: "Graham",
        img: "./3D Avatars/21.png" 
    },
    {
        id: 3,
        title: "Andy",
        img: "./3D Avatars/23.png" 
    },
    {
        id: 4,
        title: "Sandy",
        img: "./3D Avatars/2.png" 
    }
];

let profileChoice;


for(let i = 0; i < profilePictures.length; i++){
    moreSpace.innerHTML += `
    <div class="hoveringProfiles profile-1">
            <img title="${profilePictures[i].title}" class="selectedProfile" src="${profilePictures[i].img}" alt="An array of profile pictures">
        </div>
    `;

    /* const selectedProfile = document.getElementsByClassName('.selectedProfile');

    for(let k = 0; k < selectedProfile.length; k++) {
        selectedProfile[k].onclick = () =>{
            profileChoice = profilePictures[k].img;
            alert(profileChoice);
        }
    } */

}

closeButton.onclick = () => {
    welcomeCard.classList.toggle('closeWelcomeCard');
}

send.onclick =  () => {

    if(coloredText.value.toUpperCase().trim() == 'HELLO' || coloredText.value.toUpperCase().trim() == 'HEY' || coloredText.value.toUpperCase().trim() == 'WHATS UP' || coloredText.value.toUpperCase().trim() == 'WHATSUP'|| coloredText.value.toUpperCase().trim() == 'WATS UP' || coloredText.value.toUpperCase().trim() == "WHAT'SUP" || coloredText.value.toUpperCase().includes('HELLO') || coloredText.value.toUpperCase().includes('HEY')){
        convo.innerHTML += `
         <div class="clientAi">
        <img src="13.png" alt="" class="aiProfile">
        <p>
            ${coloredText.value}
        </p>
    </div> 
</div>
        `;
        coloredText.value = '';

        setTimeout(() => {
            convo.innerHTML += `
            <div class="solveAi">
            <img src="7.png" alt="" class="aiProfile">
            <p>
               What's Up ? 🥰
            </p>
        </div>
            `;
        }, 1500)
    }
    else if(coloredText.value.includes('+')){
        addingFunction(coloredText.value.trim());
        convo.innerHTML += `
         <div class="clientAi">
        <img src="13.png" alt="" class="aiProfile">
        <p>
            ${coloredText.value}
        </p>
    </div> 
</div>
        `;

        setTimeout(() => {
            convo.innerHTML += `
                <div class="solveAi">
                <img src="7.png" alt="" class="aiProfile">
                <p>
                   ${newValueAdded}
                </p>
            </div>
                `;
                newValueAdded = 0;
               coloredText.value = '';
        }, 1500)



    }

    else if(coloredText.value.includes('-')){
        subtractFunction(coloredText.value.trim());
        convo.innerHTML += `
         <div class="clientAi">
        <img src="13.png" alt="" class="aiProfile">
        <p>
            ${coloredText.value}
        </p>
    </div> 
</div>
        `;


        setTimeout(() => {

            convo.innerHTML += `
                <div class="solveAi">
                <img src="7.png" alt="" class="aiProfile">
                <p>
                   ${newValueSubtracted}
                </p>
            </div>
                `;
    
                newValueSubtracted = 0;
                coloredText.value = '';

        }, 1500)    

    }
    
}

