/*
    scrollduration.js v1.0.1
    (c) Tobias Roeder
    tobiasroeder.github.io/scrolldurationjs/license
*/

function scrollDuration({
    barColor = '#00bfff',
    barHeight = '4px'
}) {
    // variables
    let clientRect = document.body.getBoundingClientRect();

    // create all relevant elements
    if (document.querySelector('div[data-sd="progress"]') == null) {
        let sd_theme = document.createElement('style');
        sd_theme.setAttribute('type', 'text/css');
        sd_theme.innerHTML = `div[data-sd="wrapper"] { position: fixed; top: 0; left: 0; right: 0; height: ${barHeight}; } div[data-sd="progress"] { background-color: ${barColor}; height: 100%; width: 0%; }`;
        document.head.appendChild(sd_theme);

        let sd_wrapper = document.createElement('div');
        sd_wrapper.setAttribute('data-sd', 'wrapper');
        sd_wrapper.innerHTML = '<div data-sd="progress"></div>';
        document.body.appendChild(sd_wrapper);
    }

    // display result
    document.querySelector('div[data-sd="progress"]').style.width = ((-(clientRect.top) * 100) / (clientRect.height - window.innerHeight)) + '%';
}
