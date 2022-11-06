function addItem() {
    let newItemText = document.getElementById('newItemText').value
    let newItemValue = document.getElementById('newItemValue').value
    let menu = document.getElementById('menu')

    let option = document.createElement('option')
    option.textContent = newItemText
    option.value = newItemValue

    menu.add(option)

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
}