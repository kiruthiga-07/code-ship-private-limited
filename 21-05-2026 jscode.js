/*let userProfile = {
    Name : "Kiruthiga R",
    Age : 18,
    Id: 101,
    Course: "AI",
    
    //GET - used to get the data 
    get getUser(){
        return `
        Name: ${this.Name} 
        Age: ${this.Age}
        ID: ${this.Id} 
        Course: ${this.Course}`;
    },
    
    put(key, value){
        if(this.hasOwnProperty(key))
        {
            this[key] = value;
            console.log(`${key} updated successfully`);
        }
        else
        {
            console.log(`${key} is not found`);
        }
    },
    
    post(key, value){
        if(this.hasOwnProperty(key))
        {
            console.log(`${key} is already exist`);
        }
        else{
            this[key] = value;
            console.log(`${key} added Successfully`);
        }
    },
};



console.log(userProfile.getUser);
console.log("------------------------------------------");
userProfile.put('age',19);
console.log(userProfile.getUser);
console.log("------------------------------------------");
userProfile.post('city',"Chennai");

*/

console.log("User Profile System");

console.log();

let userDB = {
    users: [
        {
            id: 1,
            Name: "Kiki",
            Age: 18,
            Course: "AI",
        }
        ],
        
        //get all users
        getAll()
        {
            console.log("--------ALL USERS--------");
            console.log(this.users);
        },
        
        //get single user
        getById(id){
            let user = this.users.find(u => u.id === id);
            if(user){
                console.log("------ User Found ------");
                console.log(user);
            }
            else{
                console.log("User not found");
            }
        },
        
        //post -> add new user
        post(user){
            this.users.push(user);
            console.log("User Added Successfully");
        },
        
        //put -> update user
        put(id, updateData){
            let user = this.users.find(u => u.id === id);
            
            if(user){
                for(let key in updateData){
                    user[key] = updateData[key];
                }
                console.log(`User ${id} updated successfully`);
            }
            else{
                console.log("User not found for update");
            }
        },
        
        //Delete -> remove user
        delete(id){
            let index = this.users.findIndex(u=> u.id === id);
            
            if(index !== -1){
                this.users.splice(index, 1);
                console.log(`User ${id} deleted successfully`);
            }else{
                console.log("User not found for delete");
            }
        },
        
        filterByAge(age){
            let filtered = this.users.filter(u => u.Age === age);
            
            if(filtered.length > 0){
                console.log(`Users with Age ${age}`);
                console.log(filtered);
            }
            else{
                console.log(`No users found with age ${age}`);
            }
        }
};

//GET ALL
userDB.getAll();
console.log();
console.log("___________________________________________________________________");
console.log();

//GET BY ID
userDB.getById(1);
console.log();
console.log("___________________________________________________________________");
console.log();

//POST
userDB.post({
    id: 2,
    Name: "Nattu",
    Age: 18,
    Course: "AI",
});
userDB.post({
    id: 3,
    Name: "sabbu",
    Age: 20,
    Course: "CS",
});
userDB.post({
    id: 4,
    Name: "Rick",
    Age: 19,
    Course: "HTML",
});
console.log();
userDB.getAll();
console.log();
console.log("___________________________________________________________________");
console.log();

//PUT
userDB.put(2, {
    Age: 19,
    Course: "ML"
});
console.log();
userDB.getById(2);
console.log();
console.log("___________________________________________________________________");
console.log();

//DELETE
userDB.delete(1);
console.log();
userDB.getAll();
console.log();
console.log("____________________________________________________________________");
console.log();

//AGE FILTER 
userDB.filterByAge(18);
console.log();
userDB.filterByAge(19);
console.log();
console.log("___________________________________________________________________");
console.log();
