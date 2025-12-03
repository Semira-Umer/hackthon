
// Language content
const content = {
    en: {
        logo: "Quran Mood Matcher",
        home: "Home",
        about: "About",
        welcomeTitle: "Welcome to Quran Mood Matcher",
        welcomeText: "Select your current emotional state to receive comforting verses from the Holy Quran and relevant Hadith that match your mood.",
        sad: "Sad",
        sadDesc: "Feeling down or distressed",
        anxious: "Anxious", 
        anxiousDesc: "Worried or nervous",
        happy: "Happy",
        happyDesc: "Feeling joyful and grateful",
        angry: "Angry",
        angryDesc: "Feeling upset or frustrated",
        grateful: "Grateful",
        gratefulDesc: "Feeling thankful to Allah",
        back: "Back to Home",
        hadith: "Related Hadith",
        aboutTitle: "About Quran Mood Matcher",
        aboutText1: "Quran Mood Matcher is a web application designed to provide spiritual comfort and guidance by matching your current emotional state with relevant verses from the Holy Quran and Hadith.",
        aboutText2: "Our mission is to help Muslims find peace, solace, and direction through the words of Allah and the teachings of Prophet Muhammad (PBUH) during different emotional experiences.",
        aboutFeatures: "This application features:",
        featuresList: [
            "Emotion-based Quranic verse recommendations",
            "Relevant Hadith for each emotional state",
            "Audio recitation of the verses",
            "Arabic text with translation",
            "Brief explanations of the verses"
        ],
        aboutClosing: "May this application bring you closer to Allah and provide comfort in times of need. Remember that the Quran is a healing and mercy for the believers.",
        // Mood page content
        sadTranslation: "\"And they will say, 'Praise to Allah, who has removed from us [all] sorrow. Indeed, our Lord is Forgiving and Appreciative.'\"",
        sadDescription: "This verse from Surah Fatir (35:34) reminds us that Allah will remove all sorrow from the believers in Paradise. It gives hope that our sadness in this world is temporary and that Allah's mercy is vast.",
        sadTranslation2: "\"Do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.\" (Quran 39:53)",
        sadHadith: "\"How wonderful is the affair of the believer, for his affairs are all good, and this applies to no one but the believer. If something good happens to him, he is thankful for it and that is good for him. If something bad happens to him, he bears it with patience and that is good for him.\" (Muslim)",
        
        anxiousTranslation: "\"Unquestionably, by the remembrance of Allah hearts are assured.\"",
        anxiousDescription: "This powerful verse from Surah Ar-Ra'd (13:28) teaches us that true peace and tranquility comes from remembering Allah. When we feel anxious, turning to dhikr (remembrance of Allah) can calm our hearts.",
        anxiousHadith: "\"No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for that.\" (Bukhari)",
        
        happyTranslation: "\"Say, 'In the bounty of Allah and in His mercy - in that let them rejoice; it is better than what they accumulate.'\"",
        happyDescription: "This verse from Surah Yunus (10:58) teaches us that true happiness comes from recognizing and appreciating Allah's blessings and mercy, which are far more valuable than any worldly possessions.",
        happyHadith: "\"If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.\" (Quran 14:7)",
        
        angryTranslation: "\"And those who restrain anger and who pardon the people - and Allah loves the doers of good.\"",
        angryDescription: "This verse from Surah Ali 'Imran (3:134) highlights the virtue of controlling anger and forgiving others. It reminds us that suppressing anger and showing forgiveness are qualities loved by Allah.",


angryHadith: "\"The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger.\" (Bukhari)",
        
        gratefulTranslation: "\"And if you should count the favors of Allah, you could not enumerate them. Indeed, Allah is Forgiving and Merciful.\"",
        gratefulDescription: "This verse from Surah An-Nahl (16:18) reminds us of the countless blessings Allah has bestowed upon us, encouraging gratitude and recognition of His endless mercy.",
        gratefulTranslation2: "\"If you are grateful, I will surely increase you [in favor]...\" (Quran 14:7)",
        gratefulHadith: "\"He who does not thank people, does not thank Allah.\" (Abu Dawud)"
    },
    ar: {
        logo: "مطابق مزاج القرآن",
        home: "الرئيسية",
        about: "حول",
        welcomeTitle: "مرحبًا بك في مطابق مزاج القرآن",
        welcomeText: "اختر حالتك العاطفية الحالية لتتلقى آيات من القرآن الكريم وأحاديث ذات صلة تتناسب مع مزاجك.",
        sad: "حزين",
        sadDesc: "تشعر بالحزن أو الضيق",
        anxious: "قلق",
        anxiousDesc: "تشعر بالقلق أو التوتر",
        happy: "سعيد",
        happyDesc: "تشعر بالفرح والامتنان",
        angry: "غاضب",
        angryDesc: "تشعر بالانزعاج أو الإحباط",
        grateful: "ممتن",
        gratefulDesc: "تشعر بالامتنان لله",
        back: "العودة إلى الرئيسية",
        hadith: "الحديث ذات الصلة",
        aboutTitle: "حول مطابق مزاج القرآن",
        aboutText1: "مطابق مزاج القرآن هو تطبيق ويب مصمم لتقديم الراحة والإرشاد الروحي من خلال مطابقة حالتك العاطفية الحالية مع آيات من القرآن الكريم وأحاديث ذات صلة.",
        aboutText2: "مهمتنا هي مساعدة المسلمين في إيجاد السلام والسلوى والتوجيه من خلال كلام الله وتعاليم النبي محمد (صلى الله عليه وسلم) خلال التجارب العاطفية المختلفة.",
        aboutFeatures: "يتميز هذا التطبيق بما يلي:",
        featuresList: [
            "توصيات آيات قرآنية تعتمد على العواطف",
            "أحاديث ذات صلة لكل حالة عاطفية",
            "تلاوة صوتية للآيات",
            "النص العربي مع الترجمة",
            "شروح موجزة للآيات"
        ],
        aboutClosing: "نسأل الله أن يقربك هذا التطبيق من الله ويوفر لك الراحة في أوقات الحاجة. تذكر أن القرآن شفاء ورحمة للمؤمنين.",
        // Mood page content in Arabic
        sadTranslation: "\"وقالوا الحمد لله الذي أذهب عنا الحزن إن ربنا لغفور شكور\"",
        sadDescription: "هذه الآية من سورة فاطر (٣٥:٣٤) تذكرنا أن الله سيزيل كل حزن عن المؤمنين في الجنة. تعطي الأمل بأن حزننا في هذه الدنيا مؤقت وأن رحمة الله واسعة.",
        sadHadith: "\"عجبًا لأمر المؤمن، إن أمره كله له خير، وليس ذلك لأحد إلا للمؤمن: إن أصابته سراء شكر فكان خيرًا له، وإن أصابته ضراء صبر فكان خيرًا له.\" (مسلم)",
        
        anxiousTranslation: "\"ألا بذكر الله تطمئن القلوب\"",
        anxiousDescription: "هذه الآية القوية من سورة الرعد (١٣:٢٨) تعلمنا أن السلام والطمأنينة الحقيقية تأتي من ذكر الله. عندما نشعر بالقلق، فإن التوجه إلى الذكر يمكن أن يهدئ قلوبنا.",
        anxiousHadith: "\"ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن ولا أذى ولا غم، حتى الشوكة يشاكها، إلا كفر الله بها من خطاياه.\" (البخاري)",
        
        happyTranslation: "\"قل بفضل الله وبرحمته فبذلك فليفرحوا هو خير مما يجمعون\"",
        happyDescription: "هذه الآية من سورة يونس (١٠:٥٨) تعلمنا أن السعادة الحقيقية تأتي من الاعتراف ببركات الله ورحمته وتقديرها، وهي أكثر قيمة من أي ممتلكات دنيوية.",
        happyHadith: "\"لئن شكرتم لأزيدنكم\" (سورة إبراهيم: ٧)",
        
        angryTranslation: "\"والكاظمين الغيظ والعافين عن الناس والله يحب المحسنين\"",
        angryDescription: "هذه الآية من سورة آل عمران (٣:١٣٤) تسلط الضوء على فضل كظم الغيظ والعفو عن الآخرين. تذكرنا أن كبح الغضب وإظهار التسامح من الصفات المحبوبة عند الله.",
        angryHadith: "\"ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب.\" (البخاري)",
        
        gratefulTranslation: "\"وإن تعدوا نعمة الله لا تحصوها إن الله لغفور رحيم\"",
        gratefulDescription: "هذه الآية من سورة النحل (١٦:١٨) تذكرنا بالنعم التي لا تحصى التي أنعم الله بها علينا، مشجعة على الشكر والاعتراف برحمته التي لا تنتهي.",
        gratefulHadith: "\"من لا يشكر الناس لا يشكر الله.\" (أبو داود)",
        
    }
};

