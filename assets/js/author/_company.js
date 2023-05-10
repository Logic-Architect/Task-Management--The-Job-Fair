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
    $('.modal-background-handler').fadeIn();
    $(`#verification-modal-${id}`).fadeIn();
//     $(`.verification-modal-${id}`).on('blur',()=>{
//         $(`.verification-modal-${id}`).addClass('show')
//     })
// }
}
closeModal = ()=>{
    $('.Modal').fadeOut();
    $('.modal-background-handler').fadeOut();
}

// Add Volunteer 
let count = 1

addVol=(a,id)=>{
    count++
    // console.log(a);
    $(`#verification-modal-${id} .${a}`).prepend($(
        `
        <div id="volunteer${count}" class="per-vol">

        <div class="modal-vol-nav">
        <p>Volunteer ${count}</p>
        <p onclick="removeVol('volunteer${count}')">X</p>
        </div>
        
        <input type="text" name="volName" placeholder="Name">

        <input type="text" name="volPhone" placeholder="Phone">

        <input type="email" name="volEmail" placeholder="Email">

        
        </div>`
    ))
}

removeVol=(a)=>{
    // console.log(a);
    count--;
    $(`#${a}`).remove()
}

// volunteer info on hover 
let showVolunteers = (id)=>{
    console.log(id);
    $.ajax()
}