document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        en: {
            section_hero_summary: "Unity C# developer, Łódź, Poland",
            section_hero_resume: "Resume",

            section_aboutme_title: "About Me",
            section_aboutme_text_hello: "Hi! I'm Marcin Zieliński",
            section_aboutme_text_paragraph_1: "I'm a developer with a passion for game and multimedia software engineering. I particularly enjoy programming tasks that involve developing tools to streamline the application development process, such as extending game engine capabilities.",
            section_aboutme_text_paragraph_2: "Over the years, I’ve built my skills in C# and Unity, working on projects that let me explore creative and technical solutions. I’m always looking for opportunities to learn and become better at what I do.",
            section_aboutme_text_paragraph_3: "In my free time, I enjoy working on personal projects, like a Sudoku-inspired game I’m currently developing. With a working prototype already crafted in Unity, I’m eager to refine and release it when it’s ready.",
        
            section_professional_experience_title: "Professional Experience",
            section_professional_experience_vescom_position: "Software Developer",
            section_professional_experience_vescom_ruvre_title: "RUVRE - solution for real-time architecture visualization using Unity",
            
            section_professional_experience_vescom_kidsvr_title: "KIDS VR",
            section_professional_experience_vescom_other_title: "Other projects",
            
            section_professional_experience_teyon_position: "Programmer (Professional practice)",
            section_professional_experience_teyon_partyplanet_title: "30 in 1 Game Collection vol. 1 - Nintendo Switch port",
            
            month_january: "January",
            month_february: "February",
            month_march: "March",
            month_april: "April",
            month_may: "May",
            month_june: "June",
            month_july: "July",
            month_august: "August",
            month_september: "September",
            month_october: "October",
            month_november: "November",
            month_december: "December",
            time_present: "present",
        },
        pl: {
            section_hero_summary: "Unity C# developer, Łódź, Polska",
            section_hero_resume: "CV",

            section_aboutme_title: "O Mnie",
            section_aboutme_text_hello: "Cześć! Nazywam się Marcin Zieliński",
            section_aboutme_text_paragraph_1: "Jestem programistą, którego pasją jest tworzenie gier i aplikacji multimedialnych. Szczególnie lubię zadania, które wiążą się z tworzeniem narzędzi do uproszczenia procesu rozwijania aplikacji, jak przykładowo roszerzanie możliwość silnika gier.",
            section_aboutme_text_paragraph_2: "Przez lata rozbudowywałem swoje umiejętności związane z C# i Unity, pracując przy projektach pozwalających mi na badanie technicznych jak i kreatywnych rozwiązań. Zawsze szukam możliwości do nauki i do stania się lepszym w tym co robię.",
            section_aboutme_text_paragraph_3: "W swoim wolnym czasie lubię pracować nad osobistymi projektami takimi jak gra zainspirowana Sudoku, którą aktualnie rozwijam. Z działającym prototypem stworzonym w Unity, chcę go dalej poprawiać i wydać, kiedy zostanie dokończony.",
        
            section_professional_experience_title: "Doświadczenie Zawodowe",
            section_professional_experience_vescom_position: "Software Developer",
            section_professional_experience_vescom_ruvre_title: "RUVRE - rozwiązanie do wizualizacji architektury w czasie rzeczywistym w Unity",
            
            section_professional_experience_vescom_kidsvr_title: "KIDS VR",
            section_professional_experience_vescom_other_title: "Inne projekty",

            section_professional_experience_teyon_position: "Programista (Praktyka zawodowa)",
            section_professional_experience_teyon_partyplanet_title: "30 in 1 Game Collection vol. 1 - port na Nintendo Switch",

            month_january: "Styczeń",
            month_february: "Luty",
            month_march: "Marzec",
            month_april: "Kwiecień",
            month_may: "Maj",
            month_june: "Czerwiec",
            month_july: "Lipiec",
            month_august: "Sierpień",
            month_september: "Wrzesień",
            month_october: "Październik",
            month_november: "Listopad",
            month_december: "Grudzień",
            time_present: "obecnie",
        }
    };
    const flagButtons = document.querySelectorAll('.flag-button');
    if (flagButtons.length > 0) {
        var foundDefaultLang = false;
        flagButtons.forEach(button => {
            const selectedLanguage = button.getAttribute('data-language');
            button.addEventListener('click', function () {
                const translation = translations[selectedLanguage];
                for(var key in translation){
                    if(translation.hasOwnProperty(key)){
                        var elements = document.querySelectorAll('[locKey="'+key+'"]');
                        elements.forEach(function ($el){
                            $el.textContent = translation[key];
                        });
                    }
                }
            });
            if (navigator.language.startsWith(selectedLanguage)) {
                button.click();
                foundDefaultLang = true;
            }
        });
        if (!foundDefaultLang) {
            flagButtons[0].click();
        }
    }
});