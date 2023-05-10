$(document).ready($('.long').val(''))
$(document).ready($('.short').val(''))
let prevLen = 0
let arr = []

function myFunction() {


    $('#name').val($('#name').val().toUpperCase())





    // let num = $('#number').val()
    // let len = num.length
    // if ((len == 4 || len == 9 || len == 14) && len > prevLen) {
    //     $('#number').val(num + ' ')
    // } else if (len == 16 && num.indexOf(' ') == -1) {
    //     const arr = [num.substring(0,4),num.substring(4,8),num.substring(8,12),num.substring(12,16)]
    //     $('#number').val(arr.join(' '))
    // }
    // prevLen = len

    let num = $('#number').val().replaceAll(' ','')
    arr = [num.substring(0,4),num.substring(4,8),num.substring(8,12),num.substring(12,16)]
    let firstEmpty = arr.indexOf('')
    if (firstEmpty != -1) {
        arr.splice(firstEmpty, 3)
    }
    $('#number').val(arr.join(' '))





}

$('#day').change(function (){
    let num = $('#day').val()
    let len = num.length
    if (len == 1){
        $('#day').val(0 + num)
    }
})




