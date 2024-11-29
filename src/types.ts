export interface Project {
    's.no': number;              // Serial number
    'percentage.funded': number; // Percentage funded
    'amt.pledged': number;       // Amount pledged
    blurb: string;               // Description or blurb of the project
    by: string;                  // The creator of the project
    country: string;             // The country where the project is based
    currency: string;            // Currency used in the project
    'end.time': string;          // End time of the project
    location: string;            // Location of the project
    'num.backers': string;       // Number of backers
    state: string;               // State (if available)
    title: string;               // Title of the project
    type: string;                // Type of project (e.g., "Town")
    url: string;                 // URL of the project
}

export interface ProjectData {
    projects: Project[];         // List of projects
}
