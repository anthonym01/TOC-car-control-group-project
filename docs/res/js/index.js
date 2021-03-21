const stabput = document.getElementById('stabput')
//const stateout = document.getElementById('current_state')

window.addEventListener('load', function () {
    /*console.log('⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣟⣷⣿⣿⣿⡀⠹⣟⣾⣟⣆⠹⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⡘⣿⣿⡄⠉⢿⣿⣽⡷⣿⣻⣿⣿⣿⣿⡝⣷⣯⢿⣿⣿⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣯⢿⣾⢿⣿⡄⢄⠘⢿⣞⡿⣧⡈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣧⠘⣿⣷⠈⣦⠙⢿⣽⣷⣻⣽⣿⣿⣿⣿⣌⢿⣯⢿⣿⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣟⣯⣿⢿⣿⡆⢸⡷⡈⢻⡽⣷⡷⡄⠻⣽⣿⣿⡿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣏⢰⣯⢷⠈⣿⡆⢹⢷⡌⠻⡾⢋⣱⣯⣿⣿⣿⣿⡆⢻⡿⣿⣿⣿⣿');
    console.log('⣿⣿⣿⣿⡎⣿⢾⡿⣿⡆⢸⣽⢻⣄⠹⣷⣟⣿⣄⠹⣟⣿⣿⣟⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⢸⣯⣟⣧⠘⣷⠈⡯⠛⢀⡐⢾⣟⣷⣻⣿⣿⣿⡿⡌⢿⣻⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣧⢸⡿⣟⣿⡇⢸⣯⣟⣮⢧⡈⢿⣞⡿⣦⠘⠏⣹⣿⣽⢿⣿⣿⣿⣿⣯⣿⣿⣿⡇⢸⣿⣿⣾⡆⠹⢀⣠⣾⣟⣷⡈⢿⣞⣯⢿⣿⣿⣿⢷⠘⣯⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣿⡈⣿⢿⣽⡇⠘⠛⠛⠛⠓⠓⠈⠛⠛⠟⠇⢀⢿⣻⣿⣯⢿⣿⣿⣿⣷⢿⣿⣿⠁⣾⣿⣿⣿⣧⡄⠇⣹⣿⣾⣯⣿⡄⠻⣽⣯⢿⣻⣿⣿⡇⢹⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣿⡇⢹⣿⡽⡇⢸⣿⣿⣿⣿⣿⣞⣆⠰⣶⣶⡄⢀⢻⡿⣯⣿⡽⣿⣿⣿⢯⣟⡿⢀⣿⣿⣿⣿⣿⣧⠐⣸⣿⣿⣷⣿⣿⣆⠹⣯⣿⣻⣿⣿⣿⢀⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣿⣿⠘⣯⡿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣧⡈⢿⣳⠘⡄⠻⣿⢾⣽⣟⡿⣿⢯⣿⡇⢸⣿⣿⣿⣿⣿⣿⡀⢾⣿⣿⣿⣿⣿⣿⣆⠹⣾⣷⣻⣿⡿⡇⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣿⣿⡇⢹⣿⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠻⡇⢹⣆⠹⣟⣾⣽⣻⣟⣿⣽⠁⣾⣿⣿⣿⣿⣿⣿⣇⣿⣿⠿⠛⠛⠉⠙⠋⢀⠁⢘⣯⣿⣿⣧⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣿⣿⣿⡈⣿⡃⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⠌⣿⣆⠘⣿⣞⡿⣞⡿⡞⢠⣿⣿⣿⣿⣿⡿⠛⠉⠁⢀⣀⣠⣤⣤⣶⣶⣶⡆⢻⣽⣞⡿⣷⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣿⣿⡿⠃⠘⠁⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⢿⣄⢻⣿⣧⠘⢯⣟⡿⣽⠁⣾⣿⣿⣿⣿⣿⡃⢀⢀⠘⠛⠿⢿⣻⣟⣯⣽⣻⣵⡀⢿⣯⣟⣿⣿⣿⣿');
    console.log('⣿⣿⣿⣿⣿⣿⣶⣶⡆⢀⣿⣾⣿⣾⣷⣿⣶⠿⠚⠉⢀⢀⣤⣿⣷⣿⣿⣷⡈⢿⣻⢃⣼⣿⣿⣿⣿⣻⣿⣿⣿⡶⣦⣤⣄⣀⡀⠉⠛⠛⠷⣯⣳⠈⣾⡽⣾⣿⣿⣿');
    console.log('⣿⣿⣻⣿⣿⣿⣿⣿⡿⠐⣿⣿⣿⣿⠿⠋⠁⢀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣌⣥⣾⡿⣿⣿⣷⣿⣿⢿⣷⣿⣿⣟⣾⣽⣳⢯⣟⣶⣦⣤⡾⣟⣦⠘⣿⢾⣿⣿⣿');
    console.log('⣿⣿⡷⣿⣿⣿⣿⣿⡗⣦⠸⡿⠋⠁⢀⢀⣠⣴⢿⣿⣽⣻⢽⣾⣟⣷⣿⣟⣿⣿⣿⣳⠿⣵⣧⣼⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣽⣳⣯⣿⣿⣿⣽⢀⢷⣻⣿⣿⣿');
    console.log('⣿⣿⣿⣷⣻⣿⣿⣿⡷⠛⣁⢀⣀⣤⣶⣿⣛⡿⣿⣮⣽⡻⣿⣮⣽⣻⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢀⢸⣿⣿⣿⣿');
    console.log('⣿⣿⣿⣷⢿⣽⣿⣿⣷⣿⣷⣆⠹⣿⣶⣯⠿⣿⣶⣟⣻⢿⣷⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣯⣟⣿⣿⣿');
    console.log('⣿⣿⣻⣿⣿⢾⡽⣿⣿⣿⣿⣿⣆⢹⣶⣿⣻⣷⣯⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⡿⡇⣿⣿⣿');
    console.log('⣿⣿⡻⣽⣿⣯⢿⣽⣻⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿⠇⣿⣿⣿');
    console.log('⣿⣿⣿⣦⠛⣿⢯⣷⢿⡽⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣿⣾⣣⣿⣿⣿');
    console.log('⣿⣿⠙⣿⣿⣌⠻⣽⢯⣿⣽⣻⣿⣿⣿⣧⠩⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢰⢣⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⢀⢿⣞⣷⣿⣿⣿');
    console.log('⣿⣿⣧⠘⣿⣿⡷⣌⠙⢷⣯⡷⣟⣿⣿⣿⣷⡀⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣴⡧⢀⠸⣿⡽⣿⣿⣿');
    console.log('⣿⣿⢻⣷⡈⢿⣿⣿⢧⢀⠙⢿⣻⡾⣽⣻⣿⣿⣄⠌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢁⣰⣾⣟⡿⢀⡄⢿⣟⣿⣿⣿');
    console.log('⣿⣿⢀⠹⣟⣆⠻⣿⣿⣆⢀⣀⠉⠻⣿⡽⣯⣿⣿⣷⣈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣠⠘⣯⣷⣿⡟⢀⢆⠸⣿⣿⣿⣿');
    console.log('⣿⣿⣇⢱⡘⢿⣷⣬⣙⠿⣧⠘⣆⢀⠈⠻⣷⣟⣾⢿⣿⣆⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⡞⢡⣿⢀⣿⣿⣿⠇⡄⢸⡄⢻⣿⣿⣿');
    console.log('⣿⣿⣿⡆⢣⡀⠙⢾⣟⣿⣿⣷⡈⠂⠘⣦⡈⠿⣯⣿⢾⣿⣆⠙⠻⠿⠿⠿⠿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢋⣠⣾⡟⢠⣿⣿⢀⣿⣿⡟⢠⣿⢈⣧⠘⣿⣿⣿');
    console.log('⣿⣿⠻⣿⡄⢳⡄⢆⡙⠾⣽⣿⣿⣆⡀⢹⡷⣄⠙⢿⣿⡾⣿⣆⢀⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣠⣴⡿⣯⠏⣠⣿⣿⡏⢸⣿⡿⢁⣿⣿⢀⣿⠆⣿⣿⣿');
    console.log('⣿⣿⣦⡙⣿⣆⢻⡌⢿⣶⢤⣉⣙⣿⣷⡀⠙⠽⠷⠄⠹⣿⣟⣿⣆⢙⣋⣤⣤⣤⣄⣀⢀⢀⢀⢀⣾⣿⣟⡷⣯⡿⢃⣼⣿⣿⣿⠇⣼⡟⣡⣿⣿⣿⢀⡿⢠⣿⣿⣿');
    console.log('⣿⣿⣿⣷⣮⣿⣿⣿⡌⠁⢤⣤⣤⣤⣬⣭⣴⣶⣶⣶⣆⠈⢻⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣷⣶⣤⣌⣉⡘⠛⠻⠶⣿⣿⣿⣿⡟⣰⣫⣴⣿⣿⣿⣿⠄⣷⣿⣿⣿⣿');*/

});

