document.addEventListener('DOMContentLoaded', function() {
    const date = new Date()
    const year = date.getFullYear()
    let copyright_year_element = document.getElementById("copyright-year")
    copyright_year_element.innerText = year
});