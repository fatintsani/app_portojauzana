// Import images
import smartSafeImg1 from '../assets/portfolio/smart_safe_security_system_with_sensor_iot_monitoring/foto1.jpeg';
import smartSafeImg2 from '../assets/portfolio/smart_safe_security_system_with_sensor_iot_monitoring/foto2.jpeg';
import tstImg1 from '../assets/portfolio/telyu_snack_track_TST_food_ordering_system/foto1.jpeg';
import tstImg2 from '../assets/portfolio/telyu_snack_track_TST_food_ordering_system/foto2.jpeg';
import robotImg1 from '../assets/portfolio/line_follower_robot_configuration/foto1.jpeg';
import cableImg1 from '../assets/portfolio/network_cable_crimping_testing/foto1.jpeg';
import bridgeImg1 from '../assets/portfolio/network_bridge_eoip_configuration/foto1.jpeg';
import bridgeImg2 from '../assets/portfolio/network_bridge_eoip_configuration/foto2.jpeg';
import packetImg1 from '../assets/portfolio/network_packet_analysis_arp_spoofing/foto1.jpeg';
import signalImg1 from '../assets/portfolio/signal_reconstruction_interpolation/foto1.jpeg';
import ukmBogorImg1 from '../assets/portfolio/art_division_team_student_cultural_organization_ukm_daerah_bogor/foto1.jpeg';
import ukmBogorImg2 from '../assets/portfolio/art_division_team_student_cultural_organization_ukm_daerah_bogor/foto2.jpeg';
import ccnaImg1 from '../assets/portfolio/routing_and_switching/ccna_page-0001.jpg';
import aiesecImg1 from '../assets/portfolio/aisec_youth_engagement/YTJA2024Certificate_page-0001.jpg';
import profileImg from '../assets/profile.jpeg';

