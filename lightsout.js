let active_color = "black";


function pad(number, size) {
    return ('0'.repeat(size) + number).slice(-size);
}

function create_grid(size) {
    const table = $("#game-grid");

    for (let i = 1; i <= size; i++) {
        let row = document.createElement("tr");
        row.id = `row${i}`;

        for (let j = 1; j <= size; j++) {
            let cell = document.createElement("td");
            cell.id = `cell${pad(i,2)}${pad(j,2)}`;
            cell.className = "game-cell";

            row.append(cell);
        }

        table.append(row);
    }
}

function toggle_cell(x, y) {
    if (x < 1 || y < 1 || x > 20 || y > 20) { return; }

    const id = `cell${pad(x,2)}${pad(y,2)}`;

    apply_color(`.game-cell#${id}`);
}

function toggle_cell_and_neighbors(cell) {
    let id = $(cell).id;
    let x = parseInt(id.substring(4, 6));
    let y = parseInt(id.substring(6));

    const relative_indices = [[0,0], [0,1], [1,0], [0,-1], [-1,0]];
    relative_indices.forEach((i,j) => { toggle_cell(x+i, y+j); });
}


$(document).ready(function (){

    $("h1").text("Ryan Grimm");
    $("#step-indicator").text("Step 6");

    $("#color-strip td").each(function(){
        $(this).addClass($(this).attr("data-color"));
    });

    update_active_color();

    create_grid(20);

});
