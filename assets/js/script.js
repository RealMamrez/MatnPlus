const tagList = ["فال حافظ", "تولد دوست", "تولد معشوق", "روز مادر", "روز پدر", "روز دختر", "روز عشق", "تبریک نوروز", "دلنوشته", "غمگین", "عاشقانه", "شعر"];

const tagListDoc = document.querySelector(".tag-list");
const showTextDoc = document.querySelector(".show-text");

tagList.forEach(element => {
    const p = document.createElement('p');
    p.className = 'tag';
    p.textContent = element;
    p.addEventListener('click', () => {
        handleClick(element, p);
    });
    tagListDoc.appendChild(p);
});

function handleClick(tag, p) {
    switch(tag) {
        case "فال حافظ":
          textList = faal
          break;
        case "تولد دوست":
          textList = hbfri
          break;
        case "تولد معشوق":
          textList = hblove
          break;
        case "روز مادر":
          textList = mday
          break;
        case "روز دختر":
          textList = sday
          break;
        case "روز پدر":
          textList = fday
          break;
        case "روز عشق":
          textList = lday
          break;
        case "تبریک نوروز":
          textList = nday
          break;
        case "دلنوشته":
          textList = dtext
          break;
        case "غمگین":
          textList = stext
          break;
        case "عاشقانه":
          textList = ltext
          break;
        case "شعر":
          textList = sher
          break;
      }
    const ranIndex = Math.floor(Math.random() * (textList.length));
    showTextDoc.innerHTML = `
        <hr>
        <p>متن شما مربوط به <span class="class-color-01">"${tag}"</span> اینجاست</p>
        <p>${textList[ranIndex]}</p>
    `
    Array.from(tagListDoc.children).forEach(child => {
        child.classList.remove('clicked');
    });
    p.classList.add("clicked");
}