document.getElementById('enginestarted-off_arrow').addEventListener('click', a_add)
document.getElementById('cruisecontrol-inforward_arrow').addEventListener('click', a_add)
document.getElementById('ignitionon-off_arrow').addEventListener('click', a_add)
document.getElementById('hold-enginestarted_arrow').addEventListener('click', a_add)
document.getElementById('arow').addEventListener('click', a_add)
function a_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'a'
    } else {
        stabput.value = stabput.value + ',a'
    }
    stabput.focus()
}

document.getElementById('brow').addEventListener('click', b_add)
document.getElementById('ignition-on-hold_arrow').addEventListener('click', b_add)
document.getElementById('hold-enginestarted_arrow').addEventListener('click', b_add)
document.getElementById('stationary-inreverse_arrow').addEventListener('click', b_add)
function b_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'b'
    } else {
        stabput.value = stabput.value + ',b'
    }
    stabput.focus()
}

document.getElementById('crow').addEventListener('click', c_add)
document.getElementById('engine_stated-stationary_arrow').addEventListener('click', c_add)
function c_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'c'
    } else {
        stabput.value = stabput.value + ',c'
    }
    stabput.focus()
}

document.getElementById('drow').addEventListener('click', d_add)
document.getElementById('stationary-inforward_arrow_arrow').addEventListener('click', d_add)
function d_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'd'
    } else {
        stabput.value = stabput.value + ',d'
    }
    stabput.focus()
}

