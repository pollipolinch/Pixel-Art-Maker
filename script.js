

function makeGrid() {
    let height = document.querySelector('#inputHeight').value
    let width = document.querySelector('#inputWidth').value
    let table = document.querySelector('#pixelCanvas')
    html = ''

    for (let i = 0; i < height; i++) {
        html += '<tr>'
        for (let k = 0; k < width; k++) {
            html += " <td onclick = 'style.backgroundColor = getColor()'></td>"
        }
        html += '</tr>'
    }
    table.innerHTML = html
    return false
}
function getColor() {
        let color = document.querySelector('#colorPicker').value
        return color
}


