

const table=document.getElementById('table')

function getPost() {
for(let i=0;i<100;i++){
    const td=document.createElement('td')
    const td2=document.createElement('td')
    const td3=document.createElement('td')
    const td4=document.createElement('td')
    const tr=document.createElement('tr')
    let post=  fetch('http://jsonplaceholder.typicode.com/posts', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(res => res.json())
        .then((json =>{
          td.innerText=json[i].userId
           td2.innerText=json[i].id
            td3.innerText=json[i].title
                td4.innerText=json[i].body
                tr.append(td)
                tr.append(td2)
                tr.append(td3)
                tr.append(td4)
        }))
        table.append(tr)
}}

getPost()