document.getElementById('erow').addEventListener('click', e_add)
document.getElementById('stationary-engine_stated_arrow').addEventListener('click', e_add)
function e_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'e'
    } else {
        stabput.value = stabput.value + ',e'
    }
    stabput.focus()
}

document.getElementById('frow').addEventListener('click', f_add)
document.getElementById('stationary-stationary_arrow').addEventListener('click', f_add)
//document.getElementById('forward-forward_arrow').addEventListener('click', f_add)
document.getElementById('cruise-cruise_arrow').addEventListener('click', f_add)
//document.getElementById('reverse-reverse_arrow').addEventListener('click', f_add)
function f_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'f'
    } else {
        stabput.value = stabput.value + ',f'
    }
    stabput.focus()
}

document.getElementById('grow').addEventListener('click', g_add)
document.getElementById('inreverse-stationary_arrow').addEventListener('click', g_add)
function g_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'g'
    } else {
        stabput.value = stabput.value + ',g'
    }
    stabput.focus()
}

document.getElementById('hrow').addEventListener('click', h_add)
document.getElementById('cruisecontrol-inforward_arrow').addEventListener('click', h_add)
function h_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'h'
    } else {
        stabput.value = stabput.value + ',h'
    }
    stabput.focus()

}

document.getElementById('irow').addEventListener('click', i_add)
document.getElementById('cruisecontrol-inforward_arrow').addEventListener('click', i_add)
function i_add() {
    if (stabput.value.length < 1) {
        stabput.value = stabput.value + 'i'
    } else {
        stabput.value = stabput.value + ',i'
    }
    stabput.focus()
}

//document.getElementById('jrow').addEventListener('click', function () { stabput.value = stabput.value + 'j,' })

let inptarray = [];

let delay = 1000;//in miliseconds

