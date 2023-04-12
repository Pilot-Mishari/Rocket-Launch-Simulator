
//information for flight
const fuelqty = 100 //fuel quantity in x1000 kgs
const cruiseAlt = 1000000 //estimated cruise altitude in m
const takeoffSpd = 10000 //takeoff speed in m/s
const landingSpd = 10000 //landing speed in m/s
const cruiseSpd = 50000

//irrelavant content
var currentSpd = {
    number: 0,
    string: "0"
}
var currentAlt = {
    number: 0,
    string: "0"
}
var currfuel = fuelqty
var thrust = {
    number: 0,
    string: "0"
}

var eng0pc = {
    number: 0,
    string: "0"
}
var eng1pc = {
    number: 0,
    string: "0"
}

var pwr = false
var gp = true
var apu = false
var e0 = false
var e1 = false


console.log(thrust)
console.log(currentSpd)
console.log(currentAlt)
console.log(new String(currentSpd).toString())
console.log(new String(currentAlt).toString())
console.log(new String(thrust).toString())

let overSpd = new Audio('sounds/overspeed.mp3')

document.getElementById("main").innerHTML= `
    <div>
        <div class="main-box allStyle">
            <div class="main-title">
                <h2 class="main-title-text">Main Interface</h2>
            </div>
            <div class="main-content">
                <div class="comms">
                    <h2 class=subheader">Comms</h2>
                    <span id="commbox"></span>
                </div>

                <div class="switchPanels" id="leftSwtichPanel"></div>
                <div class="switchPanels" id="rightSwtichPanel"></div>
                <div class="switchPanels" id="centerSwtichPanel"></div>

                <div class="checklist">
                    <h2 class=subheader>Checklist</h2>
                    <span id="checklistcontent"></span>
                </div>

            </div>
        </div>
        <div class="secBox allStyle" id="lbox">
            <div class="main-title">
                <h2 class="main-title-text">Information</h2>
            </div>
            <div id="mainInfoContent"></div>
        </div>
        <div class="secBox allStyle" id="rbox">
            <div class="main-title">
                <h2 class="main-title-text">Navigation</h2>  
            </div>
            <div id="mainNavContent"></div>
        </div>
         
    </div>
`

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
    }

document.getElementById("checklistcontent").innerHTML= `
    <div>
        <div class="list">
            <ol class="listno">
                <li>Preflight Briefing</li>
                <li>Preflight Inspection</li>
                <li>Preflight Analysis</li>
                <li>Programming FMC</li>
                <li>Start-up</li>
                <li>Communication</li>
                <li>Pre-Engine Startup Checklist</li>
                <li>Post-Engine Startup Checklist</li>
                <li>Post-Engine Analysis</li>
                <l1>Pre-Liftoff Checklist</l1>
                <li>Post-Liftoff Checklist</li>
                <li>Exit Atmosphere Checklist</li>
                <li>Cruise Checklist</li>
                <li>Descent Checklist</li>
                <li>Atmosphere Entry Checklist</li>
                <li>Pre-Touchdown Checklist</li>
                <li>Post-Touchdown Checklist</li>
                <li>Taxi Out Checklist</li>
                <li>Securing Aircraft Checklist</li>

            </ol>
        </div>
    </div>
`


checkAirSpd();

function increaseAlt(){
    if(thrust >= 190){
        thrust = thrust - 10
        currentAlt = currentAlt + 100
    }

    else if(thrust <= 190){
        currentSpd = currentSpd - (thrust + 15)
        currentAlt = currentAlt + 100
    }
}

function increaseAirSpd(){
    currentSpd = currentSpd + (thrust - 15)
}

function checkAirSpd(){
    if(currentSpd >= 1200){
        overSpd.play()
    }
    else if(currentSpd > 1200){
        overSpd.pause();
    }
}

if(pwr == false){
    document.getElementById("mainInfoContent").innerHTML = `
        Aircraft Powered Off
    `
    document.getElementById("mainNavContent").innerHTML = `
        Aircraft Powered Off
    `
}
else{}

document.getElementById("leftSwtichPanel").innerHTML = `
    <div>
        <button class="mainbtn btn" id="bat" onclick="bat()">Master Pwr</button>
        <button  class="mainbtn btn" id="eng" onclick="checkgroundpwr()">Ground Power</button>
    </div>
`

function bat(){
    pwr = true
    console.log(pwr)
    info()
}

function checkgroundpwr(){
    if(gp == true && pwr == true){
        pwr = true
        console.log(pwr)
        info()
    }
    else{
        alert("Ground Power is Not Available")
    }
}
function info(){
    document.getElementById("mainInfoContent").innerHTML = `
    <div>
        <div class="maninBoxItemsfa">
            <label for="fuelqty">Fuel Quantity</label>:
            <progress id="fuelqty" value="${currfuel}" max="${fuelqty}">100 |</progress>

            <label for="CurrAlt">Altitude</label>:
            <span class="infoNum" id="currAlt" >${currentAlt.string} m| </span>

            <label for="thrust">Thrust</label>:
            <span class="infoNum" id="thrust" >${thrust.string}| </span>

            <label for="currentSpd">Current Speed</label>:
            <span class="infoNum" id="currentSpd" >${currentSpd.string} kn| </span>

            <label for="eng0">Engine 1</label>:
            <span class="infoNum" id="eng0" >${eng0pc.string}| </span>

            <label for="eng1">Engine 2</label>:
            <span class="infoNum" id="eng1" >${eng1pc.string}| </span>
        </div>

    </div>
`
}