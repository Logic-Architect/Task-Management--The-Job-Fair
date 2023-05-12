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
                $('#room-company-name').fadeIn();
                $('.room-cname').fadeIn()
                $('.room-cemail').fadeIn()
                $('.room-cphone').fadeIn()
            }else{
                $('.room-cname').text(data.data.cName);
                $('.room-cemail').text(data.data.cEmail);
                $('.room-cphone').text(data.data.cPhone);
                $('#room-company-name').fadeIn();
                $('.room-cname').fadeIn()
                $('.room-cemail').fadeIn()
                $('.room-cphone').fadeIn()
            }
        },
        error : function(error){
            console.log(error.responseText);
        }
    })
}
resetText = async ()=>{
    await $('#room-company-name').fadeOut();
    $('.room-cname').text('');
    $('.room-cemail').text('');
    $('.room-cphone').text('');
}
