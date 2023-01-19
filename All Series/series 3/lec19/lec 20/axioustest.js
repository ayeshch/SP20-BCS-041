const axios= require("axios");

axios.get("https://www.simplyrecipes1.com/").then(res=>{
    console.log(res.data);
})
.catch(err=>{
    console.log(err);
});