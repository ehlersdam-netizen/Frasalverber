const sentences = [

/* at afhænge af */
{ verb: "at afhænge af",
  sentence: "Resultatet afhænger ___, hvor godt vi forbereder os.",
  answer: "af",
  options: ["af", "på", "i", "til"]
},
{ verb: "at afhænge af",
  sentence: "Det afhænger ___ situationen.",
  answer: "af",
  options: ["af", "på", "i", "for"]
},
{ verb: "at afhænge af",
  sentence: "Hans humør afhænger ofte ___ vejret.",
  answer: "af",
  options: ["af", "på", "i", "med"]
},
  
/* at arbejde over */
{ verb: "at arbejde over",
  sentence: "Jeg måtte arbejde ___ i går for at blive færdig med rapporten.",
  answer: "over",
  options: ["over", "på", "til", "af"]
},
{ verb: "at arbejde over",
  sentence: "Hun arbejder ofte ___ i travle perioder.",
  answer: "over",
  options: ["over", "på", "for", "til"]
},
{ verb: "at arbejde over",
  sentence: "Vi skal arbejde ___, hvis vi skal nå deadline.",
  answer: "over",
  options: ["over", "på", "med", "til"]
},
  
/* at bede om */
{ verb: "at bede om",
  sentence: "Han bad ___ hjælp til opgaven.",
  answer: "om",
  options: ["om", "til", "for", "af"]
},
{ verb: "at bede om",
  sentence: "Du kan ikke bede ___ bedre vejr end det her.",
  answer: "om",
  options: ["om", "på", "til", "af"]
},
{ verb: "at bede om",
  sentence: "Hun bad ___ en forklaring på beslutningen.",
  answer: "om",
  options: ["om", "til", "for", "med"]
},
  
/* at bede til */
{ verb: "at bede til",
  sentence: "De bad ___ Gud før middagen.",
  answer: "til",
  options: ["til", "om", "for", "af"]
},
{ verb: "at bede til",
  sentence: "Hun bad ___, at alt ville gå godt.",
  answer: "om",
  options: ["om", "til", "for", "på"]
},
{ verb: "at bede til",
  sentence: "I gamle dage bad man ___ forskellige guder for en god høst.",
  answer: "til",
  options: ["til", "om", "for", "med"]
},

/* at blive ved */
{ verb: "at blive ved",
  sentence: "Han blev ___ med at stille spørgsmål.",
  answer: "ved",
  options: ["ved", "på", "til", "af"]
},
{ verb: "at blive ved",
  sentence: "Han bliver ___ med at stille de samme spørgsmål.",
  answer: "ved",
  options: ["ved", "på", "for", "med"]
},
{ verb: "at blive ved",
  sentence: "Hun bliver ___ med at klage over maden.",
  answer: "ved",
  options: ["ved", "på", "til", "om"]
},

/* at falde om */
{ verb: "at falde om",
  sentence: "Han faldt ___ af udmattelse.",
  answer: "om",
  options: ["om", "ned", "på", "af"]
},
{ verb: "at falde om",
  sentence: "Spilleren faldt ___ på fodboldbanen.",
  answer: "om",
  options: ["om", "ned", "af", "over"]
},
{ verb: "at falde om",
  sentence: "Hun var så chokeret, at hun næsten faldt ___.",
  answer: "om",
  options: ["om", "ned", "af", "til"]
},

/* at finde på */
{ verb: "at finde på",
  sentence: "Han kan altid finde ___ noget sjovt at lave.",
  answer: "på",
  options: ["på", "af", "i", "med"]
},
{ verb: "at finde på",
  sentence: "Hvad har du nu fundet ___?",
  answer: "på",
  options: ["på", "af", "til", "om"]
},
{ verb: "at finde på",
  sentence: "Hun fandt ___ en god løsning på problemet.",
  answer: "på",
  options: ["på", "af", "til", "med"]
},

/* at finde sig i */
{ verb: "at finde sig i",
  sentence: "Jeg vil ikke finde mig ___ den tone.",
  answer: "i",
  options: ["i", "på", "til", "for"]
},
{ verb: "at finde sig i",
  sentence: "Hun fandt sig ___ kritikken uden at protestere.",
  answer: "i",
  options: ["i", "på", "for", "med"]
},
{ verb: "at finde sig i",
  sentence: "De skal ikke finde sig ___ uretfærdig behandling.",
  answer: "i",
  options: ["i", "på", "til", "for"]
},

/* at gå til */
{ verb: "at gå til",
  sentence: "Hun går ___ svømning to gange om ugen.",
  answer: "til",
  options: ["til", "på", "i", "med"]
},
{ verb: "at gå til",
  sentence: "Han går ___ fodbold tre gange om ugen.",
  answer: "til",
  options: ["til", "på", "i", "for"]
},
{ verb: "at gå til",
  sentence: "Børnene går ___ klaver om onsdagen.",
  answer: "til",
  options: ["til", "på", "i", "med"]
},

/* at handle med */
{ verb: "at handle med",
  sentence: "Danmark handler meget ___ Tyskland.",
  answer: "med",
  options: ["med", "om", "på", "for"]
},
{ verb: "at handle med",
  sentence: "Virksomheden handler ___ elektronik.",
  answer: "med",
  options: ["med", "om", "af", "på"]
},
{ verb: "at handle med",
  sentence: "Han handler ___ aktier i sin fritid.",
  answer: "med",
  options: ["med", "om", "for", "af"]
},

/* at handle om */
{ verb: "at handle om",
  sentence: "Filmen handler ___ en ung dreng.",
  answer: "om",
  options: ["om", "med", "for", "på"]
},
{ verb: "at handle om",
  sentence: "Mødet handlede ___ økonomi.",
  answer: "om",
  options: ["om", "med", "på", "for"]
},
{ verb: "at handle om",
  sentence: "Bogen handler ___ livet i Danmark.",
  answer: "om",
  options: ["om", "med", "for", "på"]
},

/* at have brug for */
{ verb: "at have brug for",
  sentence: "Jeg har brug ___ en pause.",
  answer: "for",
  options: ["for", "til", "af", "med"]
},
{ verb: "at have brug for",
  sentence: "Hun har brug ___ hjælp til opgaven.",
  answer: "for",
  options: ["for", "til", "af", "på"]
},
{ verb: "at have brug for",
  sentence: "Vi har brug ___ mere tid.",
  answer: "for",
  options: ["for", "til", "af", "med"]
},

/* at have råd til */
{ verb: "at have råd til",
  sentence: "De har ikke råd ___ at købe hus.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at have råd til",
  sentence: "Har du råd ___ den nye bil?",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at have råd til",
  sentence: "Hun har endelig råd ___ at rejse.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},

/* at henvende sig til */
{ verb: "at henvende sig til",
  sentence: "Du skal henvende dig ___ receptionen.",
  answer: "til",
  options: ["til", "for", "på", "hos"]
},
{ verb: "at henvende sig til",
  sentence: "Han henvendte sig ___ sin chef med problemet.",
  answer: "til",
  options: ["til", "for", "på", "hos"]
},
{ verb: "at henvende sig til",
  sentence: "Borgerne kan henvende sig ___ kommunen for at få hjælp.",
  answer: "til",
  options: ["til", "for", "på", "hos"]
},

/* at holde af */
{ verb: "at holde af",
  sentence: "Jeg holder meget ___ min familie.",
  answer: "af",
  options: ["af", "på", "til", "for"]
},
{ verb: "at holde af",
  sentence: "Hun holder ___ at læse romaner.",
  answer: "af",
  options: ["af", "på", "til", "for"]
},
{ verb: "at holde af",
  sentence: "De holder ___ hinanden.",
  answer: "af",
  options: ["af", "på", "til", "for"]
},

/* at holde op (med) */
{ verb: "at holde op (med)",
  sentence: "Han holdt ___ med at ryge sidste år.",
  answer: "op",
  options: ["op", "ud", "af", "til"]
},
{ verb: "at holde op (med)",
  sentence: "Kan du ikke holde ___ med at larme?",
  answer: "op",
  options: ["op", "ud", "af", "til"]
},
{ verb: "at holde op (med)",
  sentence: "Hun vil holde ___ med at arbejde næste sommer.",
  answer: "op",
  options: ["op", "ud", "af", "til"]
},

/* at holde ud */
{ verb: "at holde ud",
  sentence: "Jeg kan ikke holde ___ at vente længere.",
  answer: "ud",
  options: ["ud", "op", "af", "til"]
},
{ verb: "at holde ud",
  sentence: "Hun holdt ___ trods smerterne.",
  answer: "ud",
  options: ["ud", "op", "af", "til"]
},
{ verb: "at holde ud",
  sentence: "Vi må holde ___ lidt endnu.",
  answer: "ud",
  options: ["ud", "op", "af", "til"]
},

/* at høre efter */
{ verb: "at høre efter",
  sentence: "Du skal høre ___ i timen.",
  answer: "efter",
  options: ["efter", "på", "til", "for"]
},
{ verb: "at høre efter",
  sentence: "Han hørte ikke ___, hvad jeg sagde.",
  answer: "efter",
  options: ["efter", "på", "til", "for"]
},
{ verb: "at høre efter",
  sentence: "Børnene lærer mere, når de hører ___.",
  answer: "efter",
  options: ["efter", "på", "til", "for"]
},

/* at høre op */
{ verb: "at høre op",
  sentence: "Regnen hørte ___ ved midnat.",
  answer: "op",
  options: ["op", "af", "ud", "til"]
},
{ verb: "at høre op",
  sentence: "Støjen hørte pludselig ___.",
  answer: "op",
  options: ["op", "af", "ud", "til"]
},
{ verb: "at høre op",
  sentence: "Stormen hørte ___, og det blev helt stille.",
  answer: "op",
  options: ["op", "af", "ud", "til"]
},

/* at komme an på */
{ verb: "at komme an på",
  sentence: "Det kommer an ___ vejret.",
  answer: "på",
  options: ["på", "af", "til", "om"]
},
{ verb: "at komme an på",
  sentence: "Det kommer helt an ___, hvad du mener.",
  answer: "på",
  options: ["på", "af", "til", "om"]
},
{ verb: "at komme an på",
  sentence: "Valget kommer an ___ prisen.",
  answer: "på",
  options: ["på", "af", "til", "om"]
},

/* at komme i tanke om */
{ verb: "at komme i tanke om",
  sentence: "Jeg kom i tanke ___ en god idé.",
  answer: "om",
  options: ["om", "på", "af", "til"]
},
{ verb: "at komme i tanke om",
  sentence: "Hun kom pludselig i tanke ___ sit løfte.",
  answer: "om",
  options: ["om", "på", "af", "til"]
},
{ verb: "at komme i tanke om",
  sentence: "Kan du komme i tanke ___ hans navn?",
  answer: "om",
  options: ["om", "på", "af", "til"]
},

/* at komme noget til */
{ verb: "at komme noget til",
  sentence: "Han kom slemt ___ skade i ulykken.",
  answer: "til",
  options: ["til", "af", "på", "for"]
},
{ verb: "at komme noget til",
  sentence: "Hun kom ikke noget ___ ved faldet.",
  answer: "til",
  options: ["til", "af", "på", "for"]
},
{ verb: "at komme noget til",
  sentence: "Ingen kom noget alvorligt ___.",
  answer: "til",
  options: ["til", "af", "på", "for"]
},

/* at lade som om */
{ verb: "at lade som om",
  sentence: "Han lod som ___, han ikke hørte det.",
  answer: "om",
  options: ["om", "at", "for", "til"]
},
{ verb: "at lade som om",
  sentence: "Hun lader som ___, hun forstår.",
  answer: "om",
  options: ["om", "at", "for", "til"]
},
{ verb: "at lade som om",
  sentence: "De lod som ___, alt var normalt.",
  answer: "om",
  options: ["om", "at", "for", "til"]
},

/* at lave om */
{ verb: "at lave om",
  sentence: "Vi må lave planen ___.",
  answer: "om",
  options: ["om", "af", "på", "til"]
},
{ verb: "at lave om",
  sentence: "Hun lavede teksten ___.",
  answer: "om",
  options: ["om", "af", "på", "til"]
},
{ verb: "at lave om",
  sentence: "De lavede aftalen ___ i sidste øjeblik.",
  answer: "om",
  options: ["om", "af", "på", "til"]
},

/* at leve af */
{ verb: "at leve af",
  sentence: "Han lever ___ at skrive bøger.",
  answer: "af",
  options: ["af", "på", "for", "til"]
},
{ verb: "at leve af",
  sentence: "Mange mennesker lever ___ landbrug.",
  answer: "af",
  options: ["af", "på", "for", "til"]
},
{ verb: "at leve af",
  sentence: "Hun kan ikke leve ___ sin kunst endnu.",
  answer: "af",
  options: ["af", "på", "for", "til"]
},

/* at lide af */
{ verb: "at lide af",
  sentence: "Han lider ___ allergi.",
  answer: "af",
  options: ["af", "under", "på", "for"]
},
{ verb: "at lide af",
  sentence: "Hun lider ___ sukkersyge.",
  answer: "af",
  options: ["af", "under", "på", "for"]
},
{ verb: "at lide af",
  sentence: "Mange mennesker lider ___ stress.",
  answer: "af",
  options: ["af", "under", "på", "for"]
},

/* at lide under */
{ verb: "at lide under",
  sentence: "Mange virksomheder lider ___ de høje energipriser.",
  answer: "under",
  options: ["under", "af", "på", "for"]
},
{ verb: "at lide under",
  sentence: "Børnene lider ___ forældrenes konflikter.",
  answer: "under",
  options: ["under", "af", "på", "for"]
},
{ verb: "at lide under",
  sentence: "Kursisterne led ___ lærerens konstant hårde kritik.",
  answer: "under",
  options: ["under", "af", "på", "for"]
},

/* at passe på */
{ verb: "at passe på",
  sentence: "Du skal passe ___ i trafikken.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},
{ verb: "at passe på",
  sentence: "Hun passer godt ___ sine ting.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},
{ verb: "at passe på",
  sentence: "Pas ___, at du ikke falder.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},

/* at regne med */
{ verb: "at regne med",
  sentence: "Jeg regner ___ at komme i morgen.",
  answer: "med",
  options: ["med", "på", "af", "til"]
},
{ verb: "at regne med",
  sentence: "Du kan ikke regne ___ ham.",
  answer: "med",
  options: ["med", "på", "af", "til"]
},
{ verb: "at regne med",
  sentence: "Vi må regne ___ forsinkelser.",
  answer: "med",
  options: ["med", "på", "af", "til"]
},

/* at regne ud */
{ verb: "at regne ud",
  sentence: "Kan du regne opgaven ___?",
  answer: "ud",
  options: ["ud", "op", "af", "til"]
},
{ verb: "at regne ud",
  sentence: "Hun regnede hurtigt svaret ___.",
  answer: "ud",
  options: ["ud", "op", "af", "til"]
},
{ verb: "at regne ud",
  sentence: "Jeg kan ikke regne ___, hvad han mener.",
  answer: "ud",
  options: ["ud", "op", "af", "til"]
},

/* at røre (ved) */
{ verb: "at røre (ved)",
  sentence: "Du må ikke røre ___ maleriet.",
  answer: "ved",
  options: ["ved", "på", "til", "af"]
},
{ verb: "at røre (ved)",
  sentence: "Hun rørte ___ hans arm.",
  answer: "ved",
  options: ["ved", "på", "til", "af"]
},
{ verb: "at røre (ved)",
  sentence: "Emnet rører ___ noget personligt.",
  answer: "ved",
  options: ["ved", "på", "til", "af"]
},

/* at råde nogen (til) noget */
{ verb: "at råde nogen (til) noget",
  sentence: "Lægen rådede ham ___ at stoppe med at ryge.",
  answer: "til",
  options: ["til", "fra", "om", "på"]
},
{ verb: "at råde nogen (til) noget",
  sentence: "Jeg vil råde dig ___ at tænke dig om.",
  answer: "til",
  options: ["til", "fra", "om", "på"]
},
{ verb: "at råde nogen (til) noget",
  sentence: "Hun rådede sin ven ___ at søge jobbet.",
  answer: "til",
  options: ["til", "fra", "om", "på"]

/* at råde nogen fra noget */
{ verb: "at råde nogen fra noget",
  sentence: "Lægen rådede ham ___ operationen.",
  answer: "fra",
  options: ["fra", "til", "om", "på"]
},
{ verb: "at råde nogen fra noget",
  sentence: "Jeg vil råde dig ___ at tage den beslutning nu.",
  answer: "fra",
  options: ["fra", "til", "om", "på"]
},
{ verb: "at råde nogen fra noget",
  sentence: "Hun rådede sin søn ___ at investere alle pengene ét sted.",
  answer: "fra",
  options: ["fra", "til", "om", "på"]
},

/* at se frem til */
{ verb: "at se frem til",
  sentence: "Jeg ser frem ___ ferien.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at se frem til",
  sentence: "Hun ser frem ___ at møde dig.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at se frem til",
  sentence: "Vi ser frem ___ samarbejdet.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},

/* at se op til */
{ verb: "at se op til",
  sentence: "Mange unge ser ___ til kendte sportsstjerner.",
  answer: "op",
  options: ["op", "frem", "ned", "ud"]
},
{ verb: "at se op til",
  sentence: "Jeg har altid set ___ til min lærer.",
  answer: "op",
  options: ["op", "frem", "ned", "ud"]
},
{ verb: "at se op til",
  sentence: "Hun ser ___ til sin storesøster.",
  answer: "op",
  options: ["op", "frem", "ned", "ud"]
},

/* at sige fra */
{ verb: "at sige fra",
  sentence: "Du skal sige ___, hvis det bliver for meget.",
  answer: "fra",
  options: ["fra", "til", "op", "af"]
},
{ verb: "at sige fra",
  sentence: "Hun sagde ___ over for de urimelige krav.",
  answer: "fra",
  options: ["fra", "til", "op", "af"]
},
{ verb: "at sige fra",
  sentence: "Børn skal lære at sige ___.",
  answer: "fra",
  options: ["fra", "til", "op", "af"]
},

/* at sige op */
{ verb: "at sige op",
  sentence: "Han sagde sit job ___ i går.",
  answer: "op",
  options: ["op", "fra", "af", "til"]
},
{ verb: "at sige op",
  sentence: "Hun sagde ___, fordi hun fik et bedre tilbud.",
  answer: "op",
  options: ["op", "fra", "af", "til"]
},
{ verb: "at sige op",
  sentence: "Jeg overvejer at sige ___ fra mit job.",
  answer: "op",
  options: ["op", "fra", "af", "til"]
},

/* at sige til */
{ verb: "at sige til",
  sentence: "Du skal bare sige ___, hvis du har brug for hjælp.",
  answer: "til",
  options: ["til", "fra", "op", "af"]
},
{ verb: "at sige til",
  sentence: "Sig ___, når du er klar.",
  answer: "til",
  options: ["til", "fra", "op", "af"]
},
{ verb: "at sige til",
  sentence: "Husk at sige ___, hvis du bliver forsinket.",
  answer: "til",
  options: ["til", "fra", "op", "af"]
},

/* at skrive under (på) */
{ verb: "at skrive under (på)",
  sentence: "Han skrev ___ på kontrakten.",
  answer: "under",
  options: ["under", "op", "af", "til"]
},
{ verb: "at skrive under (på)",
  sentence: "Du skal skrive ___ her.",
  answer: "under",
  options: ["under", "op", "af", "til"]
},
{ verb: "at skrive under (på)",
  sentence: "Hun nægtede at skrive ___ på aftalen.",
  answer: "under",
  options: ["under", "op", "af", "til"]
},

/* at slå til */
{ verb: "at slå til",
  sentence: "Vi må slå ___, mens tilbuddet gælder.",
  answer: "til",
  options: ["til", "fra", "op", "af"]
},
{ verb: "at slå til",
  sentence: "Han slog ___ og købte bilen.",
  answer: "til",
  options: ["til", "fra", "op", "af"]
},
{ verb: "at slå til",
  sentence: "Hvis chancen kommer, skal du slå ___.",
  answer: "til",
  options: ["til", "fra", "op", "af"]
},

/* at sove over */
{ verb: "at sove over",
  sentence: "Jeg sov ___ og kom for sent på arbejde.",
  answer: "over",
  options: ["over", "forbi", "op", "af"]
},
{ verb: "at sove over",
  sentence: "Hun sov ___, fordi hun ikke hørte alarmen.",
  answer: "over",
  options: ["over", "forbi", "op", "af"]
},
{ verb: "at sove over",
  sentence: "Han sov ___ i morges og nåede ikke toget.",
  answer: "over",
  options: ["over", "forbi", "op", "af"]
},

/* at springe over */
{ verb: "at springe over",
  sentence: "Jeg sprang morgenmaden ___ i dag.",
  answer: "over",
  options: ["over", "forbi", "af", "op"]
},
{ verb: "at springe over",
  sentence: "Du kan ikke bare springe opgaven ___.",
  answer: "over",
  options: ["over", "forbi", "af", "op"]
},
{ verb: "at springe over",
  sentence: "Hun sprang et trin ___ og faldt.",
  answer: "over",
  options: ["over", "forbi", "af", "op"]
},

/* at stole på */
{ verb: "at stole på",
  sentence: "Jeg stoler ___ dig.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},
{ verb: "at stole på",
  sentence: "Hun stoler ikke ___ fremmede.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},
{ verb: "at stole på",
  sentence: "Vi må kunne stole ___ hinanden.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},

/* at stræbe efter */
{ verb: "at stræbe efter",
  sentence: "Han stræber ___ at blive læge.",
  answer: "efter",
  options: ["efter", "til", "for", "om"]
},
{ verb: "at stræbe efter",
  sentence: "Virksomheden stræber ___ bæredygtighed.",
  answer: "efter",
  options: ["efter", "til", "for", "om"]
},
{ verb: "at stræbe efter",
  sentence: "Hun stræber ___ at forbedre sig hver dag.",
  answer: "efter",
  options: ["efter", "til", "for", "om"]
},

/* at søge efter */
{ verb: "at søge efter",
  sentence: "Politiet søger ___ den forsvundne mand.",
  answer: "efter",
  options: ["efter", "om", "for", "til"]
},
{ verb: "at søge efter",
  sentence: "Jeg søger ___ mine nøgler.",
  answer: "efter",
  options: ["efter", "om", "for", "til"]
},
{ verb: "at søge efter",
  sentence: "Hun søger ___ et nyt job.",
  answer: "efter",
  options: ["efter", "om", "for", "til"]
},

/* at tro på */
{ verb: "at tro på",
  sentence: "Jeg tror ___ dig.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},
{ verb: "at tro på",
  sentence: "Hun tror ___ en bedre fremtid.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},
{ verb: "at tro på",
  sentence: "De tror ikke ___ mirakler.",
  answer: "på",
  options: ["på", "af", "til", "for"]
},

/* at trænge til */
{ verb: "at trænge til",
  sentence: "Jeg trænger ___ en pause.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at trænge til",
  sentence: "Hun trænger ___ at komme væk et par dage.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at trænge til",
  sentence: "Vi trænger ___ lidt ro.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},

/* at tænke over */
{ verb: "at tænke over",
  sentence: "Jeg skal lige tænke ___ dit forslag, før jeg svarer.",
  answer: "over",
  options: ["over", "på", "om", "til"]
},
{ verb: "at tænke over",
  sentence: "Hun har tænkt meget ___, hvad hun vil studere.",
  answer: "over",
  options: ["over", "på", "om", "til"]
},
{ verb: "at tænke over",
  sentence: "Vi bør tænke ___, hvordan beslutningen påvirker de andre.",
  answer: "over",
  options: ["over", "på", "om", "til"]
},

/* at tænke på */
{ verb: "at tænke på",
  sentence: "Jeg tænker ofte ___ min tid i Tyskland.",
  answer: "på",
  options: ["på", "over", "om", "til"]
},
{ verb: "at tænke på",
  sentence: "Hun tænker ___ at skifte job næste år.",
  answer: "på",
  options: ["på", "over", "om", "til"]
},
{ verb: "at tænke på",
  sentence: "Vi må tænke ___ konsekvenserne, før vi beslutter os.",
  answer: "på",
  options: ["på", "over", "om", "til"]
},

/* at tænke sig om */
{ verb: "at tænke sig om",
  sentence: "Du bør tænke dig ___, før du siger noget, du kan komme til at fortryde.",
  answer: "om",
  options: ["om", "over", "på", "til"]
},
{ verb: "at tænke sig om",
  sentence: "Hun tænkte sig ___ et øjeblik, inden hun svarede.",
  answer: "om",
  options: ["om", "over", "på", "til"]
},
{ verb: "at tænke sig om",
  sentence: "Vi må tænke os ___, hvis vi vil træffe den rigtige beslutning.",
  answer: "om",
  options: ["om", "over", "på", "til"]
},

/* at vare ved */
{ verb: "at vare ved",
  sentence: "Regnen varede ___ hele dagen.",
  answer: "ved",
  options: ["ved", "over", "på", "til"]
},
{ verb: "at vare ved",
  sentence: "Diskussionen varede ___, selv om mødet officielt var slut.",
  answer: "ved",
  options: ["ved", "over", "på", "til"]
},
{ verb: "at vare ved",
  sentence: "Smerten kan vare ___ i flere uger efter operationen.",
  answer: "ved",
  options: ["ved", "over", "på", "til"]
},

/* at vænne sig til */
{ verb: "at vænne sig til",
  sentence: "Det tog tid at vænne sig ___ det nye arbejde.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at vænne sig til",
  sentence: "Hun har vænnet sig ___ at tale dansk hver dag.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at vænne sig til",
  sentence: "Børnene skal vænne sig ___ at stå tidligere op, når skolen begynder igen.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},

/* at vænne sig af med */
{ verb: "at vænne sig af med",
  sentence: "Jeg prøver at vænne mig ___ at drikke kaffe sent om aftenen.",
  answer: "af med",
  options: ["af med", "til", "fra", "for"]
},
{ verb: "at vænne sig af med",
  sentence: "Han måtte vænne sig ___ at ryge efter lægens råd.",
  answer: "af med",
  options: ["af med", "til", "fra", "for"]
},
{ verb: "at vænne sig af med",
  sentence: "Det er svært at vænne sig ___ dårlige vaner, hvis man ikke ændrer sine rutiner.",
  answer: "af med",
  options: ["af med", "til", "fra", "for"]
},

/* at være bange for */
{ verb: "at være bange for",
  sentence: "Jeg er bange ___ at flyve, selv om jeg ved, at det er sikkert.",
  answer: "for",
  options: ["for", "om", "på", "af"]
},
{ verb: "at være bange for",
  sentence: "Hun er bange ___, at hun ikke består eksamen.",
  answer: "for",
  options: ["for", "om", "på", "af"]
},
{ verb: "at være bange for",
  sentence: "De er bange ___ hunde, fordi de blev bidt som børn.",
  answer: "for",
  options: ["for", "om", "på", "af"]
},

/* at være glad for */
{ verb: "at være glad for",
  sentence: "Jeg er glad ___, at du kunne komme i dag.",
  answer: "for",
  options: ["for", "af", "om", "på"]
},
{ verb: "at være glad for",
  sentence: "Hun er glad ___ sit nye arbejde.",
  answer: "for",
  options: ["for", "af", "om", "på"]
},
{ verb: "at være glad for",
  sentence: "Vi er glade ___, at vejret endelig er blevet bedre.",
  answer: "for",
  options: ["for", "af", "om", "på"]
},

/* at være ked af */
{ verb: "at være ked af",
  sentence: "Jeg er ked ___, at jeg kom for sent til aftalen.",
  answer: "af",
  options: ["af", "for", "om", "på"]
},
{ verb: "at være ked af",
  sentence: "Hun var ked ___ det, da hun hørte nyheden.",
  answer: "af",
  options: ["af", "for", "om", "på"]
},
{ verb: "at være ked af",
  sentence: "Vi er kede ___, at vi ikke kan komme til festen i morgen.",
  answer: "af",
  options: ["af", "for", "om", "på"]
},

/* at være nødt til */
{ verb: "at være nødt til",
  sentence: "Jeg er nødt ___ at aflyse mødet, fordi jeg har fået feber.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at være nødt til",
  sentence: "De var nødt ___ at sælge bilen, da økonomien blev for stram.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at være nødt til",
  sentence: "Vi bliver nødt ___ at finde en løsning, hvis projektet skal lykkes.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},

/* at være vant til */
{ verb: "at være vant til",
  sentence: "Hun er vant ___ at tale dansk hver dag på arbejdet.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at være vant til",
  sentence: "Vi er ikke vant ___ at spise så stærk mad, men vi prøver alligevel.",
  answer: "til",
  options: ["til", "for", "af", "på"]
},
{ verb: "at være vant til",
  sentence: "Jeg er vant ___ at stå tidligt op og forberede undervisningen, før resten af huset vågner.",
  answer: "til",
  options: ["til", "for", "af", "på"]
}

];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = sentences[currentQuestion];
  questionEl.innerText = q.sentence;
  answersEl.innerHTML = "";

  // (valgfrit) shuffle options, så korrekt svar ikke altid ligger samme sted
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);

  shuffled.forEach((opt) => {
    const button = document.createElement("button");
    button.innerText = opt;
    button.onclick = () => checkAnswer(opt, q.answer);
    answersEl.appendChild(button);
  });
}

function checkAnswer(chosen, correct) {
  if (chosen === correct) {
    alert("Korrekt!");
  } else {
    alert(`Forkert! Rigtigt svar: ${correct}`);
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion >= sentences.length) currentQuestion = 0;
  loadQuestion();
};

loadQuestion();