let states = [
    "Error",//0
    "Off",//1
    "ignition-on",//2
    "Hold",//3
    "engine-started",//4
    "stationary position",//5
    "in-reverse-motion",//6
    "in-forward-motion",//7
    "cruise-control-engaged"//8
]

let current_state = 1;
let speed = 0; /* IMPLIMENT SPEED */
let timers = [];//clear after

document.getElementById('test_run').addEventListener('click', pullupinput)

function pullupinput() {
    rest_states();
    current_state = 1;
    timers = [];
    speed = 0;
    inptarray = [];
    document.getElementById('statout').innerHTML = states[1];
    document.getElementById('speedout').innerHTML = 0;
    document.getElementById('signalout').innerHTML = "-";
    document.getElementById('presout').innerHTML = 'Start';
    raw_input = stabput.value.toLowerCase();
    console.log('Raw input: ', raw_input)

    inptarray = raw_input.split(',')

    console.log(inptarray)

    document.getElementById('offstate').classList.add('active');
    setTimeout(() => { process_input(); }, 1000);
}

function process_input() {

    for (let i in inptarray) {
        timers[i] = setTimeout(() => {
            rest_states();

            console.log('current state: ', states[current_state], ' Input/signal: ', inptarray[i])
            switch (inptarray[i]) {
                case "a"://start signal
                    document.getElementById('arow').classList = "flasrow"

                    switch (current_state) {
                        case 1://Off -> ignition-on
                            current_state = 2;
                            document.getElementById('ignitionstate').classList.add('active');
                            document.getElementById('off-ignitionon_arrow_container').classList = "arrowcontainer_active"
                            console.log('Off -> ignition-on');
                            break;
                        case 2://ignition-on -> Off
                            current_state = 1;
                            document.getElementById('offstate').classList.add('active');
                            document.getElementById('ignitionon-off_arrow_container').classList = "arrowcontainer_active"
                            console.log('ignition-on -> Off');
                            break;
                        case 3: //Hold -> engine-started
                            current_state = 4;
                            document.getElementById('enginestartedstate').classList.add('active');
                            document.getElementById('hold-enginestarted_arrow_container').classList = "arrowcontainer_active"
                            console.log('Hold -> engine-started');
                            break;
                        case 4: //engine-started -> Off
                            current_state = 1;
                            document.getElementById('offstate').classList.add('active');
                            document.getElementById('enginestarted-off_arrow_container').classList = "arrowcontainer_active"
                            console.log('engine-started -> Off');
                            break;
                        default:
                            console.warn(states[current_state], ' no action can be taken with signal "a"');
                            failiure(current_state, "a")
                            return 0;
                    }
                    break;

                case "b"://brake-held
                    document.getElementById('brow').classList = "flasrow"
                    switch (current_state) {
                        case 1:
                            current_state = 3;
                            console.log('Off -> hold');
                            document.getElementById('holdstate').classList.add('active');
                            document.getElementById('off-hold_arrow_container').classList = "arrowcontainer_active"
                            break;//Off -> holda
                        case 2://ignition-on -> hold_arrow
                            current_state = 3;
                            console.log('ignition-on -> hold');
                            document.getElementById('holdstate').classList.add('active');
                            document.getElementById('ignition-on-hold_arrow_container').classList = "arrowcontainer_active"
                            break;
                        case 6: //in-reverse-motion -> stationary position if speed = 0 | speed--

                            current_state = 5;
                            speed = 0;
                            document.getElementById('stationarystate').classList.add('active');
                            document.getElementById('stationary-inreverse_arrow_container').classList = "arrowcontainer_active"
                            console.log('in-reverse-motion -> stationary position');
                            break;
                        /*case 7: //in-forward-motion -> stationary position if speed = 0 | speed--


                            current_state = 5;
                            speed = 0;
                            document.getElementById('stationarystate').classList.add('active');
                            document.getElementById('inforward-stationary_arrow_container').classList = "arrowcontainer_active"
                            console.log('in-forward-motion -> stationary position')
                            break;
*/
                        default:
                            console.warn(states[current_state], ' no action can be taken with signal "b"')
                            failiure(current_state, "b")
                            return -1;
                    }
                    break;

                case "c"://seat-belt-engaged
                    document.getElementById('crow').classList = "flasrow"
                    if (current_state == 4) {
                        current_state = 5;
                        document.getElementById('stationarystate').classList.add('active');
                        document.getElementById('engine_stated-stationary_arrow_container').classList = "arrowcontainer_active"
                        console.log('cengine-started -> stationary position')
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "c"');
                        failiure(current_state, "c")
                        return -1;
                    }
                    break;

                case "d"://drive-selected
                    document.getElementById('drow').classList = "flasrow"
                    if (current_state == 5) {
                        current_state = 7; speed = 1;
                        document.getElementById('forwardstate').classList.add('active');
                        document.getElementById('stationary-inforward_arrow_container').classList = "arrowcontainer_active"
                        console.log('stationary position  -> in-forward-motion')
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "d"');
                        failiure(current_state, "d")
                        return -1;
                    }
                    break;

                case "e"://park-selected
                    document.getElementById('erow').classList = "flasrow"
                    if (current_state == 5) {
                        current_state = 4;
                        document.getElementById('enginestartedstate').classList.add('active');
                        document.getElementById('stationary-engine_stated_arrow_container').classList = "arrowcontainer_active";
                        console.log('stationary position  -> engine-started');
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "e"');
                        failiure(current_state, "e");
                        return -1;
                    }
                    break;

                case "f"://accelerate
                    document.getElementById('frow').classList = "flasrow"
                    switch (current_state) {
                        case 5:// stationary position accelerate
                            document.getElementById('stationarystate').classList.add('active');
                            document.getElementById('stationary-stationary_arrow_container').classList = "arrowcontainer_active"
                            console.log('stationary position accelerate');
                            break;
                        case 6: //in-reverse-motion accelerate
                            /* IMPLIMENT SPEED */
                            speed++;
                            document.getElementById('reversestate').classList.add('active');
                            document.getElementById('reverse-reverse_arrow_container').classList = "arrowcontainer_active";
                            console.log('in-reverse-motion accelerate to speed: ', speed);
                            break;
                        case 7: //in-forward-motion accelerate
                            /* IMPLIMENT SPEED */
                            speed++;
                            document.getElementById('forwardstate').classList.add('active');
                            document.getElementById('forward-forward_arrow_container').classList = "arrowcontainer_active"
                            console.log('in-forward-motion accelerate to speed: ', speed);
                            break;
                        case 8://cruise-control-engaged accelerate
                            console.log('cruise-control-engaged accelerate');
                            document.getElementById('cruisecontrolstate').classList.add('active');
                            document.getElementById('cruise-cruise_arrow_container').classList = "arrowcontainer_active"
                            break;
                        default:
                            console.warn(states[current_state], ' no action can be taken with signal "f"')
                            failiure(current_state, "f")
                            return -1;
                    }
                    break;

                case "g"://reverse-selected
                    document.getElementById('grow').classList = "flasrow"
                    if (current_state == 5) {
                        current_state = 6;
                        speed = 1;
                        document.getElementById('reversestate').classList.add('active');
                        document.getElementById('inreverse-stationary_arrow_container').classList = "arrowcontainer_active"
                        console.log('stationary position  -> in-reverse-motion')
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "g"');
                        failiure(current_state, "g")
                        return -1;
                    }
                    break;

                case "h"://brake pressed
                    document.getElementById('hrow').classList = "flasrow"
                    switch (current_state) {
                        case 6:
                            /* IMPLIMENT SPEED */

                            speed--;
                            document.getElementById('reverse-reverse_arrow_container').classList = "arrowcontainer_active";
                            console.log('in-reverse-motion slow to speed: ', speed)
                            if (speed < 1) {
                                current_state = 5;
                                document.getElementById('stationarystate').classList.add('active');
                            }

                            break;
                        case 7:
                            /* IMPLIMENT SPEED */

                            speed--;
                            console.log('in-forward-motion slow to speed: ', speed)
                            if (speed < 1) {
                                current_state = 5;
                                document.getElementById('stationarystate').classList.add('active');
                            }

                            break;
                        case 8:
                            current_state = 7;
                            document.getElementById('forwardstate').classList.add('active');
                            document.getElementById('cruisecontrol-inforward_arrow_container').classList = "arrowcontainer_active";
                            window.location = '#forwardstate';
                            console.log('cruise-control-engaged -> in-forward-motion')
                            break;
                        default:
                            console.warn(states[current_state], ' no action can be taken with signal "h"');
                            failiure(current_state, "h")
                            return -1;
                    }
                    break;
                case "i"://set-cruise-control
                    document.getElementById('irow').classList = "flasrow"
                    if (current_state == 7) {
                        current_state = 8;
                        document.getElementById('cruisecontrolstate').classList.add('active');
                        document.getElementById('inforward-cruisecontrol_arrow_container').classList = "arrowcontainer_active";
                        window.location = '#cruisecontrolstate';
                        console.log('in-forward-motion  -> cruise-control-engaged')
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "g"');
                        failiure(current_state, "g")
                        return -1;
                    }
                    break;

                default:
                    console.warn(' Input/signal: ', inptarray[i], ' is not appart of the language')
                    document.getElementById('statout').innerHTML = states[current_state];
                    document.getElementById('speedout').innerHTML = speed;
                    document.getElementById('signalout').innerHTML = inptarray[i];
                    failiure(current_state, inptarray[i])
                    document.getElementById('presout').innerHTML = 'Rejected ' + inptarray[i] + ' is not appart of the language';
                    return -1;
            }

            document.getElementById('statout').innerHTML = states[current_state];
            document.getElementById('speedout').innerHTML = speed;
            document.getElementById('signalout').innerHTML = inptarray[i];
            document.getElementById('presout').innerHTML = 'working';
            stabput.focus()
            stabput.setSelectionRange(i * 2, 2 * i + 1)

            if (i >= inptarray.length - 1) {
                document.getElementById('statout').innerHTML = states[current_state];
                document.getElementById('speedout').innerHTML = speed;
                document.getElementById('presout').innerHTML = 'Finished';

                if (current_state == 1 || current_state == 8) {
                    document.getElementById('presout').innerHTML = 'Accepted';
                } else {
                    failiure(current_state, "end")
                    document.getElementById('presout').innerHTML = 'Rejected';
                }
            }

        }, delay * i + 1000);

    }
}

