
function xinChao(name, callback) {
    console.log("Xin chào, ", name);
    callback(); 
}

function loiChaoKetThuc() {
    console.log("Hẹn gặp lại!");
}

xinChao("Minh", loiChaoKetThuc);
