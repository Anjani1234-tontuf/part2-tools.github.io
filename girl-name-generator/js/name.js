
var names = [
	"fAaliyah","fAarushi","fAbagail","fAbbey","fAbbi","fAbbie","fAbby","fAbi","fAbia","fAbigail"
	,"fAbrielle","fAby","fAcacia","fAda","fAdalia","fAdalyn","fAddie","fAddison","fAdelaide","fAdele"
	,"fAdelia","fAdelina","fAdeline","fAdreanna","fAdriana","fAdrianna","fAdrianne","fAdrienne","fAerona","fAgatha"
	,"fAggie","fAgnes","fAida","fAileen","fAilsa","fAimee","fAine","fAinsleigh","fAinsley","fAisha"
	,"fAisling","fAislinn","fAlaina","fAlana","fAlanis","fAlanna","fAlannah","fAlaska","fAlayah","fAlayna"
	,"fAlba","fAlberta","fAleah","fAlecia","fAleisha","fAlejandra","fAlena","fAlessandra","fAlessia","fAlex"
	,"fAlexa","fAlexandra","fAlexandria","fAlexia","fAlexis","fAlexus","fAli","fAlia","fAlice","fAlicia"
	,"fAlina","fAlisa","fAlisha","fAlison","fAlissa","fAlivia","fAliyah","fAliza","fAlize","fAlka"
	,"fAllie","fAllison","fAlly","fAllyson","fAlma","fAlondra","fAlycia","fAlyshialynn","fAlyson","fAlyssa"
	,"fAlyssia","fAmalia","fAmanda","fAmani","fAmara","fAmari","fAmaris","fAmaya","fAmber","fAmberly"
	,"fAmelia","fAmelie","fAmerica","fAmethyst","fAmie","fAmina","fAmirah","fAmity","fAmy","fAmya"
	,"fAna","fAnabel","fAnabelle","fAnahi","fAnais","fAnamaria","fAnanya","fAnastasia","fAndie","fAndrea"
	,"fAndromeda","fAngel","fAngela","fAngelia","fAngelica","fAngelina","fAngeline","fAngelique","fAngie","fAnika"
	,"fAnisa","fAnita","fAniya","fAniyah","fAnjali","fAnn","fAnna","fAnnabel","fAnnabella","fAnnabelle"
	,"fAnnabeth","fAnnalisa","fAnnalise","fAnne","fAnneke","fAnnemarie","fAnnette","fAnnie","fAnnika","fAnnmarie"
	,"fAnthea","fAntoinette","fAntonia","fAnuja","fAnusha","fAnushka","fAnya","fAoibhe","fAoibheann","fAoife"
	,"fAphrodite","fApple","fApril","fAqua","fArabella","fArabelle","fAria","fAriadne","fAriana","fArianna"
	,"fArianne","fAriel","fAriella","fArielle","fArisha","fArleen","fArlene","fArlette","fArtemis","fArwen"
	,"fArya","fAsha","fAshanti","fAshlee","fAshleigh","fAshley","fAshlie","fAshlyn","fAshlynn","fAshton"
	,"fAshvini","fAsia","fAsma","fAspen","fAstrid","fAthena","fAthene","fAubreanna","fAubree","fAubrey"
	,"fAudra","fAudrey","fAudrina","fAugustina","fAurelia","fAurora","fAutumn","fAva","fAvalon","fAvery"
	,"fAvril","fAya","fAyana","fAyanna","fAyesha","fAyisha","fAyla","fAzalea","fAzaria","fAzariah"
	,"fBailey","fBarbara","fBarbie","fBay","fBaylee","fBea","fBeatrice","fBeatrix","fBecca","fBeccy"
	,"fBecky","fBelinda","fBella","fBellatrix","fBelle","fBenita","fBernadette","fBernice","fBertha","fBeryl"
	,"fBess","fBeth","fBethan","fBethanie","fBethany","fBetsy","fBettina","fBetty","fBeverly","fBeyonce"
	,"fBianca","fBillie","fBlair","fBlaire","fBlake","fBlakely","fBlanche","fBlaze","fBlessing","fBliss"
	,"fBloom","fBlossom","fBlythe","fBobbi","fBobbie","fBobby","fBonita","fBonnie","fBonquesha","fBraelyn"
	,"fBrandi","fBrandy","fBraylee","fBrea","fBreanna","fBree","fBreeze","fBrenda","fBrenna","fBria"
	,"fBriana","fBrianna","fBrianne","fBriar","fBridget","fBridgette","fBridie","fBriella","fBrielle","fBrigid"
	,"fBriley","fBrinley","fBriony","fBrisa","fBristol","fBritney","fBritt","fBrittany","fBrittney","fBrogan"
	,"fBronagh","fBronte","fBronwen","fBronwyn","fBrook","fBrooke","fBrooklyn","fBrooklynn","fBryanna","fBrylee"
	,"fBryn","fBrynlee","fBrynn","fBryony","fBunty","fCadence","fCailin","fCaitlan","fCaitlin","fCaitlyn"
	,"fCaleigh","fCali","fCalista","fCallie","fCalliope","fCallista","fCalypso","fCambria","fCameron","fCami"
	,"fCamila","fCamilla","fCamille","fCamryn","fCandace","fCandice","fCandis","fCandy","fCaoimhe","fCaprice"
	,"fCara","fCarina","fCaris","fCarissa","fCarla","fCarlene","fCarley","fCarlie","fCarly","fCarlynn"
	,"fCarmel","fCarmela","fCarmen","fCarol","fCarole","fCarolina","fCaroline","fCarolyn","fCarrie","fCarter"
	,"fCarys","fCasey","fCassandra","fCassia","fCassidy","fCassie","fCat","fCatalina","fCate","fCaterina"
	,"fCathalina","fCatherine","fCathleen","fCathy","fCatlin","fCatrina","fCatriona","fCayla","fCece","fCecelia"
	,"fCecilia","fCecily","fCeleste","fCelestia","fCelestine","fCelia","fCelina","fCeline","fCelise","fCerise"
	,"fCerys","fChanel","fChanelle","fChantal","fChantelle","fCharis","fCharissa","fCharity","fCharlene","fCharley"
	,"fCharlie","fCharlize","fCharlotte","fCharmaine","fChastity","fChelsea","fChelsey","fChenille","fCher","fCheri"
	,"fCherie","fCherry","fCheryl","fCheyanne","fCheyenne","fChiara","fChloe","fChris","fChrissy","fChrista"
	,"fChristabel","fChristal","fChristen","fChristi","fChristiana","fChristie","fChristina","fChristine","fChristy"
	,"fChrystal","fCiara","fCici","fCiel","fCierra","fCindy","fClaire","fClara","fClarabelle","fClare","fClarice"
	,"fClaris","fClarissa","fClarisse","fClarity","fClary","fClaudette","fClaudia","fClaudine","fClea","fClementine"
	,"fCleo","fCleopatra","fClodagh","fClotilde","fClover","fCoco","fColette","fColleen","fConnie","fConstance"
	,"fCora","fCoral","fCoralie","fCoraline","fCordelia","fCori","fCorina","fCorinne","fCornelia","fCorra"
	,"fCosette","fCourtney","fCressida","fCristal","fCristina","fCrystal","fCyndi","fCynthia","fDagmar","fDahlia"
	,"fDaisy","fDakota","fDana","fDanette","fDani","fDanica","fDaniela","fDaniella","fDanielle","fDanika"
	,"fDaphne","fDara","fDarby","fDarcey","fDarcie","fDarcy","fDaria","fDarla","fDarlene","fDasia"
	,"fDavida","fDavina","fDawn","fDayna","fDaysha","fDeana","fDeandra","fDeann","fDeanna","fDeanne"
	,"fDeb","fDebbie","fDebby","fDebora","fDeborah","fDebra","fDee","fDeedee","fDeena","fDeidre"
	,"fDeirdre","fDeja","fDelaney","fDelanie","fDelany","fDelia","fDelilah","fDella","fDelores","fDelphine"
	,"fDemetria","fDemi","fDena","fDenise","fDenny","fDesiree","fDestinee","fDestiny","fDiamond","fDiana"
	,"fDiane","fDianna","fDianne","fDido","fDina","fDionne","fDior","fDixie","fDolly","fDolores"
	,"fDominique","fDonna","fDora","fDoreen","fDoris","fDorothy","fDot","fDrew","fDulce","fEabha"
	,"fEbony","fEcho","fEden","fEdie","fEdith","fEdna","fEdwina","fEffie","fEileen","fEilidh"
	,"fEimear","fElaina","fElaine","fElana","fEleanor","fElectra","fElektra","fElena","fEliana","fElin"
	,"fElina","fElinor","fElisa","fElisabeth","fElise","fEliza","fElizabeth","fElla","fElle","fEllen"
	,"fEllery","fEllie","fEllis","fElly","fElodie","fEloise","fElora","fElsa","fElsie","fElspeth"
	,"fElva","fElvira","fElysia","fElyza","fEmanuela","fEmber","fEmelda","fEmely","fEmer","fEmerald"
	,"fEmerson","fEmilee","fEmilia","fEmilie","fEmily","fEmma","fEmmalee","fEmmaline","fEmmalyn","fEmmanuelle"
	,"fEmmeline","fEmmie","fEmmy","fEnid","fEnya","fErica","fErika","fErin","fEris","fEryn"
	,"fEsmay","fEsme","fEsmeralda","fEsparanza","fEsperanza","fEstee","fEstelle","fEster","fEsther","fEstrella"
	,"fEthel","fEugenie","fEunice","fEva","fEvangelina","fEvangeline","fEve","fEvelin","fEvelyn","fEverly"
	,"fEvie","fEvita","fFabrizia","fFaith","fFallon","fFanny","fFarah","fFarrah","fFatima","fFawn"
	,"fFay","fFaye","fFelicia","fFelicity","fFern","fFernanda","fFfion","fFifi","fFiona","fFleur"
	,"fFlick","fFlo","fFlora","fFlorence","fFran","fFrances","fFrancesca","fFrancine","fFrankie","fFreda"
	,"fFreya","fFrida","fGabby","fGabriela","fGabriella","fGabrielle","fGail","fGarnet","fGayle","fGaynor"
	,"fGeena","fGemma","fGena","fGenesis","fGenevieve","fGeorgette","fGeorgia","fGeorgie","fGeorgina","fGeraldine"
	,"fGert","fGertrude","fGia","fGianna","fGigi","fGillian","fGina","fGinger","fGinny","fGiovanna"
	,"fGisela","fGiselle","fGisselle","fGladys","fGlenda","fGlenys","fGloria","fGolda","fGoldie","fGrace"
	,"fGracelyn","fGracie","fGrainne","fGreta","fGretchen","fGriselda","fGuadalupe","fGuinevere","fGwen","fGwendolyn"
	,"fGwyneth","fHabiba","fHadley","fHailee","fHailey","fHaleigh","fHaley","fHalle","fHallie","fHanna"
	,"fHannah","fHarley","fHarmony","fHarper","fHarriet","fHattie","fHaven","fHayden","fHaylee","fHayley"
	,"fHazel","fHazeline","fHeather","fHeaven","fHeidi","fHelen","fHelena","fHelene","fHelga","fHelina"
	,"fHenrietta","fHepsiba","fHera","fHermione","fHester","fHetty","fHilary","fHilda","fHillary","fHollie"
	,"fHolly","fHonesty","fHoney","fHonor","fHonour","fHope","fHyacinth","fIanthe","fIda","fIla"
	,"fIlene","fIliana","fIlona","fIlse","fImani","fImelda","fImogen","fIndia","fIndie","fIndigo"
	,"fIndira","fInes","fIngrid","fIona","fIra","fIrene","fIrina","fIris","fIrma","fIsa"
	,"fIsabel","fIsabell","fIsabella","fIsabelle","fIsadora","fIsha","fIsis","fIsla","fIsobel","fIsolde"
	,"fItzel","fIvana","fIvy","fIyanna","fIzabella","fIzidora","fIzzie","fIzzy","fJacinda","fJacinta"
	,"fJackie","fJacqueline","fJacquelyn","fJada","fJade","fJaden","fJadyn","fJaelynn","fJaida","fJaime"
	,"fJamie","fJamiya","fJan","fJana","fJancis","fJane","fJanelle","fJanessa","fJanet","fJanette"
	,"fJania","fJanice","fJanie","fJanine","fJanis","fJaniya","fJanuary","fJaqueline","fJasmin","fJasmine"
	,"fJaya","fJayda","fJayden","fJayla","fJaylene","fJaylinn","fJaylynn","fJayne","fJazlyn","fJazmin"
	,"fJazmine","fJazz","fJean","fJeanette","fJeanine","fJeanne","fJeannette","fJeannie","fJeannine","fJemima"
	,"fJemma","fJen","fJena","fJenelle","fJenessa","fJenna","fJennette","fJenni","fJennie","fJennifer"
	,"fJenny","fJensen","fJeri","fJerri","fJess","fJessa","fJessica","fJessie","fJet","fJewel"
	,"fJill","fJillian","fJo","fJoan","fJoann","fJoanna","fJoanne","fJocelyn","fJodi","fJodie"
	,"fJody","fJoelle","fJohanna","fJoleen","fJolene","fJolie","fJoni","fJordan","fJordana","fJordyn"
	,"fJorja","fJoselyn","fJosephine","fJosie","fJoy","fJoyce","fJuanita","fJude","fJudith","fJudy"
	,"fJules","fJulia","fJuliana","fJulianna","fJulianne","fJulie","fJulienne","fJuliet","fJuliette","fJulissa"
	,"fJuly","fJune","fJuniper","fJuno","fJustice","fJustina","fJustine","fKacey","fKadence","fKaidence"
	,"fKailey","fKailyn","fKaitlin","fKaitlyn","fKaitlynn","fKalea","fKaleigh","fKali","fKalia","fKallie"
	,"fKamala","fKamryn","fKara","fKaren","fKari","fKarin","fKarina","fKarissa","fKarla","fKarlee"
	,"fKarly","fKarolina","fKaryn","fKasey","fKassandra","fKassidy","fKassie","fKat","fKatara","fKatarina"
	,"fKate","fKatelyn","fKatelynn","fKaterina","fKatharine","fKatherine","fKathleen","fKathryn","fKathy","fKatia"
	,"fKatie","fKatlyn","fKatniss","fKatrina","fKaty","fKatya","fKay","fKaya","fKaye","fKayla"
	,"fKaylee","fKayleigh","fKayley","fKaylie","fKaylin","fKeara","fKeeley","fKeely","fKeira","fKeisha"
	,"fKelis","fKelley","fKelli","fKellie","fKelly","fKelsey","fKelsie","fKendall","fKendra","fKenna"
	,"fKennedy","fKenzie","fKera","fKeri","fKerian","fKerri","fKerry","fKia","fKiana","fKiara"
	,"fKiera","fKierra","fKiersten","fKiki","fKiley","fKim","fKimberlee","fKimberley","fKimberly","fKimbriella"
	,"fKimmy","fKinley","fKinsey","fKinsley","fKira","fKirsten","fKirstin","fKirsty","fKitty","fKizzy"
	,"fKloe","fKora","fKori","fKourtney","fKris","fKrista","fKristen","fKristi","fKristie","fKristin"
	,"fKristina","fKristine","fKristy","fKrystal","fKyla","fKylee","fKyleigh","fKylie","fKyra","fLacey"
	,"fLacie","fLacy","fLadonna","fLaila","fLainey","fLakyn","fLala","fLana","fLaney","fLara"
	,"fLarissa","fLatoya","fLaura","fLaurel","fLauren","fLaurie","fLauryn","fLavana","fLavender","fLavinia"
	,"fLayla","fLea","fLeah","fLeandra","fLeann","fLeanna","fLeanne","fLee","fLeela","fLeena"
	,"fLeia","fLeigh","fLeila","fLeilani","fLela","fLena","fLenore","fLeona","fLeonie","fLeora"
	,"fLesley","fLeslie","fLesly","fLeticia","fLetitia","fLettie","fLexi","fLexia","fLexie","fLexis"
	,"fLia","fLiana","fLianne","fLibbie","fLibby","fLiberty","fLidia","fLiesl","fLila","fLilac"
	,"fLilah","fLili","fLilian","fLiliana","fLilita","fLilith","fLillia","fLillian","fLillie","fLilly"
	,"fLily","fLina","fLinda","fLindsay","fLindsey","fLindy","fLisa","fLisette","fLiv","fLivia"
	,"fLivvy","fLiz","fLiza","fLizbeth","fLizette","fLizzie","fLizzy","fLogan","fLois","fLola"
	,"fLolita","fLondon","fLora","fLoran","fLorelei","fLoren","fLorena","fLoretta","fLori","fLorie"
	,"fLorna","fLorraine","fLorri","fLorrie","fLottie","fLotus","fLou","fLouisa","fLouise","fLuann"
	,"fLucia","fLuciana","fLucie","fLucille","fLucinda","fLucky","fLucy","fLuisa","fLulu","fLuna"
	,"fLupita","fLuz","fLydia","fLyla","fLynda","fLyndsey","fLynette","fLynn","fLynne","fLynnette"
	,"fLynsey","fLyra","fLyric","fMabel","fMacey","fMacie","fMackenzie","fMacy","fMadalyn","fMaddie"
	,"fMaddison","fMaddy","fMadeleine","fMadeline","fMadelyn","fMadison","fMadisyn","fMadonna","fMadyson","fMae"
	,"fMaeve","fMagda","fMagdalena","fMagdalene","fMaggie","fMaia","fMaire","fMairead","fMaisie","fMaisy"
	,"fMaja","fMakayla","fMakenna","fMakenzie","fMalia","fMalina","fMalinda","fMallory","fMalory","fMandy"
	,"fManuela","fMara","fMarcela","fMarcella","fMarcelle","fMarci","fMarcia","fMarcie","fMarcy","fMargaret"
	,"fMargarita","fMargaux","fMarge","fMargie","fMargo","fMargot","fMargret","fMaria","fMariah","fMariam"
	,"fMarian","fMariana","fMarianna","fMarianne","fMaribel","fMarie","fMariela","fMariella","fMarilyn","fMarina"
	,"fMarion","fMarisa","fMarisol","fMarissa","fMaritza","fMarjorie","fMarla","fMarlee","fMarlena","fMarlene"
	,"fMarley","fMarnie","fMarsha","fMartha","fMartina","fMary","fMaryam","fMaryann","fMarybeth","fMasie"
	,"fMatilda","fMaude","fMaura","fMaureen","fMavis","fMaxine","fMay","fMaya","fMazie","fMckayla"
	,"fMckenna","fMckenzie","fMea","fMeadow","fMeagan","fMeera","fMeg","fMegan","fMeghan","fMei"
	,"fMel","fMelanie","fMelina","fMelinda","fMelissa","fMelody","fMercedes","fMercy","fMeredith","fMerida"
	,"fMeryl","fMia","fMichaela","fMichele","fMichelle","fMika","fMikaela","fMikayla","fMikhaela","fMila"
	,"fMildred","fMilena","fMiley","fMillicent","fMillie","fMilly","fMimi","fMina","fMindy","fMinerva"
	,"fMinnie","fMira","fMirabel","fMirabelle","fMiracle","fMiranda","fMiriam","fMirielle","fMissie","fMisty"
	,"fMitzi","fMoira","fMollie","fMolly","fMona","fMonica","fMonika","fMonique","fMontana","fMorgan"
	,"fMorgana","fMoya","fMuriel","fMya","fMyfanwy","fMyla","fMyra","fMyrna","fMyrtle","fNadene"
	,"fNadia","fNadine","fNaja","fNala","fNana","fNancy","fNanette","fNaomi","fNatalia","fNatalie"
	,"fNatasha","fNaya","fNayeli","fNell","fNellie","fNelly","fNena","fNerissa","fNessa","fNevaeh"
	,"fNeve","fNia","fNiamh","fNichola","fNichole","fNicki","fNicky","fNicola","fNicole","fNicolette"
	,"fNieve","fNiki","fNikita","fNikki","fNila","fNina","fNishka","fNoelle","fNoemi","fNola"
	,"fNora","fNorah","fNoreen","fNorma","fNova","fNyla","fOasis","fOcean","fOctavia","fOdalis"
	,"fOdele","fOdelia","fOdette","fOlga","fOlive","fOlivia","fOona","fOonagh","fOpal","fOphelia"
	,"fOprah","fOriana","fOrianna","fOrla","fOrlaith","fPage","fPaige","fPaisley","fPaloma","fPam"
	,"fPamela","fPandora","fPansy","fPaola","fParis","fPatience","fPatrice","fPatricia","fPatsy","fPatti"
	,"fPatty","fPaula","fPaulette","fPaulina","fPauline","fPayton","fPeace","fPearl","fPeggy","fPenelope"
	,"fPenny","fPerla","fPerrie","fPersephone","fPetra","fPetunia","fPeyton","fPhillipa","fPhilomena","fPhoebe"
	,"fPhoenix","fPhyllis","fPiper","fPippa","fPixie","fPolly","fPollyanna","fPoppy","fPortia","fPrecious"
	,"fPresley","fPreslie","fPrimrose","fPrincess","fPriscilla","fPriya","fPromise","fPrudence","fPrue","fQueenie"
	,"fQuiana","fQuinn","fRabia","fRachael","fRachel","fRachelle","fRae","fRaegan","fRaelyn","fRaina"
	,"fRaine","fRamona","fRamsha","fRandi","fRani","fRania","fRaquel","fRaven","fRaya","fRayna"
	,"fRayne","fReagan","fReanna","fReanne","fRebecca","fRebekah","fReese","fRegan","fRegina","fReilly"
	,"fReina","fRemi","fRena","fRenata","fRene","fRenee","fRenesmee","fReyna","fRhea","fRhian"
	,"fRhianna","fRhiannon","fRhoda","fRhona","fRhonda","fRia","fRianna","fRicki","fRihanna","fRikki"
	,"fRiley","fRita","fRiver","fRiya","fRoanne","fRoberta","fRobin","fRobyn","fRochelle","fRocio"
	,"fRoisin","fRolanda","fRonda","fRoni","fRosa","fRosalie","fRosalina","fRosalind","fRosalinda","fRosalynn"
	,"fRosanna","fRose","fRoseanne","fRosella","fRosemarie","fRosemary","fRosetta","fRosie","fRosy","fRowan"
	,"fRowena","fRoxana","fRoxanne","fRoxie","fRoxy","fRozlynn","fRuby","fRue","fRuth","fRuthie"
	,"fRydel","fRylee","fRyleigh","fRylie","fSabina","fSabine","fSable","fSabrina","fSade","fSadhbh"
	,"fSadie","fSaffron","fSafire","fSafiya","fSage","fSahara","fSaige","fSaira","fSally","fSalma"
	,"fSalome","fSam","fSamantha","fSamara","fSamia","fSamira","fSammie","fSammy","fSandra","fSandy"
	,"fSania","fSaoirse","fSapphire","fSara","fSarah","fSarina","fSariya","fSascha","fSasha","fSaskia"
	,"fSavanna","fSavannah","fScarlet","fScarlett","fSebastianne","fSelah","fSelena","fSelene","fSelina","fSelma"
	,"fSenuri","fSeptember","fSeren","fSerena","fSerenity","fShakira","fShana","fShania","fShannon","fShari"
	,"fSharon","fShary","fShauna","fShawn","fShawna","fShawnette","fShayla","fShayna","fShea","fSheba"
	,"fSheena","fSheila","fShelby","fShelia","fShelley","fShelly","fSheri","fSheridan","fSherri","fSherrie"
	,"fSherry","fSheryl","fShirley","fShivani","fShona","fShonagh","fShreya","fShyla","fSian","fSidney"
	,"fSienna","fSierra","fSigourney","fSilvia","fSimone","fSimran","fSinead","fSiobhan","fSky","fSkye"
	,"fSkylar","fSkyler","fSloane","fSnow","fSofia","fSofie","fSondra","fSonia","fSonja","fSonya"
	,"fSophia","fSophie","fSophy","fSorrel","fSpring","fStacey","fStaci","fStacie","fStacy","fStar"
	,"fStarla","fStefanie","fStella","fSteph","fStephanie","fSue","fSuki","fSummer","fSusan","fSusanna"
	,"fSusannah","fSusanne","fSusie","fSutton","fSuzanna","fSuzanne","fSuzette","fSuzie","fSuzy","fSybil"
	,"fSydney","fSylvia","fSylvie","fTabatha","fTabitha","fTahlia","fTala","fTalia","fTalitha","fTaliyah"
	,"fTallulah","fTamara","fTamera","fTami","fTamia","fTamika","fTammi","fTammie","fTammy","fTamra"
	,"fTamsin","fTania","fTanisha","fTanya","fTara","fTaryn","fTasha","fTasmin","fTatiana","fTatum"
	,"fTawana","fTaya","fTayah","fTayla","fTaylah","fTayler","fTaylor","fTeagan","fTeegan","fTegan"
	,"fTeigan","fTenille","fTeresa","fTeri","fTerri","fTerrie","fTerry","fTess","fTessa","fThalia"
	,"fThea","fThelma","fTheodora","fTheresa","fTherese","fThomasina","fTia","fTiana","fTiegan","fTiffany"
	,"fTilly","fTina","fTisha","fToni","fTonia","fTonya","fTori","fTracey","fTraci","fTracie"
	,"fTracy","fTricia","fTrina","fTrinity","fTrish","fTrisha","fTrista","fTrixie","fTrixy","fTrudy"
	,"fTula","fTulip","fTyra","fUlrica","fUma","fUna","fUrsula","fValentina","fValeria","fValerie"
	,"fValery","fVanessa","fVeda","fVelma","fVenetia","fVenus","fVera","fVerity","fVeronica","fVicki"
	,"fVickie","fVicky","fVictoria","fVienna","fViola","fViolet","fVioletta","fVirginia","fVivian","fViviana"
	,"fVivien","fVivienne","fWallis","fWanda","fWaverley","fWendi","fWendy","fWhitney","fWilhelmina","fWilla"
	,"fWillow","fWilma","fWinnie","fWinnifred","fWinona","fWinter","fXandra","fXanthe","fXaviera","fXena"
	,"fXia","fXimena","fXochil","fXochitl","fYasmin","fYasmine","fYazmin","fYelena","fYesenia","fYolanda"
	,"fYsabel","fYulissa","fYvaine","fYvette","fYvonne","fZada","fZaheera","fZahra","fZaira","fZakia"
	,"fZali","fZara","fZaria","fZaya","fZayla","fZelda","fZelida","fZelina","fZena","fZendaya"
	,"fZia","fZina","fZiva","fZoe","fZoey","fZola","fZora","fZoya","fZula","fZuri"
	,"fZyana"
];

