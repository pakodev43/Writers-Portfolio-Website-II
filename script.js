// For the Portfolio Section Couresoul

var leftArrow = document.getElementById('leftArrow')
var rightArrow = document.getElementById('rightArrow')
var portfolioGroupOne = document.getElementById('portfolioGroupOne')
var portfolioGroupTwo = document.getElementById('portfolioGroupTwo')
// var portfolioItem = document.querySelectorAll('.portfolio')

leftArrow.onclick = () => {
    if( portfolioGroupOne.classList.contains('hidden') ) {
        
        // for (let i = 0; i < portfolioItem.length; i++) {
        //     portfolioItem[i].style.backgroundColor = "red";
        //   }


        portfolioGroupTwo.classList.add('hidden')
        portfolioGroupOne.classList.remove('hidden')

        portfolioGroupOne.classList.remove('move_right_out')
        portfolioGroupOne.classList.remove('move_left_out')
        portfolioGroupOne.classList.remove('move_left_in')
        portfolioGroupOne.classList.add('move_right_in')


        portfolioGroupTwo.classList.add('move_right_out')
        portfolioGroupTwo.classList.remove('move_right_in')
        portfolioGroupTwo.classList.remove('move_left_out')
        portfolioGroupTwo.classList.remove('move_left_in')
    } else {
        
        portfolioGroupOne.classList.add('hidden')
        portfolioGroupTwo.classList.remove('hidden')

        portfolioGroupOne.classList.add('move_right_out')
        portfolioGroupOne.classList.remove('move_right_in')
        portfolioGroupOne.classList.remove('move_left_out')
        portfolioGroupOne.classList.remove('move_left_in')

        portfolioGroupTwo.classList.remove('move_right_out')
        portfolioGroupTwo.classList.remove('move_left_out')
        portfolioGroupTwo.classList.remove('move_left_in')
        portfolioGroupTwo.classList.add('move_right_in')
    }
}

rightArrow.onclick = () => {
    if( portfolioGroupOne.classList.contains('hidden') ) {
        
        portfolioGroupTwo.classList.add('hidden')
        portfolioGroupOne.classList.remove('hidden')

        portfolioGroupTwo.classList.add('move_left_out')
        portfolioGroupTwo.classList.remove('move_right_out')
        portfolioGroupTwo.classList.remove('move_right_in')
        portfolioGroupTwo.classList.remove('move_left_in')

        portfolioGroupOne.classList.remove('move_right_out')
        portfolioGroupOne.classList.remove('move_left_out')
        portfolioGroupOne.classList.remove('move_right_in')
        portfolioGroupOne.classList.add('move_left_in')
    } else {

        portfolioGroupOne.classList.add('hidden')
        portfolioGroupTwo.classList.remove('hidden')

        portfolioGroupOne.classList.add('move_left_out')
        portfolioGroupOne.classList.remove('move_right_out')
        portfolioGroupOne.classList.remove('move_right_in')
        portfolioGroupOne.classList.remove('move_left_in')


        portfolioGroupTwo.classList.remove('move_right_out')
        portfolioGroupTwo.classList.remove('move_right_in')
        portfolioGroupTwo.classList.remove('move_left_out')
        portfolioGroupTwo.classList.add('move_left_in')
    }
}