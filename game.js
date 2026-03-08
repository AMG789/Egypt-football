// متغيرات اللعبة الرئيسية
let gameState = {
    team: null,
    formation: '4-3-3',
    tactic: 'balanced',
    matchNumber: 0,
    points: 0,
    budget: 0,
    played: [],
    table: {},
    lineup: []
};

// تهيئة اللعبة
function initGame() {
    // التحقق من وجود حفظ سابق
    const saved = localStorage.getItem('egyptianLeague');
    if (saved) {
        gameState = JSON.parse(saved);
        showMainMenu();
    } else {
        showTeamSelection();
    }
}

// عرض اختيار الفريق
function showTeamSelection() {
    const teamCards = document.querySelectorAll('.team-card');
    const startBtn = document.getElementById('startBtn');
    let selectedTeam = null;
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            teamCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedTeam = this.dataset.team;
            startBtn.disabled = false;
        });
    });
    
    startBtn.addEventListener('click', function() {
        if (selectedTeam) {
            startNewGame(selectedTeam);
        }
    });
}

// بدء موسم جديد
function startNewGame(teamId) {
    const team = TEAMS[teamId];
    
    gameState = {
        team: teamId,
        formation: '4-3-3',
        tactic: 'balanced',
        matchNumber: 0,
        points: 0,
        budget: team.budget,
        played: [],
        table: initTable(),
        lineup: team.players.slice(0, 11).map(p => p.id)
    };
    
    saveGame();
    showMainMenu();
}

// تهيئة جدول الترتيب
function initTable() {
    const table = {};
    Object.keys(TEAMS).forEach(key => {
        table[key] = {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            gf: 0,
            ga: 0,
            points: 0
        };
    });
    return table;
}

// عرض القائمة الرئيسية
function showMainMenu() {
    document.getElementById('teamSelection').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'grid';
    document.getElementById('gameStats').style.display = 'flex';
    
    updateStatsDisplay();
    updateNextMatch();
}

// تحديث الإحصائيات
function updateStatsDisplay() {
    document.getElementById('matchNumber').textContent = gameState.matchNumber;
    document.getElementById('points').textContent = gameState.points;
    document.getElementById('budget').textContent = gameState.budget;
}

// تحديث المباراة التالية
function updateNextMatch() {
    const nextMatchEl = document.getElementById('nextMatch');
    
    if (gameState.matchNumber >= FIXTURES.length) {
        nextMatchEl.textContent = 'انتهى الموسم!';
        return;
    }
    
    const fixture = FIXTURES[gameState.matchNumber];
    const homeTeam = TEAMS[fixture.home];
    const awayTeam = TEAMS[fixture.away];
    
    if (fixture.home === gameState.team) {
        nextMatchEl.textContent = `ضد ${awayTeam.name} (داخل)`;
    } else {
        nextMatchEl.textContent = `ضد ${homeTeam.name} (خارج)`;
    }
}

// حفظ اللعبة
function saveGame() {
    localStorage.setItem('egyptianLeague', JSON.stringify(gameState));
}

// محاكاة مباراة
function simulateMatch() {
    if (gameState.matchNumber >= FIXTURES.length) {
        alert('انتهى الموسم!');
        return null;
    }
    
    const fixture = FIXTURES[gameState.matchNumber];
    const isHome = fixture.home === gameState.team;
    const opponentId = isHome ? fixture.away : fixture.home;
    const opponent = TEAMS[opponentId];
    
    // حساب القوة
    const myPower = calculateTeamPower();
    const oppPower = opponent.power;
    
    // تأثير التكتيك
    let tacticBonus = 0;
    if (gameState.tactic === 'attacking') tacticBonus = 2;
    if (gameState.tactic === 'defensive') tacticBonus = -2;
    
    // ميزة الأرض
    const homeBonus = isHome ? 3 : 0;
    
    // حساب الأهداف
    const myAttack = (myPower + tacticBonus + homeBonus) / 10;
    const oppAttack = oppPower / 10;
    
    let myGoals = Math.floor(Math.random() * myAttack);
    let oppGoals = Math.floor(Math.random() * oppAttack);
    
    // نتيجة واقعية أكثر
    if (Math.random() > 0.7) myGoals++;
    if (Math.random() > 0.8) oppGoals++;
    
    // تحديث الجدول
    updateTable(gameState.team, myGoals, oppGoals);
    updateTable(opponentId, oppGoals, myGoals);
    
    // تحديث النقاط
    if (myGoals > oppGoals) {
        gameState.points += 3;
    } else if (myGoals === oppGoals) {
        gameState.points += 1;
    }
    
    // مكافأة مالية
    const prize = (myGoals * 0.5) + (myGoals > oppGoals ? 2 : 0);
    gameState.budget += prize;
    
    gameState.matchNumber++;
    saveGame();
    
    return {
        myGoals,
        oppGoals,
        opponent: opponent.name,
        isHome,
        prize
    };
}

// حساب قوة الفريق
function calculateTeamPower() {
    const team = TEAMS[gameState.team];
    const lineupPlayers = gameState.lineup.map(id => 
        team.players.find(p => p.id === id)
    ).filter(p => p);
    
    if (lineupPlayers.length === 0) return team.power;
    
    const avgRating = lineupPlayers.reduce((sum, p) => sum + p.rating, 0) / lineupPlayers.length;
    return Math.floor(avgRating);
}

// تحديث الجدول
function updateTable(teamId, gf, ga) {
    const record = gameState.table[teamId];
    record.played++;
    record.gf += gf;
    record.ga += ga;
    
    if (gf > ga) {
        record.won++;
        record.points += 3;
    } else if (gf === ga) {
        record.drawn++;
        record.points += 1;
    } else {
        record.lost++;
    }
}

// توليد أحداث المباراة
function generateMatchEvents(myGoals, oppGoals, opponentName) {
    const events = [];
    const teamName = TEAMS[gameState.team].name;
    
    // أهداف الفريق
    for (let i = 0; i < myGoals; i++) {
        const minute = 10 + Math.floor(Math.random() * 80);
        const scorer = getRandomPlayer();
        events.push({
            minute,
            text: `⚽ هدف! ${scorer} يسجل للـ ${teamName}`,
            type: 'goal'
        });
    }
    
    // أهداف الخصم
    for (let i = 0; i < oppGoals; i++) {
        const minute = 10 + Math.floor(Math.random() * 80);
        events.push({
            minute,
            text: `⚽ هدف للـ ${opponentName}`,
            type: 'goal'
        });
    }
    
    // أحداث عشوائية
    for (let i = 0; i < 5; i++) {
        const minute = Math.floor(Math.random() * 90);
        const eventTemplate = MATCH_EVENTS[Math.floor(Math.random() * MATCH_EVENTS.length)];
        const text = eventTemplate
            .replace('{team}', Math.random() > 0.5 ? teamName : opponentName)
            .replace('{player}', getRandomPlayer());
        
        events.push({
            minute,
            text,
            type: 'normal'
        });
    }
    
    // ترتيب حسب الدقيقة
    return events.sort((a, b) => a.minute - b.minute);
}

// لاعب عشوائي
function getRandomPlayer() {
    const team = TEAMS[gameState.team];
    const player = team.players[Math.floor(Math.random() * 11)];
    return player ? player.name : 'اللاعب';
}

// تغيير التشكيلة
function changeFormation(formation) {
    gameState.formation = formation;
    saveGame();
}

// تغيير التكتيك
function changeTactic(tactic) {
    gameState.tactic = tactic;
    saveGame();
}

// تغيير اللاعب في التشكيلة
function changePlayer(positionIndex, playerId) {
    gameState.lineup[positionIndex] = playerId;
    saveGame();
}

// شراء لاعب
function buyPlayer(playerId) {
    const player = TRANSFER_MARKET.find(p => p.id === playerId);
    if (!player) return false;
    
    if (gameState.budget >= player.price) {
        gameState.budget -= player.price;
        
        // إضافة اللاعب للفريق
        const team = TEAMS[gameState.team];
        const newPlayer = {
            ...player,
            id: `new_${Date.now()}`
        };
        team.players.push(newPlayer);
        
        saveGame();
        return true;
    }
    return false;
}

// إعادة تعيين اللعبة
function resetGame() {
    if (confirm('هل أنت متأكد من حذف التقدم الحالي؟')) {
        localStorage.removeItem('egyptianLeague');
        location.reload();
    }
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initGame);