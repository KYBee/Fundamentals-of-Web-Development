var thumbNails = document.querySelectorAll(".artThumb");

for (var i = 0; i < thumbNails.length; i++) {

    thumbNails[i].addEventListener("mouseover", function() {

        var tempSpanNode = document.createElement("img");

        var oldPath = this.src;
        var pathList = oldPath.split("/");
        var newPath = pathList.pop();
        pathList[pathList.length - 1] = newPath;

        tempSpanNode.src = pathList.join("/");
        tempSpanNode.style.border = "solid 1px black;";
        tempSpanNode.setAttribute("class", "bigImg");
        this.parentNode.appendChild(tempSpanNode);

        console.log(oldPath);
    });


    thumbNails[i].addEventListener("mouseout", function() {
        var bigImgs = document.querySelectorAll(".bigImg");

        for (var i = 0; i < bigImgs.length; i++) {
            var target = bigImgs[i].parentNode.lastChild;
            target.style.visibility = "hidden";
            target.parentNode.removeChild(target);
        }
    });

}

console.log(thumbNails);