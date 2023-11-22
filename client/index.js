import { response } from "express";

document.addEventListener('DOMContentLoaded', function() {

   fetch('http://localhost:5000/getAll')
   .then(response => response.json())
   .then(data => console.log(data));

loadHTMLTable([]);

}) 

function loadHTMLTable(data){
    const table = document.querySelector('table tbody');
   

     if(data.length === 0){
        table.innerHTML= "<tr><td colspan='7' style='opacity: 50%; padding: 20px 30px;' >No display data</td></tr>";
     }
}  