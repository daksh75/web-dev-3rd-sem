const jet = require( "jsonwebtoken")
const data = {
    _id : "1234"
}
const token = jet.sign(data,"random-secret-key",{expiresIn:"2d"})
console.log(token)
const decoded = jet.verify(token,"random-secret-key")
console.log(decoded)