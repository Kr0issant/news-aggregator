const country_db = {
    "australia": "au",
    "brazil": "br",
    "canada": "ca",
    "china": "cn",
    "egypt": "eg",
    "france": "fr",
    "germany": "de",
    "greece": "gr",
    "hong kong": "hk",
    "india": "in",
    "ireland": "ie",
    "italy": "it",
    "japan": "jp",
    "netherlands": "nl",
    "norway": "no",
    "pakistan": "pk",
    "peru": "pe",
    "philippines": "ph",
    "portugal": "pt",
    "romania": "ro",
    "russian federation": "ru",
    "singapore": "sg",
    "spain": "es",
    "sweden": "se",
    "switzerland": "ch",
    "taiwan": "tw",
    "ukraine": "ua",
    "united kingdom": "gb",
    "uk": "gb",
    "united states": "us",
    "united states of america": "us",
    "usa": "us"
}

export function parser(country) {
    country = country.toLowerCase();

    if (Object.values(country_db).includes(country)) { return country; }
    if (Object.keys(country_db).includes(country)) { return country_db[country]; }
    return "in";
}