function rest_states() {
    document.querySelectorAll('.state').forEach((states) => { states.classList = "state" })
    document.getElementById('arow').classList = "";
    document.getElementById('brow').classList = "";
    document.getElementById('crow').classList = "";
    document.getElementById('drow').classList = "";
    document.getElementById('erow').classList = "";
    document.getElementById('frow').classList = "";
    document.getElementById('grow').classList = "";
    document.getElementById('hrow').classList = "";
    document.getElementById('irow').classList = "";
    document.querySelectorAll('.arrowcontainer_active').forEach((arrowcontainer) => {
        arrowcontainer.classList = "arrowcontainer"
    })

}

function failiure(where, signal) {
    console.warn('Failiure cannot apply ', signal, ' to state ', states[where])
    timers.forEach((timer) => { clearTimeout(timer) })
    rest_states()
    //document.getElementById('presout').innerHTML = 'Rejected';
    switch (where) {
        case 0:
            console.warn('Explicit error, something went very wrong');
            break;
        case 1:
            document.getElementById('offstate').classList.add('fault');
            break;
        case 2:
            document.getElementById('ignitionstate').classList.add('fault');
            break;
        case 3:
            document.getElementById('holdstate').classList.add('fault');

            break;
        case 4:
            document.getElementById('enginestartedstate').classList.add('fault');

            break;
        case 5:
            document.getElementById('stationarystate').classList.add('fault');

            break;
        case 6:
            document.getElementById('reversestate').classList.add('fault');

            break;
        case 7:
            document.getElementById('forwardstate').classList.add('fault');

            break;
        case 8:
            document.getElementById('cruisecontrolstate').classList.add('fault');

            break;
        default:
            console.warn('default error, something went very wrong')
    }
}