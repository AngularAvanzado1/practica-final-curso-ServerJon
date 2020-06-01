export interface Information {
    informationPage:    Informationpage;
    arrayRegions:       Region[];
}

export interface Informationpage {
    page:       string;
    pages:      string;
    per_page:   string;
    total:      string;
}

export interface Region {
    id:          string;
    code?:       string;
    iso2Code:    string;
    name:        string;
}

export interface Country extends Region {
    
    region:      Inforegion;
    adminregion: Inforegion;
    incomeLevel: Inforegion;
    lendingType: Inforegion;
    capitalCity: string;
    longitude:   string;
    latitude:    string;
}

export interface Inforegion {
    id:       string;
    iso2code: string;
    value:    string;
}