// Global variables
var keepNameArray = []; // Empty Global array when initialized. getGirlName() pushes into it.
var lastname; // Last name declared, value gathered from user input
var middlename; // Middle name declared, value gathered from user input
var randomNameHolder = document.getElementById('name');
var keepNameHolder = document.getElementById('keep');
var previewHolder = document.getElementById('namePreviewHolder');
var infoSection = document.getElementById('infoSection');
var messageElt = document.getElementById('message');

// Hide Name Inputs on page load
var lastnameinput = document.getElementById('lastNameInput');
var middlenameinput = document.getElementById('middleNameInput');
var nameInputs = document.getElementById('nameInputs');

function storeNames() {
	// Takes names as inputs, hides the inputs once complete, shows the Preview
	middlename = middlenameinput.value;
	lastname = lastnameinput.value;
	nameInputs.classList.add('hide');
	messageElt.innerHTML = "";
	namePreview();
}

function getGirlName() {
	// Get name from array using a random number as the array index.
	var randomNum = Math.floor(Math.random() * 1880);
	var randomName = names[randomNum]; // Uses randomNum as array index
	randomName = randomName.slice(1, randomName.length); // Slice off the leading 'f' in each name
	randomNameHolder.innerHTML = randomName; // add the name to #name
	keepNameArray.push(randomName); // Push the name to the keepNameArray for the getLastName()
}