// Audio files for each mood with exact verse timestamps
const audioFiles = {
    sad: "https://everyayah.com/data/Alafasy_128kbps/035034.mp3",  // Fatir 35:34 
    anxious: "https://everyayah.com/data/Alafasy_128kbps/013028.mp3", // Exact verse: Ar-Ra'd 13:28
    happy: "https://everyayah.com/data/Alafasy_128kbps/010058.mp3", // Exact verse: Yunus 10:58
    angry: "https://everyayah.com/data/Alafasy_128kbps/003134.mp3", // Exact verse: Ali 'Imran 3:134
    grateful:
        "https://everyayah.com/data/Alafasy_128kbps/016018.mp3" , // An-Nahl 16:18  
};
    // Team members data with English and Arabic versions
    const teamMembersData = {
        en: [
            { 
                name: "Hanan Ali",
                role: "HTML & CSS Developer",
                photo: "./Assets/photo_4_2025-11-30_12-56-40.jpg",
                bio: "Builds clean, accessible HTML and CSS so pages work well on different devices. Writes simple, maintainable HTML/CSS and helps turn designs into working pages."
            },
            {
                name: "Semira Oumer",
                role: "HTML & CSS Developer",
                photo: "./Assets/photo_2_2025-11-30_12-56-40.jpg",
                bio: "Coordinates front-end tasks, ensures consistent design and quality across the project, and supports team collaboration, testing, and documentation."
            },
            {
                name: "Liya Mehamed",
                role: "Project Manager,CSS and JavaScript Developer",
                photo: "./Assets/photo_1_2025-11-30_12-56-40.jpg",
                bio: "Leads the project and implements responsive, accessible layouts and polished UI interactions using modern CSS and modular JavaScript; focuses on reusable components, smooth animations, and inclusive UX."
            },
            {
                name: "Hanan Asmare",
                role: "CSS and JavaScript Developer",
                photo: "./Assets/photo_3_2025-11-30_12-56-40.jpg",
                bio: "Designs intuitive, responsive interfaces and implements interactive features with clean, maintainable JavaScript and CSS to enhance usability and accessibility."
            },
            {
                name: "Zahara Sultan",
                role: "CSS & JavaScript Developer",
                photo: "./Assets/photo_5_2025-11-30_12-56-40.jpg",
                bio: "Creates engaging, user-friendly web experiences by combining modern CSS techniques with efficient JavaScript to build dynamic, responsive interfaces."
            }
        ],
        ar: [
            { 
                name: "حنان علي",
                role: "مطوّر HTML و CSS",
                photo: "./Assets/photo_4_2025-11-30_12-56-40.jpg",
                bio: "يبني HTML و CSS نظيفين ومتوافقين مع الأجهزة المختلفة. يكتب شيفرة صالحة وسهلة الصيانة ويساعد في تحويل التصاميم إلى صفحات عمل."
            },
            {
                name: "سميرة عمر",
                role: "مطوّرة HTML و CSS",
                photo: "./Assets/photo_2_2025-11-30_12-56-40.jpg",
                bio: "تنسق مهام الواجهة الأمامية، وتضمن تناسق التصميم وجودته عبر المشروع، وتدعم التعاون والاختبار والتوثيق."
            },
            {
                name: "ليا محمد",
                role: "مطوّرة CSS وجافا سكريبت ومديرة مشاريع ",
                photo: "./Assets/photo_1_2025-11-30_12-56-40.jpg",
                bio: "تنفّذ تنسيقات متجاوبة وقابلة للوصول وتبني تفاعلات واجهة أنيقة باستخدام CSS حديثة وجافاسكربت مُنظّم. تبني مكونات قابلة لإعادة الاستخدام وحركات وانخفاضيات حدثية."
            },
            {
                name: "حنان أسماري",
                role: "مطوّرة CSS وجافاسكربت",
                photo: "./Assets/photo_3_2025-11-30_12-56-40.jpg",
                bio: "تصمم واجهات بديهية ومتجاوبة وتنفّذ ميزات تفاعلية بشيفرة نظيفة وقابلة للصيانة لتعزيز قابلية الاستخدام وإمكانية الوصول."
            },
            {
                name: "زهرة سلطان",
                role: "مطوّرة CSS وجافاسكربت",
                photo: "./Assets/photo_5_2025-11-30_12-56-40.jpg",
                bio: "تبتكر تجارب ويب جذابة وسهلة الاستخدام عبر دمج تقنيات CSS الحديثة مع جافاسكربت فعّال لبناء واجهات ديناميكية ومتجاوبة."
            }
        ]
    };

