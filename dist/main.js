(()=>{"use strict";const e=[{name:"Chicago Dog",img:"https://www.mypricechopper.com/Frontend/Media/Recipes/ChicagoHotDog_Web_1110x625.jpg",description:"An all-beef frankfurter on a poppy seed bun topped with yellow mustard, chopped white onions, bright green sweet pickle relish, a dill pickle spear, tomato slices or wedges, pickled sport peppers and a dash of celery salt."},{name:"Chilli Dog",img:"https://media.istockphoto.com/photos/chili-dog-with-a-basket-of-fries-picture-id155352096?b=1&k=20&m=155352096&s=170667a&w=0&h=AvG2etecQ7WzL8oSFAG0hKHEiJDQH5YRzymw06CbzQM=",description:"A hot dog served in a bun and topped with a meat sauce, such as chili con carne. Additional toppings may include cheese, onions, and mustard."},{name:"Sweet & Spicy Kielbasa",img:"https://i.pinimg.com/736x/b1/5f/d8/b15fd89a697c8eef6a7f444eedc33cc0--hollywood-kielbasa.jpg",description:"A polish kielbasa sausage on a poppy seed bun topped with chopped peppers, onions, ketchup and mustard."}];(function(){const t=document.querySelector("body"),n=document.querySelector("#content");function o(t){const o=t.target.textContent;switch(n.firstChild&&n.removeChild(n.firstChild),o){case"Home":return void function(e){const t=document.createElement("div"),n=document.createElement("h1");n.textContent="Glizzy Gang";const o=document.createElement("img");o.setAttribute("src","https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/918/516/Obama_Hot_Dog-1.jpg?ve=1&tl=1"),o.setAttribute("width","500");const c=document.createElement("p");c.textContent="The best glizzys you will ever taste",t.append(n,o,c),e.appendChild(t)}(n);case"Menu":return void function(t){const n=document.createElement("section");e.forEach((e=>{n.appendChild(function(e){const{name:t,img:n,description:o}=e,c=document.createElement("article"),i=document.createElement("div"),s=document.createElement("h3");s.textContent=t;const a=document.createElement("p");a.textContent=o,i.append(s,a);const d=document.createElement("img");return d.setAttribute("src",n),d.setAttribute("width","500"),c.append(d,i),c}(e))})),t.appendChild(n)}(n);case"Contact":return c=n,void console.log(c)}var c}return{setup:function(){!function(){const e=document.createElement("ul");["Home","Menu","Contact"].forEach((t=>{const n=document.createElement("li");n.style.cursor="pointer",n.addEventListener("click",o),n.textContent=t,e.appendChild(n)})),t.insertBefore(e,n)}()}}})().setup()})();