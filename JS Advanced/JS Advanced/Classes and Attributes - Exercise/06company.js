class Company{
    workers = {}
    departments = {}
    constructor(){
    }
    addEmployee(name, salary, position, departmnet){
        let arr = [name,salary,position,departmnet]
        for(let el of arr){
            if(el === "" || el === null || el === undefined){
                throw new Error("Invalid input!")
            }
        }
        if(salary < 0){
            throw new Error("Invalid input!")
        }
        if(!this.workers.hasOwnProperty(name)){
        this.workers[name] = [salary,position,departmnet]
        }
        if(this.departments.hasOwnProperty(departmnet)){
            this.departments[departmnet][0] += salary
           this.departments[departmnet][1] += 1
        } else{
           this.departments[departmnet] = [salary, 1]
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        let avarageSalaries = {}
        for(let [key, value] of Object.entries(this.departments)){
            avarageSalaries[key] = value[0] / value[1]
        }
        Object.keys(avarageSalaries).sort((a,b) =>{
            avarageSalaries[a] - avarageSalaries[b]
        })
        const maxValue = Object.entries(avarageSalaries).sort((x, y) => y[1] - x[1])[0];
        let result = ``
        result += `Best Department is: ${maxValue[0]}\n`
        result += `Average salary: ${maxValue[1].toFixed(2)}\n`
        let otherWorkers = []
        for(let worker of Object.entries(this.workers)){
            if(worker)
            if(worker[1][2] === maxValue[0]){
                otherWorkers.push(worker)
            }
        }
        /*
        otherWorkers.reduce((a,b) =>{
            console.log('==========');
            console.log(a[1][1]);
            console.log(b);
            console.log('====');
        })
        */
        otherWorkers.sort((a,b) =>{
            return b[1][0] - a[1][0] || a[0].localeCompare(b[0])
        })
        //console.table(otherWorkers)
        for(let worker of otherWorkers){
            //console.log(worker[1]);
            //console.log(worker)
            result += `${worker[0]} ${worker[1][0]} ${worker[1][1]}\n`
        }
        return result.slice(0, -1)
        
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

//console.table(c.departments)
