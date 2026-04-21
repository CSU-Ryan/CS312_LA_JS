function update_active_color(new_color = active_color) {
    $(".strip-cell.selected").removeClass("selected");
    active_color = new_color;
    $(`.strip-cell.${active_color}`).addClass("selected");
}

function alert_coordinate(cell_coord) {
    let x = parseInt(cell_coord.substring(4,6));
    let y = parseInt(cell_coord.substring(6));

    alert(`Row ${x}, Col ${y}`);
}

$(document).ready(function () {

    $(".strip-cell").click(function () {
        update_active_color(this.attr("data-color"));
    });

    $(".game-cell").click(function () {
        alert_coordinate(this.id);
    });

});
