    const interval = setInterval(() => {


        const header = document.querySelector("._1QUKR");
        if (header) {
            clearInterval(interval)

            const div = document.createElement("div")

            div.classList.add("audioListOption")

            const li = "<li class='speed1'>1x</li>" + "<li class='speed15'>1.5x</li>" + "<li class='speed2'>2x</li>";
            const ul = "<ul class='listSpeedOptions'>" + li + "</ul>"
            const text = "<h3 class='choosespeed'>Choose Speed</h3>" + ul
            div.innerHTML = text;
            const interval2 = setInterval(() => {
                const button = document.querySelector(".choosespeed");
                const list = document.querySelector(".listSpeedOptions");
                if (button) {
                    clearInterval(interval2)

                    button.addEventListener("click", () => {
                        if (list.style.display === "none") {
                            list.style.display = "block";
                        } else {
                            list.style.display = "none";
                        }
                    })
                    const speed1 = document.querySelector(".speed1");
                    const speed15 = document.querySelector(".speed15");
                    const speed2 = document.querySelector(".speed2");
                    speed1.addEventListener("click", () => {
                        const audios = document.querySelectorAll("audio");
                        audios.forEach((audio) =>{
                            audio.playbackRate = 1;
                        })
                    })
                    speed15.addEventListener("click", () => {
                        const audios = document.querySelectorAll("audio");
                        audios.forEach((audio) =>{
                            audio.playbackRate = 1.5;
                        })
                    })
                    speed2.addEventListener("click", () => {
                        const audios = document.querySelectorAll("audio");
                        audios.forEach((audio) =>{
                            audio.playbackRate = 2;
                        })
                    })
                }
            }, 500)

            header.appendChild(div)

        }

    }, 1000)