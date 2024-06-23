// עיצוב אישי
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
});

    // הצבת ההגדרות האישיות עבור משתמש זה
    let backgroundColor=document.getElementById("bg-color")//משתנה לכפתור צבע רקע
    let letter=document.getElementById("font-family")//משתנה לכפתור צבע אותיות

//פונקציה לסגירת חלון העיצוב האישי
document.getElementById("closing").addEventListener("click",f_close)
function f_close(){ 
    // Get selected background color
    var bgColor = document.getElementById('bg-color').value;
    // Get selected font family
    var font = document.getElementById('font-family').value;
    // let users=JSON.parse(localStorage.getItem("users"))//מערך למשתמשים
    // let user=JSON.parse(sessionStorage.getItem("user"))//מערך למשתמש הנוכחי
    // שמירת ההגדרות במערך של כל המשתמשים
    for(let i = 0 ;  i < users.length ; i++){
        if(users[i].name == user.name){
            users[i].backgroundColor=bgColor
            users[i].fontFamily=font
            localStorage.setItem('users',null)
            localStorage.setItem('users',JSON.stringify(users))
            break
        }
    }
    // שמירת ההגדרות במשתמש הנוכחי
    user.backgroundColor=bgColor
    user.fontFamily=font
    sessionStorage.setItem('user', null)
    sessionStorage.setItem('user', JSON.stringify(user))

    document.body.style.backgroundColor=user.backgroundColor//צבע הרקע
    document.body.style.fontFamily=user.fontFamily//גופן האותיות
    // חזרה לדף הבית
    window.location = "homePage.html"
}