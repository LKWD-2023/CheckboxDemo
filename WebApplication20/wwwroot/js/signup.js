$(() => {
    $("input").on('input', function () {
        ensureFormValidity();
    });

    //$("form").on('submit', function () {
    //    $("#signup").prop('disabled', false);
    //});

    const isValidNumber = value => !Number.isNaN(Number(value));

    $("#age").on('input', function () {
        const age = $("#age").val();
        if (!isValidNumber(age)) {
            return;
        }

        if (age >= 65) {
            $("#signup").prop('disabled', true);
            $("#signup").prop('checked', true);
            $("form").append("<input type='hidden' value='true' name='signuptonewsletter' id='hidden-signup' />");
        } else {
            $("#signup").prop('disabled', false);
            $("#hidden-signup").remove();
        }
    })

    function ensureFormValidity() {
        const name = $("#name").val().trim();
        const age = $("#age").val();

        const isValid = name && age && isValidNumber(age);
        $(".btn-primary").prop('disabled', !isValid);

        

        //if (isValid) {
        //    $(".btn-primary").prop('disabled', false);
        //} else {
        //    $(".btn-primary").prop('disabled', true);
        //}
    }
})