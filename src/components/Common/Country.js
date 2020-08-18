import React from "react";
import 'flag-icon-css/css/flag-icon.min.css';

const countries = {
  "AF": {
    name: "Afghanistan",
  },
  "AL": {
    name: "Albania",
  },
  "DZ": {
    name: "Algeria",
  },
  "AS": {
    name: "American Samoa",
  },
  "AD": {
    name: "Andorra",
  },
  "AO": {
    name: "Angola",
  },
  "AI": {
    name: "Anguilla",
  },
  "AQ": {
    name: "Antarctica",
  },
  "AG": {
    name: "Antigua And Barbuda",
  },
  "AR": {
    name: "Argentina",
  },
  "AM": {
    name: "Armenia",
  },
  "AW": {
    name: "Aruba",
  },
  "AC": {
    name: "Ascension Island",
  },
  "AU": {
    name: "AusEtralia",
  },
  "AT": {
    name: "Austria",
  },
  "AZ": {
    name: "Azerbaijan",
  },
  "BS": {
    name: "Bahamas",
  },
  "BH": {
    name: "Bahrain",
  },
  "BD": {
    name: "Bangladesh",
  },
  "BB": {
    name: "Barbados",
  },
  "BY": {
    name: "Belarus",
  },
  "BE": {
    name: "Belgium",
  },
  "BZ": {
    name: "Belize",
  },
  "BJ": {
    name: "Benin",
  },
  "BM": {
    name: "Bermuda",
  },
  "BT": {
    name: "Bhutan",
  },
  "BO": {
    name: "Bolivia, Plurinational State Of",
  },
  "BQ": {
    name: "Bonaire, Saint Eustatius And Saba",
  },
  "BA": {
    name: "Bosnia & Herzegovina",
  },
  "BW": {
    name: "Botswana",
  },
  "BV": {
    name: "Bouvet Island",
  },
  "BR": {
    name: "Brazil",
  },
  "IO": {
    name: "British Indian Ocean Territory",
  },
  "BN": {
    name: "Brunei Darussalam",
  },
  "BG": {
    name: "Bulgaria",
  },
  "BF": {
    name: "Burkina Faso",
  },
  "BI": {
    name: "Burundi",
  },
  "KH": {
    name: "Cambodia",
  },
  "CM": {
    name: "Cameroon",
  },
  "CA": {
    name: "Canada",
  },
  "IC": {
    name: "Canary Islands",
  },
  "CV": {
    name: "Cape Verde",
  },
  "KY": {
    name: "Cayman Islands",
  },
  "CF": {
    name: "Central African Republic",
  },
  "EA": {
    name: "Ceuta, Mulilla",
  },
  "TD": {
    name: "Chad",
  },
  "CL": {
    name: "Chile",
  },
  "CN": {
    name: "China",
  },
  "CX": {
    name: "Christmas Island",
  },
  "CP": {
    name: "Clipperton Island",
  },
  "CC": {
    name: "Cocos (Keeling) Islands",
  },
  "CO": {
    name: "Colombia",
  },
  "KM": {
    name: "Comoros",
  },
  "CK": {
    name: "Cook Islands",
  },
  "CR": {
    name: "Costa Rica",
  },
  "CI": {
    name: "Cote d'Ivoire",
  },
  "HR": {
    name: "Croatia",
  },
  "CU": {
    name: "Cuba",
  },
  "CW": {
    name: "Curacao",
  },
  "CY": {
    name: "Cyprus",
  },
  "CZ": {
    name: "Czech Republic",
  },
  "CD": {
    name: "Democratic Republic Of Congo",
  },
  "DK": {
    name: "Denmark",
  },
  "DG": {
    name: "Diego Garcia",
  },
  "DJ": {
    name: "Djibouti",
  },
  "DM": {
    name: "Dominica",
  },
  "DO": {
    name: "Dominican Republic",
  },
  "TL": {
    name: "East Timor",
  },
  "EC": {
    name: "Ecuador",
  },
  "EG": {
    name: "Egypt",
  },
  "SV": {
    name: "El Salvador",
  },
  "GQ": {
    name: "Equatorial Guinea",
  },
  "ER": {
    name: "Eritrea",
  },
  "EE": {
    name: "Estonia",
  },
  "ET": {
    name: "Ethiopia",
  },
  "EU": {
    name: "European Union",
  },
  "FK": {
    name: "Falkland Islands",
  },
  "FO": {
    name: "Faroe Islands",
  },
  "FJ": {
    name: "Fiji",
  },
  "FI": {
    name: "Finland",
  },
  "FR": {
    name: "France",
  },
  "FX": {
    name: "France, Metropolitan",
  },
  "GF": {
    name: "French Guiana",
  },
  "PF": {
    name: "French Polynesia",
  },
  "TF": {
    name: "French Southern Territories",
  },
  "GA": {
    name: "Gabon",
  },
  "GM": {
    name: "Gambia",
  },
  "GE": {
    name: "Georgia",
  },
  "DE": {
    name: "Germany",
  },
  "GH": {
    name: "Ghana",
  },
  "GI": {
    name: "Gibraltar",
  },
  "GR": {
    name: "Greece",
  },
  "GL": {
    name: "Greenland",
  },
  "GD": {
    name: "Grenada",
  },
  "GP": {
    name: "Guadeloupe",
  },
  "GU": {
    name: "Guam",
  },
  "GT": {
    name: "Guatemala",
  },
  "GG": {
    name: "Guernsey",
  },
  "GN": {
    name: "Guinea",
  },
  "GW": {
    name: "Guinea-bissau",
  },
  "GY": {
    name: "Guyana",
  },
  "HT": {
    name: "Haiti",
  },
  "HM": {
    name: "Heard Island And McDonald Islands",
  },
  "HN": {
    name: "Honduras",
  },
  "HK": {
    name: "Hong Kong",
  },
  "HU": {
    name: "Hungary",
  },
  "IS": {
    name: "Iceland",
  },
  "IN": {
    name: "India",
  },
  "ID": {
    name: "Indonesia",
  },
  "IR": {
    name: "Iran, Islamic Republic Of",
  },
  "IQ": {
    name: "Iraq",
  },
  "IE": {
    name: "Ireland",
  },
  "IM": {
    name: "Isle Of Man",
  },
  "IL": {
    name: "Israel",
  },
  "IT": {
    name: "Italy",
  },
  "JM": {
    name: "Jamaica",
  },
  "JP": {
    name: "Japan",
  },
  "JE": {
    name: "Jersey",
  },
  "JO": {
    name: "Jordan",
  },
  "KZ": {
    name: "Kazakhstan",
  },
  "KE": {
    name: "Kenya",
  },
  "KI": {
    name: "Kiribati",
  },
  "KP": {
    name: "Korea, Democratic People's Republic Of",
  },
  "KR": {
    name: "Korea, Republic Of",
  },
  "KW": {
    name: "Kuwait",
  },
  "KG": {
    name: "Kyrgyzstan",
  },
  "LA": {
    name: "Lao People's Democratic Republic",
  },
  "LV": {
    name: "Latvia",
  },
  "LB": {
    name: "Lebanon",
  },
  "LS": {
    name: "Lesotho",
  },
  "LR": {
    name: "Liberia",
  },
  "LY": {
    name: "Libya",
  },
  "LI": {
    name: "Liechtenstein",
  },
  "LT": {
    name: "Lithuania",
  },
  "LU": {
    name: "Luxembourg",
  },
  "MO": {
    name: "Macao",
  },
  "MK": {
    name: "Macedonia, The Former Yugoslav Republic Of",
  },
  "MG": {
    name: "Madagascar",
  },
  "MW": {
    name: "Malawi",
  },
  "MY": {
    name: "Malaysia",
  },
  "MV": {
    name: "Maldives",
  },
  "ML": {
    name: "Mali",
  },
  "MT": {
    name: "Malta",
  },
  "MH": {
    name: "Marshall Islands",
  },
  "MQ": {
    name: "Martinique",
  },
  "MR": {
    name: "Mauritania",
  },
  "MU": {
    name: "Mauritius",
  },
  "YT": {
    name: "Mayotte",
  },
  "MX": {
    name: "Mexico",
  },
  "FM": {
    name: "Micronesia, Federated States Of",
  },
  "MD": {
    name: "Moldova",
  },
  "MC": {
    name: "Monaco",
  },
  "MN": {
    name: "Mongolia",
  },
  "ME": {
    name: "Montenegro",
  },
  "MS": {
    name: "Montserrat",
  },
  "MA": {
    name: "Morocco",
  },
  "MZ": {
    name: "Mozambique",
  },
  "MM": {
    name: "Myanmar",
  },
  "NA": {
    name: "Namibia",
  },
  "NR": {
    name: "Nauru",
  },
  "NP": {
    name: "Nepal",
  },
  "NL": {
    name: "Netherlands",
  },
  "NC": {
    name: "New Caledonia",
  },
  "NZ": {
    name: "New Zealand",
  },
  "NI": {
    name: "Nicaragua",
  },
  "NE": {
    name: "Niger",
  },
  "NG": {
    name: "Nigeria",
  },
  "NU": {
    name: "Niue",
  },
  "NF": {
    name: "Norfolk Island",
  },
  "MP": {
    name: "Northern Mariana Islands",
  },
  "NO": {
    name: "Norway",
  },
  "OM": {
    name: "Oman",
  },
  "PK": {
    name: "Pakistan",
  },
  "PW": {
    name: "Palau",
  },
  "PS": {
    name: "Palestinian Territory, Occupied",
  },
  "PA": {
    name: "Panama",
  },
  "PG": {
    name: "Papua New Guinea",
  },
  "PY": {
    name: "Paraguay",
  },
  "PE": {
    name: "Peru",
  },
  "PH": {
    name: "Philippines",
  },
  "PN": {
    name: "Pitcairn",
  },
  "PL": {
    name: "Poland",
  },
  "PT": {
    name: "Portugal",
  },
  "PR": {
    name: "Puerto Rico",
  },
  "QA": {
    name: "Qatar",
  },
  "CG": {
    name: "Republic Of Congo",
  },
  "RE": {
    name: "Reunion",
  },
  "RO": {
    name: "Romania",
  },
  "RU": {
    name: "Russian Federation",
  },
  "RW": {
    name: "Rwanda",
  },
  "BL": {
    name: "Saint Barthélemy",
  },
  "SH": {
    name: "Saint Helena, Ascension And Tristan Da Cunha",
  },
  "KN": {
    name: "Saint Kitts And Nevis",
  },
  "LC": {
    name: "Saint Lucia",
  },
  "MF": {
    name: "Saint Martin",
  },
  "PM": {
    name: "Saint Pierre And Miquelon",
  },
  "VC": {
    name: "Saint Vincent And The Grenadines",
  },
  "WS": {
    name: "Samoa",
  },
  "SM": {
    name: "San Marino",
  },
  "ST": {
    name: "Sao Tome And Principe",
  },
  "SA": {
    name: "Saudi Arabia",
  },
  "SN": {
    name: "Senegal",
  },
  "RS": {
    name: "Serbia",
  },
  "SC": {
    name: "Seychelles",
  },
  "SL": {
    name: "Sierra Leone",
  },
  "SG": {
    name: "Singapore",
  },
  "SX": {
    name: "Sint Maarten",
  },
  "SK": {
    name: "Slovakia",
  },
  "SI": {
    name: "Slovenia",
  },
  "SB": {
    name: "Solomon Islands",
  },
  "SO": {
    name: "Somalia",
  },
  "ZA": {
    name: "South Africa",
  },
  "GS": {
    name: "South Georgia And The South Sandwich Islands",
  },
  "ES": {
    name: "Spain",
  },
  "LK": {
    name: "Sri Lanka",
  },
  "SD": {
    name: "Sudan",
  },
  "SR": {
    name: "Suriname",
  },
  "SJ": {
    name: "Svalbard And Jan Mayen",
  },
  "SZ": {
    name: "Swaziland",
  },
  "SE": {
    name: "Sweden",
  },
  "CH": {
    name: "Switzerland",
  },
  "SY": {
    name: "Syrian Arab Republic",
  },
  "TW": {
    name: "Taiwan, Province Of China",
  },
  "TJ": {
    name: "Tajikistan",
  },
  "TZ": {
    name: "Tanzania, United Republic Of",
  },
  "TH": {
    name: "Thailand",
  },
  "TG": {
    name: "Togo",
  },
  "TK": {
    name: "Tokelau",
  },
  "TO": {
    name: "Tonga",
  },
  "TT": {
    name: "Trinidad And Tobago",
  },
  "TA": {
    name: "Tristan de Cunha",
  },
  "TN": {
    name: "Tunisia",
  },
  "TR": {
    name: "Turkey",
  },
  "TM": {
    name: "Turkmenistan",
  },
  "TC": {
    name: "Turks And Caicos Islands",
  },
  "TV": {
    name: "Tuvalu",
  },
  "SU": {
    name: "USSR",
  },
  "UG": {
    name: "Uganda",
  },
  "UA": {
    name: "Ukraine",
  },
  "AE": {
    name: "United Arab Emirates",
  },
  "GB": {
    name: "United Kingdom",
  },
  "UK": {
    name: "United Kingdom",
  },
  "US": {
    name: "United States",
  },
  "UM": {
    name: "United States Minor Outlying Islands",
  },
  "UY": {
    name: "Uruguay",
  },
  "UZ": {
    name: "Uzbekistan",
  },
  "VU": {
    name: "Vanuatu",
  },
  "VA": {
    name: "Vatican City State",
  },
  "VE": {
    name: "Venezuela, Bolivarian Republic Of",
  },
  "VN": {
    name: "Viet Nam",
  },
  "VG": {
    name: "Virgin Islands (British)",
  },
  "VI": {
    name: "Virgin Islands (US)",
  },
  "WF": {
    name: "Wallis And Futuna",
  },
  "EH": {
    name: "Western Sahara",
  },
  "YE": {
    name: "Yemen",
  },
  "ZM": {
    name: "Zambia",
  },
  "ZW": {
    name: "Zimbabwe",
  }
};

export default function Country(props) {
  const {code} = props;

  if (countries[code.toUpperCase()] === undefined) {
    throw new Error("Country code not found - " + code);
  }

  return (
      <React.Fragment>
        <p className="country">
          <span className={"flag-icon flag-icon-" + code.toLowerCase()} style={{marginRight: "10px"}}></span>
          {countries[code.toUpperCase()].name}
        </p>
      </React.Fragment>
  );
}