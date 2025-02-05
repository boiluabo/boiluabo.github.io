function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
}


function imges_calc(){
const a = [
    {id: 1, name: 'Вася'},
{id: 2, name: 'Оля'},
{id: 3, name: 'Петя'},
]

const od = document.querySelector('div')
a.forEach(o => {
    op = document.createElement('p')
    op.textContent = o.name
    od.append(op)
})
}
