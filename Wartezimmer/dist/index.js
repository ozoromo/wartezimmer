const send_name_button = document.getElementById("sendname");
const call_patient_button = document.getElementById("deque");
const name_field = document.getElementById("name_input");
const waitlist = document.getElementById("waitlist");


send_name_button.addEventListener('click', send_name);
call_patient_button.addEventListener('click', dequeue)

name_field.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        send_name();
        name_field.value = "";
    }
});

let queue_variable = [];



function update_textfield() {
    tmpstring = "";
    for (let i = 0; i < queue_variable.length; i++) {
        tmpstring = tmpstring + queue_variable[i];
    }

    waitlist.value = tmpstring;
}

function send_name() {
    if (send_name_button.value === 'Eintragen'){
        if (name_field.value != "") {
            queue_push(name_field.value + "\n");
        }
    }
    update_textfield();
}

function queue_push(name) {
    queue_variable.push(name);
}

function dequeue() {
    if (queue_variable.length != 0) {
        queue_variable[0] = ""
        let count = 0
        while (count != queue_variable.length) {
            queue_variable[count] = queue_variable[count + 1];
            count = count + 1;
        }
        queue_variable.pop();
        update_textfield();
    }

}

function queue_top() {
    if (queue_variable.length != 0) {
        return queue_variable[queue_variable.length];
    }else {
        return null;
    }
}