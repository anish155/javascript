function Frequency(){
    const word=document.getElementById("word").value;
    let count=0;
    const vowels="aeiou";

    for(let i=0;i<word.length;i++){
        if (vowels.includes(word[i])){
        count++;
        }
    }


    document.getElementById("count").innerHTML="The number of vowels in the word "+word+" is "+count;
}