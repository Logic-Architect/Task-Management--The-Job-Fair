// Verification of Hiring status
changeVerificationText = (id)=>{
    $(`#${id}`).text('Verify Now');
    $(`#${id}`).on('mouseleave',()=>{
        $(`#${id}`).text('Verification Pending')
    })
}

// Color of hiring status 
$(document).ready(()=>{
    $('.green-white').parent().css({
        'background-color':'rgb(40, 179, 40)',
        'color':'white',
        'border-radius':'10px'
    })
    $('.yellow-white').parent().css({
        'background-color':'rgb(214, 214, 78)',
        'color':'white',
        'border-radius':'10px'
    })
    $('.red-white').parent().css({
        'background-color':'rgb(235, 37, 37)',
        'color':'white',
        'border-radius':'10px'
    })
})