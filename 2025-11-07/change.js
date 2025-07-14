const colors= document.getElementById("line");
const colours = [
        "red", "orange", "yellow", "green", "blue", "indigo", "violet",
        "pink", "deeppink", "hotpink", "tomato", "coral", "gold", "lime",
        "teal", "aqua", "deepskyblue", "dodgerblue", "royalblue", "mediumpurple",
        "slateblue", "plum", "orchid", "crimson", "salmon", "khaki", "turquoise"
    ];
let current=0;

colors.addEventListener("click",()=>{
    current=(current+1) % colours.length;
    colors.style.backgroundColor=colours[current];
});