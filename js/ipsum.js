(function ($) {

     var WordObject = function(word){
         this.word = word;
         return word;
     };

     WordObject.prototype = {
         isPunctuation: function(){
             return words.sharedPunctuation.includes(this.word);
         }
     };

    var words = {
        subgenreNouns : {
            doomMetal : ['sonic', 'titan', 'doom', 'mantia', 'wizard', 'marijuana', 'reefer', 'dragon', 'dope', 'throne',
                        'wall', 'mountain', 'druid', 'weedian', 'nazareth', 'beyond', 'gypsy', 'sun', 'grass', 'aquarian',
                        'earth', 'sleep', 'omen', 'primitive', 'zodiac', 'light', 'moon', 'serpent', 'hell', 'witch', 'hex',
                        'dominion', 'battle', 'eater', 'willow', 'worship', 'caravan', 'green', 'magic', 'nature', 'stoner', 'smoke',
                        'temple', 'ritual', 'celestial', 'consciousness', 'weed', 'roots', 'trance', 'eternal', 'stone', 'sabbath',
                        'hammer', 'wind', 'hand', 'forest', 'cloud', 'spirit', 'king', 'corpse', 'master', 'high', 'horse', 'wither',
                        'skull', 'eyes', 'fire', 'beast', 'shield', 'amnesian', 'acid', 'ghost', 'infinity', 'bone', 'curse', 'hymn', 'dawn',
                        'tyrant', 'tide', 'heavy', 'woman', 'stonesphere', 'bong', 'talisman', 'twin', 'hum', 'offering', 'blasphemy', 'satan',
                        'hypno', 'cult', 'soil', 'hunter', 'thunderhoof', 'wrath', 'axe', 'marrow', 'unholy', 'thunder', 'lucifer', 'thorn',
                        'totem', 'golgotha', 'electric', 'funeralopolis', 'coven', 'goat', 'horseback', 'pilgrimage', 'poison', 'oak', 'oaken',
                        'snow', 'ice', 'ceremony', 'ceremonial', 'riff filled land', 'iommi', 'conquest', 'queen', 'trees', 'sacred', 'spiritual',
                        'cosmic', 'emperor', 'molten', 'aeons', 'reality', 'infinite', 'kingdom', 'sword', 'dominant', 'dominance', 'alchemy'] ,

            blackMetal : ['frost', 'winter', 'night', 'ash', 'plagues', 'devoid', 'light', 'pale', 'autumn', 'natus', 'smoke', 'satan',
                        'hell', 'old', 'ancient', 'blood', 'celestial', 'cathedral', 'subterannean', 'initiation', 'imperium',
                        'nighttime', 'astral', 'sorrow', 'cleansing', 'bones', 'roots', 'palace', 'queen', 'thrice', 'woven', 'radiance',
                        'trance', 'amen', 'dark', 'white', 'eternal', 'terror', 'stone', 'execration', 'torment', 'extinction', 'wind', 'cold',
                        'urn', 'incantation', 'crypt', 'wither', 'eyes', 'grey', 'fire', 'pain', 'kill', 'ghost', 'infinity',  'bone', 'curse',
                        'dawn', 'disease', 'dead', 'chains', 'tyrant', 'barren', 'north', 'northern', 'strife', 'tide', 'burial', 'obituary',
                        'offering', 'blasphemy', 'blasphemous', 'grey', 'carrion', 'birth', 'grave', 'cult', 'kvlt', 'trve', 'soil', 'grim',
                        'hunter', 'marrow', 'effigy', 'shadow', 'hordes', 'tundra', 'obsolete', 'ominous', 'funeral', 'unholy', 'diabolical', 'void',
                        'pagan', 'thorn', 'ritual', 'corruptor', 'coven', 'coffin', 'snow', 'ice', 'ceremony', 'ceremonial', 'hunger', 'transcendental',
                        'norwegian', 'hellfire', 'darkness', 'transilvanian', 'spectral', 'cactaclysm', 'cactaclysmic', 'silence', 'silent', 'requiem',
                        'entombed', 'immortal', 'frozen', 'ash', 'ashen', 'mortuary', 'travesty', 'trees', 'sacred', 'wraith', 'spiritual', 'imprisoned',
                        'wolves', 'wolf', 'necro', 'lunar', 'cosmic', 'emperor', 'forgotten', 'aeons', 'suffering', 'infinite', 'chaos', 'fallow', 'scourge',
                        'sword'],

            deathMetal : ['tomb', 'mold', 'flesh', 'bereavement', 'primordial', 'merciless', 'malignant', 'tumor', 'blood', 'death', 'die',
                        'execration', 'extinction', 'murder', 'hammer', 'bones', 'crypt', 'corpse', 'pain', 'fire', 'carcass', 'eater', 'evisceration',
                        'acid', 'kill',  'bone', 'bones', 'skull', 'slave', 'disease', 'violence', 'hate', 'dead', 'chains', 'cruelty', 'slayer', 'savage',
                        'body', 'burial', 'obituary', 'insane', 'insanity', 'nail', 'swine', 'pig', 'birth', 'hunt', 'beast', 'grave', 'headless', 'axe',
                        'cannibal', 'funeral', 'unholy', 'holocaust', 'diabolical', 'executioner', 'starve', 'cage', 'plague', 'bowels', 'guts', 'bloody',
                        'gore', 'mutilation', 'rot', 'morbid', 'devourment', 'deceased', 'desecrated', 'abnormal', 'contempt', 'rat', 'prison', 'genocide',
                        'genocidal', 'torment', 'weak', 'excrement', 'errosion', 'disembowlment', 'abdominal', 'coffin', 'ceremony', 'ceremonial', 'corruption',
                        'hunger', 'cunt', 'congealed', 'ghastly', 'putrid', 'stench', 'possessed', 'punishment', 'destruction', 'torture', 'brutal', 'brutality',
                        'atrocity', 'entombed', 'regurgitated', 'immortal', 'immolation', 'sterilized', 'ash', 'butcher', 'butchery', 'splatter', 'disfigured',
                        'mortuary', 'vengeance', 'contaminated', 'abhorrent', 'madness', 'cancer', 'cancerous', 'inhuman', 'necro', 'suffering', 'noose'],

            thrashMetal : ['thrash', 'ripper', 'bang', 'bangover', 'evisceration', 'skate', 'pizza', 'kill', 'skull', 'slave', 'conformity', 'hate', 'dead',
                        'tyrant', 'slayer', 'casualty', 'exterminator', 'subhuman', 'heavy', 'zombie', 'insane', 'insanity', 'hyseria', 'pig', 'terminal', 'wild',
                        'revenge', 'cannibal', 'holocaust', 'executioner', 'conform', 'conformicide', 'mutation', 'lightning', 'cage', 'abnormal', 'rat', 'prison',
                        'suicide', 'authority', 'final', 'corruption', 'exodus', 'toxic', 'beer', 'deranged', 'retard', 'chemical', 'chemi-kill', 'defiance',
                        'institutionalized', 'psycho', 'reagan', 'subliminal', 'fascist', 'possessed', 'hazardous', 'hazard', 'headbanger', 'bastard', 'exploit',
                        'scum', 'shred', 'punishment', 'slime', 'waste', 'death', 'destruction', 'torture', 'enemy', 'skulls', 'sterilized', 'total', 'genocide',
                        'splatter', 'vengeance', 'mutant', 'twisted', 'chaos'],
        },

        sharedNouns : ['hell', 'demon', 'night', 'pentagram', 'suicide', 'black', 'satan', 'fuck', 'blood', 'dark', 'death', 'die', 'life',
                    'final', 'damned', 'fire', 'war', 'storm', 'onslaught', 'kill', 'ghost', 'attack', 'iron' ,'evil', 'secret', 'bad',
                    'hate', 'dead', 'savage', 'metal', 'desolation', 'desolate', 'born', 'paranoia', 'heavy', 'infernal', 'blasphemy',
                    'blasphemous', 'feral', 'abysmal', 'abyss', 'spite', 'grave', 'siege', 'deep', 'revenge', 'cannibal', 'reptilian', 'wretched',
                    'vicious', 'predatory', 'shadow', 'vulture', 'unholy', 'diabolical', 'lucifer', 'pitch black', 'bloody', 'gore', 'demon', 'rot',
                    'fatal', 'contempt', 'gordian knot', 'thee', 'thou', 'thy', 'broken', 'final', 'weak', 'hellfire', 'darkness', 'devil', 'testament',
                    'defiance', 'punishment', 'freak', 'monster', 'coil', 'murder', 'diseased', 'wretch', 'enemy', 'brutal', 'brutality', 'below', 'gallows',
                    'buried alive', 'total', 'gates', 'nightmare', 'nightmares', 'subterannean', 'inhuman', 'suffering', 'chaos'],

        sharedTermsAndExpressions : {
            veryCommon: ['the', 'of', 'I am', 'and',  'a', 'an', 'you', 'is', 'we are', 'you are', 'are'],
            common:['to the', 'of the', 'of a',  'from', 'fucking', 'your', 'my', 'never', 'I,'],
            uncommon:['devoid of', 'circle of', 'bound by', 'ex', 'with', 'against', 'beyond', 'among', 'sick of',
                      'without', 'return to', 'army of', 'torn from the', 'eye of the', 'chamber of', 'gates of', 'imprison', 'lord of', 'master of'],
            rare:['sub', 'born of a', 'wave of', 'house of', 'wrath of', 'shadow of', 'come my', 'born', 'gathering of', 'on horseback',
                  'legacy of', 'denial of', 'by the light of', 'kingdom of']
         },

        sharedVerbs : {
            veryCommon: ['bleed', 'die', 'suffer', 'burn', 'slay', 'scream', 'become', 'hail', 'kill'],
            common:[ 'betray', 'bury', 'rip', 'descend', 'hunt', 'mutilate', 'tear', 'devour', 'reap', 'crawl', 'purge', 'rot', 'crush', 'infest',
                    'decay'],
            uncommon:['roar', 'ascend', 'howl', 'annihilate', 'strangle', 'exterminate', 'boil', 'desecrate', 'reject', 'silence', 'transcend',
                      'flay', 'shred', 'abandon'],
            rare:['triumph', 'roam', 'eviscerate', 'gnash', 'penetrate', 'hiss', 'vex', 'wreak', 'dissolve', 'lash', 'shatter', 'force',
                  'crawl toward', 'wretch', 'immolate', 'imprison']
        },

        sharedPunctuation : ['.', ',', '?', '!'],

        sharedSymbols : ['⛧']
    };

    var getRandomNumber = function(upperLimit){
        return Math.floor(Math.random() * upperLimit) + 1;
    }

    var generateIpsumString = function(ipsumArray) {
        var ipsumString = '';
        ipsumArray.forEach(function(element){
            var currentLength = ipsumString.length;
            if(element.isPunctuation()){
                if(currentLength > 0){
                    ipsumString = ipsumString.slice(0, currentLength - 1);
                }
            }

            ipsumString = ipsumString.length === 0 ? element.word + " " : ipsumString + element.word + " ";
        });
        ipsumString += "...";
        return ipsumString;
    };

     var generateIpsumText = function(subgenre, paragraphCount){
         var textArray = [];
         var wordCount = 0;
         for(var i = 0; i < paragraphCount; i++){
             for(var j = 0; j < 50; j++){
                 wordCount += 1;
                 var newWord = new WordObject(selectNextWord(subgenre, wordCount).toUpperCase());
                 textArray.push(newWord);
             }
         }
         return generateIpsumString(textArray);
     };

    var selectNextWord = function(subgenre, wordCount){
        var newWord = ' ';
        var isFourthWord = wordCount % 4 === 0;
        var isFirstWord = wordCount === 1;
        var randomNumberA = getRandomNumber(100);
        if (randomNumberA >= 70){
            newWord = getSharedTerm(randomNumberA);
        } else {
            if(randomNumberA >= 45){
                newWord = getSharedWord('sharedNouns');
            } else {
                var sg = words.subgenreNouns[subgenre];
                newWord = sg[getRandomNumber(sg.length - 1)];
            }
        }
        return newWord;
    }

    var getSharedWord = function(set, commonality){
        var length = commonality ? words[set][commonality].length : words[set].length;
        var randomNumber= getRandomNumber(length);
        return commonality ? words[set][commonality][randomNumber - 1] : words[set][randomNumber - 1];
    }

    var getSharedTerm = function(randomNumberA){
        var sharedType;
        var newWord = '';
        if(randomNumberA > 97){
            sharedType = 'sharedPunctuation';
        } else {
            if(randomNumberA > 87){
                sharedType = 'sharedVerbs'
            } else {
                sharedType = 'sharedTermsAndExpressions'
            }
        }

        var randomNumberB = getRandomNumber(100);
        if(randomNumberB > 50){
            newWord = sharedType == 'sharedPunctuation' ? getSharedWord(sharedType) : getSharedWord(sharedType, 'veryCommon');
        } else {
            if(randomNumberB < 35) {
                newWord = sharedType == 'sharedPunctuation' ? getSharedWord(sharedType) : getSharedWord(sharedType, 'common');
            } else {
                if(randomNumberB < 45){
                    newWord = sharedType == 'sharedPunctuation' ? getSharedWord(sharedType) : getSharedWord(sharedType, 'uncommon');
                } else {
                    newWord = sharedType == 'sharedPunctuation' ? getSharedWord(sharedType) : getSharedWord(sharedType, 'rare');
                }
            }
        }
        return newWord;
    }

    $(document).ready(function(){
        var ps = new PerfectScrollbar('.container');
        $('.generateIpsumButton').on('click', function(e) {
            $('.generatedTextRow').fadeOut(function(){
              var paragraphCount = $('#sel2').val();
              var type = $('#sel1').find(':selected').attr('data-type');
              $('.generatedText').text(generateIpsumText(type, paragraphCount));
              $(this).fadeIn();
            });
        });
    });


})(jQuery);
