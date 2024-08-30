export const ChaliceStructures = {
    'Pthumeru' : {
        size : 4,
        forms : [[1, 2, 3, 1], [1, 3, 2, 1]], // POSSIBILI DUE LIVELLI CON LO STESSO NUMERO DI STANZE, MAX DIFFERENZA DI 1 TRA DUE LIVELLI ADIACENTI
        effects : {
            0 : [{
                title : 'Dark hearing',
                effect: 'Surveil 1.'
            },
            {
                title : 'Envision',
                effect: 'Scry 2.'
            },
            {
                title : 'Make the price',
                effect: 'You may discard a card, if you do, draw a card.'
            }],
            1 : [{
                title : 'Gold diggin\'',
                effect: 'Create a treasure token.'
            },
            {
                title : 'At the brink of death',
                effect: 'Loot badge.'
            },
            {
                title : 'Minion enrager',
                effect: 'Put a bloodlust counter on target creature.'
            },
            {
                title: 'Make your way',
                effect: 'Search your library for a land card, then put it in your hand.'
            },
            {
                title: 'Bright idea!',
                effect: 'Gain insight 1.'
            },
            {
                title: 'Crawling spider',
                effect: 'Exile target card from a graveyard. Gain 2 life.'
            },
            {
                title: 'To me!',
                effect: 'Create two red 1/1 dog creature tokens.'
            }],
            2 : [{
                title : 'God Of Acid Diarrhea',
                effect: 'Goad target creature.'
            },
            {
                title : 'Meet the freak',
                effect: 'Create a black 2/2 Mad One creature token.'
            },
            {
                title : 'Future death',
                effect: 'Surveil 2, then draw a card.'
            },
            {
                title: 'Minion enrager +',
                effect: 'Distribute two bloodlust counters among up to two target creatures.'
                
            },
            {
                title: 'One more shot',
                effect: 'Exile the top two cards of your library. You may play those cards until the end of your next turn.'
                
            },
            {
                title: 'Make your path',
                effect: 'Search your library for a land card, then put it onto the battlefield.'
                
            },
            {
                title: 'Bullseye!',
                effect: 'Target opponent discards a card. Create a bullet.'
                
            },
            {
                title: 'Blood for blood',
                effect: 'Up to one target creature you control fights target creature you don\’t control.'
                
            }],
            3 : [{
                title : 'Hail Norbert',
                effect: 'Create a red and green 3/5 Cleric Beast beast creature token with bloodlust, trample and haste. Blood heal. It fights up to one target creature.'
            }]
        }
    },
    'Loran': {
        size : 5,
        forms : [[1, 2, 3, 2, 1], [1, 3, 2, 3, 1]],
        effects : {
            0 : [{
                title : 'Dark hearing',
                effect: 'Surveil 1.'
            },
            {
                title : 'Envision',
                effect: 'Scry 2.'
            },
            {
                title : 'Make the price',
                effect: 'You may discard a card, if you do, draw a card.'
            }],
            1 : [{
                title : 'Gold diggin\'',
                effect: 'Create a treasure token.'
            },
            {
                title : 'At the brink of death',
                effect: 'Loot badge.'
            },
            {
                title : 'Minion enrager',
                effect: 'Put a bloodlust counter on target creature.'
            },
            {
                title: 'Make your way',
                effect: 'Search your library for a land card, then put it in your hand.'
            },
            {
                title: 'Bright idea!',
                effect: 'Gain insight 1.'
            },
            {
                title: 'Crawling spider',
                effect: 'Exile target card from a graveyard. Gain 2 life.'
            },
            {
                title: 'To me!',
                effect: 'Create a white 1/2 hunter creature token with bloodlust and “Drops a hunter badge.”'
            }],
            2 : [{
                title : 'God Of Acid Diarrhea',
                effect: 'Goad target creature.'
            },
            {
                title : 'Meet the freak',
                effect: 'Create a black 2/2 Mad One creature token.'
            },
            {
                title : 'Future death',
                effect: 'Surveil 2, then draw a card.'
            },
            {
                title: 'Minion enrager +',
                effect: 'Distribute two bloodlust counters among up to two target creatures.'
                
            },
            {
                title: 'One more shot',
                effect: 'Exile the top two cards of your library. You may play those cards until the end of your next turn.'
                
            },
            {
                title: 'Make your path',
                effect: 'Search your library for a land card, then put it onto the battlefield.'
                
            },
            {
                title: 'Bullseye!',
                effect: 'Target opponent discards a card. Create a bullet.'
                
            },
            {
                title: 'Blood for blood',
                effect: 'You may sacrifice a creature. If you do, search your library for a card and put it on top of your library. Gain insight 1.'
                
            }],
            3 : [{
                title : 'Reload',
                effect: 'Return up to two cards from your graveyard to your hand.'
            },
            {
                title: 'Vanish their handwork',
                effect: 'Exile target artifact or enchantment.'
            },
            {
                title: 'At the brink of death',
                effect: 'Loot badge 2.'
            }
            ,
            {
                title: 'Mega drain',
                effect: 'Each opponent loses 5 life. You gain 5 life.'
            }
            ,
            {
                title: 'Creeping spider',
                effect: 'Exile target player\’s graveyard.'
            }
            ,
            {
                title: 'Painless dismember',
                effect: 'Target creature gets -5/-5 until end of turn.'
            }
            ,
            {
                title: 'Minion enrager ++',
                effect: 'Distribute three bloodlust counters among up to three target creatures.'
            }
            ,
            {
                title: 'Mind-controlling abomination',
                effect: 'You may exile the top two cards of your library. Choose one of them. You may play it without paying its mana costs. Put the other in your hand.'
            }],
            4 : [{
                title : 'The Darkbeast Rises',
                effect: 'Create a black and red 4/4 Ancient Darkbeast darkbeast creature token with haste and “Whenever you play a card from exile, target opponent sacrifices a creature and discards a card.” Exile cards from the top of your library until you exile a spell. You may cast it without paying its mana costs. If you don\’t, put it into your hand.'
            }]
        }
    },
    'Isz' : {
        size : 6,
        forms : [[1, 2, 3, 4, 3, 1], [1, 3, 4, 3, 2, 1]],
        effects : {
            0 : [{
                title : 'Dark hearing',
                effect: 'Surveil 1.'
            },
            {
                title : 'Envision',
                effect: 'Scry 2.'
            },
            {
                title : 'Make the price',
                effect: 'You may discard a card, if you do, draw a card.'
            }],
            1 : [{
                title : 'Gold diggin\'',
                effect: 'Create a treasure token.'
            },
            {
                title : 'At the brink of death',
                effect: 'Loot badge.'
            },
            {
                title : 'Minion enrager',
                effect: 'Put a bloodlust counter on target creature.'
            },
            {
                title: 'Make your way',
                effect: 'Search your library for a land card, then put it in your hand.'
            },
            {
                title: 'Bright idea!',
                effect: 'Gain insight 1.'
            },
            {
                title: 'Crawling spider',
                effect: 'Exile target card from a graveyard. Gain 2 life.'
            },
            {
                title: 'I can see you',
                effect: 'Target player exiles the top card of his library with an eye counter on it. You have frenzy until the end of your next turn.'
            }],
            2 : [{
                title : 'God Of Acid Diarrhea',
                effect: 'Goad target creature.'
            },
            {
                title : 'Meet the freak',
                effect: 'Create a black 2/2 Mad One creature token.'
            },
            {
                title : 'Future death',
                effect: 'Surveil 2, then draw a card.'
            },
            {
                title: 'Minion enrager +',
                effect: 'Distribute two bloodlust counters among up to two target creatures.'
                
            },
            {
                title: 'One more shot',
                effect: 'Exile the top two cards of your library. You may play those cards until the end of your next turn.'
                
            },
            {
                title: 'Make your path',
                effect: 'Search your library for a land card, then put it onto the battlefield.'
                
            },
            {
                title: 'Bullseye!',
                effect: 'Target opponent discards a card. Create a bullet.'
                
            },
            {
                title: 'Pointed finger',
                effect: 'Return target creature to its owner\’s hand.'
                
            }],
            3 : [{
                title : 'Reload',
                effect: 'Return up to two cards from your graveyard to your hand.'
            },
            {
                title: 'Vanish their handwork',
                effect: 'Exile target artifact or enchantment.'
            },
            {
                title: 'At the brink of death',
                effect: 'Loot badge 2.'
            }
            ,
            {
                title: 'Mega drain',
                effect: 'Each opponent loses 5 life. You gain 5 life.'
            }
            ,
            {
                title: 'Creeping spider',
                effect: 'Exile target player\’s graveyard.'
            }
            ,
            {
                title: 'Painless dismember',
                effect: 'Target creature gets -5/-5 until end of turn.'
            }
            ,
            {
                title: 'Minion enrager ++',
                effect: 'Distribute three bloodlust counters among up to three target creatures.'
            }
            ,
            {
                title: 'Give me your back',
                effect: 'You may exchange control of a creature you control with a creature you don\’t control. If you don\’t, gain 10 life.'
            }],
            4 : [{
                title : 'Pointed finger +',
                effect: 'Return 2 target permanents to their owner\’s hand.'
            },
            {
                title : 'Regret nothing!',
                effect: 'You may pay 10 life and regret nothing to venture into the chalice dungeon again.'
            },
            {
                title : 'Overwhelming vision',
                effect: 'Exile target card from a graveyard with an eye counter on it. Until the end of your next turn, you have frenzy. Gain 5 life.'
            },
            {
                title : 'Forever sated',
                effect: 'You get an emblem with “Creatures you control get +0/+1.'
            },
            {
                title: 'I\'M WHAT?!',
                effect: 'You Gay. Venture into the chalice dungeon twice, but backwards.'
            },
            {
                title: 'Hello Norbertiño',
                effect: 'Create a red and green 3/5 Cleric Beast beast creature tokens.'
            }],
            5 : [{
                title : 'Grand Amygdalae',
                effect: 'Create two colorless 4/4 Amygdala great ones creature tokens with cosmic terror 1 and reach. You get an emblem with “You have frenzy. Whenever a card is put into exile with a cosmic terror ability, put an eye counter on it.”'
            }]
        }
    }
};