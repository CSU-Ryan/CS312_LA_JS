let active_color = "black";

function update_active_color(new_color = active_color) {
    $(".strip-cell.selected").removeClass("selected");
    active_color = new_color;
    $(`.strip-cell.${active_color}`).addClass("selected");
}

function create_grid(size) {
    const table = $("#game-grid");

    for (let i = 0; i < size; i++) {
        let row = document.createElement("tr");
        row.id = `row${i}`;

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("td");
            cell.id = `cell${i}${j}`;
            cell.className = "game-cell";

            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}


$(document).ready(function (){

    $("#color-strip td").each(function(){
        $(this).addClass($(this).attr("data-color"));
    });

    update_active_color();

    create_grid(20);

});
