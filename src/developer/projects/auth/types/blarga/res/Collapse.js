$(document).on("click", "[data-collapse]", function (e) {
    $header = $(this);

    $content = $($header.data().collapse);
    $panel = $header.closest(".panel");

    CollapseAllOtherPanelsOnPage($panel);

    $content.slideToggle(200, function () {
        if ($panel.hasClass("in")) {
            $panel.removeClass("in");
        }
        $header.closest(".panel").toggleClass("collapse", !$content.is(":visible"));
    });

    setTimeout(function () {
        $.scrollTo($('#online-application'), 600, {
            offset: { top: -50 }
        });
    }, 200);

    return false;
});

function CollapseAllOtherPanelsOnPage($currentPanel) {
    $(".panel").not($currentPanel).not($currentPanel.parents()).each(function () {
        var $panel = $(this);
        var $header = $panel.findClosest("[data-collapse]");
        var $content = $($header.data().collapse);
        $content.slideUp(100, function () {
            if ($panel.hasClass("in")) {
                $panel.removeClass("in");
            }
        });
        $panel.addClass("collapse");
    });
}