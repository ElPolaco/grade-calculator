const btn=document.getElementById("count_btn");
const pts=document.getElementById("points");
const max=document.getElementById("max");

function checkResult(result){
   let note=2;
   if(result>=0.5)note+=1;
   if(result>=0.7)note+=1;
   if(result>=0.85)note+=1;
   return note;
}
pts.addEventListener("change",(e)=>{
    if(Number(e.target.value)>Number(max.value) && Number(max.value)!=0)
        e.target.value=max.value;
    if(Number(max.value)==0)
        max.value=e.target.value;
});
max.addEventListener("change",(e)=>{
    pts.max=e.target.value;
    if(Number(pts.value)>Number(e.target.value))
        pts.value=e.target.value;
});
btn.addEventListener("click",(e)=>{
    let points=Number(pts.value);
    let maximum=Number(max.value);
    if(points>maximum || maximum<=0 || points < 0 ){
        alert("Value Error");
    }
    else{
        let result=points/maximum;
        let note=checkResult(result);
        alert("Student's note: "+note+"("+(result*100).toFixed(2)+"%)");
    }
});
window.addEventListener("keydown",(e)=>{
    if(e.key=="Enter")
        btn.click();
});