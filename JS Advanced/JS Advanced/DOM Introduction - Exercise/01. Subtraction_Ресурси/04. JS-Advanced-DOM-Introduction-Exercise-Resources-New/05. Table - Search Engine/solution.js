function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {



      let searchInfo = document.getElementById("searchField").value;
      let peopleInfo = document.getElementsByTagName("tBody")[0].getElementsByTagName("tr")


      for(let row of peopleInfo){
               row.className = ''
      }

      for(let row of peopleInfo){
         let info = row.getElementsByTagName("td")
         for(let cel of info){
            if(cel.textContent.includes(searchInfo)){
               row.className = 'select'
            }
         }
      }


      document.getElementById("searchField").value = ''
   }

}