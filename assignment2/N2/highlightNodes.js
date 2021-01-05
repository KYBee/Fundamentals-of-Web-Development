function getElement(rootNode) {

	if (rootNode.length < 1){
		elementList.push(rootNode.children);
	} else {
		for (var i = 0; i < rootNode.length; i++){
			if (rootNode[i].children.length < 1) {
				elementList.push(rootNode[i].tagName);
			} else {
				elementList.push(rootNode[i].tagName);
				getElement(rootNode[i].children);
			}
		}
	}
};

var elementList = [];
var tempSpanNode;
var targetNode;

window.addEventListener('load', function(){

	getElement(document.body.children);

	elementList = elementList.reduce(function(a, b){
		if(a.indexOf(b)<0)
			a.push(b);
		return a;
	}, []);

	for (var name of elementList){

		targetNode = document.getElementsByTagName(name);

		for (var singleNode of targetNode){
			tempSpanNode = document.createElement("span");
			singleNode.appendChild(tempSpanNode);
			singleNode.lastChild.innerHTML=name;
			singleNode.lastChild.setAttribute("class", "hoverNode");
		}
	}

	document.querySelectorAll('.hoverNode').forEach(item => {
		item.addEventListener('click', event => {
			alert("ID : "+ item.id +"\ninnerHTML : " +  item.innerHTML);
		});
	});
});

