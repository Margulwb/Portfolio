export function SwitchLanguage(language) {
    const ContentPage = {
        en: {
            aboutMe: {
                heading: "Hi, I'm Maciek",
                aFewWordAboutMe: (
                    <>
                        <p><strong>DevOps Engineer</strong> with over <strong>2.5 years of experience</strong> in:</p>
                        <ul>
                            <li>Designing and maintaining <strong>CI/CD processes</strong>.</li>
                            <li>Managing infrastructure using <strong>IaC tools</strong> like Terraform and Ansible.</li>
                            <li>Containerizing applications with <strong>Docker</strong>.</li>
                        </ul>
                        <p>I optimized CI processes in monorepositories, enabling efficient management and deployment across multiple projects.</p>
                        <p>I migrated CI/CD processes from <strong>Jenkins</strong> to <strong>Azure DevOps</strong>, simplifying pipeline management and boosting team efficiency.</p>
                        <p>Additionally, I established standards for IT projects in Azure DevOps, optimizing processes and accelerating feature delivery.</p>
                        <p>All infrastructure and CI/CD configurations were automated using <strong>Terraform</strong>, ensuring easier environment management.</p>
                        <p>Currently, I am expanding my skills in <strong>Kubernetes</strong> and <strong>GitOps</strong>.</p>
                        <p>My focus is on <strong>automation</strong>, <strong>security</strong>, and effective collaboration with development teams to ensure stable and efficient environments.</p>
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