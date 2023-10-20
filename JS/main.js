$(document).ready(function(){
    
    $(".filter-btn").click(function(){
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        let value = $(this).attr("data-filter");

        if (value == "all") {
            $(".filter-item").show();
        }
        else {
            $(".filter-item").filter("." + value).show();
            $(".filter-item").not("." + value).hide();
        }
    })

});