function keepName() {
	// Creates new name to keep entry
	var keepNameEntry = document.createElement('p');
	// Define the innerHTML of the keepNameEntry as the value of the current Random Name
	var nameToKeep = randomNameHolder.innerHTML;
	// Create a text node, for the text
	var keepNameEntryText = document.createTextNode(nameToKeep);
	// append text node to the new p element
	keepNameEntry.appendChild(keepNameEntryText);

	// Add CSS class of .keep to the p element
	keepNameEntry.className = "keep";

	// Create a counter for the number of p elements added
	var countElt = document.getElementsByClassName('keep');
	var count = countElt.length;
	// If more than 6 entries added, alert user that they have reached max
	if (count > 6) {
		alert("You have reached the max limit");
	} else {
		keepNameHolder.appendChild(keepNameEntry);
	}
}

function removeLast() {
	// removes the last child of #name (the last p element in the div)
	var childToRemove = keepNameHolder.lastChild;
	keepNameHolder.removeChild(childToRemove);
}

function getLastName() {
	// Retrieves previous name generated and replaces innerHTML of the div.
	var lastName = keepNameArray[keepNameArray.length - 2];
	randomNameHolder.innerHTML = lastName;
}

function namePreview() {
	// Gives user a preview of the full name.
	// If the lastname variable is not yet defined, it asks for names()
	if (typeof lastname === 'undefined') {
		var messageText = "Please enter a Last, and/or Middle name.";
		messageElt.innerHTML = messageText;
		messageElt.classList.add('message-image');
		nameInputs.classList.add('show');
	} else {
		var name = randomNameHolder.innerHTML;
		previewHolder.innerHTML = name + " " + middlename + " " + lastname;
	}
}

