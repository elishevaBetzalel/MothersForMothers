// אפקטים בדף הכניסה
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

// הצבת משתני הכניסה במשתני עזר 
let name1=document.getElementById("name1")
let name2=document.getElementById("name2")
let password1=document.getElementById("password1")
let password2=document.getElementById("password2")
let email = document.getElementById("email")
let check=document.getElementById("check")

//בדיקה האם הוכנסו אותיות
name1.addEventListener("keypress", f_check_abc)
name2.addEventListener("keypress", f_check_abc)

function f_check_abc(){
  console.log(event.keyCode)
  console.log(String.fromCharCode(event.keyCode))
  if(!(event.keyCode>=65 &&event.keyCode<=90 || event.keyCode>=97 &&event.keyCode<=122 || event.keyCode>=1488 &&event.keyCode<=1514 || event.keyCode==32))
      event.preventDefault()
}


password2=document.getElementById("password2")
// אימות סיסמה
check.addEventListener("keypress",f_checkPassword)
function f_checkPassword(){
  if(String.fromCharCode(event.keyCode)!=password2.value[check.value.length])
      event.preventDefault()
}

// המרת מערך המשתמשים
let users=JSON.parse(localStorage.getItem('users'))

// זיהוי משתמש ישן
let exit1=document.getElementById("exit1")
exit1.addEventListener("click", f_init1)
function f_init1(){
  if(name1.value.length==0)
    name1.focus()
  else if(password1.value.length==0)
    password1.focus()
  else{
    let i=0
    for( ; users!=null && i<users.length ; i++){
      if(users[i].name==name1.value && users[i].password==password1.value){
        users[i].bag=new Array()
        sessionStorage.setItem('user', null)
        sessionStorage.setItem('user', JSON.stringify(users[i]))
        window.location = "../html/homePage.html"
        break
      }
    }
    if(users==null || i == users.length)
      alert('משתמש לא זוהה')
  }     
}
// עדכון משתמש חדש
let exit2=document.getElementById("exit2")
exit2.addEventListener("click", f_init2)
function f_init2(){ 
  if(name2.value.length==0)
    name2.focus()
  else if(email.value=="")
    email.focus()
  else if(password2.value.length==0)
    password2.focus()
  else if(check.value.length==0)
    password2.focus()
  else{
    if (users==null) //{
      users=new Array()
    // משתנה עזר לדעת אם נמצא המשתמש
    let i=0
    // בדיקה שהמשתמש לא קיים כבר במערכת
    for( ; i<users.length ; i++)
      if(users[i].name==name1.value && users[i].password==password1.value && users[i].email==email.value){
        users[i].bag=new Array()
        sessionStorage.setItem('user', null)
        sessionStorage.setItem('user', JSON.stringify(users[i]))
        break
      }
    if(i == users.length){
      let newuser = { 
        name: name2.value, 
        mail: email.value, 
        password:password2.value,
        backgroundColor : 'rgb(231, 231, 231)',
        fontFamily : 'Gill Sans MT',
        bag : new Array()//סל קניות
       }
      users.push(newuser)//דחיפה של החדש לתוך המערך
      users[users.length-1].bag=new Array()
      localStorage.setItem('users', JSON.stringify(users))
      sessionStorage.setItem('user', null)
      sessionStorage.setItem('user', JSON.stringify(newuser))
    }
  }
  window.location = "../html/homePage.html"
}
 