// Current language
let currentLang = 'en';

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after 2.5 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
        
        // Initialize the app
        initializeApp();
        updateTeamMembers();
    }, 2500);
});

// Initialize the app
function initializeApp() {
    // Navigation functionality
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        showHomePage();
    });

    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        showAboutPage();
    });

    // Mood card functionality
    const moodCards = document.querySelectorAll('.mood-card');
    moodCards.forEach(card => {
        card.addEventListener('click', function() {
            const mood = this.getAttribute('data-mood');
            showMoodPage(mood);
        });
    });

    // Language selector functionality
    document.getElementById('language-select').addEventListener('change', function() {
        const selectedLanguage = this.value;
        changeLanguage(selectedLanguage);
    });

    // Set initial language
    changeLanguage('en');
    showHomePage();
}

// Set active navigation
function setActiveNav(clickedElement) {
    document.querySelectorAll('.nav-link').forEach(nav => {
        nav.classList.remove('active');
    });
    clickedElement.classList.add('active');
}

// Page display functions
function showHomePage() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('about-page').style.display = 'none';
    hideAllMoodPages();
}

function showAboutPage() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'block';
    hideAllMoodPages();
}

function showMoodPage(mood) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'none';
    hideAllMoodPages();
    
    const moodPage = document.getElementById(`${mood}-page`);
    moodPage.style.display = 'block';
    
    // Update mood page content based on current language
    updateMoodPageContent(mood);
    
    // Update audio source to match the exact verse
    updateAudioSource(mood);
}

