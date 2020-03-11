$('#addBurger').on('click', function () {
    const name = $('#burger').val().trim()
    $('#burger').val('')
    $.ajax({
        method: "POST",
        url: '/addburger',
        data: { burger_name:  name}
    }).then(function(data){
            console.log(data)
            window.location.replace('/')
        })
})

$(document).on('click', '.devour', function(){
    console.log('this is the id - ', $(this).attr('id'))
    $.ajax({
        method: 'PUT',
        url: '/eatburger/'+$(this).attr('id'),
    }).then(data=>{
        console.log(data)
        window.location.replace('/')
    })
})