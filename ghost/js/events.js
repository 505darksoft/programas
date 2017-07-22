//onscroll event
window.addEventListener('scroll', function () {
    var off = getScrollOffsets();
    if (parseInt(off.y) > 100) {
        document.getElementById('toptagleft').style.display = 'inline';
        document.getElementById('toptagright').style.textAlign = 'left';
    } else {
        document.getElementById('toptagleft').style.display = 'none';
        document.getElementById('toptagright').style.textAlign = 'center';
        document.getElementById('toptagright').style.float = 'inherit';
    }
}, true)
//##############

