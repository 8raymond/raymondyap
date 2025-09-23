export const siteConfig = {
  name: "Raymond Yap",
  title: "Mechanical Engineer",
  description: "Portfolio website of Raymond Yap",
  accentColor: "#6396c5",
  social: {
    email: "yap.r@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/8ryap/",
  },
  aboutMe: [
  "Hi! My name is <strong>Raymond Yap</strong> and I am a studying mechanical engineer in my 4th year at Northeastern University. I have designed, prototyped, and built hardware across many contexts ranging from aerospace robotics to industrial automation systems.",

  "I dedicate myself towards optimizing designs to their maximum efficiency in both functionality and/or cost, while utilizing CAD, analysis, and Engineering First Principles. I’ve previously worked 2 co-ops (6 mo. each), one at <strong>Blue Origin (Honeybee Robotics)</strong>, and the other at <strong>Instron</strong> under the automation team (see experiences). Between NASA contracted lunar landers and 6-axis robotic arms, I’ve functioned as a mechanical engineer across a multitude of industries and design constraints.",

  "Born and raised in the <strong>Bay Area</strong>, I love hiking through redwoods and enjoying Monterey Bay beaches whenever possible. I also play badminton as my main sport and am currently part of the Northeastern Club Badminton team."
],
  skills: ["CAD", "GD&T", "DFM/DFA", "FEA", "Rapid Prototyping", "Assembly/Machining", "Robotics"],
  projects: [
    {
      name: "Blue Origin Mk-II Lander Rotational Hand Controller Testbed",
      description:
        "Gimbal-mechanism, 3 DOF, motorized testbed for Mk-II Crew Lander (Artemis V, 2030). Designed to achieve entire hand controller pareto frontier and verify torque requirements via ATI multiaxial load cell integration",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["CAD", "GD&T + Stackups", "Stress Analysis", "Motor/Sensor System Design", "Drafting"],
    },
    {
      name: "NASA CP-21 Rover Offloader: Lunar Lander Steward Platform",
      description:
        "3 DOF, +- 20 deg pitch/roll steward platform designed at 1:1 scale to Firefly Aerospace's Blue Ghost lander. Designed to verify rover offloader in various lunar lander orientations; built using 90% COTS components.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["CAD", "DFA", "Excel Automated Stress/CG Analysis", "8020 Prototyping", "Linkage DOF Calculation", "Drafting"],
    },
    {
      name: "Instron Automated XY Stage Compression Pin Cleaning Station",
      description:
        "User-facing debris cleaning/containment chamber designed for automation compression testing. Compartmentalized collection for 300+ testing cycles. Designed for user ergonomics and removal interactions via lid magnets, etc.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["CAD", "DFM", "Material Selection (Mated Surfaces)", "COTS Sourcing", "Drafting"],
    },
    {
      name: "Instron AT3 Automated Torsion Testing Socket Adapter/Grip/Racks",
      description:
        "Self-seating socket adapter for 3-axis automated (nut-bolt + loctite specimen) torsion testing arrangement. Designed to achieve mating across any specimen angular discrepancy. Custom racks/gripper fingers for specimen mounting and manipulation.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["GD&T + Drafting", "CAD", "DFA", "Client Communications"],
    },
  ],
  experience: [
    {
      company: "Blue Origin, Honeybee Robotics",
      title: "Mechanical Engineering Co-op",
      dateRange: "Jan 2025 - Jul 2025",
      bullets: [
        "Owned and designed reusable, 3 DOF, gimbal-mechanism testbed for Blue Origin Mk-II crew lander rotational hand controller torque/reach verification testing; upheld 3-4 month SRR and PDR timelines, receiving approval from Blue/Honeybee senior review boards.",
        "Designed and assembled 1:1 scale lunar lander steward platform using 90% COTS materials (<$3000 raw materials), enabling rover offloading verification for NASA CP-21 mission.",
        "Automated trigonometry dependent power-screw/pulley calculations for rover offloading drive mechanism, streamlining motor sizing/feasability decisions.",
        "Modeled moon-gravity (1/6) rover mass-model with configurable CG; designed with mounting cup-cone interace for offloader testing.",
        "Implemented cost-efficient (<$1000) ultrasound indoor positioning system for precision rover tracking + path replication",
      ],
    },
    {
      company: "Instron (Automation Team)",
      title: "Mechanical Engineering Co-op",
      dateRange: "Jan 2024 - Jul 2024",
      bullets: [
        "Full project ownership + design of custom high-capacity specimen rack assembly for leading smartphone company",
        "Developed and pitched peel-test specimen preparation station + magnetic clip racks to client, resulting in approval and contract",
        "Drafted reference dimensions and datums for ~150 ft^2 6-axis test setup installation, accounting for client site-requirements/dimensions",
        "Designed and sourced 50+ purchase/manufacture parts for pneumatic dual-axis measurement device",
        "Redesigned and implemented bespoke robotic gripppers and components for 6-axis automated arm (AT6) using Solidworks",
        "Engaged with high-demand clients in 20+ hours of Factory Acceptance Testing procedures",
      ],
    },
  ],
  education: [
    {
      school: "Northeastern University",
      degree: "B.S. Mechanical Engineering",
      dateRange: "2022 - 2026",
      achievements: [
        "Dean's Merit Scholarship",
        "Dean's List all semesters",
        "Northeastern Robotics Club: Robot Arm, Robot Dog, Combat Robotics",
        "Mechanical Engineering Computation & Design | System Analysis & Control | Capstone | Mechanics of Materials | Thermal System Analysis | Dynamics | Measurement and Analysis | Fluid Mechanics | Statics | DiffEQ & LinAl",
      ],
    },
    {
      school: "Valley Christian High School",
      degree: "AMSE, STEM student",
      dateRange: "2018 - 2022",
      achievements: [
        "2nd Place Paper/Poster Competition: 2021 American Society for Gravitational and Space Research",
        "Team Lead of the Year: QUEST International Space Station Research Lab",
        "Gold President's Volunteering Award",
        "California Senate Recognition for FLL Robotics Worlds performance",
        "National Merit Scholarship",
        "AP Scholar with Distinction",
      ],
    },
  ],
};
