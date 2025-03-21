/**
 * amCharts 4 locale
 * 
 * Locale: lt_LT
 * Language: Lithuanian
 *
 * Follow instructions in [on this page](https://www.amcharts.com/docs/v4/tutorials/creating-translations/) to make corrections or add new translations.
 */
export default {
	// number formatter related
	"_decimalSeparator": ",",
	"_thousandSeparator": " ",

	// Position of the percent sign in numbers
	"_percentPrefix": null,
	"_percentSuffix": "%",

	// Default date formats for various periods
	"_date_millisecond": "mm::ss SSS",
	"_date_second": "HH:mm:ss",
	"_date_minute": "HH:mm",
	"_date_hour": "HH:mm",
	"_date_day": "yyyy-MM-dd",
	"_date_week": "ww",
	"_date_month": "MMM",
	"_date_year": "yyyy",

	// Default duration formats for various base units
	"_duration_millisecond": "SSS",
	"_duration_second": "ss",
	"_duration_minute": "mm",
	"_duration_hour": "hh",
	"_duration_day": "dd",
	"_duration_week": "ww",
	"_duration_month": "MM",
	"_duration_year": "yyyy",

	// Era
	"_era_ad": "m.e.",
	"_era_bc": "p.m.e.",

	// Period
	"A": "R",
	"P": "V",
	"AM": "ryto",
	"PM": "vakaro",
	"A.M.": "ryto",
	"P.M.": "vakaro",

	// Dates
	"January": "sausio",
	"February": "vasario",
	"March": "kovo",
	"April": "balandžio",
	"May": "gegužės",
	"June": "birželio",
	"July": "liepos",
	"August": "rugpjūčio",
	"September": "rugsėjo",
	"October": "spalio",
	"November": "lapkričio",
	"December": "gruodžio",
	"Jan": "sau.",
	"Feb": "vas.",
	"Mar": "kov.",
	"Apr": "bal.",
	"May(short)": "geg.",
	"Jun": "bir.",
	"Jul": "lie.",
	"Aug": "rgp.",
	"Sep": "rgs.",
	"Oct": "spa.",
	"Nov": "lap.",
	"Dec": "gruo.",
	"Sunday": "sekmadienis",
	"Monday": "pirmadienis",
	"Tuesday": "antradienis",
	"Wednesday": "trečiadienis",
	"Thursday": "ketvirtadienis",
	"Friday": "penktadienis",
	"Saturday": "šeštadienis",
	"Sun": "sekm.",
	"Mon": "pirm.",
	"Tue": "antr.",
	"Wed": "treč.",
	"Thu": "ketv.",
	"Fri": "penk.",
	"Sat": "šešt.",

	// ordinal function
	"_dateOrd": function(day: number): string {
		return "-a(s)";
	},

	// Chart elements
	"Zoom Out": "Rodyti viską",
	"Play": "Paleisti",
	"Stop": "Sustabdyti",
	"Legend": "Legenda",
	"Click, tap or press ENTER to toggle": "Spragtelkite, palieskite arba spauskite ENTER, kad perjungtumėte",
	"Loading": "Kraunama",
	"Home": "Pradžia",

	// Chart types
	"Chart": "Grafikas",
	"Serial chart": "Serijinis grafikas",
	"X/Y chart": "X/Y grafikas",
	"Pie chart": "Pyrago tipo grafikas",
	"Gauge chart": "Daviklio tipo grafikas",
	"Radar chart": "Radaro tipo grafikas",
	"Sankey diagram": "Sankey diagrama",
	"Chord diagram": "Chord diagrama",
	"Flow diagram": "Flow diagrama",
	"TreeMap chart": "TreeMap grafikas",

	// Series types
	"Series": "Serija",
	"Candlestick Series": "\"Candlestick\" tipo grafiko serija",
	"Column Series": "Stulpelinio grafiko serija",
	"Line Series": "Linijinio grafiko serija",
	"Pie Slice Series": "Pyrago tipo serija",
	"X/Y Series": "X/Y serija",

	// Map-related
	"Map": "Žemėlapis",
	"Press ENTER to zoom in": "Spauskite ENTER, kad pritrauktumėte vaizdą",
	"Press ENTER to zoom out": "Spauskite ENTER, kad atitolintumėte vaizdą",
	"Use arrow keys to zoom in and out": "Naudokitės royklėmis vaizdo pritraukimui ar atitolinimui",
	"Use plus and minus keys on your keyboard to zoom in and out": "Spauskite pliuso arba minuso klavišus ant klaviatūros, kad pritrautumėte arba atitolintumėte vaizdą",

	// Export-related
	"Export": "Eksportuoti",
	"Image": "Paveiksliukas",
	"Data": "Duomenys",
	"Print": "Spausdinti",
	"Click, tap or press ENTER to open": "Spragtelkite arba spauskite ENTER, kad atidarytumėte",
	"Click, tap or press ENTER to print.": "Spragtelkite arba spauskite ENTER, kad spausdintumėte.",
	"Click, tap or press ENTER to export as %1.": "Spragtelkite arba spauskite ENTER, kad eksportuotumėte kaip %1.",
	'To save the image, right-click this link and choose "Save picture as..."': 'Kad išsaugotumėte paveiksliuką, spauskite dešinį pelės klavišą ir pasirinkite "Išsaugoti, kaip paveiksliuką..."',
	"(Press ESC to close this message)": "(Spauskite ESC, kad uždarytumėte šį pranešimą)",
	"Image Export Complete": "Paveiksliuko eksportas baigtas",
	"Export operation took longer than expected. Something might have gone wrong.": "Eksportas užtruko ilgiau negu turėtų. Greičiausiai įvyko klaida.",
	"Saved from": "Išsaugota iš",
	"PNG": "",
	"JPG": "",
	"GIF": "",
	"SVG": "",
	"PDF": "",
	"JSON": "",
	"CSV": "",
	"XLSX": "",

	// Scrollbar-related
	"Use TAB to select grip buttons or left and right arrows to change selection": "Spauskite TAB klavišą, kad pasirinktumėte žymeklius, arba kairė/dešinė klavišus, kad pakeistumėte pasirinkimą",
	"Use left and right arrows to move selection": "Naudokitės klavišais kairė/dešinė, kad pajudintumėte pasirinkimą",
	"Use left and right arrows to move left selection": "Naudokitės klavišais kairė/dešinė, kad pajudintumėte kairį žymeklį",
	"Use left and right arrows to move right selection": "Naudokitės klavišais kairė/dešinė, kad pajudintumėte dešinį žymeklį",
	"Use TAB select grip buttons or up and down arrows to change selection": "Spauskite TAB klavišą, kad pasirinktumėte žymeklius, arba aukštyn/žemyn klavišus, kad pakeistumėte pasirinkimą",
	"Use up and down arrows to move selection": "Naudokitės klavišais aukštyn/žemyn, kad pajudintumėte pasirinkimą",
	"Use up and down arrows to move lower selection": "Naudokitės klavišais aukštyn/žemyn, kad pajudintumėte apatinį žymeklį",
	"Use up and down arrows to move upper selection": "Naudokitės klavišais aukštyn/žemyn, kad pajudintumėte viršutinį žymeklį",
	"From %1 to %2": "Nuo %1 iki %2",
	"From %1": "Nuo %1",
	"To %1": "Iki %1",

	// Data loader-related
	"No parser available for file: %1": "Failui %1 neturime tinkamo dešifruotojo",
	"Error parsing file: %1": "Skaitant failą %1 įvyko klaida",
	"Unable to load file: %1": "Nepavyko užkrauti failo %1",
	"Invalid date": "Klaidinga data",

};