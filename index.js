console.log('CustomJs Connected')
const Correct_Number=17
var Number_Input=document.querySelector('#input')
const Check_Btn=document.querySelector('#check')
var Body=document.getElementsByTagName('body')[0]
const Display_Result=document.querySelector('#result')
const Alert=document.querySelector('.alert')
var Score=document.querySelector('#score')
var High_Score=document.querySelector('#highscore')
var Alert_Template=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Please Fill The input filed to start</strong> 
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
var attempt=0
const Restart_Game=document.querySelector('#restart')

const Res_Arr=['to low', 'to high ', 'match']

Restart_Game.addEventListener('click',()=>{
    if(Score.textContent==20){
        Alert.innerHTML+=Alert_Template
    }
    Body.style.background='none'
    Number_Input.value=''
    Score.textContent=20
    Display_Result.textContent=''
})

Check_Btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const Input_Num=Number_Input.value
    if(!Input_Num){
        Alert.innerHTML+=Alert_Template

    }
    CheckNumber(Input_Num)



})

const CheckNumber=(num)=>{
    try {
        if(num==Correct_Number){
            Display_Result.textContent=Res_Arr[2]
            Body.style.backgroundColor="#d1e7dd"
           console.log(High_Score.textContent=Score.textContent)
           console.log(attempt)
           

        }else if(num < Correct_Number){
            Display_Result.textContent=Res_Arr[0]
            parseInt(Score.textContent-=1)
            
            attempt+=1

        }else{
            Display_Result.textContent=Res_Arr[1]
            parseInt(Score.textContent-=1)
            attempt+=1
        }
    } catch (error) {
        console.log(error)
        
    }
  



}

