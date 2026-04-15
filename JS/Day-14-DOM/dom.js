//? DOM

//* -> the fullform of dom is document object model, it is a tree like representiation of of HTML element created by browser

//? Diagram:-
//?            document
//?                |
//?              HTML
//?             |   |
//?          head  body
//?          |     |   |
//?         Meta   h1  h2

//! DOM selectors 

//* DOM selectors are used to select html note on which we are going to add logic

//? types of selectors:-


//^ 1. document.getElementById()         
//? Return Type : HTML Element / null

//^ 2. document.getElementsByClassName()
//? Return Type : HTMLCollection

//^ 3. document.getElementsByTagName()
//? Return Type : HTMLCollection

//^ 4. document.getElementsByName()
//? return type = NodeList

//^ 5. document.querySelector()
//? return type = first matching css selector

//^ 5. document.querySelectorAll()
//? return type = NodeList


//! DOM Properties:

//^ 1. var_name.value 
//* it is used to get / set value in input tag and textarea tag.

//^ 2. var_name.textContent
//* it is used to get / set content from tag.-

//^ 3. var_name.style
//* it is used to give style to html element

//^ 4.var_name.innerHTML
//* it is used to write HTML code through the js file


//! DOM Methods:

//^ 1. document.createElement("tagName")
//* it is used to create tag in JS.

//^ var_name.setAttribute("attribute_name","attribute_value")
//* it is used to add attribute to element

//^ appendChild("childNode"):
//* It is used to add child element inside DOM tree or specified Parent Element.


//^ var.classList.add()
// *Adds a class to an element's class list.

//^ var.classList.remove()
// *Removes a class from an element's class list.

//^ var.classList.toggle()
// *Toggles a class on an element.