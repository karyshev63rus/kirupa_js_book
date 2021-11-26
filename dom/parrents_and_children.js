let bodyElement = document.querySelector('body');

if (bodyElement.firstChild) {
    console.log('body has first child');
}

let bodyElem = document.body;
for (i = 0; i < bodyElem.children.length; i++) {
    let childElem = bodyElem.children[i];
    document.writeln(childElem.tagName);
}

// рекурсивная функция для прохождения по всем узлам dom-дерева в пределах body
function theDOMElementWalker(node) {
    if (node.nodeType=Node.ELEMENT_NODE) {
            console.log(node.tagName);
            node = node.firstChild;
            while (node) {
                theDOMElementWalker(node);
                node = node.nextSibling;    
        }
    }
}

let bodyWalker = document.querySelector('body');
console.log(theDOMElementWalker(bodyWalker));