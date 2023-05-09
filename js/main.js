$(document).ready($('.long').val(''))
$(document).ready($('.short').val(''))
let prevLen = 0

function myFunction() {
    // if ($('#number').prop('valid', true)) {
    //     console.log('valid true')
    //     $('#button').removeAttr('disabled')
    // } else {
    //     console.log('valid false')
    //     $('#button').attr('disabled', 'disabled')
    // }
    $('#name').val($('#name').val().toUpperCase())

    // let inNum = $('#number').val()
    // let len = inNum.length
    // // let num = inNum.replaceAll(/\s+/g, '')
    // let num = inNum.replaceAll(' ', '')
    //
    // switch (num.length) {
    //     case 4: arr.push(num.substring(0,4)); break;
    //     case 8: arr.push(num.substring(4,8)); break;
    //     case 12: arr.push(num.substring(8,12)); break;
    //     case 16: arr.push(num.substring(12,16)); break;
    // }
    // // const arr = [num.substring(0,4),num.substring(4,8),num.substring(8,12),num.substring(12,16)]
    // console.log(arr)
    // console.log(arr.join(' '))
    // $('#number').val(arr.join(' '))
    // $('#number').val(arr.join(' '))
    // console.log(arr.join(','))
    // if (len == 4 || len == 9 || len == 14 || len == 16) {
    //     $('#number').val(arr.join(','))
    // }




    let num = $('#number').val()
    let len = num.length
    if ((len == 4 || len == 9 || len == 14) && len > prevLen) {
        $('#number').val(num + ' ')
    } else if (len == 16 && num.indexOf(' ') == -1) {
        const arr = [num.substring(0,4),num.substring(4,8),num.substring(8,12),num.substring(12,16)]
        $('#number').val(arr.join(' '))
    }
    prevLen = len

}

$('#day').change(function (){
    let num = $('#day').val()
    let len = num.length
    if (len == 1){
        $('#day').val(0 + num)
    }
})