const lessonLoad =() => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => lessonDisplay(data.data))
}
lessonLoad()

const loaDLevelWord = (id) => {
    const  url = `https:// openapi.programming-hero.com/api/level/${id}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}


const lessonDisplay =(lessons) => {
    const lessonContainer = document.getElementById("lessonContainer")
    lessonContainer.innerHTML =""

    // console.log(lessons);
    for(const lesson of lessons){
        // console.log(lesson);

        const btnDiv = document.createElement("div")

        btnDiv.innerHTML = `<button href="" onclick= "loaDLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><span><i class="fa-solid fa-book-open"></i></span> Lesson - ${lesson.level_no}</button>`
        lessonContainer.appendChild(btnDiv)
    }
    

}
