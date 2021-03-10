const stabput = document.getElementById('stabput')
const stateout = document.getElementById('current_state')

window.addEventListener('load', function () {
    /*console.log('
    ⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣟⣷⣿⣿⣿⡀⠹⣟⣾⣟⣆⠹⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⡘⣿⣿⡄⠉⢿⣿⣽⡷⣿⣻⣿⣿⣿⣿⡝⣷⣯⢿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣯⢿⣾⢿⣿⡄⢄⠘⢿⣞⡿⣧⡈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣧⠘⣿⣷⠈⣦⠙⢿⣽⣷⣻⣽⣿⣿⣿⣿⣌⢿⣯⢿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣟⣯⣿⢿⣿⡆⢸⡷⡈⢻⡽⣷⡷⡄⠻⣽⣿⣿⡿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣏⢰⣯⢷⠈⣿⡆⢹⢷⡌⠻⡾⢋⣱⣯⣿⣿⣿⣿⡆⢻⡿⣿⣿⣿⣿
    ⣿⣿⣿⣿⡎⣿⢾⡿⣿⡆⢸⣽⢻⣄⠹⣷⣟⣿⣄⠹⣟⣿⣿⣟⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⢸⣯⣟⣧⠘⣷⠈⡯⠛⢀⡐⢾⣟⣷⣻⣿⣿⣿⡿⡌⢿⣻⣿⣿⣿
    ⣿⣿⣿⣿⣧⢸⡿⣟⣿⡇⢸⣯⣟⣮⢧⡈⢿⣞⡿⣦⠘⠏⣹⣿⣽⢿⣿⣿⣿⣿⣯⣿⣿⣿⡇⢸⣿⣿⣾⡆⠹⢀⣠⣾⣟⣷⡈⢿⣞⣯⢿⣿⣿⣿⢷⠘⣯⣿⣿⣿
    ⣿⣿⣿⣿⣿⡈⣿⢿⣽⡇⠘⠛⠛⠛⠓⠓⠈⠛⠛⠟⠇⢀⢿⣻⣿⣯⢿⣿⣿⣿⣷⢿⣿⣿⠁⣾⣿⣿⣿⣧⡄⠇⣹⣿⣾⣯⣿⡄⠻⣽⣯⢿⣻⣿⣿⡇⢹⣿⣿⣿
    ⣿⣿⣿⣿⣿⡇⢹⣿⡽⡇⢸⣿⣿⣿⣿⣿⣞⣆⠰⣶⣶⡄⢀⢻⡿⣯⣿⡽⣿⣿⣿⢯⣟⡿⢀⣿⣿⣿⣿⣿⣧⠐⣸⣿⣿⣷⣿⣿⣆⠹⣯⣿⣻⣿⣿⣿⢀⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⠘⣯⡿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣧⡈⢿⣳⠘⡄⠻⣿⢾⣽⣟⡿⣿⢯⣿⡇⢸⣿⣿⣿⣿⣿⣿⡀⢾⣿⣿⣿⣿⣿⣿⣆⠹⣾⣷⣻⣿⡿⡇⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⡇⢹⣿⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠻⡇⢹⣆⠹⣟⣾⣽⣻⣟⣿⣽⠁⣾⣿⣿⣿⣿⣿⣿⣇⣿⣿⠿⠛⠛⠉⠙⠋⢀⠁⢘⣯⣿⣿⣧⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⡈⣿⡃⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⠌⣿⣆⠘⣿⣞⡿⣞⡿⡞⢠⣿⣿⣿⣿⣿⡿⠛⠉⠁⢀⣀⣠⣤⣤⣶⣶⣶⡆⢻⣽⣞⡿⣷⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⡿⠃⠘⠁⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⢿⣄⢻⣿⣧⠘⢯⣟⡿⣽⠁⣾⣿⣿⣿⣿⣿⡃⢀⢀⠘⠛⠿⢿⣻⣟⣯⣽⣻⣵⡀⢿⣯⣟⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣶⣶⡆⢀⣿⣾⣿⣾⣷⣿⣶⠿⠚⠉⢀⢀⣤⣿⣷⣿⣿⣷⡈⢿⣻⢃⣼⣿⣿⣿⣿⣻⣿⣿⣿⡶⣦⣤⣄⣀⡀⠉⠛⠛⠷⣯⣳⠈⣾⡽⣾⣿⣿⣿
    ⣿⣿⣻⣿⣿⣿⣿⣿⡿⠐⣿⣿⣿⣿⠿⠋⠁⢀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣌⣥⣾⡿⣿⣿⣷⣿⣿⢿⣷⣿⣿⣟⣾⣽⣳⢯⣟⣶⣦⣤⡾⣟⣦⠘⣿⢾⣿⣿⣿
    ⣿⣿⡷⣿⣿⣿⣿⣿⡗⣦⠸⡿⠋⠁⢀⢀⣠⣴⢿⣿⣽⣻⢽⣾⣟⣷⣿⣟⣿⣿⣿⣳⠿⣵⣧⣼⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣽⣳⣯⣿⣿⣿⣽⢀⢷⣻⣿⣿⣿
    ⣿⣿⣿⣷⣻⣿⣿⣿⡷⠛⣁⢀⣀⣤⣶⣿⣛⡿⣿⣮⣽⡻⣿⣮⣽⣻⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢀⢸⣿⣿⣿⣿
    ⣿⣿⣿⣷⢿⣽⣿⣿⣷⣿⣷⣆⠹⣿⣶⣯⠿⣿⣶⣟⣻⢿⣷⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣯⣟⣿⣿⣿
    ⣿⣿⣻⣿⣿⢾⡽⣿⣿⣿⣿⣿⣆⢹⣶⣿⣻⣷⣯⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⡿⡇⣿⣿⣿
    ⣿⣿⡻⣽⣿⣯⢿⣽⣻⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿⠇⣿⣿⣿
    ⣿⣿⣿⣦⠛⣿⢯⣷⢿⡽⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣿⣾⣣⣿⣿⣿
    ⣿⣿⠙⣿⣿⣌⠻⣽⢯⣿⣽⣻⣿⣿⣿⣧⠩⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢰⢣⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⢀⢿⣞⣷⣿⣿⣿
    ⣿⣿⣧⠘⣿⣿⡷⣌⠙⢷⣯⡷⣟⣿⣿⣿⣷⡀⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣴⡧⢀⠸⣿⡽⣿⣿⣿
    ⣿⣿⢻⣷⡈⢿⣿⣿⢧⢀⠙⢿⣻⡾⣽⣻⣿⣿⣄⠌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢁⣰⣾⣟⡿⢀⡄⢿⣟⣿⣿⣿
    ⣿⣿⢀⠹⣟⣆⠻⣿⣿⣆⢀⣀⠉⠻⣿⡽⣯⣿⣿⣷⣈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣠⠘⣯⣷⣿⡟⢀⢆⠸⣿⣿⣿⣿
    ⣿⣿⣇⢱⡘⢿⣷⣬⣙⠿⣧⠘⣆⢀⠈⠻⣷⣟⣾⢿⣿⣆⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⡞⢡⣿⢀⣿⣿⣿⠇⡄⢸⡄⢻⣿⣿⣿
    ⣿⣿⣿⡆⢣⡀⠙⢾⣟⣿⣿⣷⡈⠂⠘⣦⡈⠿⣯⣿⢾⣿⣆⠙⠻⠿⠿⠿⠿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢋⣠⣾⡟⢠⣿⣿⢀⣿⣿⡟⢠⣿⢈⣧⠘⣿⣿⣿
    ⣿⣿⠻⣿⡄⢳⡄⢆⡙⠾⣽⣿⣿⣆⡀⢹⡷⣄⠙⢿⣿⡾⣿⣆⢀⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣠⣴⡿⣯⠏⣠⣿⣿⡏⢸⣿⡿⢁⣿⣿⢀⣿⠆⣿⣿⣿
    ⣿⣿⣦⡙⣿⣆⢻⡌⢿⣶⢤⣉⣙⣿⣷⡀⠙⠽⠷⠄⠹⣿⣟⣿⣆⢙⣋⣤⣤⣤⣄⣀⢀⢀⢀⢀⣾⣿⣟⡷⣯⡿⢃⣼⣿⣿⣿⠇⣼⡟⣡⣿⣿⣿⢀⡿⢠⣿⣿⣿
    ⣿⣿⣿⣷⣮⣿⣿⣿⡌⠁⢤⣤⣤⣤⣬⣭⣴⣶⣶⣶⣆⠈⢻⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣷⣶⣤⣌⣉⡘⠛⠻⠶⣿⣿⣿⣿⡟⣰⣫⣴⣿⣿⣿⣿⠄⣷⣿⣿⣿⣿
    ');*/
});

