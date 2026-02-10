const lessonLoad = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => lessonDisplay(data.data))
}
lessonLoad()

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn")
    // console.log(lessonButtons);
    lessonButtons.forEach(btn => btn.classList.remove("active"));
    
}

const loaDLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then(data => {
            removeActive()
            const clickBtn = document.getElementById(`lesson-btn-${id}`)
            // console.log(clickBtn);
            clickBtn.classList.add("active");
            
            displayLevelWord(data.data)
        })
}

const displayLevelWord = (words) => {
    // console.log(words);
    const wordContainer = document.getElementById("wordContainer")
    wordContainer.innerHTML = ""

    if (words.length === 0) {
        wordContainer.innerHTML = `
        <div class="space-y-5 text-center col-span-full py-6 md:py-12">
        <img class="mx-auto" src="../assets/alert-error.png" alt="" />
                    <p class="text-base text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                    <h2 class="text-3xl font-semibold">নেক্সট Lesson এ যান</h2>
        </div>
        `
    }

    // {id: 1, level: 3, word: 'Abundant', meaning: null, pronunciation: 'অবানডান্ট'}
    words.forEach(word => {
        const wordCard = document.createElement("div")
        wordCard.innerHTML = `
        <div class="p-9 bg-white rounded-lg space-y-5 text-center">
                    <h3 class="text-2xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h3>
                    <p class="text-xl ">Meaning /Pronounciation</p>
                    <h3 class="text-xl font-medium">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}"</h3>
                    <div class="flex justify-between">
                        <span class="p-4 bg-sky-100 rounded-md"><i class="fa-solid fa-circle-info"></i></span> <span class="p-4 bg-sky-100 rounded-md"><i class="fa-solid fa-volume-high"></i></span>
                    </div>
                </div>
        `
        wordContainer.appendChild(wordCard)
    });

}


const lessonDisplay = (lessons) => {
    const lessonContainer = document.getElementById("lessonContainer")
    lessonContainer.innerHTML = ""

    // console.log(lessons);
    for (const lesson of lessons) {
        // console.log(lesson);

        const btnDiv = document.createElement("div")

        btnDiv.innerHTML = `<button href="" id="lesson-btn-${lesson.level_no}" onclick= "loaDLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><span><i class="fa-solid fa-book-open"></i></span> Lesson - ${lesson.level_no}</button>`
        lessonContainer.appendChild(btnDiv)
    }


}
