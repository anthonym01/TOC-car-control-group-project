const stabput = document.getElementById('stabput')
const stateout = document.getElementById('current_state')

window.addEventListener('load', function () {
    console.log('⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿⣿');
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
    console.log('⣿⣿⣿⣷⣮⣿⣿⣿⡌⠁⢤⣤⣤⣤⣬⣭⣴⣶⣶⣶⣆⠈⢻⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣷⣶⣤⣌⣉⡘⠛⠻⠶⣿⣿⣿⣿⡟⣰⣫⣴⣿⣿⣿⣿⠄⣷⣿⣿⣿⣿');

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
    rest_states();
    current_state = 1;
    speed = 0;
    inptarray = [];
    raw_input = stabput.value.toLowerCase();
    console.log('Raw input: ', raw_input)

    inptarray = raw_input.split(',')

    console.log(inptarray)

    document.getElementById('offstate').classList.add('active');
    setTimeout(() => { process_input(); }, 1000);
}

function process_input() {

    for (let i in inptarray) {
        setTimeout(() => {
            console.log('current state: ', states[current_state], ' Input/signal: ', inptarray[i])
            rest_states();
            switch (inptarray[i]) {
                case ""://empty string
                    console.warn(states[current_state], ' no action can be taken with signal ""')
                    failiure(current_state, "")
                    //return -1;
                    break;

                case "a"://start signal
                    document.getElementById('arow').classList = "flasrow"

                    switch (current_state) {
                        case 1://Off -> ignition-on
                            current_state = 2;
                            document.getElementById('ignitionstate').classList.add('active');
                            console.log('Off -> ignition-on');
                            break;
                        case 2://ignition-on -> Off
                            current_state = 1;
                            document.getElementById('offstate').classList.add('active');
                            console.log('ignition-on -> Off');
                            break;
                        case 3: //Hold -> engine-started
                            current_state = 4;
                            document.getElementById('enginestartedstate').classList.add('active');
                            console.log('Hold -> engine-started');
                            break;
                        case 4: //engine-started -> Off
                            current_state = 1;
                            document.getElementById('offstate').classList.add('active');
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
                            break;//Off -> hold
                        case 2:
                            current_state = 3;
                            console.log('ignition-on -> hold');
                            document.getElementById('holdstate').classList.add('active');
                            break;//ignition-on -> hold
                        case 6: //in-reverse-motion -> stationary position if speed = 0 | speed--
                            /* IMPLIMENT SPEED */
                            if (speed > 1) {
                                speed--;
                                console.log('in-reverse-motion slow to speed: ', speed)
                            } else {
                                current_state = 5;
                                document.getElementById('stationarystate').classList.add('active');
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
                                document.getElementById('stationarystate').classList.add('active');
                                console.log('in-forward-motion -> stationary position')
                            }
                            break;
                        case 8://cruise-control-engaged -> in-forward-motion
                            current_state = 7;
                            document.getElementById('forwardstate').classList.add('active');
                            console.log('cruise-control-engaged -> in-forward-motion')
                            break;
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
                        current_state = 7;
                        document.getElementById('forwardstate').classList.add('active');
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
                        console.log('stationary position  -> engine-started')
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "e"');
                        failiure(current_state, "e")
                        return -1;
                    }
                    break;

                case "f"://accelerate
                    document.getElementById('frow').classList = "flasrow"
                    switch (current_state) {
                        case 5:// stationary position accelerate
                            document.getElementById('stationarystate').classList.add('active');
                            console.log('stationary position accelerate');
                            break;
                        case 6: //in-reverse-motion accelerate
                            /* IMPLIMENT SPEED */
                            speed++;
                            document.getElementById('reversestate').classList.add('active');
                            console.log('in-reverse-motion accelerate to speed: ', speed);
                            break;
                        case 7: //in-forward-motion accelerate
                            /* IMPLIMENT SPEED */
                            speed++;
                            document.getElementById('forwardstate').classList.add('active');
                            console.log('in-forward-motion accelerate to speed: ', speed);
                            break;
                        case 8://cruise-control-engaged accelerate
                            console.log('cruise-control-engaged accelerate');
                            document.getElementById('cruisecontrolstate').classList.add('active');
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
                        document.getElementById('reversestate').classList.add('active');
                        console.log('stationary position  -> in-reverse-motion')
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "g"');
                        failiure(current_state, "g")
                        return -1;
                    }
                    break;

                case "i"://set-cruise-control
                    document.getElementById('irow').classList = "flasrow"
                    if (current_state == 7) {
                        current_state = 8;
                        document.getElementById('cruisecontrolstate').classList.add('active');
                        window.location = '#cruisecontrolstate'
                        console.log('in-forward-motion  -> cruise-control-engaged')
                    } else {
                        console.warn(states[current_state], ' no action can be taken with signal "g"');
                        failiure(current_state, "g")
                        return -1;
                    }
                    break;

                default:
                    console.warn(' Input/signal: ', inptarray[i], ' is not appart of the language')
                    failiure(current_state, inptarray[i])
                    return -1;
            }
            stateout.innerText = states[current_state] + ' ' + speed;
        }, delay * i);
        stateout.innerText = states[current_state] + ' ' + speed;
    }
}

function rest_states() {
    document.querySelectorAll('.state').forEach((states) => { states.classList = "state" })
    document.getElementById('arow').classList = ""
    document.getElementById('brow').classList = ""
    document.getElementById('crow').classList = ""
    document.getElementById('drow').classList = ""
    document.getElementById('erow').classList = ""
    document.getElementById('frow').classList = ""
    document.getElementById('grow').classList = ""
    document.getElementById('irow').classList = ""

}

function failiure(where, signal) {
    console.warn('Failiure cannot apply ', signal, ' to state ', states[where])
    rest_states()
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