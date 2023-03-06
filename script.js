

var home = `<div class="cntr w-400p h-400p bc-white br-5p p-5p bsbb ovh" id="content-holder">
<div class="contents w-100 h-a p-20p bsbb">
    <span class="capitalize fs-40p p-5p bsbb">
        send your emails frequently and easily
    </span>
</div>
<div class="get-started h-30 w-100 center p-10p bsbb">
    <span class="p-5p ">
        <button type="button " class="button get-started p-10p fs-17p w-160p capitalize bc-theme br-20p">
        get started
        </button>
    </span>
</div>
</div> `;
var  addBm = `<div class="cntr w-400p h-a mt-10p bc-white br-5p p-10p bsbb ovh" id="content-holder">
<div class="title w-100 h-70p p-5p m-10p bsbb">
<span class="fs-18p capitalize bl-2-s-theme p-10p bsbb">send a mail</span>
</div>
<div class="main-content w-100 h-a p-5p bsbb">
<div class="form-hol w-100 h-a bsbb p-5p">
    <form id="form">
        <div class="w-100 h-a p-10p bsbb input p-r">
        <div class="w-90 h-100 ">
        <div class="fs-15p verdana dgray placeholder">Add receipients...</div>
        </div>
           
           <span class="p-a w-30p h-30p right add-butt center t-0 r-0 hover">+</span>
        </div>
        <div class="w-100 h-60p p-5p bsbb ">
            <input type="text" name="title" class="input p-10p w-100 bsbb" placeholder="Mail title" required>
        </div>
        <div class="w-100 h-60p p-5p bsbb ">
            <textarea placeholder="Mail body" class="w-100 h-70p input p-5p bsbb" required></textarea>
        </div>
        <div class="w-100 h-60p p-5p bsbb mt-40p">
            <button class="button bc-theme p-10p w-60p br-2p capitalize right">send</button>
        </div>
    </form>
</div>
</div>
</div>`;
var viewBm = `<div class="w-600p h-400p cntr bc-white br-5p" id="content-holder">
<div class="title w-100 h-70p p-10p m-10p bsbb">
<span class="fs-18p capitalize bl-2-s-theme p-10p bsbb">view sent mails</span>
<span class="fs-12p gray capitalize p-10p bsbb">(grouping by sending info)</span>
</div>
<div class="contents w-100 h-70 bsbb p-10p ovys p-r">
<div class=" w-100 h-50 cntr br-2p b-1-s-g bl-2-s-theme ovh bsbb center">
    <div class="w-100 h-60p bsbb p-10p">
        <div class="cat-title p-5p  iblock h-100 bsbb ">
            <span class="fs-15p capitalize center h-100">there are no sent mails for now</span>
        </div>
    </div>
</div>

</div>
</div>`;
var previewBm = `<div class="w-400p h-300p cntr bc-white br-5p" id="content-holder">
<div class="title w-100 h-50p p-10p m-10p bsbb">
<span class="fs-18p capitalize bl-2-s-theme p-10p bsbb">mail preview</span>
<span class="fs-12p theme  capitalize p-10p bsbb hover right mt--5p mr-10p">back</span>
</div>
<div class="w-100 h-150p bsbb p-10p">
<table class="w-100 h-200p">
    <tr>
        <td class="w-100p">
            <div class="w-100 h-100 p-10p bsbb">
                <span class="fs-16p capitalize">title:</span>
            </div>
        </td>
        <td>
            <div class="w-100 h-100 bsbb p-10p">
                <span class="fs-15p theme capitalize"></span>
            </div>
        </td>
    </tr>
    <tr>
        <td class="w-100p">
            <div class="w-100 h-100 p-10p bsbb">
                <span class="fs-16p capitalize">subject:</span>
            </div>
        </td>
        <td>
            <span class="fs-12p theme right"></span>
        </td>
    </tr>
    <tr class="h-70p">
        <td class="w-100p">
            <div class="w-100 h-70p p-10p bsbb">
                <span class="fs-16p capitalize">receipients:</span>
            </div>
        </td>
        <td>
            <div class="w-100 h-70p ovys bsbb p-10p">
                <span class="fs-15p theme capitalize"></span>
            </div>
        </td>
    </tr>
</table>
</div>
</div>`;
const pages = {home: home, addBookMark: addBm, viewBookMark: viewBm,preview: previewBm};
var container = document.getElementById('container');
var navigations = Array.from(document.querySelectorAll('span.navs'));
navigations.forEach(nvs=>{
nvs.addEventListener("click",re=>{
navigations.forEach(ddd=>{
    ddd.classList.remove("theme");
})
nvs.classList.add("theme");
re.preventDefault();
if (nvs.id == "home") {
    showpage('home');
}else if (nvs.id == "addBookmark") {
    showpage('addBookMark');
}else if (nvs.id == "viewBookmarks") {
    showpage('viewBookMark');
}
})
})
hmFunc();
var mails = JSON.parse(localStorage.getItem("mails"));
var token = JSON.parse(localStorage.getItem("mails"));

