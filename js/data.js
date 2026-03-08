const TEAMS = {
    ahly: {
        id: 'ahly',
        name: 'Ø§Ù„Ø£Ù‡Ù„ÙŠ',
        color: '#e31e24',
        power: 85,
        budget: 15,
        players: [
            { id: 'a1', name: 'Ù…Ø­Ù…Ø¯ Ø§Ù„Ø´Ù†Ø§ÙˆÙŠ', position: 'GK', rating: 84 },
            { id: 'a2', name: 'Ù…Ø­Ù…Ø¯ Ù‡Ø§Ù†ÙŠ', position: 'RB', rating: 78 },
            { id: 'a3', name: 'ÙŠØ§Ø³Ø± Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ…', position: 'CB', rating: 82 },
            { id: 'a4', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ù…Ù†Ø¹Ù…', position: 'CB', rating: 81 },
            { id: 'a5', name: 'Ø¹Ù„ÙŠ Ù…Ø¹Ù„ÙˆÙ„', position: 'LB', rating: 83 },
            { id: 'a6', name: 'Ø£Ø­Ù…Ø¯ ÙØªÙˆØ­', position: 'DMF', rating: 79 },
            { id: 'a7', name: 'Ø£Ù„ÙŠÙˆ Ø¯ÙŠØ§Ù†Ø¬', position: 'CMF', rating: 82 },
            { id: 'a8', name: 'Ù…Ø­Ù…Ø¯ Ù…Ø¬Ø¯ÙŠ Ø£ÙØ´Ø©', position: 'AMF', rating: 84 },
            { id: 'a9', name: 'Ø­Ø³ÙŠÙ† Ø§Ù„Ø´Ø­Ø§Øª', position: 'RWF', rating: 83 },
            { id: 'a10', name: 'Ø¨ÙŠØ±Ø³ÙŠ ØªØ§Ùˆ', position: 'LWF', rating: 85 },
            { id: 'a11', name: 'Ù…Ø­Ù…Ø¯ Ø´Ø±ÙŠÙ', position: 'CF', rating: 82 },
            { id: 'a12', name: 'Ø¹Ù„ÙŠ Ù„Ø·ÙÙŠ', position: 'GK', rating: 75 },
            { id: 'a13', name: 'Ø±Ø§Ù…ÙŠ Ø±Ø¨ÙŠØ¹Ø©', position: 'CB', rating: 77 },
            { id: 'a14', name: 'Ø­Ù…Ø¯ÙŠ ÙØªØ­ÙŠ', position: 'DMF', rating: 80 },
            { id: 'a15', name: 'Ø£Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ù‚Ø§Ø¯Ø±', position: 'RWF', rating: 78 },
            { id: 'a16', name: 'ØµÙ„Ø§Ø­ Ù…Ø­Ø³Ù†', position: 'CF', rating: 77 },
            { id: 'a17', name: 'Ø£Ø­Ù…Ø¯ Ù†Ø¨ÙŠÙ„ ÙƒÙˆÙƒØ§', position: 'AMF', rating: 76 },
            { id: 'a18', name: 'Ù…Ø­Ù…Ø¯ ÙØ®Ø±ÙŠ', position: 'CF', rating: 75 }
        ]
    },
    zamalek: {
        id: 'zamalek',
        name: 'Ø§Ù„Ø²Ù…Ø§Ù„Ùƒ',
        color: '#ffffff',
        textColor: '#e31e24',
        power: 83,
        budget: 12,
        players: [
            { id: 'z1', name: 'Ù…Ø­Ù…Ø¯ Ø¹ÙˆØ§Ø¯', position: 'GK', rating: 82 },
            { id: 'z2', name: 'Ø­Ù…Ø¯ÙŠ Ø¹Ù„Ø§Ø¡', position: 'CB', rating: 79 },
            { id: 'z3', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„ØºÙ†ÙŠ', position: 'CB', rating: 78 },
            { id: 'z4', name: 'Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡ Ø¬Ù…Ø¹Ø©', position: 'LB', rating: 80 },
            { id: 'z5', name: 'Ø£Ø­Ù…Ø¯ ÙØªÙˆØ­', position: 'RB', rating: 81 },
            { id: 'z6', name: 'Ø¥Ù…Ø§Ù… Ø¹Ø§Ø´ÙˆØ±', position: 'CMF', rating: 84 },
            { id: 'z7', name: 'Ù…Ø­Ù…Ø¯ Ø£ÙˆÙ†Ø§Ø¬Ù…', position: 'AMF', rating: 81 },
            { id: 'z8', name: 'Ø£Ø­Ù…Ø¯ Ø³ÙŠØ¯ Ø²ÙŠØ²Ùˆ', position: 'RWF', rating: 85 },
            { id: 'z9', name: 'ÙŠÙˆØ³Ù Ø£ÙˆØ¨Ø§Ù…Ø§', position: 'LWF', rating: 80 },
            { id: 'z10', name: 'Ø³ÙŠÙ Ø§Ù„Ø¯ÙŠÙ† Ø§Ù„Ø¬Ø²ÙŠØ±ÙŠ', position: 'CF', rating: 82 },
            { id: 'z11', name: 'Ø¹Ù…Ø± Ø§Ù„Ø³Ø¹ÙŠØ¯', position: 'CF', rating: 79 },
            { id: 'z12', name: 'Ù…Ø­Ù…Ø¯ ØµØ¨Ø­ÙŠ', position: 'GK', rating: 76 },
            { id: 'z13', name: 'Ù…Ø­Ù…ÙˆØ¯ Ø¹Ù„Ø§Ø¡', position: 'CB', rating: 78 },
            { id: 'z14', name: 'Ø·Ø§Ø±Ù‚ Ø­Ø§Ù…Ø¯', position: 'DMF', rating: 81 },
            { id: 'z15', name: 'Ù…Ø­Ù…Ø¯ Ø£Ø´Ø±Ù Ø±ÙˆÙ‚Ø§', position: 'CMF', rating: 77 },
            { id: 'z16', name: 'Ø£Ø­Ù…Ø¯ Ù…ØµØ·ÙÙ‰ Ø²ÙŠØ²Ùˆ', position: 'RWF', rating: 75 },
            { id: 'z17', name: 'Ø£Ø³Ø§Ù…Ø© ÙÙŠØµÙ„', position: 'CF', rating: 76 },
            { id: 'z18', name: 'Ø³ÙŠØ¯ Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡', position: 'LB', rating: 75 }
        ]
    },
    pyramids: {
        id: 'pyramids',
        name: 'Ø¨ÙŠØ±Ø§Ù…ÙŠØ¯Ø²',
        color: '#0066cc',
        power: 80,
        budget: 10,
        players: [
            { id: 'p1', name: 'Ø´Ø±ÙŠÙ Ø¥ÙƒØ±Ø§Ù…ÙŠ', position: 'GK', rating: 81 },
            { id: 'p2', name: 'Ø£Ø­Ù…Ø¯ Ø£ÙŠÙ…Ù† Ù…Ù†ØµÙˆØ±', position: 'CB', rating: 78 },
            { id: 'p3', name: 'Ø¹Ù…Ø± Ø¬Ø§Ø¨Ø±', position: 'RB', rating: 79 },
            { id: 'p4', name: 'Ù…Ø­Ù…Ø¯ Ø­Ù…Ø¯ÙŠ', position: 'LB', rating: 78 },
            { id: 'p5', name: 'Ù…Ø­Ù…Ø¯ ÙØ§Ø±ÙˆÙ‚', position: 'CB', rating: 77 },
            { id: 'p6', name: 'Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡ Ø§Ù„Ø³Ø¹ÙŠØ¯', position: 'AMF', rating: 83 },
            { id: 'p7', name: 'Ø±Ù…Ø¶Ø§Ù† ØµØ¨Ø­ÙŠ', position: 'RWF', rating: 82 },
            { id: 'p8', name: 'Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø¹Ø§Ø¯Ù„', position: 'LWF', rating: 80 },
            { id: 'p9', name: 'ÙØ®Ø± Ø§Ù„Ø¯ÙŠÙ† Ø¨Ù† ÙŠÙˆØ³Ù', position: 'CF', rating: 81 },
            { id: 'p10', name: 'Ø¥Ø±ÙŠÙƒ ØªØ±Ø§ÙˆØ±ÙŠ', position: 'AMF', rating: 79 },
            { id: 'p11', name: 'Ù…Ø­Ù…Ø¯ ØµÙ„Ø§Ø­', position: 'CMF', rating: 78 },
            { id: 'p12', name: 'Ù…Ù‡Ø¯ÙŠ Ø³Ù„ÙŠÙ…Ø§Ù†', position: 'GK', rating: 76 },
            { id: 'p13', name: 'Ø£Ø³Ø§Ù…Ø© Ø¬Ù„Ø§Ù„', position: 'CB', rating: 77 },
            { id: 'p14', name: 'Ù…Ø­Ù…Ø¯ Ø·Ø§Ø±Ù‚', position: 'DMF', rating: 76 },
            { id: 'p15', name: 'Ø£Ø­Ù…Ø¯ ØªÙˆÙÙŠÙ‚', position: 'CMF', rating: 77 },
            { id: 'p16', name: 'Ø¯ÙˆØ¯Ùˆ Ø§Ù„Ø¬Ø¨Ø§Ø³', position: 'RWF', rating: 78 },
            { id: 'p17', name: 'Ø¬ÙˆÙ† Ø£Ù†Ø·ÙˆÙŠ', position: 'CF', rating: 77 },
            { id: 'p18', name: 'Ù…Ø­Ù…Ø¯ Ø­Ù…Ø¯ÙŠ Ø²ÙƒÙŠ', position: 'LB', rating: 75 }
        ]
    },
    ismaily: {
        id: 'ismaily',
        name: 'Ø§Ù„Ø¥Ø³Ù…Ø§Ø¹ÙŠÙ„ÙŠ',
        color: '#ffd700',
        textColor: '#0066cc',
        power: 78,
        budget: 8,
        players: [
            { id: 'i1', name: 'Ù…Ø­Ù…Ø¯ ÙÙˆØ²ÙŠ', position: 'GK', rating: 78 },
            { id: 'i2', name: 'Ø£Ø­Ù…Ø¯ Ø£ÙŠÙ…Ù†', position: 'CB', rating: 76 },
            { id: 'i3', name: 'Ù…Ø­Ù…Ø¯ Ù‡Ø§Ø´Ù…', position: 'CB', rating: 75 },
            { id: 'i4', name: 'Ø¹Ù…Ø§Ø¯ Ø­Ù…Ø¯ÙŠ', position: 'LB', rating: 76 },
            { id: 'i5', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'RB', rating: 75 },
            { id: 'i6', name: 'Ù…Ø­Ù…Ø¯ ØµØ§Ø¯Ù‚', position: 'CMF', rating: 77 },
            { id: 'i7', name: 'Ø¹Ù…Ø± Ø§Ù„ÙˆØ­Ø´', position: 'AMF', rating: 79 },
            { id: 'i8', name: 'Ù…Ø­Ù…Ø¯ Ø¨Ù† ÙŠØ­ÙŠÙ‰', position: 'RWF', rating: 78 },
            { id: 'i9', name: 'Ø£Ø­Ù…Ø¯ Ù…ØµØ·ÙÙ‰', position: 'LWF', rating: 77 },
            { id: 'i10', name: 'Ù…Ø­Ù…Ø¯ Ø§Ù„Ø´Ø§Ù…ÙŠ', position: 'CF', rating: 79 },
            { id: 'i11', name: 'Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø­Ù…Ù† Ù…Ø¬Ø¯ÙŠ', position: 'CF', rating: 78 },
            { id: 'i12', name: 'Ø£Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ø¹Ø²ÙŠØ²', position: 'GK', rating: 74 },
            { id: 'i13', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø¨ Ø§Ù„Ø³Ù„Ø§Ù…', position: 'CB', rating: 74 },
            { id: 'i14', name: 'Ù…Ø­Ù…Ø¯ Ù…Ø®Ù„ÙˆÙ', position: 'DMF', rating: 75 },
            { id: 'i15', name: 'Ù…Ø­Ù…Ø¯ Ø­Ù…Ø¯ÙŠ', position: 'CMF', rating: 76 },
            { id: 'i16', name: 'Ø£Ø­Ù…Ø¯ Ù…Ø¯Ø¨ÙˆÙ„ÙŠ', position: 'RWF', rating: 76 },
            { id: 'i17', name: 'Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø­Ù…Ù† ØµÙ„Ø§Ø­', position: 'CF', rating: 75 },
            { id: 'i18', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'LB', rating: 74 }
        ]
    },
    masry: {
        id: 'masry',
        name: 'Ø§Ù„Ù…ØµØ±ÙŠ',
        color: '#009639',
        power: 76,
        budget: 7,
        players: [
            { id: 'm1', name: 'Ø£Ø­Ù…Ø¯ Ù…Ø³Ø¹ÙˆØ¯', position: 'GK', rating: 77 },
            { id: 'm2', name: 'Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡ Ø¬Ù…Ø¹Ø©', position: 'CB', rating: 75 },
            { id: 'm3', name: 'Ø£Ø­Ù…Ø¯ Ø´Ø¯ÙŠØ¯', position: 'CB', rating: 74 },
            { id: 'm4', name: 'Ù…Ø­Ù…Ø¯ ØµØ§Ù„Ø­', position: 'LB', rating: 75 },
            { id: 'm5', name: 'Ø£Ø­Ù…Ø¯ ÙƒØ§Ù„ÙˆØ´Ø§', position: 'RB', rating: 74 },
            { id: 'm6', name: 'Ù…Ø¹Ø±ÙˆÙ ÙŠÙˆØ³Ù', position: 'CMF', rating: 76 },
            { id: 'm7', name: 'Ø¹Ù…Ø±Ùˆ Ù…ÙˆØ³Ù‰', position: 'AMF', rating: 77 },
            { id: 'm8', name: 'Ø£Ø­Ù…Ø¯ Ø±ÙŠØ§Ù†', position: 'RWF', rating: 76 },
            { id: 'm9', name: 'Ù…Ø­Ù…Ø¯ Ø¬Ø§Ø¨Ø±', position: 'LWF', rating: 75 },
            { id: 'm10', name: 'Ø­Ø³Ø§Ù… Ø­Ø³Ù†', position: 'CF', rating: 78 },
            { id: 'm11', name: 'Ø£Ø­Ù…Ø¯ ÙŠasser', position: 'CF', rating: 76 },
            { id: 'm12', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ù…Ù†ØµÙ', position: 'GK', rating: 73 },
            { id: 'm13', name: 'Ù…Ø­Ù…Ø¯ ÙƒÙˆÙÙŠ', position: 'CB', rating: 73 },
            { id: 'm14', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'DMF', rating: 74 },
            { id: 'm15', name: 'Ø£Ø­Ù…Ø¯ Ø´ÙƒØ±ÙŠ', position: 'CMF', rating: 75 },
            { id: 'm16', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'RWF', rating: 74 },
            { id: 'm17', name: 'Ø£Ø­Ù…Ø¯ Ø¬Ù…Ø§Ù„', position: 'CF', rating: 74 },
            { id: 'm18', name: 'Ù…Ø­Ù…Ø¯ ØµØ§Ù„Ø­', position: 'LB', rating: 73 }
        ]
    },
    enppi: {
        id: 'enppi',
        name: 'Ø¥Ù†Ø¨ÙŠ',
        color: '#000000',
        power: 75,
        budget: 6,
        players: [
            { id: 'e1', name: 'Ø¹Ù„ÙŠ ÙØ¤Ø§Ø¯', position: 'GK', rating: 76 },
            { id: 'e2', name: 'Ø£Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'CB', rating: 74 },
            { id: 'e3', name: 'Ù…Ø­Ù…Ø¯ Ø£Ù†ÙˆØ±', position: 'CB', rating: 73 },
            { id: 'e4', name: 'Ø£Ø­Ù…Ø¯ Ø¹Ù„ÙŠ', position: 'LB', rating: 74 },
            { id: 'e5', name: 'Ù…Ø­Ù…Ø¯ Ø´Ø±ÙŠÙ', position: 'RB', rating: 73 },
            { id: 'e6', name: 'Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡ Ø¹Ø¨Ø¯ Ø§Ù„Ø¹Ø¸ÙŠÙ…', position: 'CMF', rating: 75 },
            { id: 'e7', name: 'Ø£Ø­Ù…Ø¯ Ø¬Ù…Ø§Ù„', position: 'AMF', rating: 76 },
            { id: 'e8', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'RWF', rating: 75 },
            { id: 'e9', name: 'Ø£Ø­Ù…Ø¯ Ø´ÙƒØ±ÙŠ', position: 'LWF', rating: 74 },
            { id: 'e10', name: 'Ø±Ø£ÙØª Ø®Ù„ÙŠÙ„', position: 'CF', rating: 76 },
            { id: 'e11', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'CF', rating: 75 },
            { id: 'e12', name: 'Ø£Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ø¹Ø²ÙŠØ²', position: 'GK', rating: 72 },
            { id: 'e13', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡', position: 'CB', rating: 72 },
            { id: 'e14', name: 'Ø£Ø­Ù…Ø¯ Ø¹Ù„ÙŠ', position: 'DMF', rating: 73 },
            { id: 'e15', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø§Ø¯Ù„', position: 'CMF', rating: 74 },
            { id: 'e16', name: 'Ø£Ø­Ù…Ø¯ Ø¬Ù…Ø§Ù„', position: 'RWF', rating: 73 },
            { id: 'e17', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ù„Ù‡', position: 'CF', rating: 73 },
            { id: 'e18', name: 'Ø£Ø­Ù…Ø¯ Ø¹Ù„ÙŠ', position: 'LB', rating: 72 }
        ]
    }
};

// Ø¬Ø¯ÙˆÙ„ Ø§Ù„Ù…Ø¨Ø§Ø±ÙŠØ§Øª (14 Ù…Ø¨Ø§Ø±Ø§Ø© - Ø§Ù„Ø¯ÙˆØ± Ø§Ù„Ø£ÙˆÙ„)
const FIXTURES = [
    { round: 1, home: 'ahly', away: 'enppi' },
    { round: 2, home: 'zamalek', away: 'ahly' },
    { round: 3, home: 'ahly', away: 'pyramids' },
    { round: 4, home: 'ismaily', away: 'ahly' },
    { round: 5, home: 'ahly', away: 'masry' },
    { round: 6, home: 'enppi', away: 'zamalek' },
    { round: 7, home: 'pyramids', away: 'ismaily' },
    { round: 8, home: 'masry', away: 'enppi' },
    { round: 9, home: 'zamalek', away: 'pyramids' },
    { round: 10, home: 'ahly', away: 'ismaily' },
    { round: 11, home: 'enppi', away: 'ahly' },
    { round: 12, home: 'ahly', away: 'zamalek' },
    { round: 13, home: 'pyramids', away: 'ahly' },
    { round: 14, home: 'ahly', away: 'enppi' }
];

// Ø§Ù„ØªØ´ÙƒÙŠÙ„Ø§Øª Ø§Ù„Ù…ØªØ§Ø­Ø©
const FORMATIONS = {
    '4-3-3': {
        name: '4-3-3 Ù‡Ø¬ÙˆÙ…ÙŠ',
        positions: {
            GK: { top: '85%', left: '50%' },
            RB: { top: '70%', left: '85%' },
            CB1: { top: '75%', left: '65%' },
            CB2: { top: '75%', left: '35%' },
            LB: { top: '70%', left: '15%' },
            CMF1: { top: '50%', left: '70%' },
            CMF2: { top: '50%', left: '50%' },
            CMF3: { top: '50%', left: '30%' },
            RWF: { top: '25%', left: '75%' },
            CF: { top: '20%', left: '50%' },
            LWF: { top: '25%', left: '25%' }
        }
    },
    '4-2-3-1': {
        name: '4-2-3-1 Ù…ØªÙˆØ§Ø²Ù†',
        positions: {
            GK: { top: '85%', left: '50%' },
            RB: { top: '70%', left: '85%' },
            CB1: { top: '75%', left: '65%' },
            CB2: { top: '75%', left: '35%' },
            LB: { top: '70%', left: '15%' },
            DMF1: { top: '60%', left: '60%' },
            DMF2: { top: '60%', left: '40%' },
            RWF: { top: '35%', left: '80%' },
            AMF: { top: '40%', left: '50%' },
            LWF: { top: '35%', left: '20%' },
            CF: { top: '20%', left: '50%' }
        }
    },
    '3-5-2': {
        name: '3-5-2 Ø¯ÙØ§Ø¹ÙŠ',
        positions: {
            GK: { top: '85%', left: '50%' },
            CB1: { top: '75%', left: '70%' },
            CB2: { top: '78%', left: '50%' },
            CB3: { top: '75%', left: '30%' },
            RWB: { top: '55%', left: '90%' },
            CMF1: { top: '55%', left: '65%' },
            CMF2: { top: '55%', left: '50%' },
            CMF3: { top: '55%', left: '35%' },
            LWB: { top: '55%', left: '10%' },
            CF1: { top: '25%', left: '60%' },
            CF2: { top: '25%', left: '40%' }
        }
    }
};

// Ù„Ø§Ø¹Ø¨ÙŠÙ† Ù„Ù„Ø¨ÙŠØ¹ ÙÙŠ Ø§Ù„Ø³ÙˆÙ‚
const TRANSFER_MARKET = [
    { id: 't1', name: 'Ø£Ø­Ù…Ø¯ Ø­Ø³Ù† ÙƒÙˆÙƒØ§', position: 'CF', rating: 79, price: 5, age: 28 },
    { id: 't2', name: 'Ù…Ø­Ù…Ø¯ Ù‡Ø§Ù†ÙŠ', position: 'RB', rating: 78, price: 4, age: 26 },
    { id: 't3', name: 'Ø£Ø­Ù…Ø¯ ÙØªÙˆØ­', position: 'LB', rating: 81, price: 6, age: 25 },
    { id: 't4', name: 'Ø·Ø§Ø±Ù‚ Ø­Ø§Ù…Ø¯', position: 'DMF', rating: 81, price: 5, age: 29 },
    { id: 't5', name: 'Ø£Ø­Ù…Ø¯ Ø³ÙŠØ¯ Ø²ÙŠØ²Ùˆ', position: 'RWF', rating: 85, price: 8, age: 27 },
    { id: 't6', name: 'Ø­Ø³ÙŠÙ† Ø§Ù„Ø´Ø­Ø§Øª', position: 'LWF', rating: 83, price: 7, age: 28 },
    { id: 't7', name: 'Ù…Ø­Ù…Ø¯ Ù…Ø¬Ø¯ÙŠ Ø£ÙØ´Ø©', position: 'AMF', rating: 84, price: 7, age: 29 },
    { id: 't8', name: 'Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ù…Ù†Ø¹Ù…', position: 'CB', rating: 81, price: 5, age: 24 },
    { id: 't9', name: 'Ø¹Ù„ÙŠ Ù…Ø¹Ù„ÙˆÙ„', position: 'LB', rating: 83, price: 6, age: 30 },
    { id: 't10', name: 'Ø£Ù„ÙŠÙˆ Ø¯ÙŠØ§Ù†Ø¬', position: 'CMF', rating: 82, price: 6, age: 26 }
];

// Ø£Ø­Ø¯Ø§Ø« Ø§Ù„Ù…Ø¨Ø§Ø±Ø§Ø©
const MATCH_EVENTS = [
    'ÙØ±ØµØ© Ø®Ø·ÙŠØ±Ø© Ù„Ù€ {team}!',
    'ØªØ³Ø¯ÙŠØ¯Ø© Ù‚ÙˆÙŠØ© Ù…Ù† {player} Ù„ÙƒÙ† Ø®Ø§Ø±Ø¬ Ø§Ù„Ù…Ø±Ù…Ù‰',
    'Ø±ÙƒÙ†ÙŠØ© Ù„Ù€ {team}',
    'ØªØ³Ù„Ù„ Ø¹Ù„Ù‰ {team}',
    'Ø®Ø·Ø£ Ù„ØµØ§Ù„Ø­ {team}',
    'Ø¨Ø·Ø§Ù‚Ø© ØµÙØ±Ø§Ø¡ Ù„Ù€ {player}',
    'ØªØ¨Ø¯ÙŠÙ„ ÙÙŠ ØµÙÙˆÙ {team}',
    'Ù‡Ø¬Ù…Ø© Ù…Ø±ØªØ¯Ø© Ø³Ø±ÙŠØ¹Ø© Ù„Ù€ {team}',
    'ØªØµØ¯ÙŠ Ø±Ø§Ø¦Ø¹ Ù…Ù† Ø§Ù„Ø­Ø§Ø±Ø³',
    'Ø¶ØºØ· Ù‚ÙˆÙŠ Ù…Ù† {team}'
];§Ø±Ø³',
    'Ø¶ØºØ· Ù‚ÙˆÙŠ Ù…Ù† {team}'
];
