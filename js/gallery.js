const images = [
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>",
    description: "Aerial Beach View",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>",
    description: "Flower Blooms",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>",
    description: "Alpine Mountains",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg>",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg>",
    description: "Nature Landscape",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg>",
    description: "Lighthouse Coast Sea",
  },
];

// selecting the 'ul' and applying the necessary syles
const gallery = document.querySelector(".gallery");
gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "20px";
gallery.style.maxWidth = "1128px";

// looping for each image
for (let i = 0; i < images.length; i++) {
  // 'img' element created and styles applied
  const img = document.createElement("img");
  img.src = images[i].preview.substring(1, images[i].preview.length - 1);
  img.bigsrc = images[i].original.substring(1, images[i].original.length - 1);
  img.alt = images[i].description;
  img.width = 360;
  img.height = 200;

  // adding event listener to the 'img' to make the size bigger // 376 / 360 = 1.04
  img.addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(1.04)";
  });
  //  adding event listener to the 'img' to remove the changes of the size
  img.addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1)"; // Reset scale
  });
  // creating the 'a' tag
  const a = document.createElement("a");
  // adding href to 'a' tag
  a.href = images[i].original.substring(1, images[i].original.length - 1);

  // adding 'img' to 'a' element.
  a.append(img);
  // creating the 'li' element
  const li = document.createElement("li");
  // adding 'img' inside the 'a' element as child element
  li.appendChild(a);
  // adding 'li' inside the 'ul' as child element
  gallery.appendChild(li);
}

gallery.addEventListener("click", imageClick);
function imageClick(event) {
  event.preventDefault();
  const imageData = event.target;
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imageData.bigsrc}">`
  );
  if (imageData.tagName === "IMG") {
    instance.show(
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          instance.close();
        }
      })
    );
  }
}
