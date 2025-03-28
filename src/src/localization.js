document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        en: {
            s_hero_summary: "Unity C# developer, Łódź, Poland",
            s_hero_resume: "Resume",

            s_aboutme_title: "About Me",
            s_aboutme_text_hello: "Hi! I'm Marcin Zieliński",
            s_aboutme_text_p_1: "I'm a developer with a passion for game and multimedia software engineering. I particularly enjoy programming tasks that involve developing tools to streamline the application development process, such as extending game engine capabilities.",
            s_aboutme_text_p_2: "Over the years, I’ve built my skills in C# and Unity, working on projects that let me explore creative and technical solutions. I’m always looking for opportunities to learn and become better at what I do.",
            s_aboutme_text_p_3: "In my free time, I enjoy working on personal projects, like a Sudoku-inspired game I’m currently developing. With a working prototype already crafted in Unity, I’m eager to refine and release it when it’s ready.",
        
            s_prof_exp_title: "Professional Experience",
            s_prof_exp_vescom_position: "Software Developer",
            s_prof_exp_vescom_ruvre_title: "RUVRE - solution for real-time architecture visualization using Unity",
            s_prof_exp_vescom_ruvre_p_1: "My primary responsibility was developing a project called RUVRE, designed to provide real-time visualization of architectural changes for the client.",
            s_prof_exp_vescom_ruvre_p_2: "The project consisted of:",
            s_prof_exp_vescom_ruvre_p_2_1: 'a plugin for an existing <span class="tooltip">BIM<span class="tooltiptext"><a href="https://en.wikipedia.org/wiki/Building_Information_Modeling" target="_blank">Building Information Modeling</a></span></span> software,',
            s_prof_exp_vescom_ruvre_p_2_2: "an ASP .NET Core web service used for database management,",
            s_prof_exp_vescom_ruvre_p_2_3: "a multiplatform client application created in Unity that should be compatible with Android, Windows, VR headsets (both desktop and standalone) and that features AR mode,",
            s_prof_exp_vescom_ruvre_p_2_4: "shared class library used by all of the above.",
            s_prof_exp_vescom_ruvre_p_3: "Project allowed to convert existing software data to our format using the plugin and upload them to the server using the developed web service.",
            s_prof_exp_vescom_ruvre_p_4: "The client Unity application displayed uploaded projects and allowed a user to import and modify project’s contents.",
            s_prof_exp_vescom_ruvre_p_5: "I was responsible for writing most of the code of the Unity client, BIM software plugin and RUVRE class library but I’ve also helped with the web service. During the development I wrote a custom shader that was meant to support most BIM material properties. It allowed for example to display cross sections defined by the user. One of the more recent features that I’ve implemented was AR mode that let’s user position architectural model in the real-world’s space. The other feature I’ve coded that is worth noting was a custom lightmapper that processed uploaded projects on the server side without using Unity client and generated lightmaps for them.",
            s_prof_exp_vescom_ruvre_btn_text: "More about RUVRE",
            
            s_prof_exp_vescom_kidsvr_title: "KIDS VR",
            s_prof_exp_vescom_kidsvr_p_1: "A VR application for children to help them deal with pain and fear during venepuncture procedure.",
            s_prof_exp_vescom_kidsvr_p_2: "The application consisted of playful animation shown in front of the patient with a small dose of interaction to keep them focused.",
            s_prof_exp_vescom_kidsvr_p_3: "My tasks included:",
            s_prof_exp_vescom_kidsvr_p_3_1: "developing a Google Cardboard prototype and then an actual VR application,",
            s_prof_exp_vescom_kidsvr_p_3_2: "creating animation based on provided screenplay and assets,",
            s_prof_exp_vescom_kidsvr_p_3_3: "optimizing application (e.g. reducing scene triangle count by swapping meshes with their impostors).",
            s_prof_exp_vescom_kidsvr_p_4: "The project was developed for the KIDS Foundation.",
            s_prof_exp_vescom_kidsvr_more_btn_text: "More about the project",
            s_prof_exp_vescom_kidsvr_article_btn_text: "Related article",

            s_prof_exp_vescom_other_title: "Other projects",
            s_prof_exp_vescom_other_p_1: "Other projects I was involved in during my work in Vescom:",
            s_prof_exp_vescom_other_p_1_1: "creating a VR application as an interactive display for the client’s hardware products. The application provides 3DOF experience. It allows to select products from the shelf and show information about them,",
            s_prof_exp_vescom_other_p_1_2: "updated and improved already published Android game. I’ve also added third playable level to the game using existing and unfinished assets,",
            s_prof_exp_vescom_other_p_1_3: "updated and modified VR game made for Oculus GO to work with modern headsets,",
            s_prof_exp_vescom_other_p_1_4: "added VR support to existing applications (both Unity and Unreal Engine),",
            s_prof_exp_vescom_other_p_1_5: 'prototyped an AR application using <a href="https://developers.google.com/ml-kit">ML Kit</a>,',
            s_prof_exp_vescom_other_p_1_6: "helped with the development of a PHP web service using Yii2 framework.",
            
            s_prof_exp_teyon_position: "Programmer (Professional practice)",
            s_prof_exp_teyon_partyplanet_title: "30 in 1 Game Collection vol. 1 - Nintendo Switch port",
            s_prof_exp_teyon_partyplanet_p_1: "My responsibility during my professional practice at Teyon was porting of an Android game bundle to the Nintendo Switch plaform.",
            s_prof_exp_teyon_partyplanet_p_2: "My tasks included:",
            s_prof_exp_teyon_partyplanet_p_2_1: "improving gameplay,",
            s_prof_exp_teyon_partyplanet_p_2_2: "modifying assets to fit target platform,",
            s_prof_exp_teyon_partyplanet_p_2_3: "adjusting control inputs to be compatible with the target platform.",
            s_prof_exp_teyon_partyplanet_btn_text: "30 in 1 Game Collection vol. 1",
            
            s_proj_title: "Projects",
            s_proj_intro: "This section contains projects developed after work in my free time. Some of them are games and applications made during my studies at Lodz University of Technology.",
            s_proj_card_witchcraft_desc: "A spellbinding game where players cast magic by drawing symbols, built on a custom engine with an integrated editor.",
            s_proj_card_hnb_desc: "A real-time strategy about expanding flying islands and managing smog, refined through academic and acceleration programs.",
            s_proj_card_cutefall_desc: "A charming mobile game about catching falling animals in bubbles.",
            s_proj_card_catapult_desc: "A VR game centered on catapult physics, letting players wreak havoc on a distant castle.",
            s_proj_card_museumvr_desc: "A VR application that enables users to create interactive museum displays by uploading assets and arranging them in virtual reality.",
            s_proj_card_impstr_desc: "A dynamic local co-op game with a story mode demo, featuring a boss fight and advanced AI behavior trees developed from my Master's thesis.",
            s_proj_card_dwc_desc: "A .NET/WPF application designed to validate driver worktime and calculate monthly remuneration, built with the MVVM design pattern.",
            s_proj_card_uau_desc: "Unity tools for managing assets, including features for asset hiding and support for external directories.",
            s_proj_card_master_desc: "A research-driven project focused on Smart Events in NPC behavior, utilizing Unity-based simulations to implement advanced AI concepts like Behavior Trees, Finite State Machines, and Primed Agents.",
            
            s_proj_modal_close_btn_text: "Close",

            s_gamejam_title: "Game jams",
            s_gamejam_intro: "I have participated in many game jams, rapidly prototyping games and trying out new and weird mechanics I didn’t have a chance to test otherwise. It is always fun coming up with ideas that fit in the game jam’s theme and implementing unique features. Below are some of the games I’ve developed during these events.",
            s_gamejam_card_theme_title: "Theme",

            s_education_title: "Education",
            s_education_plodz_name: "Lodz University of Technology",
            s_education_specialization: "specialization",
            s_education_inz_title: "Bachelor of Science",
            s_education_mgr_title: "Master of Science",
            s_education_it_name: "Information Technology",
            s_education_spec_inz_name: "Computer Simulation and Games Technologies",
            s_education_spec_mgr_name: "Interactive Systems and Game Technologies",
            s_education_tps_name: "Secondary Technical School of Mechanical and Electrical Engineering<br/>Upper Secondary School Complex No. 1 in Piotrków Trybunalski",
            
            s_contact_title: "Contact",


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
            s_hero_summary: "Unity C# developer, Łódź, Polska",
            s_hero_resume: "CV",

            s_aboutme_title: "O Mnie",
            s_aboutme_text_hello: "Cześć! Nazywam się Marcin Zieliński",
            s_aboutme_text_p_1: "Jestem programistą, którego pasją jest tworzenie gier i aplikacji multimedialnych. Szczególnie lubię zadania, które wiążą się z tworzeniem narzędzi do uproszczenia procesu rozwijania aplikacji, jak przykładowo roszerzanie możliwość silnika gier.",
            s_aboutme_text_p_2: "Przez lata rozbudowywałem swoje umiejętności związane z C# i Unity, pracując przy projektach pozwalających mi na badanie technicznych jak i kreatywnych rozwiązań. Zawsze szukam możliwości do nauki i do stania się lepszym w tym co robię.",
            s_aboutme_text_p_3: "W swoim wolnym czasie lubię pracować nad osobistymi projektami takimi jak gra zainspirowana Sudoku, którą aktualnie rozwijam. Z działającym prototypem stworzonym w Unity, chcę go dalej poprawiać i wydać, kiedy zostanie dokończony.",
        
            s_prof_exp_title: "Doświadczenie Zawodowe",
            s_prof_exp_vescom_position: "Software Developer",
            s_prof_exp_vescom_ruvre_title: "RUVRE - rozwiązanie do wizualizacji architektury w czasie rzeczywistym w Unity",
            s_prof_exp_vescom_ruvre_p_1: "Moim głownym obowiązkiem było rozwijanie projektu RUVRE, zaprojektowanego z myślą o dostarczaniu klientowi w czasie rzeczywistym wizualizacji zmian architektonicznych.",
            s_prof_exp_vescom_ruvre_p_2: "Projekt składał się z:",
            s_prof_exp_vescom_ruvre_p_2_1: 'pluginu do istniejącego oprogramowania <span class="tooltip">BIM<span class="tooltiptext"><a href="https://pl.wikipedia.org/wiki/Building_Information_Modeling" target="_blank">Building Information Modeling</a></span></span>,',
            s_prof_exp_vescom_ruvre_p_2_2: "web serwisiu ASP .NET Core służącego do zarządzania bazą danych,",
            s_prof_exp_vescom_ruvre_p_2_3: "wieloplatformowej aplikacji klienckiej stworzonej w Unity, która miała być kompatybilna z systemem Android, Windows, urządzeniami VR (zarówno stacjonarnymi jak i samodzielnymi) oraz miała posiadać tryb AR,",
            s_prof_exp_vescom_ruvre_p_2_4: "współdzielonej biblioteki klas używanej przez wszystkie z powyższych.",
            s_prof_exp_vescom_ruvre_p_3: "Projekt pozwalał na konwertowanie danych z istniejącego oprogramowania do naszego formatu wykorzystując plugin oraz wgranie ich na serwer z użyciem storzonego web serwisu.",
            s_prof_exp_vescom_ruvre_p_4: "Kliencka aplikacja Unity wyświetlała wgrane projekty i pozwalała użytkownikowi na zaimportowanie i modyfikowanie ich zawartości.",
            s_prof_exp_vescom_ruvre_p_5: "Byłem odpowiedzialny za napisanie większości kodu klienta Unity, pluginu oprogramowania BIM oraz współdzielonej biblioteki klas, ale pomagałem również z web serwisem. Podczas pracy nad projektem napisałem shader, który miał za zadanie wspierać większość właściwości materiałów BIM. Pozwalał on m.in. na wyświetlenie przekrojów zdefiniowanych przez użytkownika. Jedną z ostatnich funkcji, które zaimplementowałem był tryb AR, który pozwalał użytkownikowi na umieszczenie modelu architektonicznego w prawdziwej przestrzeni. Inną z napisanych przeze mnie rzeczy wartych odnotowania był lightmapper, który przetwarzał projekty wgrane na serwer bez ingerencji klienta Unity i tworzył dla nich mapy światła.",
            s_prof_exp_vescom_ruvre_btn_text: "Więcej o RUVRE",
            
            s_prof_exp_vescom_kidsvr_title: "KIDS VR",
            s_prof_exp_vescom_kidsvr_p_1: "Aplikacja VR dla dzieci mająca pomóc im z bólem i strachem podczas zabiegu wenopunkcji.",
            s_prof_exp_vescom_kidsvr_p_2: "Aplikacja składała się z radosnej animacji wyświetlanej przed pacjentem oraz niewielkiej dozy interakcji tak, aby utrzymać jego skupienie.",
            s_prof_exp_vescom_kidsvr_p_3: "Do moich obowiązków należało:",
            s_prof_exp_vescom_kidsvr_p_3_1: "stworzenie prototypu na Google Cardboard a następnie właściwej aplikacji VR,",
            s_prof_exp_vescom_kidsvr_p_3_2: "przygotowanie animacji na podstawie dostarczonego scenariusza i assetów,",
            s_prof_exp_vescom_kidsvr_p_3_3: "optymalizacja aplikacji (np. zredukowanie liczby trójkątów w scenie poprzez zamianę ich na impostor'y).",
            s_prof_exp_vescom_kidsvr_p_4: "Projekt został stworzony dla Fundacji KIDS.",
            s_prof_exp_vescom_kidsvr_more_btn_text: "Więcej o projekcie",
            s_prof_exp_vescom_kidsvr_article_btn_text: "Powiązany artykuł",

            s_prof_exp_vescom_other_title: "Inne projekty",
            s_prof_exp_vescom_other_p_1: "Inne projekty, w których brałem udział podczas mojej pracy w Vescom:",
            s_prof_exp_vescom_other_p_1_1: "stworzenie aplikacji VR służącej jako interaktywna wystawa produktów sprzętowych klienta. Aplikacja dostarczała doświadczenie 3DOF. Pozwalała na wybranie produktów z półki i wyświetlenie informacji o nich,",
            s_prof_exp_vescom_other_p_1_2: "aktualizacja i poprawa już wydanej gry Android. Dodałem do niej także trzeci grywalny poziom korzystając z istniejących i niedokończonych assetów,",
            s_prof_exp_vescom_other_p_1_3: "aktualizacja i modyfikacja gry VR stworzonej na Oculus GO, tak aby działała ze współczesnymi headset'ami,",
            s_prof_exp_vescom_other_p_1_4: "dodanie wsparcia dla VR do istniejących aplikacji (zarówno w Unity jak i w Unreal Engine),",
            s_prof_exp_vescom_other_p_1_5: 'zaprototypowanie aplikacji AR wykorzystującej <a href="https://developers.google.com/ml-kit">ML Kit</a>,',
            s_prof_exp_vescom_other_p_1_6: "pomoc w rozwijaniu web serwisu PHP korzystającego z framework'u Yii2.",

            s_prof_exp_teyon_position: "Programista (Praktyka zawodowa)",
            s_prof_exp_teyon_partyplanet_title: "30 in 1 Game Collection vol. 1 - port na Nintendo Switch",
            s_prof_exp_teyon_partyplanet_p_1: "Moim obowiązkiem podczas praktyki zawodowej w Teyon było portowanie zestawu gier Android na platformę Nintendo Switch.",
            s_prof_exp_teyon_partyplanet_p_2: "Do moich zadań należało:",
            s_prof_exp_teyon_partyplanet_p_2_1: "poprawianie rozgrywki,",
            s_prof_exp_teyon_partyplanet_p_2_2: "modyfikacja assetów pod docelową platformę,",
            s_prof_exp_teyon_partyplanet_p_2_3: "dostosowywanie sterowania tak, aby było kompatybilne z docelową platformą.",
            s_prof_exp_teyon_partyplanet_btn_text: "30 in 1 Game Collection vol. 1",

            s_proj_title: "Projekty",
            s_proj_intro: "Ta sekcja zawiera projekty tworzone w moim wolnym czasie poza pracą. Niektóre z nich to gry i aplikacje tworzone podczas moich studiów na Politechnice Łódzkiej.",
            s_proj_card_witchcraft_desc: "Magiczna gra, w której gracze rzucają zaklęcia rysując symbole, zbudowana na autorskim silniku z wbudowanym edytorem.",
            s_proj_card_hnb_desc: "Strategia czasu rzeczywistego o rozbudowie latających wysp i kontrolowaniu smogu, rozwinięta dzięki wsparciu programów akceleracyjnych i akademickich.",
            s_proj_card_cutefall_desc: "Urocza gra mobilna, w której gracze łapią spadające zwierzęta w bańki.",
            s_proj_card_catapult_desc: "Gra VR oparta na fizyce katapulty, pozwalająca graczom siać zniszczenie na odległym zamku.",
            s_proj_card_museumvr_desc: "Aplikacja VR umożliwiająca użytkownikom tworzenie interaktywnych ekspozycji muzealnych poprzez wgrywanie assetów i ich rozmieszczanie w wirtualnej rzeczywistości.",
            s_proj_card_impstr_desc: "Dynamiczna lokalna gra kooperacyjna z trybem fabularnym w wersji demo, zawierającym walkę z bossem i zaawansowane drzewa zachowań AI opracowane na podstawie mojej pracy magisterskiej.",
            s_proj_card_dwc_desc: "Aplikacja .NET/WPF zaprojektowana do weryfikacji czasu pracy kierowców i obliczania miesięcznego wynagrodzenia, zbudowana w oparciu o wzorzec projektowy MVVM.",
            s_proj_card_uau_desc: "Narzędzia Unity do zarządzania assetami, obejmujące funkcje ukrywania assetów i wsparcie dla zewnętrznych katalogów.",
            s_proj_card_master_desc: "Projekt badawczy koncentrujący się na Smart Events w zachowaniach NPC, wykorzystujący symulacje w silniku Unity do implementacji zaawansowanych koncepcji AI, takich jak drzewa zachowań, maszyny stanów skończonych oraz Primed Agents.",

            s_proj_modal_close_btn_text: "Zamknij",
            
            s_gamejam_title: "Game jam'y",
            s_gamejam_intro: "Brałem udział w wielu game jamach, szybko prototypując gry i testując nowe, nietypowe mechaniki, których wcześniej nie miałem okazji wypróbować. Tworzenie pomysłów pasujących do tematu game jamu i wdrażanie unikalnych funkcji zawsze sprawiało mi dużo frajdy. Poniżej znajdują się niektóre gry, które opracowałem podczas tych wydarzeń.",
            s_gamejam_card_theme_title: "Temat",

            s_education_title: "Wykształcenie",
            s_education_plodz_name: "Politechnika Łódzka",
            s_education_specialization: "specjalizacja",
            s_education_inz_title: "Studia inżynierskie",
            s_education_mgr_title: "Studia magisterskie",
            s_education_it_name: "Informatyka",
            s_education_spec_inz_name: "Technologie Gier i Symulacji Komputerowych",
            s_education_spec_mgr_name: "Technologie Gier i Systemów Interaktywnych",
            s_education_tps_name: "Technikum Mechaniczno – Elektryczne Zespołu Szkół Ponadgimnazjalnych nr 1 w Piotrkowie Trybunalskim",
            
            s_contact_title: "Kontakt",

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

    const flagButtons = document.querySelectorAll('.language-button');
    if (flagButtons.length > 0) {
        var foundDefaultLang = false;
        flagButtons.forEach(button => {
            const selectedLanguage = button.getAttribute('data-language');
            button.addEventListener('click', function () {
                flagButtons.forEach(btn => {
                    btn.classList.remove('language-button-selected');
                });

                button.classList.add('language-button-selected');
                const translation = translations[selectedLanguage];
                for(var key in translation){
                    if(translation.hasOwnProperty(key)){
                        var elements = document.querySelectorAll('[locKey="'+key+'"]');
                        elements.forEach(function ($el){
                            $el.innerHTML = translation[key];
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