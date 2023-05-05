// Verification  status
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

openModal = (id)=>{
    // $('#author-main').addClass('blur')
    // $(`.verification-modal-${id}`).parent().addClass('blur')
    $(`#verification-modal-${id}`).fadeIn();
//     $(`.verification-modal-${id}`).on('blur',()=>{
//         $(`.verification-modal-${id}`).addClass('show')
//     })
// }
}
closeModal = ()=>{
    $('.Modal').fadeOut();
}

// Add Volunteer 
let count = 1

addVol=(a)=>{
    count++
    console.log(a);
    $(`.${a}`)
}

removeVol=(a)=>{
    console.log(a);
}