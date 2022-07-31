function extractFile(data){
    let locationArray = data.split('\\')
    let file = locationArray.pop()
    let fileArray = file.split('.')
    let fileExtention = fileArray.pop()
    let fileName = fileArray.join('.')
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtention}`)
}
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx')