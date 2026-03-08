const TEAMS = {
    ahly: {
        id: 'ahly',
        name: 'الأهلي',
        color: '#e31e24',
        power: 85,
        budget: 15,
        players: [
            { id: 'a1', name: 'محمد الشناوي', position: 'GK', rating: 84 },
            { id: 'a2', name: 'محمد هاني', position: 'RB', rating: 78 },
            { id: 'a3', name: 'ياسر إبراهيم', position: 'CB', rating: 82 },
            { id: 'a4', name: 'محمد عبد المنعم', position: 'CB', rating: 81 },
            { id: 'a5', name: 'علي معلول', position: 'LB', rating: 83 },
            { id: 'a6', name: 'أحمد فتوح', position: 'DMF', rating: 79 },
            { id: 'a7', name: 'أليو ديانج', position: 'CMF', rating: 82 },
            { id: 'a8', name: 'محمد مجدي أفشة', position: 'AMF', rating: 84 },
            { id: 'a9', name: 'حسين الشحات', position: 'RWF', rating: 83 },
            { id: 'a10', name: 'بيرسي تاو', position: 'LWF', rating: 85 },
            { id: 'a11', name: 'محمد شريف', position: 'CF', rating: 82 },
            { id: 'a12', name: 'علي لطفي', position: 'GK', rating: 75 },
            { id: 'a13', name: 'رامي ربيعة', position: 'CB', rating: 77 },
            { id: 'a14', name: 'حمدي فتحي', position: 'DMF', rating: 80 },
            { id: 'a15', name: 'أحمد عبد القادر', position: 'RWF', rating: 78 },
            { id: 'a16', name: 'صلاح محسن', position: 'CF', rating: 77 },
            { id: 'a17', name: 'أحمد نبيل كوكا', position: 'AMF', rating: 76 },
            { id: 'a18', name: 'محمد فخري', position: 'CF', rating: 75 }
        ]
    },
    zamalek: {
        id: 'zamalek',
        name: 'الزمالك',
        color: '#ffffff',
        textColor: '#e31e24',
        power: 83,
        budget: 12,
        players: [
            { id: 'z1', name: 'محمد عواد', position: 'GK', rating: 82 },
            { id: 'z2', name: 'حمدي علاء', position: 'CB', rating: 79 },
            { id: 'z3', name: 'محمد عبد الغني', position: 'CB', rating: 78 },
            { id: 'z4', name: 'عبد الله جمعة', position: 'LB', rating: 80 },
            { id: 'z5', name: 'أحمد فتوح', position: 'RB', rating: 81 },
            { id: 'z6', name: 'إمام عاشور', position: 'CMF', rating: 84 },
            { id: 'z7', name: 'محمد أوناجم', position: 'AMF', rating: 81 },
            { id: 'z8', name: 'أحمد سيد زيزو', position: 'RWF', rating: 85 },
            { id: 'z9', name: 'يوسف أوباما', position: 'LWF', rating: 80 },
            { id: 'z10', name: 'سيف الدين الجزيري', position: 'CF', rating: 82 },
            { id: 'z11', name: 'عمر السعيد', position: 'CF', rating: 79 },
            { id: 'z12', name: 'محمد صبحي', position: 'GK', rating: 76 },
            { id: 'z13', name: 'محمود علاء', position: 'CB', rating: 78 },
            { id: 'z14', name: 'طارق حامد', position: 'DMF', rating: 81 },
            { id: 'z15', name: 'محمد أشرف روقا', position: 'CMF', rating: 77 },
            { id: 'z16', name: 'أحمد مصطفى زيزو', position: 'RWF', rating: 75 },
            { id: 'z17', name: 'أسامة فيصل', position: 'CF', rating: 76 },
            { id: 'z18', name: 'سيد عبد الله', position: 'LB', rating: 75 }
        ]
    },
    pyramids: {
        id: 'pyramids',
        name: 'بيراميدز',
        color: '#0066cc',
        power: 80,
        budget: 10,
        players: [
            { id: 'p1', name: 'شريف إكرامي', position: 'GK', rating: 81 },
            { id: 'p2', name: 'أحمد أيمن منصور', position: 'CB', rating: 78 },
            { id: 'p3', name: 'عمر جابر', position: 'RB', rating: 79 },
            { id: 'p4', name: 'محمد حمدي', position: 'LB', rating: 78 },
            { id: 'p5', name: 'محمد فاروق', position: 'CB', rating: 77 },
            { id: 'p6', name: 'عبد الله السعيد', position: 'AMF', rating: 83 },
            { id: 'p7', name: 'رمضان صبحي', position: 'RWF', rating: 82 },
            { id: 'p8', name: 'إبراهيم عادل', position: 'LWF', rating: 80 },
            { id: 'p9', name: 'فخر الدين بن يوسف', position: 'CF', rating: 81 },
            { id: 'p10', name: 'إريك تراوري', position: 'AMF', rating: 79 },
            { id: 'p11', name: 'محمد صلاح', position: 'CMF', rating: 78 },
            { id: 'p12', name: 'مهدي سليمان', position: 'GK', rating: 76 },
            { id: 'p13', name: 'أسامة جلال', position: 'CB', rating: 77 },
            { id: 'p14', name: 'محمد طارق', position: 'DMF', rating: 76 },
            { id: 'p15', name: 'أحمد توفيق', position: 'CMF', rating: 77 },
            { id: 'p16', name: 'دودو الجباس', position: 'RWF', rating: 78 },
            { id: 'p17', name: 'جون أنطوي', position: 'CF', rating: 77 },
            { id: 'p18', name: 'محمد حمدي زكي', position: 'LB', rating: 75 }
        ]
    },
    ismaily: {
        id: 'ismaily',
        name: 'الإسماعيلي',
        color: '#ffd700',
        textColor: '#0066cc',
        power: 78,
        budget: 8,
        players: [
            { id: 'i1', name: 'محمد فوزي', position: 'GK', rating: 78 },
            { id: 'i2', name: 'أحمد أيمن', position: 'CB', rating: 76 },
            { id: 'i3', name: 'محمد هاشم', position: 'CB', rating: 75 },
            { id: 'i4', name: 'عماد حمدي', position: 'LB', rating: 76 },
            { id: 'i5', name: 'محمد عادل', position: 'RB', rating: 75 },
            { id: 'i6', name: 'محمد صادق', position: 'CMF', rating: 77 },
            { id: 'i7', name: 'عمر الوحش', position: 'AMF', rating: 79 },
            { id: 'i8', name: 'محمد بن يحيى', position: 'RWF', rating: 78 },
            { id: 'i9', name: 'أحمد مصطفى', position: 'LWF', rating: 77 },
            { id: 'i10', name: 'محمد الشامي', position: 'CF', rating: 79 },
            { id: 'i11', name: 'عبد الرحمن مجدي', position: 'CF', rating: 78 },
            { id: 'i12', name: 'أحمد عبد العزيز', position: 'GK', rating: 74 },
            { id: 'i13', name: 'محمد عب السلام', position: 'CB', rating: 74 },
            { id: 'i14', name: 'محمد مخلوف', position: 'DMF', rating: 75 },
            { id: 'i15', name: 'محمد حمدي', position: 'CMF', rating: 76 },
            { id: 'i16', name: 'أحمد مدبولي', position: 'RWF', rating: 76 },
            { id: 'i17', name: 'عبد الرحمن صلاح', position: 'CF', rating: 75 },
            { id: 'i18', name: 'محمد عادل', position: 'LB', rating: 74 }
        ]
    },
    masry: {
        id: 'masry',
        name: 'المصري',
        color: '#009639',
        power: 76,
        budget: 7,
        players: [
            { id: 'm1', name: 'أحمد مسعود', position: 'GK', rating: 77 },
            { id: 'm2', name: 'عبد الله جمعة', position: 'CB', rating: 75 },
            { id: 'm3', name: 'أحمد شديد', position: 'CB', rating: 74 },
            { id: 'm4', name: 'محمد صالح', position: 'LB', rating: 75 },
            { id: 'm5', name: 'أحمد كالوشا', position: 'RB', rating: 74 },
            { id: 'm6', name: 'معروف يوسف', position: 'CMF', rating: 76 },
            { id: 'm7', name: 'عمرو موسى', position: 'AMF', rating: 77 },
            { id: 'm8', name: 'أحمد ريان', position: 'RWF', rating: 76 },
            { id: 'm9', name: 'محمد جابر', position: 'LWF', rating: 75 },
            { id: 'm10', name: 'حسام حسن', position: 'CF', rating: 78 },
            { id: 'm11', name: 'أحمد يasser', position: 'CF', rating: 76 },
            { id: 'm12', name: 'محمد عبد المنصف', position: 'GK', rating: 73 },
            { id: 'm13', name: 'محمد كوفي', position: 'CB', rating: 73 },
            { id: 'm14', name: 'محمد عادل', position: 'DMF', rating: 74 },
            { id: 'm15', name: 'أحمد شكري', position: 'CMF', rating: 75 },
            { id: 'm16', name: 'محمد عادل', position: 'RWF', rating: 74 },
            { id: 'm17', name: 'أحمد جمال', position: 'CF', rating: 74 },
            { id: 'm18', name: 'محمد صالح', position: 'LB', rating: 73 }
        ]
    },
    enppi: {
        id: 'enppi',
        name: 'إنبي',
        color: '#000000',
        power: 75,
        budget: 6,
        players: [
            { id: 'e1', name: 'علي فؤاد', position: 'GK', rating: 76 },
            { id: 'e2', name: 'أحمد عادل', position: 'CB', rating: 74 },
            { id: 'e3', name: 'محمد أنور', position: 'CB', rating: 73 },
            { id: 'e4', name: 'أحمد علي', position: 'LB', rating: 74 },
            { id: 'e5', name: 'محمد شريف', position: 'RB', rating: 73 },
            { id: 'e6', name: 'عبد الله عبد العظيم', position: 'CMF', rating: 75 },
            { id: 'e7', name: 'أحمد جمال', position: 'AMF', rating: 76 },
            { id: 'e8', name: 'محمد عادل', position: 'RWF', rating: 75 },
            { id: 'e9', name: 'أحمد شكري', position: 'LWF', rating: 74 },
            { id: 'e10', name: 'رأفت خليل', position: 'CF', rating: 76 },
            { id: 'e11', name: 'محمد عادل', position: 'CF', rating: 75 },
            { id: 'e12', name: 'أحمد عبد العزيز', position: 'GK', rating: 72 },
            { id: 'e13', name: 'محمد عبد الله', position: 'CB', rating: 72 },
            { id: 'e14', name: 'أحمد علي', position: 'DMF', rating: 73 },
            { id: 'e15', name: 'محمد عادل', position: 'CMF', rating: 74 },
            { id: 'e16', name: 'أحمد جمال', position: 'RWF', rating: 73 },
            { id: 'e17', name: 'محمد عبد الله', position: 'CF', rating: 73 },
            { id: 'e18', name: 'أحمد علي', position: 'LB', rating: 72 }
        ]
    }
};

