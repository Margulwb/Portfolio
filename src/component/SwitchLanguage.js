export function SwitchLanguage(language) {
    const ContentPage = {
        en:{
            aboutMe:{
                heading:"Hi, I'm Maciek",
                aFewWordAboutMe:
                <>
                    DevOps Engineer with over 2.5 years of experience in designing and maintaining CI/CD processes, managing infrastructure using IaC
                    tools (Terraform, Ansible), and containerizing applications with Docker. I optimized CI processes in monorepositories, allowing for more
                    efficient management and deployment of applications across multiple projects. I migrated CI/CD processes from Jenkins to Azure DevOps,
                    simplifying pipeline management and increasing the efficiency of development teams. Additionally, I created standards for IT projects in
                    Azure DevOps, which enabled process optimization and accelerated the introduction of new functionalities into the system. The entire
                    infrastructure and CI/CD configuration was written in Terraform, ensuring full automation and easier environment management. Currently, I
                    am expanding my skills in Kubernetes and GitOps. I focus on automation, security, and effective collaboration with development teams to
                    ensure stable and efficient environments.
                </>,
            },
            techStack:{
                heading:"Tech Stack",
            },
            myProject:{
                heading:"My Projects",
            },
            footer:{
                heading:"Contact",
            }
        },
        pl:{
            aboutMe:{
                heading:"Cześć, tutaj Maciek",
                aFewWordAboutMe:
                <>
                    DevOps Engineer z ponad 2,5-letnim doświadczeniem w projektowaniu i utrzymywaniu procesów CI/CD, zarządzaniu infrastrukturą za
                    pomocą narzędzi IaC (Terraform, Ansible) oraz konteneryzacją aplikacji w Docker. Zoptymalizowałem procesy CI w monorepozytoriach, co
                    pozwoliło na bardziej efektywne zarządzanie i wdrażanie aplikacji w wielu projektach. Dokonałem migracji procesów CI/CD z Jenkins na
                    Azure DevOps, co pozwoliło na uproszczenie zarządzania pipeline'ami oraz zwiększenie wydajności zespołów deweloperskich.
                    Dodatkowo stworzyłem standardy projektów informatycznych w Azure DevOps, co umożliwiło optymalizację procesów oraz przyspieszenie
                    wprowadzania nowych funkcjonalności do systemu. Cała konfiguracja infrastruktury oraz procesów CI/CD została napisana w Terraformie,
                    co zapewniło pełną automatyzację i łatwiejsze zarządzanie środowiskami. Obecnie rozwijam kompetencje w zakresie Kubernetes oraz
                    GitOps. Skupiam się na automatyzacji, bezpieczeństwie oraz efektywnej współpracy z zespołami deweloperskimi w celu zapewnienia
                    stabilnych i wydajnych środowisk
                </>,
            },
            techStack:{
                heading:"Poznane Technologie",
            },
            myProject:{
                heading:"Moje Projekty",
            },
            footer:{
                heading:"Kontakt",
            }
        },
    }

    if(language==='EN') return ContentPage.en
    if(language==='PL') return ContentPage.pl
}