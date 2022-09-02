sliderImgs = ['slide04.jpeg', 'slide03.jpg', 'streets-big.jpg', 'streets.jpg']
tags = ['Save the future', 'Empower the teens', 'Help reach a dream']

function set_date() 
 {
    created = new Date("June 1, 2022 00:00:00")
    now = new Date()
    var month = now.getMonth() - created.getMonth()
    var year = now.getFullYear() - created.getFullYear()
    var days = now.getDay() - created.getDay()
    var hours = now.getHours() - created.getHours()

    $('.year_value')[0].innerHTML = year
    $('.month_value')[0].innerHTML = month
    $('.days_value')[0].innerHTML = days
    $('.hours_value')[0].innerHTML = hours
 }



$(document).ready(function(){
    set_date()
    var now = 1
    setInterval(function(){
        let img = sliderImgs[now % sliderImgs.length]
        $('.slider-img').animate({
            'opacity': 0.5
        }, 500, function(){
            $('.slider-img').attr('src', 'images/'+img)
            $('.slider-img').animate({
                'opacity': 1
            }, 1000)
        })

        $('.main-tag').animate({
            'font-size' : '20pt',
            'opacity' : 0
        }, 500, function(){
            $('.main-tag')[0].innerHTML = tags[now % tags.length]
            if($(window).width() > 760){
                size = '70pt'
            }else{
                size = '28pt'
            }
            $('.main-tag').animate({
                'font-size' : size,
                'opacity' : 1
            }, 1000)
        })
        

        now = now + 1
    }, 5000)
})