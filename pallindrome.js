
function reverse(string){
let bag="";
for(let i=string.length-1;i>=0;i--){
    bag += string[i];
    }
    
if(string==bag){
    console.log("Pallindrome");
}else{
    console.log("NA")
}
}
reverse("naman");