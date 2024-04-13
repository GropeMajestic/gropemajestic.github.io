let div = document.getElementById("main")
div.style = "display:flex;margin-left:10%;margin-top:2%;height:80%"

let left_div = document.createElement("div")
left_div.style = "width:40%"

let right_div = document.createElement("div")
right_div.style = "position:relative;width:50%;height:100%"

div.appendChild(left_div)
div.appendChild(right_div)

let names = ["a","b","c","d","e"]
let answers = ["agree","somewhat agree", "neutral", "somewhat disagree","disagree"]
let questions = [
    "Do you agree with Israel?",
    "Do you think Israel's response is proportionate?",
    "Would you consider yourself more pro Israel?",
    "Would you say Destiny won the Lex Fridman debate?"
]

for(let i = 0; i<4;i++){
    let q = document.createElement("div")
    q.style = "border-color:blue;position:relative;width:75%"
    let question = document.createElement("div")
    question.innerHTML = questions[i]
    question.style = "margin:8px"
    q.appendChild(question)
    let cont = document.createElement("div")
    cont.id = "q_" + i
    cont.style = "display:inline-block;width:75%"
    for(let j=0;j<5;j++){
        let select = document.createElement("span")
        select.style = "margin-left:10%;"
        select.innerHTML = `
            <label style="display:inline-block;width:75%;" for="1"> ${answers[j]} </label>
            <input type="radio" id="s_${j}" name="${names[i]}" value=${j} />
            `
        cont.appendChild(select)
        cont.innerHTML += "<br/>"
    }
    q.appendChild(cont)
    q.innerHTML += "<br/>"
    left_div.appendChild(q)
}

function test(img,text){
    let div = right_div
    div.innerHTML = `
        <img src="${img}" style="width:600px;height:600px;position:absolute">
        <span style="position:absolute;z-index:1;color:white;font-size:450%;width:100%">${text}</span>
    `
}

function total(){
    let items = document.getElementsByTagName("input")
    let selected = []
    for(let item of items){
        if(item.checked){
            selected.push(item)
        }
    }
    if(selected.length <4){
        alert("please answer all the questions")
        return
    }
    let total_val = 0
    for(let sel of selected){
        let val = parseInt(sel.value)
        total_val += val
    }

    if(total_val <=3){
        //devil
        test("images/bibi.gif","YOU'RE EVIL")

    }
    else if(total_val <=6){
        //terrible person
        test("images/dest.gif","YOU'RE AWFUL")
    }
    else if(total_val <=9){
        //you're getting there
        test("images/biden.gif","YOU SUCK")
    }
    else{
        //angel
        test("images/norm.gif","YOU OWN!")
    }
}

let button = document.createElement("button")
button.onclick = total
button.innerHTML = "submit"
left_div.appendChild(button)
