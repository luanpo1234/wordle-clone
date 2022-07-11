const validLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
//const wordList = "Areia areje arejo arela arele arelo arena ARENA arepa arerê areus arfar argan argel Argel árgon Argos Arial árias Árias árido Ariel Aries Áries arigô arigó arilo arimo Ários arjão armai armam armar armas armei armem armes armou armur arnal arnaz arnês a␣rodo arola arolo aroma aromo arosi arpão arpar arpéu arqui- arras arrau arreu arroz artes Artur Aruba Arujá arujo árula arume arxar asais asara asará asava ASCII áscua aseis asilo asnal asnar asnos aspar aspas assai Assaí assam assar assas assaz assei assem asses assim Assis assou assuã astro ástur atado atais atara atará atava atear ateia atéia ateis Atena atese ateso até␣tu ateus atiça atiço ático Átila atino atire atiro ativa ative ativo atlas Atlas átomo atoni átono atrás Atreu a␣treu atril átrio atriz atroa atroo atros atroz atuai atual atuam atuar atuas atuei atuem atues atuou atxim aução audaz áudio aueté aueti áurea Áurea áureo aurir autor autos avais avara Avaré avaro ávaro avati aveia avelã à␣vela avena à␣vera avião aviar ávido avisa avise aviso aweti axila Axixá azado azare azedo azeri ázimo azoai azoam azoar azoas azoei azoem azoes à␣zóia azoou azoto azuis azule azulo babai babam babão babas babau babei babel Babel babem babes babou bacar bacia bacio bacon badio baeta bafar bafio bágoa bagre Bagre bágua Bahia baião Baião baiar baila baile bailo baita baite baixa baixe baixo balão balar balas balbo balda balde balés balga balho balir baliu balor balsa bamba bambê bâmbi bambo bambu banal banca bancá banco banda Banda bandê bando bandô banga bango banha banho banir banjo banto bantu banza banzé banzo baobá barão Barão barba barbo barca barco barda bardo Barém barga bário barra Barra barre barro Barro basaa basal basca basco"
//.toUpperCase().split(" ");
const letterColors = {
    "wrongBg": getComputedStyle(document.body).getPropertyValue("--wrong-letter-bg-color"),
    "rightPosBg": getComputedStyle(document.body).getPropertyValue("--right-pos-letter-bg-color"),
    "rightBg": getComputedStyle(document.body).getPropertyValue("--right-letter-bg-color"),
    "used": getComputedStyle(document.body).getPropertyValue("--used-letter-color")};

export { validLetters, letterColors };