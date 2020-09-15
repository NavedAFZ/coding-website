 a1=document.querySelectorAll(".comments")
console.log(a1)
//a1.style.backgroundColor="white";
for(var i=0;i<a1.length;i++)
{
    a1[i].style.backgroundColor="white";
    a1[i].style.fontStyle="italic";
}
a2=document.querySelector(".question-image");
a2.style.width="100%";

/********************************* */
/* container2----left-sidebar*/
var leftSidebar=document.createElement("div");
leftSidebar.className="relatedQues";

var left1=document.createElement("div");
left1.className="l1";
leftSidebar.append(left1);
console.log(leftSidebar)
var l1List=document.createElement("ul");
for(var i=0;i<10;i++)
{
    it=document.createElement("li");
    it1=document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, perferendis labore quos blanditiis, eveniet officiis omnis laudantium corrupti");
    it.append(it1);
    l1List.append(it);

}
left1.append(l1List);
//leftSidebar.append(l1);
//console.log(leftSidebar);
op1=document.querySelector(".container2 .left-sidebar")

//console.log(op1);
op1.append(leftSidebar);
console.log(document.querySelector(".left-sidebar"));
/* ******************************** */
