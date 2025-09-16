/* function sceneChanger(event, sceneName) {
    let i, scenes, sceneChanger
    scenes = document.getElementsByClassName("scene")
    for (i = 0; scenes.length > i; i++) {
        scenes[i].style.display = "none"
    }
    sceneChanger = document.getElementsByClassName("sceneChanger")
    for (i = 0; sceneChanger.length > i; i++) {
        sceneChanger[i].className = sceneChanger[i].className.replace(" active", "");
    }
    document.getElementById(sceneName).style.display = "block";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click; */

console.log('tkls.js loaded')

let scenes, i, aloitus;

scenes = document.getElementsByClassName("scene");

aloitus = scenes[0];

for (i = 0; scenes.length > i; i++) {
    scenes[i].style.display = "none"
}

aloitus.style.display = "flex"

function sceneChanger(event, current, target) {
    let sceneCurrent = document.getElementById(current)
    let sceneto = document.getElementById(target)

    sceneCurrent.style.display = 'none'
    sceneto.style.display = 'block'
}