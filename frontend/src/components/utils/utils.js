export const FormatDate = (date) => {
    let formatDate = date.split('T')[0].split("-")
    return `${formatDate[0]}/${formatDate[1]}/${formatDate[2]}`
}