document.getElementById('arow').addEventListener('click', function () { stabput.value = stabput.value + 'a,' })
document.getElementById('brow').addEventListener('click', function () { stabput.value = stabput.value + 'b,' })
document.getElementById('crow').addEventListener('click', function () { stabput.value = stabput.value + 'c,' })
document.getElementById('drow').addEventListener('click', function () { stabput.value = stabput.value + 'd,' })
document.getElementById('erow').addEventListener('click', function () { stabput.value = stabput.value + 'e,' })
document.getElementById('frow').addEventListener('click', function () { stabput.value = stabput.value + 'f,' })
document.getElementById('grow').addEventListener('click', function () { stabput.value = stabput.value + 'g,' })
//document.getElementById('hrow').addEventListener('click', function () { stabput.value = stabput.value + 'h,' })
document.getElementById('irow').addEventListener('click', function () { stabput.value = stabput.value + 'i,' })
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

document.getElementById('test_run').addEventListener('click', pullupinput)

function pullupinput() {
    current_state = 1
    speed = 0;
    inptarray = [];
    raw_input = stabput.value.toLowerCase();
    console.log('Raw input: ', raw_input)

    inptarray = raw_input.split(',')

    console.log(inptarray)
    process_input()
}

function process_input() {
    for (let i in inptarray) {
        console.log('current state: ', states[current_state], ' Input/signal: ', inptarray[i])
        switch (inptarray[i]) {
            case ""://empty string
                console.warn(states[current_state], ' no action can be taken with signal ""')
                failiure(states[current_state], "")
                return -1;
                break;
            case "a"://start signal
                switch (current_state) {
                    case 1: current_state = 2; console.log('Off -> ignition-on'); break;//Off -> ignition-on
                    case 2: current_state = 1; console.log('ignition-on -> Off'); break;//ignition-on -> Off
                    case 3: current_state = 4; console.log('Hold -> engine-started'); break;//Hold -> engine-started
                    case 4: current_state = 1; console.log('engine-started -> Off'); break;//engine-started -> Off
                    default:
                        console.warn(states[current_state], ' no action can be taken with signal "a"');
                        failiure(states[current_state], "a")
                        return -1;
                }
                break;

            case "b"://brake-held
                switch (current_state) {
                    case 1: current_state = 3; console.log('Off -> hold'); break;//Off -> hold
                    case 2: current_state = 3; console.log('ignition-on -> hold'); break;//ignition-on -> hold
                    case 6: //in-reverse-motion -> stationary position if speed = 0 | speed--
                        /* IMPLIMENT SPEED */
                        if (speed > 1) {
                            speed--;
                            console.log('in-reverse-motion slow to speed: ', speed)
                        } else {
                            current_state = 5;
                            console.log('in-reverse-motion -> stationary position')
                        }
                        break;
                    case 7: //in-forward-motion -> stationary position if speed = 0 | speed--
                        /* IMPLIMENT SPEED */
                        if (speed > 1) {
                            speed--;
                            console.log('in-forward-motion slow to speed: ', speed)
                        } else {
                            current_state = 5;
                            console.log('in-forward-motion -> stationary position')
                        }
                        break;
                    case 8://cruise-control-engaged -> in-forward-motion
                        current_state = 7;
                        console.log('cruise-control-engaged -> in-forward-motion')
                        break;
                    default:
                        console.warn(states[current_state], ' no action can be taken with signal "b"')
                        failiure(states[current_state], "b")
                        return -1;
                }
                break;

            case "c"://seat-belt-engaged
                if (current_state == 4) {
                    current_state = 5;
                    console.log('cengine-started -> stationary position')
                } else {
                    console.warn(states[current_state], ' no action can be taken with signal "c"');
                    failiure(states[current_state], "c")
                    return -1;
                }
                break;

            case "d"://drive-selected
                if (current_state == 5) {
                    current_state = 7;
                    console.log('stationary position  -> in-forward-motion')
                } else {
                    console.warn(states[current_state], ' no action can be taken with signal "d"');
                    failiure(states[current_state], "d")
                    return -1;
                }
                break;
            case "e"://park-selected
                if (current_state == 5) {
                    current_state = 4;
                    console.log('stationary position  -> engine-started')
                } else {
                    console.warn(states[current_state], ' no action can be taken with signal "e"');
                    failiure(states[current_state], "e")
                    return -1;
                }
                break;
            case "f"://accelerate
                switch (current_state) {
                    case 5:// stationary position accelerate
                        console.log('stationary position accelerate');
                        break;
                    case 6: //in-reverse-motion accelerate
                        /* IMPLIMENT SPEED */
                        speed++;
                        console.log('in-reverse-motion accelerate to speed: ', speed);
                        break;
                    case 7: //in-forward-motion accelerate
                        /* IMPLIMENT SPEED */
                        speed++;
                        console.log('in-forward-motion accelerate to speed: ', speed);
                        break;
                    case 8://cruise-control-engaged accelerate
                        console.log('cruise-control-engaged accelerate');
                        break;
                    default:
                        console.warn(states[current_state], ' no action can be taken with signal "f"')
                        failiure(states[current_state], "f")
                        return -1;
                }
                break;
            case "g"://reverse-selected
                if (current_state == 5) {
                    current_state = 6;
                    console.log('stationary position  -> in-reverse-motion')
                } else {
                    console.warn(states[current_state], ' no action can be taken with signal "g"');
                    failiure(states[current_state], "g")
                    return -1;
                }
                break;
            case "i"://set-cruise-control
                if (current_state == 7) {
                    current_state = 8;
                    console.log('in-forward-motion  -> cruise-control-engaged')
                } else {
                    console.warn(states[current_state], ' no action can be taken with signal "g"');
                    failiure(states[current_state], "g")
                    return -1;
                }
                break;
            default:
                console.warn(' Input/signal: ', inptarray[i], ' is not appart of the language')
                failiure(states[current_state], inptarray[i])
                return -1;
        }
        stateout.innerText = states[current_state];
    }
}

function failiure(where, signal) {
    console.warn('Failiure cannot apply ', signal, ' to state ', where)
}