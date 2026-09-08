export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface Article {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  body: Block[];
}

export const articles: Article[] = [
  {
    slug: "massasje-for-eller-etter-trening",
    category: "Trening",
    readTime: "7 min",
    title: "Massasje før eller etter trening?",
    description:
      "Det korte svaret er: det kommer an på. Her er hva som faktisk bør styre valget.",
    image: {
      src: "/images/foam-rolling.jpg",
      alt: "Illustrasjonsbilde: mobilitetsarbeid og foam rolling",
    },
    body: [
      { type: "h2", text: "Det korte svaret: det kommer an på" },
      {
        type: "p",
        text: "Dette er et av spørsmålene jeg får oftest, og det finnes ikke ett svar som passer alle. Hva som er lurt, avhenger av hva slags trening du skal gjøre, hvor intensiv behandlingen er, om du har en konkurranse i nærheten, og hvordan du selv pleier å reagere på behandling. Målet med denne artikkelen er ikke å gi deg én fasit, men å gi deg noe å tenke gjennom før du bestiller time rundt en treningsøkt.",
      },
      { type: "h2", text: "Massasje før trening" },
      {
        type: "p",
        text: "Lett eller kort behandling i forkant av trening kan for noen fungere fint, nesten som en del av oppvarmingen. Det kan bidra til å kjenne etter hvordan kroppen føles den dagen, og noen opplever at det gir en følelse av å være mer «klar».",
      },
      {
        type: "p",
        text: "Det er likevel verdt å være bevisst på intensiteten. Svært dyp eller kraftig bløtvevsbehandling rett før en krevende økt er ikke nødvendigvis ideelt. Muskulaturen kan bli midlertidig mer øm eller føles annerledes enn du er vant til, og det er sjelden ønskelig rett før du skal prestere maksimalt. Skal du gjennomføre tunge styrkeløft, en hard intervalløkt eller konkurrere, vil jeg som regel anbefale å holde eventuell behandling relativt lett i forkant – eller rett og slett vente til etterpå.",
      },
      { type: "h2", text: "Massasje etter trening" },
      {
        type: "p",
        text: "Behandling etter trening oppleves av mange som behagelig, og kan bidra til den subjektive følelsen av mindre stivhet og ømhet i etterkant. Det alene er en god nok grunn til å prioritere det for mange.",
      },
      {
        type: "p",
        text: 'Samtidig er det verdt å ha realistiske forventninger til hva behandlingen faktisk gjør. Massasje fjerner ikke «melkesyre» – laktat brytes normalt ned i kroppen relativt raskt etter avsluttet aktivitet uansett. Det finnes heller ikke god dokumentasjon på at massasje dramatisk fremskynder selve muskelreparasjonen. Det behandlingen ofte bidrar til, er hvordan du opplever kroppen din: mindre stivhetsfølelse, bedre bevegelighet der og da, og en generell følelse av å roe ned systemet etter belastning. Det er verdifullt i seg selv, selv om det ikke er en snarvei til raskere restitusjon på cellenivå.',
      },
      { type: "h2", text: "Før konkurranse" },
      {
        type: "p",
        text: "Driver du med CrossFit, HYROX, styrkeløft, løping eller annen konkurranseidrett, er hovedrådet mitt enkelt: ikke eksperimenter med ny eller intensiv behandling rett før noe viktig. Kroppen kan reagere annerledes enn forventet på en dypere behandling, og det siste du ønsker dagen før eller samme dag som en konkurranse, er uventet ømhet eller stivhet.",
      },
      {
        type: "p",
        text: "Har du en fast rutine med behandling som du vet fungerer godt for deg, er det som regel greit å fortsette med den. Er du usikker, er en lettere, mer avslappende tilnærming et tryggere valg enn dyp, målrettet bearbeiding rett i forkant.",
      },
      { type: "h2", text: "Hva passer for deg?" },
      {
        type: "p",
        text: "Folk reagerer ulikt på behandling. Noen kjenner seg «løsere» og mer klare til å prestere etter lett behandling, mens andre foretrekker å vente til etter treningen er unnagjort. Det er ingen fasit her – det viktigste er at du kjenner din egen respons, og at vi snakker sammen om hva du skal gjennom den aktuelle dagen når du bestiller time.",
      },
      { type: "h2", text: "Kort oppsummert" },
      {
        type: "ul",
        items: [
          "Skal du prestere maksimalt samme dag – hold behandling før økten lett, eller vent til etterpå",
          "Massasje etter trening kan gi mindre stivhetsfølelse, men fremskynder ikke muskelreparasjon i seg selv",
          "Unngå å prøve ny eller intensiv behandling rett før en konkurranse",
          "Kjenner du en rutine som fungerer for deg, er det ofte lurt å holde seg til den",
          "Usikker? Ta det opp når du bestiller time, så tilpasser vi behandlingen etter hva du skal gjennom",
        ],
      },
    ],
  },
  {
    slug: "spenningshodepine",
    category: "Behandling",
    readTime: "8 min",
    title: "Hva kan bidra til spenningshodepine?",
    description:
      "Muskulær spenning i nakke og skuldre kan være en del av bildet, men sjelden hele forklaringen. Her er de vanligste bidragsyterne.",
    image: {
      src: "/images/spenningshodepine.jpg",
      alt: "Illustrasjonsbilde: behandling av nakke og skuldre ved spenningshodepine",
    },
    body: [
      { type: "h2", text: "Hvordan oppleves spenningshodepine?" },
      {
        type: "p",
        text: "Spenningshodepine er en av de vanligste formene for hodepine. Den kjennetegnes ofte av en jevn, klemmende eller trykkende følelse, gjerne på begge sider av hodet – litt som et bånd som strammes rundt hodet. Den er som regel ikke bankende slik migrene kan være, og forverres sjelden nevneverdig av vanlig fysisk aktivitet. Intensiteten varierer fra lett og distré til mer plagsom, og noen opplever den av og til, mens andre kjenner den mer regelmessig.",
      },
      { type: "h2", text: "Det er sjelden bare én årsak" },
      {
        type: "p",
        text: "Mange lurer på om det er «musklene» som er årsaken. Realiteten er mer sammensatt. Spenningshodepine ser ofte ut til å henge sammen med en kombinasjon av flere faktorer, blant annet:",
      },
      {
        type: "ul",
        items: [
          "Stress og mental belastning",
          "Søvn – både for lite søvn og uregelmessig søvnmønster",
          "Arbeidsmengde og perioder med høyt tempo",
          "Lange perioder i samme stilling, for eksempel ved skjerm- eller kontorarbeid",
          "Ubehag i nakke og skuldre",
          "Lite variasjon i bevegelse gjennom dagen",
          "Generell fysisk aktivitet, eller mangel på den",
        ],
      },
      {
        type: "p",
        text: "Det er sjelden én enkeltfaktor som forklarer alt. Ofte er det summen av flere ting over tid som gjør at hodepinen dukker opp eller blir verre – en hektisk arbeidsuke kombinert med dårlig søvn og lite bevegelse, for eksempel.",
      },
      { type: "h2", text: "Nakke og skuldre" },
      {
        type: "p",
        text: "For en del mennesker er spenning og ømhet i nakke- og skuldermuskulatur en tydelig del av bildet. Det kan handle om statisk belastning gjennom arbeidsdagen, holdning, eller rett og slett muskulatur som er mer anspent enn vanlig i perioder med stress. Samtidig er det viktig å understreke at dette sjelden er den eneste årsaken – to personer med lik grad av muskelspenning kan oppleve svært ulik hodepine, avhengig av søvn, stressnivå og andre faktorer.",
      },
      { type: "h2", text: "Kan massasje hjelpe?" },
      {
        type: "p",
        text: "For mange kan behandling av muskulaturen i nakke, skuldre og øvre rygg oppleves som nyttig, særlig hvis man kjenner tydelig spenning eller ømhet i disse områdene. Det kan gi midlertidig lindring og bedre komfort. Det er derimot ikke riktig å love at massasje kurerer eller fjerner spenningshodepine – effekten varierer fra person til person, og for noen spiller andre faktorer en større rolle enn muskulaturen alene.",
      },
      {
        type: "p",
        text: "Ofte er det mest realistisk å tenke på behandling som én av flere brikker: målrettet arbeid med musklene, kombinert med endringer i hverdagsvaner som bevegelse, arbeidsstilling, søvn og stressnivå.",
      },
      { type: "h2", text: "Ting du kan prøve selv" },
      {
        type: "ul",
        items: [
          "Ta korte bevegelsespauser gjennom arbeidsdagen",
          "Varier arbeidsstilling og juster skjermhøyde der det er mulig",
          "Prioriter søvn så godt du kan",
          "Legg merke til om stressnivået ditt henger sammen med periodene hodepinen er verre",
          "Hold deg i regelmessig fysisk aktivitet",
          "Vurder arbeidsplassen din – stol, skjerm og arbeidshøyde kan ha mer å si enn man tror",
        ],
      },
      { type: "h2", text: "Når bør hodepine undersøkes?" },
      {
        type: "p",
        text: "De aller fleste tilfeller av spenningshodepine er ufarlige og kan håndteres godt uten bekymring. Samtidig er det lurt å oppsøke lege eller annet relevant helsepersonell dersom hodepinen er ny og uvanlig for deg, kommer plutselig og kraftig, endrer seg raskt, eller følges av andre symptomer du er usikker på – for eksempel synsforstyrrelser, nummenhet eller kraftig svekket allmenntilstand. Dette gjelder et lite mindretall, men det er verdt å nevne slik at du vet når det er riktig å søke en faglig vurdering.",
      },
      { type: "h2", text: "Kort oppsummert" },
      {
        type: "p",
        text: "Spenningshodepine har som regel flere samvirkende årsaker, og muskulær spenning i nakke og skuldre er ofte, men ikke alltid, en del av bildet. Behandling kan gi god lindring for mange, gjerne i kombinasjon med søvn, bevegelse og stressmestring i hverdagen.",
      },
    ],
  },
  {
    slug: "trene-med-smerter",
    category: "Restitusjon",
    readTime: "7 min",
    title: "Bør du trene når du har vondt?",
    description:
      "Smerte betyr ikke automatisk full stopp – men ikke all smerte bør trenes gjennom heller. Slik vurderer du det i praksis.",
    image: {
      src: "/images/kne-konsultasjon.jpg",
      alt: "Illustrasjonsbilde: konsultasjon om treningsrelatert plage",
    },
    body: [
      { type: "h2", text: "Smerte betyr ikke automatisk at du må stoppe all aktivitet" },
      {
        type: "p",
        text: "Dette er et spørsmål jeg får jevnlig, både fra folk som trener på fritiden og fra mer konkurranseorienterte utøvere. Mange har en forestilling om at all smerte betyr «stopp helt», men slik er det sjelden i praksis. Mild, stabil ubehag som ikke forverres nevneverdig av trening, kan for mange trenes gjennom – ofte med noen justeringer underveis.",
      },
      { type: "h2", text: "Men smerte skal heller ikke alltid ignoreres" },
      {
        type: "p",
        text: "Samtidig er det ikke riktig å trene gjennom alt. Noen signaler bør tas på alvor, og noen ganger er det lurt å senke tempoet, redusere belastningen kraftig, eller ta en pause fra en spesifikk øvelse eller bevegelse mens plagen roer seg.",
      },
      { type: "h2", text: "Se på hvordan plagene responderer" },
      {
        type: "p",
        text: "I stedet for å bare se på smertenivået der og da, er det ofte mer nyttig å følge med på hvordan symptomene utvikler seg over tid:",
      },
      {
        type: "ul",
        items: [
          "Under selve treningen – blir det tydelig verre jo mer du gjør, eller holder det seg stabilt?",
          "Rett etter økten – roer plagen seg raskt, eller forblir den forverret?",
          "Senere samme dag – kommer det en forverring flere timer etter trening?",
          "Dagen etter – er du tilbake på utgangspunktet, eller merkbart verre enn før du trente?",
        ],
      },
      {
        type: "p",
        text: "Blir plagen tydelig verre under aktivitet og forblir forverret i lang tid etterpå, er det et signal om at noe bør justeres. Holder den seg stabil og roer seg innen rimelig tid, er det som regel et tegn på at kroppen tolererer belastningen godt.",
      },
      { type: "h2", text: "Juster heller enn å stoppe" },
      {
        type: "p",
        text: "I mange tilfeller handler det ikke om alt-eller-ingenting. Et mer praktisk utgangspunkt er å justere midlertidig, for eksempel:",
      },
      {
        type: "ul",
        items: [
          "Redusere vekt eller motstand",
          "Redusere volum – færre sett eller repetisjoner",
          "Endre bevegelsesutslag til et mer komfortabelt område",
          "Bytte til en øvelsesvariant som provoserer mindre",
          "Senke intensiteten eller tempoet",
        ],
      },
      { type: "h2", text: "Eksempel: vond skulder ved pressing" },
      {
        type: "p",
        text: "Kjenner du ubehag i skulderen ved overhead press, betyr ikke det nødvendigvis at all overkroppstrening må avlyses. Mange klarer å fortsette med for eksempel benkpress med et mer skulderv­ennlig bevegelsesutslag, eller bytte til øvelser som ikke belaster akkurat det punktet like mye, mens skulderen får tid til å roe seg.",
      },
      { type: "h2", text: "Eksempel: vond korsrygg ved RDL" },
      {
        type: "p",
        text: "På samme måte, ved ubehag i korsryggen under rumensk markløft, er det sjelden nødvendig å kutte all hofteleddsdominant trening. Ofte kan man justere belastning, bevegelsesutslag eller tempo, eller midlertidig velge en variant som er mer skånsom, fremfor å unngå bevegelsesmønsteret helt.",
      },
      {
        type: "p",
        text: "Disse eksemplene er ment som generelle illustrasjoner, ikke en diagnose eller en fasit for din situasjon – riktig tilpasning avhenger av hva som faktisk foregår hos deg.",
      },
      { type: "h2", text: "Når bør du få det vurdert?" },
      {
        type: "p",
        text: "Noen signaler bør ikke bare «trenes gjennom» uten videre vurdering:",
      },
      {
        type: "ul",
        items: [
          "Betydelig akutt skade eller traume",
          "Markert hevelse",
          "Kraftig funksjonstap – du klarer knapt bevegelsen",
          "Tiltagende svakhet",
          "Nevrologiske symptomer, som prikking, nummenhet eller utstråling",
          "Symptomer som ikke bedrer seg over tid, uansett hva du justerer",
        ],
      },
      {
        type: "p",
        text: "I disse tilfellene bør plagen vurderes av relevant helsepersonell, fremfor at du prøver deg fram på egen hånd.",
      },
      { type: "h2", text: "Kort oppsummert" },
      {
        type: "p",
        text: "Lytt til hvordan kroppen reagerer over tid, ikke bare til smerten i selve øyeblikket. Mild, stabil smerte som ikke forverres og som roer seg i etterkant, kan ofte trenes gjennom med noen justeringer. Kraftigere symptomer, tydelig funksjonstap eller nevrologiske symptomer er tegn på at du bør senke tempoet og få det vurdert.",
      },
    ],
  },
];

export const upcomingArticles = [
  "Hva er forskjellen på massasje og muskelterapi?",
  "Hvorfor føles musklene stramme?",
  "Hvor ofte bør man få massasje?",
  "Foam rolling – fungerer det egentlig?",
  "Stølhet eller skade?",
  "Restitusjon etter hard trening",
  "Stiv nakke etter kontorarbeid",
  "Tilbake til trening etter en pause eller skade",
];
