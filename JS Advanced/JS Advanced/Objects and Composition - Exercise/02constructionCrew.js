function constructionCrew(obj){


    if(obj.dizziness){
        let neededHydration = 0.1 * obj.weight * obj.experience;
        let oldHydrationValue = obj.levelOfHydrated;
        obj.levelOfHydrated = oldHydrationValue + neededHydration
        obj.dizziness = false;
    } else{
        
        return obj
    }
    //console.log(obj)
}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )
  console.log('------------------')
  constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  )