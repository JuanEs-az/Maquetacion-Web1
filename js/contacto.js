$(document).ready(() => {
    $.validate({
        lang:'es'
    })
    $("input[name = 'nacimiento']").datepicker({
        dateFormat: 'dd-mm-yy'
    })
})