// جدول المباريات (14 مباراة - الدور الأول)
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

// التشكيلات المتاحة
const FORMATIONS = {
    '4-3-3': {
        name: '4-3-3 هجومي',
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
        name: '4-2-3-1 متوازن',
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
        name: '3-5-2 دفاعي',
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

// لاعبين للبيع في السوق
const TRANSFER_MARKET = [
    { id: 't1', name: 'أحمد حسن كوكا', position: 'CF', rating: 79, price: 5, age: 28 },
    { id: 't2', name: 'محمد هاني', position: 'RB', rating: 78, price: 4, age: 26 },
    { id: 't3', name: 'أحمد فتوح', position: 'LB', rating: 81, price: 6, age: 25 },
    { id: 't4', name: 'طارق حامد', position: 'DMF', rating: 81, price: 5, age: 29 },
    { id: 't5', name: 'أحمد سيد زيزو', position: 'RWF', rating: 85, price: 8, age: 27 },
    { id: 't6', name: 'حسين الشحات', position: 'LWF', rating: 83, price: 7, age: 28 },
    { id: 't7', name: 'محمد مجدي أفشة', position: 'AMF', rating: 84, price: 7, age: 29 },
    { id: 't8', name: 'محمد عبد المنعم', position: 'CB', rating: 81, price: 5, age: 24 },
    { id: 't9', name: 'علي معلول', position: 'LB', rating: 83, price: 6, age: 30 },
    { id: 't10', name: 'أليو ديانج', position: 'CMF', rating: 82, price: 6, age: 26 }
];

// أحداث المباراة
const MATCH_EVENTS = [
    'فرصة خطيرة لـ {team}!',
    'تسديدة قوية من {player} لكن خارج المرمى',
    'ركنية لـ {team}',
    'تسلل على {team}',
    'خطأ لصالح {team}',
    'بطاقة صفراء لـ {player}',
    'تبديل في صفوف {team}',
    'هجمة مرتدة سريعة لـ {team}',
    'تصدي رائع من الحارس',
    'ضغط قوي من {team}'
];�رس',
    'ضغط قوي من {team}'
];