export function SwitchLanguage(language) {
    const ContentPage = {
        en: {
            aboutMe: {
                heading: "Hi, I'm Maciek",
                aFewWordAboutMe: (
                    <>
                        siema
                    </>
                ),
            },
            techStack: {
                heading: "Tech Stack",
                SecoundHeading: ["Devops", "Frontend"],
            },
            myProject: {
                heading: "My Projects",
                SecoundHeading: ["Project Management", "Development"],
            },
            footer: {
                heading: "Contact",
            },
        },
        pl: {
            aboutMe: {
                heading: "Cześć, tutaj Maciek",
                aFewWordAboutMe: (
                    <>
                        <p><strong>DevOps Engineer</strong> z ponad <strong>2,5-letnim doświadczeniem</strong> w:</p>
                        <ul>
                            <li>Projektowaniu i rozwijaniu <strong>procesów CI/CD</strong>.</li>
                            <li>Zarządzaniu infrastrukturą za pomocą <strong>narzędzi IaC</strong>, takich jak Terraform i Ansible.</li>
                            <li>Konteneryzacji aplikacji w <strong>Docker</strong>.</li>
                        </ul>
                        <p>Zoptymalizowałem procesy CI w monorepozytoriach, co umożliwiło efektywne zarządzanie i wdrażanie aplikacji w wielu projektach.</p>
                        <p>Przeprowadziłem migrację procesów CI/CD z <strong>Jenkins</strong> na <strong>Azure DevOps</strong>, upraszczając zarządzanie pipeline'ami i zwiększając wydajność zespołów.</p>
                        <p>Dodatkowo stworzyłem standardy projektów IT w Azure DevOps, co zoptymalizowało procesy i przyspieszyło wprowadzanie nowych funkcjonalności.</p>
                        <p>Cała infrastruktura i konfiguracja CI/CD zostały zautomatyzowane za pomocą <strong>Terraform</strong>, co ułatwiło zarządzanie środowiskami.</p>
                        <p>Obecnie rozwijam kompetencje w zakresie <strong>Kubernetes</strong> i <strong>GitOps</strong>.</p>
                        <p>Skupiam się na <strong>automatyzacji</strong>, <strong>bezpieczeństwie</strong> oraz efektywnej współpracy z zespołami deweloperskimi, aby zapewnić stabilne i wydajne środowiska.</p>
                    </>
                ),
            },
            techStack: {
                heading: "Poznane Technologie",
            },
            myProject: {
                heading: "Moje Projekty",
            },
            footer: {
                heading: "Kontakt",
            },
        },
    };

    if (language === 'EN') return ContentPage.en;
    if (language === 'PL') return ContentPage.pl;
    return null
}