console.log('room.js');
displayCompany=(block,floor,roomNo)=>{
    console.log(block,floor,roomNo);
    $.ajax({
        type:'get',
        url : `/author/xhr/view-company/?block=${block}&floor=${floor}&room=${roomNo}`,
        success : function(data){
            console.log(data);
            if(data.data==null){
                $('.room-cname').text('Room Empty');
            }else{
                $('.room-cname').text(data.data.cName);
                $('.room-cemail').text(data.data.cEmail);
                $('.room-cphone').text(data.data.cPhone);
            }
        },
        error : function(error){
            console.log(error.responseText);
        }
    })
}
resetText = ()=>{
    $('.room-cname').text('');
    $('.room-cemail').text('');
    $('.room-cphone').text('');
}
