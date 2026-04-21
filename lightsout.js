let active_color = "black";

function update_active_color(new_color = active_color) {
    $(".strip-cell.selected").removeClass("selected");
    active_color = new_color;
    $(`.strip-cell.${active_color}`).addClass("selected");
}

$(document).ready(function (){

$("#color-strip td").each(function(){
    $(this).addClass($(this).attr("data-color"));
});

update_active_color();

});
