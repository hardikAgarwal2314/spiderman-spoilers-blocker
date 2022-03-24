const spoilers = [
    'homecoming', 'spiderman', 'nowayhome',
    'tonystark', 'ironman', 'peterparker', "greengoblin", "Tobey",
    "andrewgarfield", "drstrange", "octavious", "greengoblin",
    "BenedictCumberbatch", "spoilers", "tomholland", "Zendaya", "Willem Dafoe"
];

function replace() {
    const tags = document.getElementsByTagName('*');
    for ( let i = 0; i < tags.length; i++) {
        let element = tags[i];
        for ( let j = 0; j < element.childNodes.length; j++) {
            const node = element.childNodes[j];
            if ( node.nodeType === 3 ) {
                let text = node.nodeValue.toString().replace(" ", "");
                text = text.replace("-", "");
                text = text.toLowerCase();
                spoilers.forEach( function( item ) {
                    if (!!text.includes(item) ) {
                        element.style.backgroundColor = 'red';
                        element.style.color = 'red';
                    }
                });
            }
        }
    }
}

replace();