function changeMiddleName() {
	// Gives user to change middle name, keeping other names the same
	middlename = prompt("Update middle name:");
	var name = randomNameHolder.innerHTML;
	previewHolder.innerHTML = name + " " + middlename + " " + lastname;
}

function showLinks() {
	// Show and Hide the Info section
	infoSection.classList.toggle('show');
}



// Events targets
var getNameButton = document.getElementById('getGirlName');
var previousNameButton = document.getElementById('getLastName');
var keepNameButton = document.getElementById('keepName');
var removeLastNameButton = document.getElementById('removeLast');
var namePreviewButton = document.getElementById('namePreview');
var changeMiddleButton = document.getElementById('changeMiddleName');
var addNames = document.getElementById('submit');
var showMobileInfo = document.getElementById('mobileLinks');

// Event Handlers:
// These are older DOM event handlers that have good cross-browser support.
// Limitation is that only one event can be added per element with this method.
getNameButton.onclick = getGirlName;
previousNameButton.onclick = getLastName;
keepNameButton.onclick = keepName;
removeLastNameButton.onclick = removeLast;
namePreviewButton.onclick = namePreview;
changeMiddleButton.onclick = changeMiddleName;
addNames.onclick = storeNames;
showMobileInfo.onclick = showLinks;

// Newer Event Listener method. Not supported in IE 5-8.
// getNameButton.addEventListener('click', getGirlName, false);



