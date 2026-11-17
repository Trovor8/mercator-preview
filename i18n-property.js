// Property page + cinematic hero copy, six languages
(function(){
var X = {
  en: {
    hero_now: 'Now showing', hero_view: 'View this home', scroll: 'Scroll',
    p_back: 'All properties', p_photos: 'Photos', p_show_all: 'All {n} photos', p_video: 'Video', p_plans: 'Floor plans', p_brochure: 'Brochure', p_map: 'Map',
    p_share: 'Share', p_save: 'Save', p_saved: 'Saved', p_copied: 'Link copied',
    p_ppm: 'per m²', p_beds: 'Bedrooms', p_baths: 'Bathrooms', p_living: 'Living area', p_gross: 'Gross area', p_plot: 'Plot', p_floors: 'Floors',
    p_energy: 'Energy rating', p_cond: 'Condition', p_type: 'Type', p_ref: 'Reference', p_zone: 'Area', p_mun: 'Municipality',
    p_about: 'About this home', p_more: 'Read more', p_less: 'Show less', p_details: 'Key facts', p_location: 'Location', p_loc_note: 'Approximate location',
    p_book: 'Book a private viewing', p_book_sub: 'Tell us when you would like to visit and we will get back to you.',
    p_date: 'Preferred date', p_wa: 'WhatsApp', p_call: 'Call', p_wa_msg: 'Hello, I am interested in the property ref. {ref}.', p_send: 'Request a viewing',
    p_subject: 'Viewing request — Ref. {ref}',
    p_mort: 'Mortgage estimate', p_mort_loan: 'Loan', p_mort_rate: 'Interest rate', p_mort_years: 'Term', p_years: 'years', p_mort_month: 'Estimated monthly payment',
    p_mort_note: 'Illustrative only. We can arrange a real loan simulation with a Portuguese bank.',
    p_stamp: 'Stamp duty (0.8%)', p_similar: 'You may also like', p_original: 'View on mercator.pt',
    p_disclaimer: 'Some images have been digitally enhanced for illustrative purposes. The advertising information is not binding and must be confirmed.',
    p_notfound: 'Property not found', p_close: 'Close', p_grid: 'All photos'
  },
  pt: {
    hero_now: 'Em destaque', hero_view: 'Ver este imóvel', scroll: 'Descer',
    p_back: 'Todos os imóveis', p_photos: 'Fotografias', p_show_all: 'Ver as {n} fotos', p_video: 'Vídeo', p_plans: 'Plantas', p_brochure: 'Brochura', p_map: 'Mapa',
    p_share: 'Partilhar', p_save: 'Guardar', p_saved: 'Guardado', p_copied: 'Link copiado',
    p_ppm: 'por m²', p_beds: 'Quartos', p_baths: 'Casas de banho', p_living: 'Área útil', p_gross: 'Área bruta', p_plot: 'Terreno', p_floors: 'Pisos',
    p_energy: 'Certificado energético', p_cond: 'Estado', p_type: 'Tipo', p_ref: 'Referência', p_zone: 'Zona', p_mun: 'Concelho',
    p_about: 'Sobre esta casa', p_more: 'Ler mais', p_less: 'Mostrar menos', p_details: 'Características', p_location: 'Localização', p_loc_note: 'Localização aproximada',
    p_book: 'Marcar uma visita privada', p_book_sub: 'Diga-nos quando gostaria de visitar e entraremos em contacto consigo.',
    p_date: 'Data preferida', p_wa: 'WhatsApp', p_call: 'Ligar', p_wa_msg: 'Olá, tenho interesse no imóvel ref. {ref}.', p_send: 'Pedir visita',
    p_subject: 'Pedido de visita — Ref. {ref}',
    p_mort: 'Simulação de crédito', p_mort_loan: 'Empréstimo', p_mort_rate: 'Taxa de juro', p_mort_years: 'Prazo', p_years: 'anos', p_mort_month: 'Prestação mensal estimada',
    p_mort_note: 'Valor meramente ilustrativo. Podemos tratar de uma simulação real junto de um banco português.',
    p_stamp: 'Imposto do Selo (0,8%)', p_similar: 'Também pode gostar', p_original: 'Ver em mercator.pt',
    p_disclaimer: 'Algumas imagens foram melhoradas digitalmente para fins ilustrativos. A informação publicitada não é vinculativa e deve ser confirmada.',
    p_notfound: 'Imóvel não encontrado', p_close: 'Fechar', p_grid: 'Todas as fotos'
  },
  sv: {
    hero_now: 'Just nu', hero_view: 'Se bostaden', scroll: 'Scrolla',
    p_back: 'Alla bostäder', p_photos: 'Bilder', p_show_all: 'Alla {n} bilder', p_video: 'Video', p_plans: 'Planritningar', p_brochure: 'Broschyr', p_map: 'Karta',
    p_share: 'Dela', p_save: 'Spara', p_saved: 'Sparad', p_copied: 'Länken kopierad',
    p_ppm: 'per m²', p_beds: 'Sovrum', p_baths: 'Badrum', p_living: 'Boarea', p_gross: 'Bruttoarea', p_plot: 'Tomt', p_floors: 'Våningar',
    p_energy: 'Energiklass', p_cond: 'Skick', p_type: 'Typ', p_ref: 'Referens', p_zone: 'Område', p_mun: 'Kommun',
    p_about: 'Om bostaden', p_more: 'Läs mer', p_less: 'Visa mindre', p_details: 'Fakta', p_location: 'Läge', p_loc_note: 'Ungefärligt läge',
    p_book: 'Boka en privat visning', p_book_sub: 'Berätta när du vill komma så återkommer vi till dig.',
    p_date: 'Önskat datum', p_wa: 'WhatsApp', p_call: 'Ring', p_wa_msg: 'Hej, jag är intresserad av bostaden ref. {ref}.', p_send: 'Boka visning',
    p_subject: 'Visningsförfrågan — Ref. {ref}',
    p_mort: 'Lånekalkyl', p_mort_loan: 'Lån', p_mort_rate: 'Ränta', p_mort_years: 'Löptid', p_years: 'år', p_mort_month: 'Beräknad månadskostnad',
    p_mort_note: 'Endast ett exempel. Vi kan ta fram en riktig lånekalkyl med en portugisisk bank.',
    p_stamp: 'Stämpelskatt (0,8%)', p_similar: 'Du kanske också gillar', p_original: 'Visa på mercator.pt',
    p_disclaimer: 'Vissa bilder har bearbetats digitalt i illustrativt syfte. Annonsinformationen är inte bindande och måste bekräftas.',
    p_notfound: 'Bostaden hittades inte', p_close: 'Stäng', p_grid: 'Alla bilder'
  },
  nl: {
    hero_now: 'Nu in beeld', hero_view: 'Bekijk deze woning', scroll: 'Scroll',
    p_back: 'Alle woningen', p_photos: 'Foto’s', p_show_all: 'Alle {n} foto’s', p_video: 'Video', p_plans: 'Plattegronden', p_brochure: 'Brochure', p_map: 'Kaart',
    p_share: 'Delen', p_save: 'Bewaren', p_saved: 'Bewaard', p_copied: 'Link gekopieerd',
    p_ppm: 'per m²', p_beds: 'Slaapkamers', p_baths: 'Badkamers', p_living: 'Woonoppervlak', p_gross: 'Bruto-oppervlak', p_plot: 'Perceel', p_floors: 'Verdiepingen',
    p_energy: 'Energielabel', p_cond: 'Staat', p_type: 'Type', p_ref: 'Referentie', p_zone: 'Gebied', p_mun: 'Gemeente',
    p_about: 'Over deze woning', p_more: 'Lees meer', p_less: 'Toon minder', p_details: 'Kenmerken', p_location: 'Ligging', p_loc_note: 'Bij benadering',
    p_book: 'Plan een privébezichtiging', p_book_sub: 'Laat ons weten wanneer u wilt komen, dan nemen wij contact met u op.',
    p_date: 'Gewenste datum', p_wa: 'WhatsApp', p_call: 'Bellen', p_wa_msg: 'Hallo, ik heb interesse in de woning ref. {ref}.', p_send: 'Bezichtiging aanvragen',
    p_subject: 'Aanvraag bezichtiging — Ref. {ref}',
    p_mort: 'Hypotheekberekening', p_mort_loan: 'Lening', p_mort_rate: 'Rente', p_mort_years: 'Looptijd', p_years: 'jaar', p_mort_month: 'Geschatte maandlast',
    p_mort_note: 'Alleen ter illustratie. Wij regelen graag een echte leningsimulatie bij een Portugese bank.',
    p_stamp: 'Zegelrecht (0,8%)', p_similar: 'Misschien ook iets voor u', p_original: 'Bekijk op mercator.pt',
    p_disclaimer: 'Sommige afbeeldingen zijn digitaal bewerkt ter illustratie. De advertentie-informatie is niet bindend en moet worden bevestigd.',
    p_notfound: 'Woning niet gevonden', p_close: 'Sluiten', p_grid: 'Alle foto’s'
  },
  no: {
    hero_now: 'Akkurat nå', hero_view: 'Se boligen', scroll: 'Rull',
    p_back: 'Alle eiendommer', p_photos: 'Bilder', p_show_all: 'Alle {n} bilder', p_video: 'Video', p_plans: 'Plantegninger', p_brochure: 'Brosjyre', p_map: 'Kart',
    p_share: 'Del', p_save: 'Lagre', p_saved: 'Lagret', p_copied: 'Lenken er kopiert',
    p_ppm: 'per m²', p_beds: 'Soverom', p_baths: 'Bad', p_living: 'Boareal', p_gross: 'Bruttoareal', p_plot: 'Tomt', p_floors: 'Etasjer',
    p_energy: 'Energimerke', p_cond: 'Standard', p_type: 'Type', p_ref: 'Referanse', p_zone: 'Område', p_mun: 'Kommune',
    p_about: 'Om boligen', p_more: 'Les mer', p_less: 'Vis mindre', p_details: 'Fakta', p_location: 'Beliggenhet', p_loc_note: 'Omtrentlig beliggenhet',
    p_book: 'Bestill en privat visning', p_book_sub: 'Fortell oss når du vil komme, så tar vi kontakt.',
    p_date: 'Ønsket dato', p_wa: 'WhatsApp', p_call: 'Ring', p_wa_msg: 'Hei, jeg er interessert i eiendommen ref. {ref}.', p_send: 'Be om visning',
    p_subject: 'Forespørsel om visning — Ref. {ref}',
    p_mort: 'Låneberegning', p_mort_loan: 'Lån', p_mort_rate: 'Rente', p_mort_years: 'Løpetid', p_years: 'år', p_mort_month: 'Beregnet månedlig beløp',
    p_mort_note: 'Kun et eksempel. Vi kan ordne en reell lånesimulering med en portugisisk bank.',
    p_stamp: 'Stempelavgift (0,8%)', p_similar: 'Du vil kanskje også like', p_original: 'Se på mercator.pt',
    p_disclaimer: 'Noen bilder er digitalt bearbeidet for illustrasjon. Annonseinformasjonen er ikke bindende og må bekreftes.',
    p_notfound: 'Fant ikke eiendommen', p_close: 'Lukk', p_grid: 'Alle bilder'
  },
  de: {
    hero_now: 'Im Fokus', hero_view: 'Immobilie ansehen', scroll: 'Scrollen',
    p_back: 'Alle Immobilien', p_photos: 'Fotos', p_show_all: 'Alle {n} Fotos', p_video: 'Video', p_plans: 'Grundrisse', p_brochure: 'Exposé', p_map: 'Karte',
    p_share: 'Teilen', p_save: 'Merken', p_saved: 'Gemerkt', p_copied: 'Link kopiert',
    p_ppm: 'pro m²', p_beds: 'Schlafzimmer', p_baths: 'Bäder', p_living: 'Wohnfläche', p_gross: 'Bruttofläche', p_plot: 'Grundstück', p_floors: 'Etagen',
    p_energy: 'Energieklasse', p_cond: 'Zustand', p_type: 'Typ', p_ref: 'Objekt-Nr.', p_zone: 'Lage', p_mun: 'Gemeinde',
    p_about: 'Über diese Immobilie', p_more: 'Weiterlesen', p_less: 'Weniger anzeigen', p_details: 'Eckdaten', p_location: 'Lage', p_loc_note: 'Ungefähre Lage',
    p_book: 'Private Besichtigung vereinbaren', p_book_sub: 'Sagen Sie uns, wann Sie kommen möchten – wir melden uns bei Ihnen.',
    p_date: 'Wunschtermin', p_wa: 'WhatsApp', p_call: 'Anrufen', p_wa_msg: 'Hallo, ich interessiere mich für die Immobilie Ref. {ref}.', p_send: 'Besichtigung anfragen',
    p_subject: 'Besichtigungsanfrage — Ref. {ref}',
    p_mort: 'Finanzierungsrechner', p_mort_loan: 'Darlehen', p_mort_rate: 'Zinssatz', p_mort_years: 'Laufzeit', p_years: 'Jahre', p_mort_month: 'Geschätzte Monatsrate',
    p_mort_note: 'Nur zur Veranschaulichung. Gerne organisieren wir eine echte Kreditsimulation mit einer portugiesischen Bank.',
    p_stamp: 'Stempelsteuer (0,8%)', p_similar: 'Das könnte Ihnen auch gefallen', p_original: 'Auf mercator.pt ansehen',
    p_disclaimer: 'Einige Bilder wurden zu Illustrationszwecken digital bearbeitet. Die Angaben sind unverbindlich und müssen bestätigt werden.',
    p_notfound: 'Immobilie nicht gefunden', p_close: 'Schließen', p_grid: 'Alle Fotos'
  }
};
for (var k in X) Object.assign(window.I18N[k], X[k]);
})();

Object.assign(window.I18N.en,{feat_spot:'Featured home',drag:'Drag to explore',p_viewing:'Book a viewing'});
Object.assign(window.I18N.pt,{feat_spot:'Imóvel em destaque',drag:'Arraste para explorar',p_viewing:'Marcar visita'});
Object.assign(window.I18N.sv,{feat_spot:'Utvald bostad',drag:'Dra för att utforska',p_viewing:'Boka visning'});
Object.assign(window.I18N.nl,{feat_spot:'Uitgelichte woning',drag:'Sleep om te ontdekken',p_viewing:'Bezichtiging plannen'});
Object.assign(window.I18N.no,{feat_spot:'Utvalgt bolig',drag:'Dra for å utforske',p_viewing:'Bestill visning'});
Object.assign(window.I18N.de,{feat_spot:'Ausgewählte Immobilie',drag:'Ziehen zum Entdecken',p_viewing:'Besichtigung buchen'});
