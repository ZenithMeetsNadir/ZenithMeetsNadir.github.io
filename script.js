let dotState = 3;

document.querySelectorAll('.three-dots').forEach(s => {
    setInterval(() => {
        dotState = dotState % 3 + 1;
        s.textContent = s.textContent.replace(/\.*$/, '.'.repeat(dotState));
    }, 600);
});

const resourceMap = {
    'cro': '/assets/gallery/ascii/cro.txt',
    'cat': '/assets/gallery/ascii/cat.txt',
};

async function loadAsciiArt(resourceMap) {
    for (const [id, url] of Object.entries(resourceMap)) {
        const text = await fetch(url).then(res => res.text());
        document.getElementById(id).textContent = text;
    }
}

await loadAsciiArt(resourceMap);

const defaultFontSize = parseFloat(getComputedStyle(document.getElementById('cro')).fontSize);

function fitAsciiArt() {
    const cro = document.getElementById('cro');
    const croWidth = cro.getBoundingClientRect().width;
    const parentWidth = cro.parentElement.getBoundingClientRect().width;

    const curFontSize = parseFloat(getComputedStyle(cro).fontSize);

    if (croWidth > parentWidth || curFontSize < defaultFontSize) {
        let newFontSize = curFontSize * (parentWidth / croWidth);
        if (newFontSize > defaultFontSize)
            newFontSize = defaultFontSize;

        document.querySelectorAll('.ascii-art').forEach(el => {
            el.style.fontSize = `${newFontSize}px`;
        });
    }
}

fitAsciiArt();

window.addEventListener('resize', fitAsciiArt);