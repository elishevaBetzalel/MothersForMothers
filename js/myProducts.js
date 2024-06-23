let divP = document.getElementById("product")
// let users=JSON.parse(localStorage.getItem('users'))//מערך למשתמשים
// let user=JSON.parse(sessionStorage.getItem('user'))//מערך למשתמש הנוכחי
document.body.onload = f_init()

function f_init(){
    let pr,pContent,img,btn
    let sum=0
    let arr=user.bag
    for (let i = 0; i < arr.length; i++) {//מעבר על המוצרים בסל קניה
    
    sum+=arr[i].price

        pr = document.createElement("div")//יצירת דיב מוצר
        pr.setAttribute("class", "prod")
        img = document.createElement("img")//יצירת תמונה
        img.setAttribute("src",arr[i].img)//עידכון התמונה
        pr.appendChild(img)//אימוץ התמונה

        pContent = document.createElement("h1")//יצירת פיסקה לתוכן המוצר
        pContent.innerHTML=arr[i].name//הכנסת התוכן
        pr.appendChild(pContent)//אימוץ הפיסקה

        btn=document.createElement("button")
        btn.setAttribute("id",i)//IDשמירת מיקום המוצר ב
        btn.innerHTML="הסר מסל הקניות"
        btn.addEventListener("click",f_remove)//שליחה לפונקצית הסרת מוצר
        pr.appendChild(btn)//אימוץ כפתור הסרה
        
        divP.appendChild(pr)
    }
    let price=document.createElement("p")
    price.setAttribute("id","d1")
    price.innerHTML="סכום לתשלום: "+sum
    document.body.appendChild(price)
    sessionStorage.setItem("price",JSON.stringify(sum))//שמירת הסכום בזיכרון המקומי
}
function f_remove(){
    let i=event.srcElement.id
    user.bag.splice(i,1)
    alert("המוצר הוסר מקניתך")
    sessionStorage.setItem('user',JSON.stringify(user))//שינוי הגדררות המשתמש בהגדרות מקומיות
    divP.innerHTML=""
    document.body.removeChild(document.getElementById("d1"))
    f_init()
}

