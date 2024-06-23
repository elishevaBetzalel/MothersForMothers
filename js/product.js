// קריאה לפונקציה שמביאה את כל הספרים
let pictures=f_data()


// יצירת כפתרורים לכל הקטגוריות
document.getElementById(" פינקוס").addEventListener("click", f_click)
document.getElementById("בידרמן").addEventListener("click", f_click)
document.getElementById("נויגרשל").addEventListener("click", f_click)
document.getElementById("התורה").addEventListener("click", f_click)
document.getElementById(" גדולי").addEventListener("click", f_click)
document.getElementById(" מועדים").addEventListener("click", f_click)
document.getElementById("רוזנבלום").addEventListener("click", f_click)
document.getElementById("ויא").addEventListener("click", f_click)

// פונקציה שמביאה את הספרים שנבחרו
function f_click(){
  // ריקון רקע של דף הבית
  let divP = document.getElementById("closeHomePage")
  divP.innerHTML=" "
  f_close()
  //יצירת הדף
  let pr,pContent,pPrice,img,btn,btnBuy
  for (let i = 0; i < pictures.length; i++) {//מעבר על מערך המוצרים
      // בדיקה שהספר שיך לרב הרצוי
      if(event.srcElement.id==pictures[i].t){
        pr = document.createElement("div")//יצירת דיב מוצר
        pr.setAttribute("class", "prod")
        img = document.createElement("img")//יצירת תמונה
        img.setAttribute("src",pictures[i].img)//עידכון התמונה
        pr.appendChild(img)//אימוץ התמונה

        pContent = document.createElement("h1")//יצירת פיסקה לתוכן המוצר
        pContent.innerHTML=pictures[i].name//הכנסת התוכן
        pr.appendChild(pContent)//אימוץ הפיסקה

        pPrice=document.createElement("p")//יצירת הפיסקה למחיר
        pPrice.innerHTML=' ₪'+pictures[i].price//הכנסת המחיר לפיסקה
        pr.appendChild(pPrice)//אימוץ הפיסקה
        btn=document.createElement("button")//יצירת כפתור פרטים נוספים
        btn.setAttribute("id",pictures[i].id)//IDשמירת מיקום המוצר ב
        btn.innerHTML="לפרטים נוספים"
        btn.addEventListener("click",f_detail)//שליחה לפונקצית פרטים נוספים
        pr.appendChild(btn)//אימוץ כפתור פרטים

        btnBuy=document.createElement("button")//יצירת כפתור קניה
        btnBuy.setAttribute("id",pictures[i].id)//IDשמירת מיקום המוצר ב
        btnBuy.innerHTML="הוספה לסל"
        btnBuy.addEventListener("click",f_buy)//שליחה לפונקצית הוספת מוצר
        pr.appendChild(btnBuy)//אימוץ כפתור קניה
        divP.appendChild(pr)
      }
  }
}

//popup-פרטים נוספים
function f_detail(){
  var popup = document.getElementById("myPopup");
  popup.innerHTML=" "//ריקון הפופאפ
  let i=event.srcElement.id//המוצר המבוקש

  popup. scrollTo(0,0);

  let span=document.createElement("span")//יצירת כפתור סגירה
  span.setAttribute("class","close")
  span.innerHTML="&times;"
  span.addEventListener("click",f_close)
  popup.appendChild(span)

  img = document.createElement("img")//יצירת תמונה
  img.setAttribute("src",pictures[i].img)//עידכון התמונה
  popup.appendChild(img)//אימוץ התמונה

  pName = document.createElement("h1")//יצירת פיסקה לשם הספר
  pName.innerHTML=pictures[i].name//הכנסת התוכן
  popup.appendChild(pName)//אימוץ הפיסקה

  pT = document.createElement("p")//יצירת פיסקה לשם הרב
  pT.innerHTML=pictures[i].t//הכנסת התוכן
  popup.appendChild(pT)//אימוץ הפיסקה

  pCode = document.createElement("p")//יצירת פיסקה לקוד הספר
  pCode.innerHTML='('+pictures[i].code+')'//הכנסת הקוד
  popup.appendChild(pCode)//אימוץ הפיסקה

  pPrice=document.createElement("p")//יצירת הפיסקה למחיר
  pPrice.innerHTML=' ₪'+pictures[i].price//הכנסת המחיר לפיסקה
  popup.appendChild(pPrice)//אימוץ הפיסקה

  btnBuy=document.createElement("button")//יצירת כפתור קניה
  btnBuy.setAttribute("id",i)//IDשמירת מיקום המוצר ב
  btnBuy.innerHTML="הוספה לסל"
  btnBuy.addEventListener("click",f_buy)//שליחה לפונקצית הוספת מוצר
  popup.appendChild(btnBuy)//אימוץ כפתור קניה

  popup.style.display = "block"; // Show the popup
}
function f_close(){//סגירת הפופ-אפ
    var popup = document.getElementById("myPopup");
    popup.style.display = "none";
  }

//פונקצית קניה
function f_buy(){
  let x=JSON.parse(sessionStorage.getItem("x"))
  let i=event.srcElement.id
  let prod=pictures[i]//המוצר המבוקש
  let j = 0
  // לולאה שרצה על כל ספרים ובודקת שאין ספר פעמיים
  for (; j < user.bag.length && user.bag[j].code!=prod.code; j++) ;
  // sessionStorage אם הספר לא נמצא - מוסיף למערך ב
  if(j==user.bag.length){
    user.bag.push(pictures[i]);
      sessionStorage.setItem("user",JSON.stringify(user))//שמירה 
      alert("הספר נוסף בהצלחה")
  }
  else
      alert("כבר בחרת את הספר הנוכחי")
}