function hideAllMoodPages() {
    const moodPages = document.querySelectorAll('.mood-page');
    moodPages.forEach(page => {
        page.style.display = 'none';
    });
}

function goBack() {
    setActiveNav(document.getElementById('home-link'));
    showHomePage();
}

// Update mood page content
function updateMoodPageContent(mood) {
    const texts = content[currentLang];
    
    // Update translation
    const translationElement = document.getElementById(`${mood}-translation`);
    if (translationElement) {
        translationElement.textContent = texts[`${mood}Translation`];
    }
     // Update second translation for sad and grateful
    const translationElement2 = document.getElementById(`${mood}-translation2`);
    if (translationElement2 && texts[`${mood}Translation2`]) {
        translationElement2.textContent = texts[`${mood}Translation2`];
    }
    // Update description
    const descriptionElement = document.getElementById(`${mood}-description`);
    if (descriptionElement) {
        descriptionElement.textContent = texts[`${mood}Description`];
    }
    
    // Update hadith
    const hadithElement = document.getElementById(`${mood}-hadith`);
    if (hadithElement) {
        hadithElement.textContent = texts[`${mood}Hadith`];
    }
}
// Update audio source to match the exact verse
function updateAudioSource(mood) {
    const audioPlayer = document.querySelector(`#${mood}-page .ayah-audio`);
    if (audioPlayer) {
        const source = audioPlayer.querySelector('source');
        if (source) {
            source.src = audioFiles[mood];
            audioPlayer.load(); // Reload the audio player with new source
            
            // Reset playback to start
            audioPlayer.currentTime = 0;
        }
    }
}
// update team members based on language
function updateTeamMembers() {
    const teamContainer = document.getElementById('teamContainer');
    if (!teamContainer) return;
    
    // Clear current team
    teamContainer.innerHTML = '';
    
    // Get team data for current language
    const teamMembers = teamMembersData[currentLang] || teamMembersData.en;
 // Create and add team member cards
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';
        
        memberCard.innerHTML = `
            <img src="${member.photo}" alt="${member.name}" class="member-photo">
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <p class="member-bio">${member.bio}</p>
            </div>
        `;
        
        teamContainer.appendChild(memberCard);
    });
}
// Change language function
function changeLanguage(lang) {
    currentLang = lang;
    const texts = content[lang];
    
    // Update all text content
    document.getElementById('logo-text').textContent = texts.logo;
    document.getElementById('home-link').textContent = texts.home;
    document.getElementById('about-link').textContent = texts.about;
    document.getElementById('welcome-title').textContent = texts.welcomeTitle;
    document.getElementById('welcome-text').textContent = texts.welcomeText;
    document.getElementById('sad-title').textContent = texts.sad;
    document.getElementById('sad-desc').textContent = texts.sadDesc;
    document.getElementById('anxious-title').textContent = texts.anxious;
    document.getElementById('anxious-desc').textContent = texts.anxiousDesc;
    document.getElementById('happy-title').textContent = texts.happy;
    document.getElementById('happy-desc').textContent = texts.happyDesc;
    document.getElementById('angry-title').textContent = texts.angry;
    document.getElementById('angry-desc').textContent = texts.angryDesc;
    document.getElementById('grateful-title').textContent = texts.grateful;
    document.getElementById('grateful-desc').textContent = texts.gratefulDesc;
    document.getElementById('back-text').textContent = texts.back;
    document.getElementById('hadith-title').textContent = texts.hadith;
    document.getElementById('about-title').textContent = texts.aboutTitle;
    document.getElementById('about-text1').textContent = texts.aboutText1;
    document.getElementById('about-text2').textContent = texts.aboutText2;
    document.getElementById('about-features').textContent = texts.aboutFeatures;
    document.getElementById('about-closing').textContent = texts.aboutClosing;
    
    // Update features list
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    texts.featuresList.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
        featuresList.appendChild(li);
    });
