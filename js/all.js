// דף הגדרות אשיות - כולם מקושרים אליו
let users=JSON.parse(localStorage.getItem('users'))//מערך למשתמשים
let user=JSON.parse(sessionStorage.getItem('user'))//מערך למשתמש הנוכחי

document.body.style.backgroundColor=user.backgroundColor//צבע הרקע
document.body.style.fontFamily=user.fontFamily//גופן האותיות
