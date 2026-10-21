import { EmployeeTaskData } from "../components/EmployeeTaskCard";

interface ShiftData {
  main: EmployeeTaskData[];
  northWest: EmployeeTaskData[];
  south: EmployeeTaskData[];
}

interface DayData {
  shift1: ShiftData;
  shift2: ShiftData;
  shift3: ShiftData;
}

interface EmployeeDatabase {
  [date: string]: DayData;
}

export const employeeDatabase: EmployeeDatabase = {
  // Today (Oct 14)
  "2024-10-14": {
    shift1: {
      main: [
        {
          name: "Jordan Suguitan",
          role: "HouseKeeper",
          location: "Room 101/A",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 45,
          timeIndicator: "30 mins left",
          department: "Behavioral Health",
          dutyList: "Psychiatry Unit",
          additionalTags: ["3rd Floor"],
          extraAssignments: 2,
        },
        {
          name: "Josh Penderville",
          role: "HouseKeeper",
          location: "Room 102/B",
          operatorStatus: "in-progress",
          workStatus: "ahead",
          progress: 72,
          timeIndicator: "for 15 mins",
          department: "ICU",
          dutyList: "East Wing",
        },
        {
          name: "Sadia Atzenhofer",
          role: "HouseKeeper",
          location: "Room 303/A",
          workStatus: "inactive",
          progress: 0,
          department: "Behavioral Health",
          dutyList: "Pediatrics",
        },
        {
          name: "Anup Lobo",
          role: "HouseKeeper",
          location: "Room 202/A",
          operatorStatus: "in-progress",
          workStatus: "behind",
          progress: 18,
          timeIndicator: "for 30 mins",
          department: "Cardiology",
          dutyList: "South Wing",
        },
        {
          name: "Panch Arthaballe",
          role: "HouseKeeper",
          location: "Room 240/B",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 55,
          timeIndicator: "30 mins left",
          department: "Oncology",
          dutyList: "West Wing",
          additionalTags: ["6th Floor"],
          extraAssignments: 2,
        },
        {
          name: "Mark Bajorski",
          role: "HouseKeeper",
          location: "Room 574/A",
          operatorStatus: "idle",
          workStatus: "ahead",
          progress: 88,
          timeIndicator: "for 10 mins",
          department: "Med-Surg",
          dutyList: "5th Floor",
        },
      ],
      northWest: [
        {
          name: "Sarah Martinez",
          role: "HouseKeeper",
          location: "Room 401/C",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 62,
          timeIndicator: "25 mins left",
          department: "Emergency Dept",
          dutyList: "Trauma Center",
        },
        {
          name: "David Chen",
          role: "HouseKeeper",
          location: "Room 305/B",
          operatorStatus: "active",
          workStatus: "ahead",
          progress: 76,
          timeIndicator: "ahead by 20 mins",
          department: "Orthopedics",
          dutyList: "North Wing",
        },
        {
          name: "Lisa Thompson",
          role: "HouseKeeper",
          location: "Room 210/A",
          workStatus: "inactive",
          progress: 0,
          department: "Maternity",
          dutyList: "Labor & Delivery",
          additionalTags: ["2nd Floor"],
        },
      ],
      south: [
        {
          name: "Michael Brown",
          role: "HouseKeeper",
          location: "Room 150/D",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 38,
          timeIndicator: "40 mins left",
          department: "Neurology",
          dutyList: "Stroke Unit",
        },
        {
          name: "Emily Davis",
          role: "HouseKeeper",
          location: "Room 225/C",
          operatorStatus: "on-break",
          workStatus: "on-track",
          progress: 42,
          timeIndicator: "15 min break",
          department: "Radiology",
          dutyList: "Imaging Center",
        },
        {
          name: "Robert Wilson",
          role: "HouseKeeper",
          location: "Room 310/B",
          operatorStatus: "in-progress",
          workStatus: "behind",
          progress: 25,
          timeIndicator: "behind by 35 mins",
          department: "Operating Room",
          dutyList: "Surgical Suite",
          additionalTags: ["PACU"],
        },
        {
          name: "Amanda Garcia",
          role: "HouseKeeper",
          location: "Room 440/A",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 67,
          timeIndicator: "on schedule",
          department: "ICU",
          dutyList: "Critical Care",
          additionalTags: ["Step-Down Unit", "Telemetry", "4th Floor"],
        },
        {
          name: "James Taylor",
          role: "HouseKeeper",
          location: "Room 520/C",
          operatorStatus: "idle",
          workStatus: "ahead",
          progress: 91,
          timeIndicator: "early finish",
          department: "Rehabilitation",
          dutyList: "Physical Therapy",
        },
      ],
    },
    shift2: {
      main: [
        {
          name: "Carlos Rodriguez",
          role: "HouseKeeper",
          location: "Room 125/B",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 52,
          timeIndicator: "2 hours left",
          department: "Cardiology",
          dutyList: "Cardiac Unit",
          additionalTags: ["2nd Floor"],
        },
        {
          name: "Nina Patel",
          role: "HouseKeeper",
          location: "Room 302/A",
          operatorStatus: "active",
          workStatus: "ahead",
          progress: 68,
          timeIndicator: "ahead by 45 mins",
          department: "Pediatrics",
          dutyList: "Children's Ward",
        },
        {
          name: "Kevin Liu",
          role: "HouseKeeper",
          location: "Room 415/C",
          operatorStatus: "in-progress",
          workStatus: "behind",
          progress: 33,
          timeIndicator: "behind by 20 mins",
          department: "Oncology",
          dutyList: "Cancer Center",
        },
        {
          name: "Maria Santos",
          role: "HouseKeeper",
          location: "Room 218/D",
          operatorStatus: "idle",
          workStatus: "on-track",
          progress: 48,
          department: "Neurology",
          dutyList: "Neuro ICU",
        },
      ],
      northWest: [
        {
          name: "Ahmed Hassan",
          role: "HouseKeeper",
          location: "Room 510/A",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 59,
          timeIndicator: "1.5 hours left",
          department: "Surgical",
          dutyList: "OR Complex",
        },
        {
          name: "Jennifer Kim",
          role: "HouseKeeper",
          location: "Room 335/B",
          workStatus: "inactive",
          progress: 0,
          department: "Dialysis",
          dutyList: "Renal Unit",
        },
      ],
      south: [
        {
          name: "Thomas Anderson",
          role: "HouseKeeper",
          location: "Room 180/C",
          operatorStatus: "on-break",
          workStatus: "ahead",
          progress: 73,
          timeIndicator: "30 min break",
          department: "Emergency Dept",
          dutyList: "ER",
        },
        {
          name: "Rachel Green",
          role: "HouseKeeper",
          location: "Room 405/A",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 44,
          department: "Orthopedics",
          dutyList: "Joint Replacement",
        },
        {
          name: "Daniel Park",
          role: "HouseKeeper",
          location: "Room 290/B",
          operatorStatus: "active",
          workStatus: "behind",
          progress: 22,
          timeIndicator: "behind by 40 mins",
          department: "Gastroenterology",
          dutyList: "GI Unit",
        },
      ],
    },
    shift3: {
      main: [
        {
          name: "Patricia Moore",
          role: "HouseKeeper",
          location: "Room 115/A",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 41,
          department: "ICU",
          dutyList: "Night Shift ICU",
        },
        {
          name: "Christopher Lee",
          role: "HouseKeeper",
          location: "Room 250/C",
          operatorStatus: "active",
          workStatus: "ahead",
          progress: 79,
          timeIndicator: "ahead by 30 mins",
          department: "Med-Surg",
          dutyList: "Floor 5",
        },
        {
          name: "Michelle Zhang",
          role: "HouseKeeper",
          location: "Room 330/B",
          workStatus: "inactive",
          progress: 0,
          department: "Maternity",
          dutyList: "Postpartum",
        },
      ],
      northWest: [
        {
          name: "Brandon Scott",
          role: "HouseKeeper",
          location: "Room 420/D",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 56,
          department: "Emergency Dept",
          dutyList: "Night ER",
        },
        {
          name: "Olivia Martinez",
          role: "HouseKeeper",
          location: "Room 185/A",
          operatorStatus: "idle",
          workStatus: "ahead",
          progress: 85,
          department: "Radiology",
          dutyList: "Imaging",
        },
      ],
      south: [
        {
          name: "Gregory Hall",
          role: "HouseKeeper",
          location: "Room 275/C",
          operatorStatus: "on-break",
          workStatus: "on-track",
          progress: 49,
          department: "Cardiology",
          dutyList: "Cardiac Care",
        },
      ],
    },
  },
  // Yesterday (Oct 13)
  "2024-10-13": {
    shift1: {
      main: [
        {
          name: "William Johnson",
          role: "HouseKeeper",
          location: "Room 155/B",
          operatorStatus: "active",
          workStatus: "ahead",
          progress: 95,
          timeIndicator: "completed early",
          department: "ICU",
          dutyList: "Critical Care",
        },
        {
          name: "Sophia Anderson",
          role: "HouseKeeper",
          location: "Room 220/A",
          operatorStatus: "active",
          workStatus: "on-track",
          progress: 89,
          department: "Pediatrics",
          dutyList: "Children's Unit",
        },
      ],
      northWest: [
        {
          name: "Ethan White",
          role: "HouseKeeper",
          location: "Room 340/C",
          operatorStatus: "active",
          workStatus: "ahead",
          progress: 92,
          department: "Surgery",
          dutyList: "Post-Op",
        },
      ],
      south: [
        {
          name: "Isabella Thomas",
          role: "HouseKeeper",
          location: "Room 460/D",
          operatorStatus: "active",
          workStatus: "on-track",
          progress: 87,
          department: "Oncology",
          dutyList: "Chemo Unit",
        },
      ],
    },
    shift2: {
      main: [
        {
          name: "Alexander Brown",
          role: "HouseKeeper",
          location: "Room 175/A",
          operatorStatus: "active",
          workStatus: "ahead",
          progress: 94,
          department: "Emergency Dept",
          dutyList: "ER Bay",
        },
      ],
      northWest: [],
      south: [
        {
          name: "Mia Martinez",
          role: "HouseKeeper",
          location: "Room 390/B",
          operatorStatus: "active",
          workStatus: "on-track",
          progress: 90,
          department: "Radiology",
          dutyList: "Imaging Suite",
        },
      ],
    },
    shift3: {
      main: [
        {
          name: "Jacob Garcia",
          role: "HouseKeeper",
          location: "Room 205/C",
          operatorStatus: "active",
          workStatus: "ahead",
          progress: 96,
          department: "ICU",
          dutyList: "Night ICU",
        },
      ],
      northWest: [],
      south: [],
    },
  },
  // Tomorrow (Oct 15)
  "2024-10-15": {
    shift1: {
      main: [
        {
          name: "Charlotte Davis",
          role: "HouseKeeper",
          location: "Room 130/A",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 15,
          timeIndicator: "just started",
          department: "Med-Surg",
          dutyList: "Floor 3",
        },
        {
          name: "Benjamin Wilson",
          role: "HouseKeeper",
          location: "Room 245/B",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 28,
          department: "Cardiology",
          dutyList: "Cardiac Floor",
        },
        {
          name: "Amelia Taylor",
          role: "HouseKeeper",
          location: "Room 360/C",
          operatorStatus: "in-progress",
          workStatus: "ahead",
          progress: 35,
          timeIndicator: "ahead by 10 mins",
          department: "Orthopedics",
          dutyList: "Ortho Unit",
        },
      ],
      northWest: [
        {
          name: "Lucas Moore",
          role: "HouseKeeper",
          location: "Room 195/D",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 22,
          department: "Neurology",
          dutyList: "Neuro Floor",
        },
      ],
      south: [
        {
          name: "Harper Jackson",
          role: "HouseKeeper",
          location: "Room 280/A",
          operatorStatus: "in-progress",
          workStatus: "behind",
          progress: 12,
          timeIndicator: "behind by 15 mins",
          department: "Pediatrics",
          dutyList: "NICU",
        },
        {
          name: "Mason Lee",
          role: "HouseKeeper",
          location: "Room 425/B",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 31,
          department: "ICU",
          dutyList: "Intensive Care",
        },
      ],
    },
    shift2: {
      main: [
        {
          name: "Evelyn Harris",
          role: "HouseKeeper",
          location: "Room 165/C",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 18,
          department: "Emergency Dept",
          dutyList: "Trauma Bay",
        },
      ],
      northWest: [
        {
          name: "Logan Martin",
          role: "HouseKeeper",
          location: "Room 315/A",
          operatorStatus: "in-progress",
          workStatus: "ahead",
          progress: 42,
          department: "Surgery",
          dutyList: "Pre-Op",
        },
      ],
      south: [],
    },
    shift3: {
      main: [],
      northWest: [],
      south: [],
    },
  },
  // Day after tomorrow (Oct 16)
  "2024-10-16": {
    shift1: {
      main: [
        {
          name: "Ella Thompson",
          role: "HouseKeeper",
          location: "Room 140/B",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 8,
          department: "Oncology",
          dutyList: "Radiation Therapy",
        },
      ],
      northWest: [],
      south: [
        {
          name: "Sebastian White",
          role: "HouseKeeper",
          location: "Room 235/D",
          operatorStatus: "in-progress",
          workStatus: "on-track",
          progress: 11,
          department: "Maternity",
          dutyList: "Mother-Baby Unit",
        },
      ],
    },
    shift2: {
      main: [],
      northWest: [],
      south: [],
    },
    shift3: {
      main: [],
      northWest: [],
      south: [],
    },
  },

  // Yesterday (Oct 13) - All employees completed their work
  "2024-10-13": {
    shift1: {
      main: [
        {
          name: "Jordan Suguitan",
          role: "HouseKeeper",
          location: "Room 101/A",
          workStatus: "on-track",
          progress: 100,
          department: "Behavioral Health",
          dutyList: "Psychiatry Unit",
          additionalTags: ["3rd Floor"],
          extraAssignments: 2,
        },
        {
          name: "Josh Penderville",
          role: "HouseKeeper",
          location: "Room 102/B",
          workStatus: "on-track",
          progress: 100,
          department: "ICU",
          dutyList: "East Wing",
        },
        {
          name: "Anup Lobo",
          role: "HouseKeeper",
          location: "Room 202/A",
          workStatus: "on-track",
          progress: 100,
          department: "Cardiology",
          dutyList: "South Wing",
        },
      ],
      northWest: [
        {
          name: "Sarah Martinez",
          role: "HouseKeeper",
          location: "Room 401/C",
          workStatus: "on-track",
          progress: 100,
          department: "Surgery",
          dutyList: "OR Suite",
        },
      ],
      south: [
        {
          name: "Michael Chen",
          role: "HouseKeeper",
          location: "Room 502/A",
          workStatus: "on-track",
          progress: 100,
          department: "Emergency",
          dutyList: "ER Unit",
        },
      ],
    },
    shift2: {
      main: [],
      northWest: [],
      south: [],
    },
    shift3: {
      main: [],
      northWest: [],
      south: [],
    },
  },

  // Day after tomorrow (Oct 16) - All employees inactive with N/A status
  "2024-10-16": {
    shift1: {
      main: [
        {
          name: "Jordan Suguitan",
          role: "HouseKeeper",
          location: "Room 101/A",
          workStatus: "inactive",
          progress: 0,
          department: "Behavioral Health",
          dutyList: "Psychiatry Unit",
          additionalTags: ["3rd Floor"],
          extraAssignments: 2,
        },
        {
          name: "Josh Penderville",
          role: "HouseKeeper",
          location: "Room 102/B",
          workStatus: "inactive",
          progress: 0,
          department: "ICU",
          dutyList: "East Wing",
        },
        {
          name: "Anup Lobo",
          role: "HouseKeeper",
          location: "Room 202/A",
          workStatus: "inactive",
          progress: 0,
          department: "Cardiology",
          dutyList: "South Wing",
        },
      ],
      northWest: [
        {
          name: "Sarah Martinez",
          role: "HouseKeeper",
          location: "Room 401/C",
          workStatus: "inactive",
          progress: 0,
          department: "Surgery",
          dutyList: "OR Suite",
        },
      ],
      south: [
        {
          name: "Michael Chen",
          role: "HouseKeeper",
          location: "Room 502/A",
          workStatus: "inactive",
          progress: 0,
          department: "Emergency",
          dutyList: "ER Unit",
        },
      ],
    },
    shift2: {
      main: [],
      northWest: [],
      south: [],
    },
    shift3: {
      main: [],
      northWest: [],
      south: [],
    },
  },
};

export function getEmployeesForDateAndShifts(
  date: string,
  shifts: string[]
): { main: EmployeeTaskData[]; northWest: EmployeeTaskData[]; south: EmployeeTaskData[] } {
  const dayData = employeeDatabase[date];
  
  if (!dayData) {
    return { main: [], northWest: [], south: [] };
  }

  // Combine employees from all selected shifts
  const combinedData = {
    main: [] as EmployeeTaskData[],
    northWest: [] as EmployeeTaskData[],
    south: [] as EmployeeTaskData[],
  };

  shifts.forEach((shiftId) => {
    const shiftKey = shiftId as keyof DayData;
    const shiftData = dayData[shiftKey];
    
    if (shiftData) {
      combinedData.main.push(...shiftData.main);
      combinedData.northWest.push(...shiftData.northWest);
      combinedData.south.push(...shiftData.south);
    }
  });

  return combinedData;
}
