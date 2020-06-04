export interface InformationRegionsList {
    informationPage:    Informationpage;
    arrayRegions:       Region[];
}

export interface InformationCountries {
    informationPage:    Informationpage;
    arrayCountries:     Country[];
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
    
    region:      Region;
    adminregion: Region;
    incomeLevel: Region;
    lendingType: Region;
    capitalCity: string;
    longitude:   string;
    latitude:    string;
}