export const portfolioData = [
    {
        id: "smart-safe",
        title: "Smart Safe Security System with Sensor & IoT Monitoring",
        category: "IoT & Embedded Systems",
        description: "Developed a smart security system for a safe using multiple sensors (PIR, ultrasonic, vibration) and IoT-based monitoring with Bluetooth notifications and Android app integration.",
        fullDescription: "In this project, I developed a smart security system for a safe (brankas) using multiple sensors and IoT-based monitoring. The system is designed to detect suspicious activities such as unauthorized access, forced door opening, or unusual vibrations using sensors like PIR (motion sensor) and ultrasonic sensor. These sensors continuously monitor the environment and send real-time data to the microcontroller.\n\nThe collected sensor data is then processed to determine whether the condition is safe or dangerous. When a threat is detected, the system automatically activates an alarm (buzzer) as a warning signal. At the same time, the system sends notifications to a smartphone via a Bluetooth module (HC-05), allowing users to monitor the security status remotely through an Android application.\n\nAdditionally, the system displays real-time status on an LCD with I2C interface, providing local monitoring directly from the hardware.",
        img: smartSafeImg1,
        images: [smartSafeImg1, smartSafeImg2],
        tags: ["Arduino", "IoT", "Sensors", "Bluetooth", "Android"],
        features: ["Motion & intrusion detection", "Real-time alert system", "Bluetooth communication", "Android monitoring"],
        date: "2024"
    },
    {
        id: "telyu-snack",
        title: "Telyu Snack Track (TST) – Food Ordering System",
        category: "Software Development",
        description: "A digital platform designed to simplify food ordering within Telkom University with pick-up and delivery options, implemented using C++.",
        fullDescription: "Telyu Snack Track (TST) is a digital platform designed to simplify food ordering within Telkom University. The system allows users to order food efficiently from campus canteens using flexible service options like Pick-up & Delivery.\n\nTechnical Implementation using C++ with concepts like Arrays, Looping, Branching, and Structures for menu and order management.",
        img: tstImg1,
        images: [tstImg1, tstImg2],
        tags: ["C++", "Data Structures", "System Design"],
        features: ["Pick-up & Delivery system", "Digital payment options", "Menu display", "Order summary"],
        date: "2023"
    },
    {
        id: "robot-config",
        title: "Line Follower Robot Configuration",
        category: "Robotics",
        description: "Configured and programmed a line follower robot using Arduino IDE, integrating 8 photodiode sensors and motor drivers for autonomous movement.",
        fullDescription: "In this lab activity, I configured and programmed a line follower robot using Arduino IDE by integrating multiple sensors, motor drivers, and control logic to enable the robot to follow a line autonomously. Connected 8 photodiode sensors to detect line position and implemented PWM motor control.",
        img: robotImg1,
        images: [robotImg1],
        tags: ["Robotics", "Arduino", "Sensors", "PWM"],
        date: "2024"
    },
    {
        id: "network-bridge",
        title: "Network Bridge & EoIP Configuration",
        category: "Networking",
        description: "Simulated a Layer 2 connection between remote locations over an IP network using MikroTik routers and EoIP tunneling.",
        fullDescription: "Simulated a connection between two different locations over an IP network via the internet. Created an EoIP tunnel between Router A and Router B, allowing Ethernet frames to be encapsulated and transmitted across the network, effectively joining remote networks into a single Layer 2 LAN.",
        img: bridgeImg1,
        images: [bridgeImg1, bridgeImg2],
        tags: ["MikroTik", "Networking", "EoIP", "Bridging"],
        date: "2024"
    },
    {
        id: "network-cable",
        title: "Network Cable Crimping & Testing (RJ45)",
        category: "Networking",
        description: "Performed professional network cable assembly following T568B standards and verified continuity using an RJ45 cable tester.",
        fullDescription: "Performed both network cable assembly (crimping) and cable testing using an RJ45 cable tester. Arranged internal wires according to T568B standard and verified continuity for each pin to ensure no cross, short, or open connections.",
        img: cableImg1,
        images: [cableImg1],
        tags: ["Networking", "Hardware", "Cabling"],
        date: "2023"
    },
    {
        id: "packet-analysis",
        title: "Network Packet Analysis & ARP Spoofing",
        category: "Cybersecurity",
        description: "Conducted traffic analysis using Wireshark and simulated MITM attacks via ARP Spoofing to understand network vulnerabilities.",
        fullDescription: "Performed network traffic analysis and simulated cybersecurity attacks using Wireshark and Bettercap. Analyzed ICMP and HTTP protocols, observing how sensitive data can be intercepted. Simulated MITM attacks via ARP Spoofing to demonstrate network security risks.",
        img: packetImg1,
        images: [packetImg1],
        tags: ["Cybersecurity", "Wireshark", "Bettercap", "MITM"],
        date: "2024"
    },
    {
        id: "signal-reconstruction",
        title: "Signal Reconstruction & Interpolation",
        category: "Signal Processing",
        description: "Implemented signal sampling and reconstruction methods including ZOH, FOH, and Sinc interpolation using Python.",
        fullDescription: "Performed signal sampling and reconstruction using Python to understand how digital signals approximate continuous signals. Implemented Zero-Order Hold (ZOH), First-Order Hold (FOH), and Sinc interpolation methods for comparison.",
        img: signalImg1,
        images: [signalImg1],
        tags: ["Python", "Signal Processing", "Mathematics"],
        date: "2024"
    },
    {
        id: "routing-switching",
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        category: "Certification",
        description: "Cisco Networking Academy certification validating skills in configuring network devices, VLANs, and troubleshooting real-world issues.",
        fullDescription: "Validated understanding of fundamental networking concepts including configuration and management of switching, routing, and wireless networks in real-world environments at Telkom University Cisco Academy.",
        img: ccnaImg1,
        images: [ccnaImg1],
        tags: ["CCNA", "Cisco", "Networking"],
        date: "2024"
    },
    {
        id: "huawei-ict",
        title: "Huawei ICT Academy Certification",
        category: "Certification",
        description: "Professional certification from Huawei ICT Academy focusing on modern information and communication technology.",
        fullDescription: "Successfully completed networking training and certification through Huawei ICT Academy, focusing on Routing & Switching and modern ICT infrastructure.",
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"],
        tags: ["Huawei", "ICT", "Networking"],
        date: "2024",
        url: "https://www.credly.com/badges/403978da-359b-4adb-90bf-d9c589581b43/public_url"
    },
    {
        id: "ukm-bogor",
        title: "Art Division Team – Student Cultural Organization",
        category: "Organization",
        description: "Responsible for stage concept design and event decoration for cultural performances and concerts at Telkom University.",
        fullDescription: "Actively participated in designing and preparing stage concepts and event decorations for regional student organization events. Coordinated with technical divisions for lighting and performance flow.",
        img: ukmBogorImg1,
        images: [ukmBogorImg1, ukmBogorImg2],
        tags: ["Event Planning", "Creative", "Teamwork"],
        date: "2023-2024"
    },
    {
        id: "aisec",
        title: "AIESEC Youth Engagement Recognition",
        category: "Leadership",
        description: "Actively engaged in leadership and self-development programs organized by AIESEC to enhance global mindset and communication.",
        fullDescription: "Participated in the Youth Today program to enhance leadership awareness, global mindset, and communication skills through collaborative sessions and discussions.",
        img: aiesecImg1,
        images: [aiesecImg1],
        tags: ["Leadership", "Global Mindset", "Communication"],
        date: "2023"
    }
];
