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


$(document).ready(function (){

    $("h1").text("Ryan Grimm");
    $("#step-indicator").text("Step 5");

    $("#color-strip td").each(function(){
        $(this).addClass($(this).attr("data-color"));
    });

    update_active_color();

    create_grid(20);

});
