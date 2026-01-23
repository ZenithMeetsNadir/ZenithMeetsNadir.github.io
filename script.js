let dotState = 3;

document.querySelectorAll('p').forEach(p => {
    if (p.textContent.endsWith('...')) {
        setInterval(() => {
            dotState = dotState % 3 + 1;
            p.textContent = p.textContent.replace(/\.*$/, '.'.repeat(dotState));
        }, 600);
    }
});