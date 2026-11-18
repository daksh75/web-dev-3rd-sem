const bcrypt = require("bcrypt")
const password = "john@123"
const hashpassword = async(password)=>{
    const salt = await async.gensalt(10);
    console.log("salt",salt)
    const hashedpassword =  await bcrypt.hash(password,salt);
    console.log("Hashed Password",hashedpassword)
    const ismatch = await bcrypt.compare("john@123", hashedpassword);
    console.log("Is Match", ismatch);
}
hashpassword(password)
hashpassword(password2)