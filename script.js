var projectData = [
    {
        "title": "Contexte",
        "description": "Le jeu mélange exploration avec des phases de combats et de fuites, un <b>fight or flight</b> (action-évasion, ce terme n'existe pas encore mais décris bien le type de jeu). <br><br> Vous découvrirez le paradis rustique de Tahiti à travers <b>Terangi</b>, une jeune femme doté de talent psychique lui permettant d'atteindre le monde des esprits et intéragir avec. <br> Vous rencontrerez avec votre oncle des oragnisations secrètes et même des gangs qui vous empêcherons de <b>trouver votre père disparu depuis 12 ans.</b>"
    },

    {
        "title": "Electroniques",
        "description": "Frutiger Aero/Metro, pour les interfaces utilisateurs et marques (ordinateur, téléphone, logo d'entreprise, ... ).",
        "mood-board": [
            "electronics/frutiger-charts.jpg",
            "electronics/frutiger-game-market.jpg",
            "electronics/frutiger-mac-computer.jpg",
            "electronics/frutiger-menu1.jpg",
            "electronics/frutiger-menu2.jpg",
            "electronics/frutiger-menu3.jpg",
            "electronics/frutiger-phone.jpg",
            "electronics/frutiger-visualizer.jpg",
            "electronics/frutiger-xbox.jpg"
        ]
    },
    {
        "title": "Perspective 3D",
        "description": "3D cel shading rétro, inspiration pour le style 3D, utiliser les limitations techniques à son avantages.",
        "mood-board": [
            "3d/3d-deadisland.jpg",
            "3d/3d-lilo&stitch1.jpg",
            "3d/3d-lilo&stitch2.jpg",
            "3d/3d-lilo&stitch3.jpg",
            "3d/3d-mariogalaxy1.jpg",
            "3d/3d-mariogalaxy2.jpg",
            "3d/3d-pascalsastrecaladay3-othersea.jpg",
            "3d/3d-zelda1.jpg",
            "3d/3d-zelda2.jpg",
            "3d/3d-idv-runaway.jpg",
            "3d/3d-idv-teamup.jpg",
            "3d/3d-idv-skins.jpg"
        ]
    },
    {
        "title": "Le monde des esprits",
        "description": "Photographie ancienne de Tahiti, pour le style artistique du monde des esprits.",
        "mood-board": [
            "old/old-beach&mountain.jpg",
            "old/old-coconuttree.jpg",
            "old/old-dancing.jpg",
            "old/old-drawing.jpg",
            "old/old-mystic.jpg",
            "old/old-people1.jpg",
            "old/old-people2.jpg",
            "old/old-sails.jpg",
            "old/old-water&island.jpg"
        ]
    },
    {
        "title": ""
    }
];

const bgholder = document.getElementById('bgholder');
const modalElement = document.getElementById('modalElement');
const moodBContainer = document.getElementById('moodBContainer');
const Title = document.getElementById('Title');
const menu = document.getElementById('menu');

document.addEventListener('DOMContentLoaded',() =>  {
    moodBContainer.innerHTML = loadProj(projectData);

    setTimeout(() => {
        // add something here
    }, 1000);

    setTimeout(() => {
        addEventModal();
    }, 100);
});


function loadMoodboards() {
    moodBContainer.style.display = "flex";
    menu.style.opacity = "0";

    Title.style.color = "#fff"; Title.style.paddingTop = "0";
    bgholder.style.opacity = "1"

    setTimeout(() => {
        menu.style.display = "none";
        moodBContainer.style.opacity = "1";
    }, 500);
}

var selectedImg = "";

function loadProj(project) {
    output = "";

    project.forEach(element => {
        output += "<h2>" + element.title + "</h2>";

        const asObj = Object.keys(element);

        // Handles Moodbboards
        asObj.forEach((ee, index) => {
            if (index === 0) {
                return
            };

            if (ee === 'mood-board') {
                output += '<div class="mood-board">';

                element['mood-board'].forEach(e => {
                    output += '<div class="mood-board-item"><img src="images/' + e + '" alt="images/' + e + '"></div>';
                })

                output += '</div>';
            } else {
                output += '<p>' + element[ee] + '</p>';
            };



        });
    })
    return output;
};

function showModal(img, type) {
    modalElement.style.display = type;
    document.getElementById('modalImage').src = img;
    document.getElementById('modalImage').alt = img;
}


function addEventModal() {
    const imageList = document.querySelectorAll('#moodBContainer img');

    imageList.forEach(image => {
        image.addEventListener('click',() => {
            showModal(image.alt, 'flex')
        })
    })
}

document.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if (window.scrollY < 6) {
        Title.style.opacity = "1";
    } else {
        Title.style.opacity = ".2";
    }

    if (window.scrollY < 500) {
        document.getElementById('bg1').style.opacity = "1";
    } else if (window.scrollY > 500) {
        document.getElementById('bg1').style.opacity = "0";
        document.getElementById('bg2').style.opacity = "1";
        if (window.scrollY > 1400) {
            document.getElementById('bg2').style.opacity = "0";
        }
    }


});