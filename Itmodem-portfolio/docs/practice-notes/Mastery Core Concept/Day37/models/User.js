// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   role: String
// });

// const User = mongoose.model("User", UserSchema);

// export default User;


import mongoose from "mongoose";

const Userschema = mongoose.Schema({
  Name: String,
  Eamil: String,
  Role: String,
});

const User = mongoose.model("User",Userschema);

export default User;