// UPDATE FEATURE ITEMS
    const featureItems = document.querySelectorAll('.feature-item span');
    if (lang === 'ar') {
        // Arabic translations for feature items
        if (featureItems.length >= 3) {
            featureItems[0].textContent = "آيات قرآنية";
            featureItems[1].textContent = "توجيه من الحديث";
            featureItems[2].textContent = "تلاوة صوتية";
        }
    } else {
        // English translations for feature items
        if (featureItems.length >= 3) {
            featureItems[0].textContent = "Quranic Verses";
            featureItems[1].textContent = "Hadith Guidance";
            featureItems[2].textContent = "Audio Recitation";
        }
    }
    
    // Update mood page content if we're on a mood page
    const currentMoodPage = document.querySelector('.mood-page[style*="display: block"]');
    if (currentMoodPage) {
        const mood = currentMoodPage.id.replace('-page', '');
        updateMoodPageContent(mood);
        updateAudioSource(mood);
    }
    
    // Change page direction for Arabic
    if (lang === 'ar') {
        document.body.classList.add('arabic');
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
        
        // Adjust layout for RTL
        document.querySelectorAll('.ayah-header').forEach(header => {
            header.style.flexDirection = 'row-reverse';
        });
    } else {
        document.body.classList.remove('arabic');
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        
        // Reset layout for LTR
        document.querySelectorAll('.ayah-header').forEach(header => {
            header.style.flexDirection = 'row';
        });
    } 
     // Update team members when language changes
    updateTeamMembers();
}
    
