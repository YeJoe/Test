const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const xObject = JSON.parse(localStorage.getItem("site"));
let $logo;
const hashMap = xObject || [
  {
    logo:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3335851201,737797255&fm=26&gp=0.jpg",
    logoType: "image",
    url: "https://www.bilibili.com"
  },
  { logo: "Miku", logoType: "text", url: "https://tools.miku.ac/" },
  { logo: "导航", logoType: "text", url: "https://www.moe123.net/sites"}
];
const concatenate = url => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};
const render = () => {
  $siteList.find("li:not(.last)").remove();

  hashMap.forEach((node, index, arr) => {
    if (node.logoType === "text") {
      $logo = node.logo;
    } else if (node.logoType === "image") {
      $logo = `<img src="${node.logo}" alt=""></img>`;
    }
    const $li = $(`<li>
            <div class="site">
              <div class="logo">${$logo}</div>
              <div class="link">${concatenate(node.url)}</div>
              <div class="close">
                <svg class="icon">
                  <use xlink:href="#i-close"></use>
                </svg>
              </div>
            </div>
    </li>`).insertBefore($lastLi);
    $li.on("click", () => {
      window.open(node.url);
    });
    $li.on("click", ".close", e => {
      e.stopPropagation();
      arr.splice(index, 1)
      render()
    });
    
  });
};

render();

$(".addButton").on("click", () => {
  //let name = window.prompt("请输入网址名称");
  let url = window.prompt("请输入网址，例如（www.baidu.com）");

  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
 
  hashMap.push({
    logo: concatenate(url)[0].toUpperCase(),
    logoType: "text",
    url: url,
   
  });
  render();
});

$(".close").on("click", e => {});

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  localStorage.setItem("site", string);
  document.querySelector('.searchForm input').value = ''
};

$(document).on("keypress", e => {
  for (let index = 0; index < hashMap.length; index++) {
    if(e.key.toUpperCase() === hashMap[index].logo.toUpperCase()){
      window.open(hashMap[index].url)
    }
  }
});
