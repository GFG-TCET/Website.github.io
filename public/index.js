window.onload = function () {

    const target = document.getElementById("tooltip-button");
    const tooltip = document.getElementById("tooltip-text");

    target.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    }, false);

    target.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    }, false);

}
