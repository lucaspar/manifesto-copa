<template>
    <section class="section">
        <div class="columns">
            <div class="column is-one-quarter">
                <div class="level-right">
                    <div class="controls">
                        <div class="field">
                            <div class="control">
                                <input id="editMode" type="checkbox" v-model="editMode"/>
                                <label for="editMode"><b>Modo de edição</b></label>
                            </div>
                        </div>
                        <div class="field">
                            <button type="button" class="button is-primary" v-on:click="share()">Selecionar tudo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div id="manifesto">

                    <p class="is-size-5">COPA <input v-if="editMode" type="text" v-model="currentYear"/> <span v-else>{{ currentYear }}</span> – DIVULGADO O ESCÂNDALO QUE TODO MUNDO SUSPEITAVA !</p>

                    <hr>

                    <p>Talvez, isso explique a razão do jogador <input v-if="editMode" type="text" v-model="player"/> <span v-else>{{ player }}</span> ter declarado a seguinte frase:
                    ‘”Se as pessoas soubessem o que aconteceu em <input v-if="editMode" type="text" v-model="location"/> <span v-else>{{ location }}</span>, ficariam enojadas!”.</p>

                    <p>Todos os <input v-if="editMode" type="text" v-model="chocados"/> <span v-else>{{ chocados }}</span> ficaram chocados e tristes por terem perdido a Copa do Mundo de futebol,
                    na <input v-if="editMode" type="text" v-model="hostCountry"/> <span v-else>{{ hostCountry }}</span>. Não deveriam.</p>

                    <p>O que está exposto abaixo é a notícia em primeira mão que está sendo investigada por
                    rádios e jornais de todo a Europa e alguns estrangeiros, mais especificamente Wall
                    Street Journal of Americas e o Gazzeta delo Sport e deve sair na mídia em breve, assim
                    que as provas forem colhidas e confirmarem os fatos.</p>

                    <p>Fato comprovado:</p>

                    <p>A <input v-if="editMode" type="text" v-model="country"/> <span v-else>{{ country }}</span> VENDEU a copa do mundo para a FIFA. Os jogadores titulares <input v-if="editMode" type="text" v-model="chocados"/> <span v-else>{{ chocados }}</span> foram avisados,
                    às <input v-if="editMode" type="text" v-model="hour"/> <span v-else>{{ hour }}</span> do dia <input v-if="editMode" type="text" v-model="date"/> <span v-else>{{ date }}</span> (dia do jogo), em uma reunião envolvendo a
                    <input v-if="editMode" type="text" v-model="president"/> <span v-else>{{ president }}</span>, presidente da <input v-if="editMode" type="text" v-model="country"/> <span v-else>{{ country }}</span>,
                    <input v-if="editMode" type="text" v-model="presidentOfFootballFederationOfCountry"/> <span v-else>{{ presidentOfFootballFederationOfCountry }}</span>,
                    <input v-if="editMode" type="text" v-model="countryCoach"/> <span v-else>{{ countryCoach }}</span>,
                    <input v-if="editMode" type="text" v-model="countryExCoach"/> <span v-else>{{ countryExCoach }}</span>,
                    <input v-if="editMode" type="text" v-model="fifaPresident"/> <span v-else>{{ fifaPresident }}</span> e
                    <input v-if="editMode" type="text" v-model="sponsorRep"/> <span v-else>{{ sponsorRep }}</span>,
                    representante da patrocinadora <input v-if="editMode" type="text" v-model="sponsor"/> <span v-else>{{ sponsor }}</span>.
                    Os jogadores reservas permaneceram em isolamento, em seus quartos ou no lobby do hotel.</p>

                    <p>A princípio muito contrariados, os jogadores se recusaram a trocar o inédito título mundial
                    por sediar a Copa do Mundo. A aceitação veio através do pagamento total dos prêmios,
                    US$70.000,00 para cada jogador, mais um bônus de US$400.000,00 para todos os jogadores e
                    integrantes da comissão, num total de US$ 23.000.000,00 vinte e três milhões de dólares)
                    através da empresa <input v-if="editMode" type="text" v-model="sponsor"/> <span v-else>{{ sponsor }}</span>.</p>

                    <p>Além disso, os jogadores que aceitarem o contrato com a empresa <input v-if="editMode" type="text" v-model="sponsor"/> <span v-else>{{ sponsor }}</span> nos próximos 4 anos
                    terão as mesmas bases de prêmios que os jogadores de elite da empresa, como <input v-if="editMode" type="text" v-model="player1"/> <span v-else>{{ player1 }}</span>,
                    <input v-if="editMode" type="text" v-model="player2"/> <span v-else>{{ player2 }}</span>, <input v-if="editMode" type="text" v-model="player3"/> <span v-else>{{ player3 }}</span> e <input v-if="editMode" type="text" v-model="player4"/> <span v-else>{{ player4 }}</span>.</p>

                    <p>Assim, combinou-se que a <input v-if="editMode" type="text" v-model="country"/> <span v-else>{{ country }}</span> seria derrotada após o tempo normal, seguindo o mesmo padrão
                    dos jogos anterior. Porém a apatia que se abateu sobre os jogadores titulares fez com que a
                    <input v-if="editMode" type="text" v-model="winnerTeam"/> <span v-else>{{ winnerTeam }}</span>, que absolutamente não participou desta negociação, marcasse em falhas simples da defesa.
                    O goleiro <input v-if="editMode" type="text" v-model="goalkeeper"/> <span v-else>{{ goalkeeper }}</span>, claramente um dos mais renegados a respeito da negociação, não encontrou
                    forças para defender bolas simples chutadas a gol pelo time francês.</p>

                    <p><input v-if="editMode" type="text" v-model="boss"/> <span v-else>{{ boss }}</span>, aplaudiu a colaboração da equipe croata, uma vez
                    que o campeonato mundial traz equilibrio à Europa num momento conturbado do continente, com vários
                    problemas políticos e econômicos.</p>

                    <p>Garantiu, também, <input v-if="editMode" type="text" v-model="interlocutor"/> <span v-else>{{ interlocutor }}</span>, através de seu braço direito, <input v-if="editMode" type="text" v-model="rightHand"/> <span v-else>{{ rightHand }}</span>, que <input v-if="editMode" type="text" v-model="subjectTeam"/> <span v-else>{{ subjectTeam }}</span>
                    teria seu caminho facilitado para o título de <input v-if="editMode" type="text" v-model="subjectYear"/> <span v-else>{{ subjectYear }}</span>. Passem esta mensagem para o maior número
                    possível de pessoas, para que todos possam conhecer a sujeira que ronda o futebol!</p>

                    <p>Desde, já agradeço. Um abraço.</p>
                    <p>Gunther Schweitzer.</p>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Manifesto',
    data: () => { return {
        editMode: true,
        player: 'Nikola Kalinic',
        hostCountry: 'Rússia',
        location: 'Moscou',
        chocados: 'croatas',
        country: 'Croácia',
        president: 'Sra. Kolinda Grabar-Kitarovic',
        currentYear: 2018,
        hour: '09:00',
        date: '15 de Julho',
        sponsor: 'Nike',
        presidentOfFootballFederationOfCountry: 'Davor Suker, atual presidente da Federação Croata de Futebol',
        countryCoach: 'o Técnico Zlatko Dalic',
        countryExCoach: 'o Sr. Niko Kovac, ex-tecnico da seleção croata',
        fifaPresident: 'o Sr. Gianni Infantino, presidente da FIFA',
        sponsorRep: 'o Sr. Ronald Rhovald',
        player1: 'Neymar',
        player2: 'Cristiano Ronaldo',
        player3: 'Messi da Argentina',
        player4: 'Kylian Mbappé, da França',
        winnerTeam: 'França',
        goalkeeper: 'Subasic',
        boss: 'O Sr. Gianni Infatino, cidadão franco-suíço',
        subjectTeam: 'o Brasil',
        interlocutor: 'ao Sr. Davor Suker',
        rightHand: 'Stipe Pletikosa',
        subjectYear: 2026,
    }},
    methods: {
        resizeAllInputs: function() {
            function resizable (el, factor) {
                var int = Number(factor) || 7.7;
                el.style.width = ((el.value.length+1) * int) + 'px';
            }
            let inputs = document.getElementsByTagName('input');
            for (let index = 0; index < inputs.length; ++index) {
                resizable(inputs[index], 7);
            }
        },
        share: function() {
            let node = document.getElementById("manifesto");
            if (document.body.createTextRange) {
                const range = document.body.createTextRange();
                range.moveToElementText(node);
                range.select();
            } else if (window.getSelection) {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(node);
                selection.removeAllRanges();
                selection.addRange(range);
            } else {
                console.warn("Could not select text in node: Unsupported browser.");
            }
        },
    },
    mounted: () => {
        function resizable (el, factor) {
            var int = Number(factor) || 7.7;
            function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
            var e = 'keyup,keypress,focus,blur,change'.split(',');
            for (var i in e) el.addEventListener(e[i],resize,false);
            resize();
        }
        let inputs = document.getElementsByTagName('input');
        for (let index = 0; index < inputs.length; ++index) {
            resizable(inputs[index], 7);
        }
    },
    updated: function() {
        this.resizeAllInputs();
    }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p {
    line-height: 180%;
    margin-bottom: 1em;
    text-align: justify;
}
input {
    min-width:50px!important;
    max-width:99.99%!important;
    transition: width 0.15s;
    text-align:center;
}
.controls {
    position: fixed;
}
</style>
