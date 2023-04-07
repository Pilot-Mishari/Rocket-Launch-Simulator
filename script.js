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

document.getElementById("mainInfoContent").innerHTML = `
    <div>
        <div class="maninBoxItemsfa">
            <label for="fuelqty">Fuel Quantity</label>:
            <progress id="fuelqty" value="100" max="100">100</progress>

            <label for="progress">Mission Progress</label>:
            <meter id="progress" value="0" max="100" min="0">0 out of 10</progress>
        </div>

    </div>
`