if (mails == null) {
mails = [];
}
function hmFunc() {
var get_started = document.querySelector("button.get-started");
get_started.onclick = function (e) {
e.preventDefault();
showpage('addBookMark');
}
}
function showpage(page) {
var target;
switch(page){
case 'home':
    target = pages.home;
    container.innerHTML = target;
    hmFunc();
break;
case 'addBookMark':
    target = pages.addBookMark;
    container.innerHTML = target;
    addBmFunc(container.childNodes[0]);
break;
case 'viewBookMark':
    target = pages.viewBookMark;
    container.innerHTML = target;
    viewBmFunc(container.childNodes[0]);

break;
case 'preview':
    target = pages.preview;
    container.innerHTML = target;
break;
default:
    target = null;
    container.innerHTML = target;

}
function viewBmFunc(div){
    if (mails.length > 0) {
        div.childNodes[3].innerHTML = "";
    }
    mails.forEach(mail=>{
        div.childNodes[3].innerHTML += `<div class=" w-100 h-60p tr-3 br-2p b-1-s-g bl-2-s-theme ovh bsbb mt-10p category" id="${mails.indexOf(mail)}">
        <div class="w-100 h-60p bsbb p-10p">
            <div class="cat-title p-5p  iblock h-100 bsbb ">
                <span class="fs-15p capitalize center h-100">${mail.title} (${mail.receipients.length})</span>
            </div>
            <div class=" p-5p  iblock right h-100 bsbb">
                <span class="fs-13p capitalize theme center h-100 expand hover">expand</span>
            </div>
        </div>
        <div class="w-100 h-a p-5p bsbb" id="books"></div>
    </div>`; 
    })
   

var category = Array.from(document.querySelectorAll('div.category'));
category.forEach(c=>{
                c.childNodes[3].innerHTML+=`<div class="w-100 h-60p p-5p bsbb"><span class="fs-14p theme w-a h-100 p-10p bsbb"><font class="fs-14p theme w-100 h-100 hover title" title="click to preview" id="${c.id}">view</font></span></div>`
})
var titles = Array.from(document.querySelectorAll('font.title'));
titles.forEach(ttl=>{
    ttl.addEventListener("click",f=>{
        f.preventDefault();
        showpage("preview");
        previewBm(container.childNodes[0],ttl.id);
    })
})
var expand = Array.from(document.querySelectorAll('span.expand'));
expand.forEach(exp=>{
    exp.addEventListener('click', e=>{
        e.preventDefault();
        if (exp.parentNode.parentNode.parentNode.classList.contains("h-60p")) {
                exp.parentNode.parentNode.parentNode.classList.remove('h-60p');
                exp.innerText = "collapse";
        }else{
                exp.parentNode.parentNode.parentNode.classList.add('h-60p');
                exp.innerText = "expand";
        }
    })
})

}
function previewBm(div,id) {
var back = div.childNodes[1].childNodes[3];
var title = div.childNodes[3].childNodes[1].childNodes[1].childNodes[0].childNodes[3];
var subject = div.childNodes[3].childNodes[1].childNodes[1].childNodes[2].childNodes[3];
var receipients = div.childNodes[3].childNodes[1].childNodes[1].childNodes[4].childNodes[3];

back.addEventListener("click",e=>{
    e.preventDefault();
    showpage("viewBookMark");
})
title.innerHTML = `<div class="w-100 h-100 p-5p bsbb"><span class="capitalize fs-14p">${mails[id].title}</span></div>`;
subject.innerHTML = `<div class="w-250p ovxs h-100 p-5p bsbb"><span class="capitalize fs-14p ">${mails[id].subject}</span></div>`;
receipients.innerHTML = `<div class="w-100 h-70p ovys p-5p bsbb"></div>`;
leul = document.createElement('ul')
receipients.childNodes[0].appendChild(leul)
leul.classList.add('ls-none')
leul.classList.add('p-0')
leul.classList.add('m-0')

mails[id].receipients.forEach(email=>{

    leli = document.createElement('li')
    leli.classList.add('p-10p')
    leli.innerHTML += `<span class=" fs-14p theme ">${email}</span>`
    leul.appendChild(leli)
})
}
function addBmFunc(div) {
title = div.childNodes[1].childNodes[1];
form = div.childNodes[3].childNodes[1].childNodes[1];
addrecbutt = form.childNodes[1].childNodes[3];
addrecbutt.addEventListener('click',e=>{
    e.preventDefault();
    addrecbox(addrecbutt);
})
function addrecbox(butt) {
    leparent = butt.parentNode;
    reccont = leparent.childNodes[1];
    if (leparent.childNodes[5]) {
        leparent.removeChild(leparent.childNodes[5]);
    }else{     
        thediv = document.createElement('div');
        thediv.className = "w-250p h-250p bc-white b-1-s-g p-a r-0 usrsbox"
        userscont = leparent.appendChild(thediv);
        thediv.innerHTML = `<div class="w-100 h-100">
            <div class="w-100 h-40p center p-r">
                    <input type="text" class="w-70 input h-100 p-5p" placeholder="enter email.." required>
                    <button type="button" class="p-a w-20p h-25p p-5p bsbb r-0 m-5p center addrec">+</button>
            </div>
        </div>`
    }
    lebutt = thediv.childNodes[0].childNodes[1].childNodes[3]
    lebutt.addEventListener('click',e=>{
        e.preventDefault();
        leinput = thediv.childNodes[0].childNodes[1].childNodes[1].value.trim();
        if (leinput.length > 0) {
            addchip(leinput,leparent);
        }
    })
}
let leremove = []
function addchip(leinput,leparent) {
    lechip = document.createElement('div');
    lediv  = leparent.childNodes[1].querySelector('div.placeholder');
    if (lediv) {
        leparent.childNodes[1].removeChild(lediv)
    }
    lechip.className = 'w-a h-20p b-1-s-gray br-2p p-5p m-5p fs-13p iblock chip';
    leremove = document.createElement('div');
    leremove.className = "w-20p h-20p p-r right bc-white remove mb-5p ml-5p  b-1-s-gray center br-50 hover"
    leremove.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"></line></g><g><line fill="none" stroke="#000" stroke-width="1" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"></line></g></svg>`
    lechip.innerText = leinput
    lechip.id = leinput
    lechip.appendChild(leremove)
    leparent.childNodes[1].appendChild(lechip)
    leremove = Array.from(document.querySelectorAll('div.remove'));
    leremove.forEach( remove=>{
        remove.addEventListener('click',e=>{
            e.preventDefault();
            try {
            leremove[leremove.indexOf(remove)].parentNode.parentNode.removeChild(leremove[leremove.indexOf(remove)].parentNode)
            if(leparent.childNodes[1].innerHTML.trim() == ""){
                leparent.childNodes[1].innerHTML = `<div class="fs-15p verdana dgray placeholder">Add receipients...</div>`
            }
            } catch (error) {
                
            }
            
        })
    })
}

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let chips = Array.from(form.childNodes[1].childNodes[1].querySelectorAll('div.chip'));
    if (chips.length == 0) {
        title.classList.remove("bl-2-s-theme");
        title.classList.add("bl-2-s-red");
        title.innerText = "select receipients";
        setTimeout(function() {title.innerText = "send a mail";title.classList.add("bl-2-s-theme");
        title.classList.remove("bl-2-s-red");}, 2000);
    }else{
        emails = [];
        chips.forEach(eml=>{
            emails.push(eml.id)
        })
        let maildata = {title: form.childNodes[3].childNodes[1].value.trim(), subject: form.childNodes[5].childNodes[1].value.trim()}
        Object.assign(maildata,{receipients : emails})
        v = await fetch("http://localhost:8080/api/sendmails",{
            mode: 'cors',
            method: "POST",
            body: JSON.stringify({from : 'hesh.teo@gmail.com', emails: emails, message: {subject: form.childNodes[3].childNodes[1].value.trim(),body: form.childNodes[5].childNodes[1].value.trim()}}),
            headers: {
                "content-type": "application/json",
                'accept': '*/*'

            }
        })
        r = await v.json();
        console.log(v)
        mails.push(maildata);

        localStorage.setItem("mails", JSON.stringify(mails));
        form.childNodes[1].childNodes[1].innerHTML = `<div class="fs-15p verdana dgray placeholder">Add receipients...</div>`;
        form.reset();
        title.classList.remove("bl-2-s-theme");
        title.classList.add("bl-2-s-green");
        title.innerText = "mail sent !";
        setTimeout(function() {title.innerText = "send a mail";title.classList.add("bl-2-s-theme");
        title.classList.remove("bl-2-s-green");}, 2000);
    }
    
    // var bookmarkdata = {title: form.childNodes[1].childNodes[1].value.trim(),link: form.childNodes[3].childNodes[1].value.trim(), category: form.childNodes[5].childNodes[1].value.trim(),description: form.childNodes[7].childNodes[1].value.trim()};
    //     bookmarks.push(bookmarkdata);
    //     
    //     var found = 0;
    //     categories.forEach(cats=>{
    //         if (cats.name == form.childNodes[5].childNodes[1].value.trim()) {
    //             found+=1;
    //             cats.length += 1;
    //         }
    //     });
    //     if (found == 0) {
    //         categories.push({name: form.childNodes[5].childNodes[1].value.trim(),length: 1});
    //     }
    //     sessionStorage.setItem("categories", JSON.stringify(categories));
    //     form.reset();
    //     title.classList.remove("bl-2-s-theme");
    //     title.classList.add("bl-2-s-green");
    //     title.innerText = "bookmark added";
    //     setTimeout(function() {title.innerText = "add bookmark";title.classList.add("bl-2-s-theme");
    //     title.classList.remove("bl-2-s-green");}, 2000);
});


}
}
