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
            s_proj_card_dwc_title: "Driver Worktime Calculator",
            s_proj_card_dwc_desc: "A .NET/WPF application designed to validate driver worktime and calculate monthly remuneration, built with the MVVM design pattern.",
            s_proj_card_uau_desc: "Unity tools for managing assets, including features for asset hiding and support for external directories.",
            s_proj_card_master_title: "Master's project",
            s_proj_card_master_desc: "A research-driven project focused on Smart Events in NPC behavior, utilizing Unity-based simulations to implement advanced AI concepts like Behavior Trees, Finite State Machines, and Primed Agents.",
            
            s_proj_modal_witchcraft_team: "Team: 4 programmers, 1 artist",
            s_proj_modal_witchcraft_p_1: "The project was based on a game engine developed using C# and MonoGame framework. The main gameplay feature of Witchcraft was casting spells by drawing their symbols with mouse cursor. The engine included a level editor which accelerated the process of designing a scene shown in the game.",
            s_proj_modal_witchcraft_p_2: "I was responsible e.g. for creating the editor, prefab and scene serialization, world chunks system and particle system.",
            s_proj_modal_witchcraft_p_3: 'The game took first place in <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2017" target="_blank">IX ZTGK (Team Game Development Competition)</a> in "Development" category and was rewarded by Teyon.',

            s_proj_modal_hnb_team: "Team: 4 programmers, 1 artist",
            s_proj_modal_hnb_p_1: "Real-time economical strategy game that evolved from game developed during Ludum Dare 38 game jam. Gameplay features involves expanding terrain by joining islands flying nearby and controlling smog level which reduces the civilization’s population.",
            s_proj_modal_hnb_p_2: "I was responsible e.g. for creating the save system, coding of island flight path calculation and adjustment of island tile model based on its connection to the other tiles.",
            s_proj_modal_hnb_p_3: 'Project qualified for the final three in the "Game Design" category of <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2017" target="_blank">IX ZTGK</a>.<br/>The game was then developed further with help of the Lodz University of Technology POWER project. It took part in the <a href="https://arp.pl/pl/aktualnosci/arp-games-zainwestowalo-0-5-mln-w-gry-wideo" target="_blank">ARP Games</a> acceleration program and qualified for the investment stage.',

            s_proj_modal_cutefall_team: "Team: 2 programmers, 1 artist",
            s_proj_modal_cutefall_p_1: "Mobile game about catching falling animals in the bubbles of different sizes.",
            s_proj_modal_cutefall_p_2: "I’ve was responsible e.g. for implementing highscore and combo system.",
            s_proj_modal_cutefall_p_3: 'The project was developed for <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2018" target="_blank">X ZTGK</a>. It qualified for the finals in the "Mobile Games" category.',

            s_proj_modal_catapult_team: "Team: 1 programmer, 2 artists",
            s_proj_modal_catapult_p_1: "VR game about wreaking havoc with a catapult. The game was all about fun with physics. Player could operate the catapult to destroy the castle seen in the distance. Choice of the projectile used for this purpose  was up to the player.",
            s_proj_modal_catapult_p_2: "I’ve done most of the coding for this game and was responsible e.g. for implementing catapult's behavior and for writing post-processing effects.",
            s_proj_modal_catapult_p_3: 'The project was developed for <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2018" target="_blank">X ZTGK</a>. It qualified for final three in the "Virtual Environments" category.',

            s_proj_modal_museumvr_team: "Team: 1 programmer, 2 artists",
            s_proj_modal_museumvr_p_1: "VR project that serves as an interactive museum/art gallery display. It allows creation of own displays using uploaded assets and placing them in VR mode.",
            s_proj_modal_museumvr_p_2: "I was responsible for writing most of the code for the application.",
            s_proj_modal_museumvr_p_3: 'The project qualified for the finals in <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2018" target="_blank">X ZTGK</a> "Virtual Environments" category.',

            s_proj_modal_impstr_team: "Team: 1 programmer, 2 artists",
            s_proj_modal_impstr_p_1: "Game that was developed as a two player local co-op/party game for the Digital Night Jam 2018. It was further developed by adding demo of a story mode with one playable level including the boss fight. The project used improved behavior tree solution that was initially created for my Master’s thesis.",
            s_proj_modal_impstr_p_2: "It was one of the most ambitious projects that I’ve taken part in. I’ve been responsible for the programming side of the whole game.",
            s_proj_modal_impstr_p_3: 'The project qualified for the finals in <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2019" target="_blank">XI ZTGK</a> "Game Design" category and received an invitation for <a href="https://conference.digitaldragons.pl/indie-zone-old/indie-showcase/">Indie Showcase</a> during <a href="https://digitaldragons.pl/">Digital Dragons</a> 2020.',

            s_proj_modal_dwc_p_1: "A .NET/WPF application developed by myself for an accounting office to help with validating driver’s worktime based on provided data and with calculating remuneration for specified month.",
            s_proj_modal_dwc_p_2: "The application is using MVVM design pattern.",
            
            s_proj_modal_uau_p_1: "Set of tools designed to help manage assets in Unity projects. Includes tools for hiding specified assets and using assets outside of the project directory.",
            s_proj_modal_uau_p_2: "They were developed by myself in response to the problems that I’ve encountered during my work with Unity.",
            
            s_proj_modal_master_p_1: "The topic of my Master’s thesis was \"Smart Events in NPC’s behaviour\". During my work I’ve conducted tests using simulations made in Unity Game Engine. The project for my Master’s degree thesis features implementation of Smart Events, Primed Agents, Behaviour Trees, Finite State Machine and more.",
            s_proj_modal_master_p_2: "Behaviour Tree implementation and editor was developed further and used in the game Impossible Storrries.",
            s_proj_modal_master_p_3: "The two screenshots show a change of behaviour of the \"Teacher\" agent based on fire smart event emergency level. The third one shows the other simulation scenario.",
            s_proj_modal_master_p_4: "Below there are links to my Master’s thesis along with source Unity project and screencasts from conducted simulations.",
            s_proj_modal_masters_thesis_btn_text: "Master's thesis",

            s_proj_modal_screencasts_btn_text: "Screencasts",
            s_proj_modal_code_repository_btn_text: "Code repository",
            s_proj_modal_download_source_btn_text: "Download source",
            s_proj_modal_download_build_btn_text: "Download build",
            s_proj_modal_close_btn_text: "Close",

            s_gamejam_title: "Game jams",
            s_gamejam_intro: "I have participated in many game jams, rapidly prototyping games and trying out new and weird mechanics I didn’t have a chance to test otherwise. It is always fun coming up with ideas that fit in the game jam’s theme and implementing unique features. Below are some of the games I’ve developed during these events.",
            s_gamejam_card_theme_title: "Theme",
            
            s_gamejam_modal_jaw_team: "Team: 2 programmers, 1 artist",
            s_gamejam_modal_jaw_p_1: "Jawster is about an old warrior sent by the king to rescue the royal jester. While defeating enemies the warrior steals their teeth to fill the gaps in his own denture.",
            s_gamejam_modal_jaw_p_2: "Collected teeth modify the player’s statistics. The player can also throw their jaw at the enemies as a long-range attack.",
            s_gamejam_modal_jaw_p_3: "Besides programming the mechanics I had a chance to mentor the other developer as it was his first game he coded.",
            
            s_gamejam_modal_mission_team: "Team: 3 programmers, 1 artist, 1 sound designer",
            s_gamejam_modal_mission_p_1: "The game is a twin-stick shooter about an astronaut that crashed on a hostile planet. Player must retrieve all parts of the ship and defend from angry aliens.",
            s_gamejam_modal_mission_p_2: "That was my first fully remote game jam which made the project difficult to develop in such a short time but in the end we managed to create a mostly finished game.",
            s_gamejam_modal_mission_p_3: "I was responsible for coding and implemented e.g. player controls which includes walking and using mouse to change shooting direction.",
            
            s_gamejam_modal_pvt_team: "Team: 3 programmers, 2 artists, 1 sound designer",
            s_gamejam_modal_pvt_p_1: "The player takes on the role of a person responsible for censoring a news broadcast. Each scene has specified words that need to be beeped out. The result of the player’s actions are reflected in the broadcast’s viewer count.",
            s_gamejam_modal_pvt_p_2: "As programmers we had a lot of fun creating a solution to detect and synchronize displayed text with the speech. It took us a long time, but in the end implemented detection technique worked perfectly.",

            s_gamejam_modal_sacrableu_team: "Team: 3 programmers, 2 artists, 1 sound designer",
            s_gamejam_modal_sacrableu_p_1: "The game is a four player crab fighting game. Each player controls one hermit crab that can pick up items scattered around the beach to use them as its shell or a weapon. The crabs are controlled using game pads.",
            s_gamejam_modal_sacrableu_p_2: "The main twist is that to move, a player must use trigger buttons sequentially instead of traditional analog stick.",
            s_gamejam_modal_sacrableu_p_3: "I was responsible for gameplay programming.",
            
            s_gamejam_modal_impstr_team: "Team: 1 programmers, 2 artists",
            s_gamejam_modal_impstr_p_1: "(This one was developed further as the Impossible Storrries!)",
            s_gamejam_modal_impstr_p_2: "The project is a two player coop game. The players must work together to defeat waves of enemies using cannons that can be only operated when both of them are holding it.",
            s_gamejam_modal_impstr_p_3: "I was responsible for coding and e.g. implemented players cannon operating mechanic and simple enemy behavior.",

            s_gamejam_modal_wolf_team: "Team: 1 programmer, 2 artists",
            s_gamejam_modal_wolf_p_1: "Wolf Busters is a driving/shooting game with up-to 4 player split screen cooperation. The player’s goal is to get rid of all the wolves before they eat all the sheep.",
            s_gamejam_modal_wolf_p_2: "I was responsible for coding and had implemented features such as driving physics and sheep flocking.",
            
            s_gamejam_modal_cod_team: "Team: 3 programmers, 1 artist",
            s_gamejam_modal_cod_p_1: "The player takes on the role of a caveman that must provide food for his tribe. Each day the number of tribesmen to feed changes based on the amount of food gathered. Player must use his single spear to hunt down the wild animals.",
            s_gamejam_modal_cod_p_2: "I was responsible e.g. for coding of creature behavior and creating cave painting shader.",

            s_gamejam_modal_smlwld_team: "Team: 3 programmers",
            s_gamejam_modal_smlwld_p_1: "(This one was developed further as the Hook’n’Build)",
            s_gamejam_modal_smlwld_p_2: "The Game is a real-time economical strategy about expanding territory by joining flying islands and controlling a level of the created smog.",
            s_gamejam_modal_smlwld_p_3: "I was responsible for coding and implemented e.g. camera controls and building mechanic.",

            s_proj_modal_entry_btn_text: "Entry",

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
            s_proj_card_dwc_title: "Kalkulator czasu pracy kierowców",
            s_proj_card_dwc_desc: "Aplikacja .NET/WPF zaprojektowana do weryfikacji czasu pracy kierowców i obliczania miesięcznego wynagrodzenia, zbudowana w oparciu o wzorzec projektowy MVVM.",
            s_proj_card_uau_desc: "Narzędzia Unity do zarządzania assetami, obejmujące funkcje ukrywania assetów i wsparcie dla zewnętrznych katalogów.",
            s_proj_card_master_title: "Projekt magisterski",
            s_proj_card_master_desc: "Projekt badawczy koncentrujący się na Smart Events w zachowaniach NPC, wykorzystujący symulacje w silniku Unity do implementacji zaawansowanych koncepcji AI, takich jak drzewa zachowań, maszyny stanów skończonych oraz Primed Agents.",

            s_proj_modal_witchcraft_team: "Zespół: 4 programistów, 1 artystka",
            s_proj_modal_witchcraft_p_1: "Projekt powstał na własnym silniku stworzonym z wykorzystaniem C# i framework'u MonoGame. Główną mechaniką rozgrywki w Witchcraft było rzucanie czarów rysując ich symbole kursorem myszy. Silnik zawierał edytor poziomów, który znacząco przyspieszył proces projektowania scen pokazanych w grze.",
            s_proj_modal_witchcraft_p_2: "Byłem odpowiedzialny m.in. za stworzenie edytora, serializacji prefab'ów i scen, systemu chunk'ów świata i systemów cząsteczkowych.",
            s_proj_modal_witchcraft_p_3: 'Gra zajęła pierwsze miejsce w <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2017" target="_blank">IX ZTGK (Zespołowe Tworzenie Gier Komputerowych)</a> w kategorii "Development" i została nagrodzona przez firmę Teyon.',

            s_proj_modal_hnb_team: "Zespół: 4 programistów, 1 artystka",
            s_proj_modal_hnb_p_1: "Strategia czasu rzeczywistego, która wyewoluowała z gry stworzonej podczas game jamu Ludum Dare 38. Rozgrywka polega na rozszerzaniu swojego terytorium poprzez łączenie latających wysp oraz na kontrolowaniu poziomu smogu, który redukuje liczbę populacji.",
            s_proj_modal_hnb_p_2: "Byłem odpowiedzialny m.in. za stworzenie systemu zapisów, zkodowanie obliczania toru lotów wysp oraz dostosowanie modelu kafelka wyspy, na podstawie jego połączeń z innymi kafelkami.",
            s_proj_modal_hnb_p_3: 'Projekt zakwalifikował się do finałowej trójki w kategorii "Game Design" podczas <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2017" target="_blank">IX ZTGK</a>.<br/>Gra była następnie rozwijana przy wsparciu projektu POWER Politechniki Łódzkiej. Wzięła udział w programie akceleracyjnym <a href="https://arp.pl/pl/aktualnosci/arp-games-zainwestowalo-0-5-mln-w-gry-wideo" target="_blank">ARP Games</a> i zakfalifikowała się do fazy inwestycyjnej.',

            s_proj_modal_cutefall_team: "Zespół: 2 programistów, 1 artystka",
            s_proj_modal_cutefall_p_1: "Gra mobilna o łapanu spadających zwierząt w bańki o róznych rozmiarach.",
            s_proj_modal_cutefall_p_2: "Byłem odpowiedzialny m.in. za implementację systemu liczenia wyniku i combo.",
            s_proj_modal_cutefall_p_3: 'Projekt został stworzony na potrzeby <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2018" target="_blank">X ZTGK</a>. Zakwalifikował się do finałów w kategorii "Mobile Games".',

            s_proj_modal_catapult_team: "Zespół: 1 programista, 2 artystów",
            s_proj_modal_catapult_p_1: "Gra VR o sianiu zniszczenia za pomocą katapulty. Rozgrywka skupiała się na zabawie z fizyką. Gracz mógł obsługiwać katapultę, aby niszczyć zamek widoczny w oddali. Wybór pocisku użytego do tego celu należał do gracza.",
            s_proj_modal_catapult_p_2: "Byłem odpowiedzialny za więszość kodu m.in. zaimplementowałem zachowanie katapulty i napisałem efekty post-procesowe.",
            s_proj_modal_catapult_p_3: 'Projekt był stworzony na potrzeby <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2018" target="_blank">X ZTGK</a>. Zakwalifikował się do finałowej trójki w kategorii "Virtual Environments".',

            s_proj_modal_museumvr_team: "Zespół: 1 programista, 2 artystów",
            s_proj_modal_museumvr_p_1: "Projekt VR pełniący funkcję interaktywnej ekspozycji muzealnej lub galerii sztuki. Umożliwia tworzenie własnych ekspozycji poprzez wgrywnie zasobów i ich rozmieszczanie w trybie VR.",
            s_proj_modal_museumvr_p_2: "Byłem odpowiedzialny za napisanie większości kodu aplikacji.",
            s_proj_modal_museumvr_p_3: 'Projekt zakwalifikował się do finałów <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2018" target="_blank">X ZTGK</a> w kategorii "Virtual Environments".',

            s_proj_modal_impstr_team: "Zespół: 1 programista, 2 artystów",
            s_proj_modal_impstr_p_1: "Gra stworzona jako lokalna kooperacyjna gra imprezowa dla dwóch graczy podczas Digital Night Jam 2018. Została rozwinięta o demo trybu fabularnego z jednym grywalnym poziomem, który zawiera walkę z bossem. Projekt wykorzystał ulepszone drzewa zachowań AI opracowane pierwotnie w ramach mojej pracy magisterskiej.",
            s_proj_modal_impstr_p_2: "To był jeden z najbardziej ambitnych projektów w jakich brałem udział. Byłem odpowiedzialny za stronę programistyczną całej gry.",
            s_proj_modal_impstr_p_3: 'Projekt zakwalifikował się do finałów <a href="https://gry.it.p.lodz.pl/main/index.php/pl/okonkursie/poprzednie-edycje/edycja-2019" target="_blank">XI ZTGK</a> w kategorii "Game Design" i otrzymał zaproszenie na <a href="https://conference.digitaldragons.pl/indie-zone-old/indie-showcase/">Indie Showcase</a> podczas <a href="https://digitaldragons.pl/">Digital Dragons</a> 2020.',

            s_proj_modal_dwc_p_1: "Aplikacja .NET/WPF stworzona przeze mnie dla biura księgowego, aby pomóc z walidacją czasu pracy kierowców na podstawie dostarczonych danych oraz z obliczaniem wynagrodzenia za dany miesiąc.",
            s_proj_modal_dwc_p_2: "Aplikacja wykorzystuje wzorzec projektowy MVVM.",
            
            s_proj_modal_uau_p_1: "Zestaw narzędzi pomocnych w zarządzaniu assetami w projektach Unity. Zawiera narzędzia do ukrywania wybranych assetów oraz używania zasobów z poza katalogu projektu.",
            s_proj_modal_uau_p_2: "Zostały one stworzone przeze mnie w odpowiedzi na problemy jakie napotkałem podczas mojej pracy z Unity.",
                        
            s_proj_modal_master_p_1: "Tematem mojej pracy magisterskiej było \"Smart Events w zachowaniu NPC\". Podczas mojej pracy przeprowadziłem testy z wykorzystaniem symulacji wykonanych w silniku gier Unity. Projekt mojej pracy magisterskiej obejmuje implementację Smart Events, Primed Agents, Drzew Zachowań, Maszyny Stanów Skończonych i innych zaawansowanych rozwiązań.",
            s_proj_modal_master_p_2: "Implementacja Drzew Zachowań oraz edytor był dalej rozwijany i został wykorzystany w grze Impossible Storrries.",
            s_proj_modal_master_p_3: "Dwa zrzuty ekranu przedstawiają zmianę w zachowaniu agenta \"Nauczyciela\" na podstawie stopnia rozwoju zdarzenia pożaru. Trzeci zrzut pokazuje inny scenariusz symulacji.",
            s_proj_modal_master_p_4: "Poniżej znajdują się odnośniki do mojej pracy magisterskiej, a także źródłowego projektu Unity oraz screencast'ów z przeprowadzonych symulacji.",
            s_proj_modal_masters_thesis_btn_text: "Praca magisterska",

            s_proj_modal_screencasts_btn_text: "Screencast'y",
            s_proj_modal_code_repository_btn_text: "Repozytorium kodu",
            s_proj_modal_download_source_btn_text: "Pobierz źródło",
            s_proj_modal_download_build_btn_text: "Pobierz build",
            s_proj_modal_close_btn_text: "Zamknij",
            
            s_gamejam_title: "Game jam'y",
            s_gamejam_intro: "Brałem udział w wielu game jamach, szybko prototypując gry i testując nowe, nietypowe mechaniki, których wcześniej nie miałem okazji wypróbować. Tworzenie pomysłów pasujących do tematu game jamu i wdrażanie unikalnych funkcji zawsze sprawiało mi dużo frajdy. Poniżej znajdują się niektóre gry, które opracowałem podczas tych wydarzeń.",
            s_gamejam_card_theme_title: "Temat",
            
            s_gamejam_modal_jaw_team: "Zespół: 2 programistów, 1 artystka",
            s_gamejam_modal_jaw_p_1: "Jawster opowiada o starym wojowniku wysłanym przez króla na ratunek królewskiemu błaznowi. Pokonując przeciwników wojownik kradnie ich zęby aby uzupełnić braki we własnej sztucznej szczęce.",
            s_gamejam_modal_jaw_p_2: "Zebrane zęby modyfikują statystyki postaci. Gracz może także rzucić szczęką w przeciwników jako atak dystansowy.",
            s_gamejam_modal_jaw_p_3: "Poza programowaniem mechanik rozgrywki miałem szansę mentorować drugiemu programiście, dla którego była to pierwsza kodowana przez niego gra.",
            
            s_gamejam_modal_mission_team: "Zespół: 3 programistów, 1 artysta, 1 sound designer",
            s_gamejam_modal_mission_p_1: "Gra to twin-stick shooter o astronaucie, który rozbija się na nieprzyjaznej planecie. Gracz musi odzyskać wszystkie części statku i bronić się przed groźnymi obcymi.",
            s_gamejam_modal_mission_p_2: "To był mój pierwszy w pełni zdalny game jam co uczyniło projekt trudnym do rozwijania w tak krótkim czasie, ale ostatecznie byliśmy w stanie stworzyć niemal skończonę grę.",
            s_gamejam_modal_mission_p_3: "Byłem odpowiedzialny za kodowanie i zaimplementowałem m.in. sterowanie graczem wraz z chodzeniem i używaniem myszy do zmiany kierunku strzału.",

            s_gamejam_modal_pvt_team: "Zespół: 3 programistów, 2 artystki, 1 sound designer",
            s_gamejam_modal_pvt_p_1: "Gracz przyjmuje rolę osoby odpowiedzialnej za cenzurę serwisu informacyjnego. Każda scena zawiera określone słowa do \"wypikania\". Konsekwencje akcji gracza są odzwierciedlane w liczbie oglądających wydanie wiadomości.",
            s_gamejam_modal_pvt_p_2: "Jako programiści mieliśmy dużo zabawy z tworzeniem rozwiązania do wykrywania i synchronizacji wyświetlanego tekstu z mową. Zajęło nam to sporo czasu, ale ostatecznie zaimplementowana technika detekcji zadziałała perfekcyjnie.",

            s_gamejam_modal_sacrableu_team: "Zespół: 3 programistów, 2 artyści, 1 sound designer",
            s_gamejam_modal_sacrableu_p_1: "Gra jest czteroosobową bijatyką o krabach. Każdy z graczy steruje pustelnikiem, który może zbierać przedmioty porozrzucane po plaży i używać ich jako swojej skorupy lub broni. Kraby są kontrolowane używając game pad'ów.",
            s_gamejam_modal_sacrableu_p_2: "Głównym twist'em jest to, że aby się poruszać, gracze muszą w tym czelu naprzemiennie wciskać trigger'y zamiast tradycyjnego joystick'a analogowego.",
            s_gamejam_modal_sacrableu_p_3: "Byłem odpowiedzialny za programowanie rozgrywki.",
            
            s_gamejam_modal_impstr_team: "Zespół: 1 programista, 2 artystów",
            s_gamejam_modal_impstr_p_1: "(Ten projekt był rozwijany dalej jako Impossible Storrries!)",
            s_gamejam_modal_impstr_p_2: "Projekt jest grą kooperacyjną dla dwóch graczy. Muszą oni współpracować, aby obronić się przed falami przeciwników używając w tym celu armat, które mogą być obsługiwane tylko jeśli obaj je trzymają.",
            s_gamejam_modal_impstr_p_3: "Byłem odpowiedzialny za kodowanie i zaimplementowałem m.in. mechanikę operowania armatą przez graczy oraz proste zachowania wrogów.",

            s_gamejam_modal_wolf_team: "Zespół: 1 programista, 2 artystów",
            s_gamejam_modal_wolf_p_1: "Wolf Busters to gra wyścigowo-strzelecka z możliwością współpracy do 4 graczy na podzielonym ekranie. Celem graczy jest pozbycie się wszystkich wilków zanim zjedzą wszystkie owce.",
            s_gamejam_modal_wolf_p_2: "Byłem odpowiedzialny za kodowanie i zaimplementowałem takie feature'y jak fizykę pojazdów czy zachowania stadne owiec.",

            s_gamejam_modal_cod_team: "Zespół: 3 programistów, 1 artystka",
            s_gamejam_modal_cod_p_1: "Gracz przyjmuje postać jaskiniowca, który musi zapewnić wyżywienie swojemu plemieniu. Każdego dnia liczba współplemieńców do wykarmienia zmienia się na podstawie ilości zdobytego jedzenia. Graczy musi używać swojej jedynej włóczni do polowania na dzikie zwierzęta.",
            s_gamejam_modal_cod_p_2: "Byłem odpowiedzialny m.in. za zaprogramowanie zachowań zwierząt oraz stworzenie shader'a imitującego malowidła jaskiniowe.",

            s_gamejam_modal_smlwld_team: "Zespół: 3 programistów",
            s_gamejam_modal_smlwld_p_1: "(Ten projekt był rozwijany dalej jako Hook’n’Build)",
            s_gamejam_modal_smlwld_p_2: "Gra jest ekonomiczną strategią czasu rzeczywistego o rozszerzaniu terytorium poprzez łączenie latających wysp oraz kontrolowaniu poziomu wytwarzanego smogu.",
            s_gamejam_modal_smlwld_p_3: "Byłem odpowiedzialny za kodowanie i zaimplementowałem m.in. sterowanie kamerą oraz mechanikę budowania.",

            s_proj_modal_entry_btn_text: "Zgłoszenie",

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