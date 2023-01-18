function search() {
   let searchInput = document.getElementById("searchText").value;
   let matchesCount = 0

   let towns = document.getElementById("towns").getElementsByTagName("li");
   //let arrayOfTowns = []
   
   for(let i = 0; i < towns.length; i++){
     let currentTown = towns[i].innerHTML
     

     if(currentTown.includes(searchInput)){
        matchesCount++;
        towns[i].style.textDecoration = "underline"
        towns[i].style.fontWeight = 'bold'
     } else{
      towns[i].style.textDecoration = ""
      towns[i].style.fontWeight = ''
     }
   }
   


   document.getElementById("result").innerHTML = `${matchesCount} matches found`
   //debugger

}
