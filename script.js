var songA = new Audio('audio/Audio4.m4a')
var songF = new Audio('audio/smoke.m4a')
var songC = new Audio('audio/one.mp3')
var songB = new Audio('audio/Audio3.m4a')
var songD = new Audio('audio/Eweeh.m4a')
function checkGrade() {
    var userScore = document.getElementById('score').value
    var newScore = Number(userScore)
    if (userScore === '') {
        errorMsg.style.display = 'block'
    } else{
        errorMsg.style.display = 'none'
        if( newScore >= 0 && newScore < 40){
            console.log('F - failed')
            result.innerText = 'F - failed'
            songF.play()
        } else if (newScore >= 40 && newScore < 50) {
            console.log('D - Pass');
            result.innerText = 'D - Fair'
            songD.play()
        }else if (newScore >= 50 && newScore < 65){
            console.log('C - Fair')
            result.innerText = 'C - Pass'
            songC.play()
        }else if (newScore >= 65 && newScore < 80){
            console.log('B - Good')
            result.innerText = 'B - Good'
            songB.play()
        }else if (newScore >= 80 && newScore < 100){
            console.log('A - Excellent');
            result.innerText = 'A - Excellent'
            songA.play()
        }
    }
}