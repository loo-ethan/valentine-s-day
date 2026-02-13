// 📸 CONFIGURATION FOR PHOTOS 📸
const photos = [
    "photobooth1.jpg",
    "photobooth2.png"
];

// 💌 LETTER CONFIGURATION 💌
const englishText = `Dear Arista Wiwindra bb,<br><br>
I know we’ve only known each other for a month, but sometimes it feels like much longer—maybe because of the distance between us. Even so, I already can’t wait for the day I get to see you in person and hug you the way other couples do.<br><br>
Our distance isn’t a limitation, just a condition we’re living with for now. Even though we’re far apart physically, I feel closer to you emotionally and mentally. If we can care for each other this deeply through a screen, I can only imagine how special it will be when we finally meet face to face.<br><br>
I know we’ll cherish every moment together even more because of this distance. And when the time comes, I promise I’ll fly over to Medan and give you the biggest hug. But for now, here’s one 🤗<br><br>
I love you, my bb ❤︎❤︎❤︎ `;

const indoText = `Dear Arista Wiwindra bb,<br><br>
Aku tahu kita baru saling kenal satu bulan, tapi rasanya jauh lebih lama—mungkin karena jarak di antara kita. Walaupun begitu, aku sudah nggak sabar menunggu hari di mana aku bisa ketemu kamu langsung dan memeluk kamu seperti pasangan lain.<br><br>
Jarak kita bukan batasan, cuma kondisi yang sedang kita jalani. Walaupun kita jauh secara fisik, aku merasa kita justru lebih dekat secara emosional dan mental. Kalau lewat layar saja kita sudah bisa saling sayang sedalam ini, aku nggak bisa bayangin betapa spesialnya saat kita nanti bertemu langsung.<br><br>
Aku yakin kita akan lebih menghargai setiap momen bersama karena jarak ini. Dan saat waktunya tiba, aku janji akan terbang ke Medan untuk ketemu kamu dan kasih kamu pelukan paling besar. Untuk sekarang, ini dulu ya pelukannya 🤗<br><br>
Aku sayang kamu, bb ❤︎❤︎❤︎ `;

let currentPhotoIndex = 0;
let musicPlaying = false;
let isEnglish = true;

window.addEventListener('load', () => {
    launchConfetti();
    document.getElementById('letter-content').innerHTML = englishText;

    const music = document.getElementById('bg-music');
    music.volume = 0.4;
    music.play().catch(() => { });
    musicPlaying = true;
    document.getElementById('music-toggle').textContent = '🔊';
});

// --- GIFT OPENING LOGIC ---
function openGift(giftId) {
    const modal = document.getElementById(giftId);
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('visible');
    }, 10);
}

function closeGift(giftId) {
    const modal = document.getElementById(giftId);
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// --- PHOTO GALLERY LOGIC ---
function changePhoto(direction) {
    currentPhotoIndex += direction;
    if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;
    else if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
    document.getElementById('photo-display').src = photos[currentPhotoIndex];
}

// --- LANGUAGE TOGGLE LOGIC ---
function toggleLanguage() {
    const content = document.getElementById('letter-content');
    const btn = document.getElementById('lang-btn');

    if (isEnglish) {
        content.innerHTML = indoText;
        btn.textContent = "🇺🇸 Read in English";
        isEnglish = false;
    } else {
        content.innerHTML = englishText;
        btn.textContent = "🇮🇩 Baca dalam Bahasa Indonesia";
        isEnglish = true;
    }
}

// --- CONFETTI & MUSIC ---
function launchConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb3c1', '#ff0000', '#ff6347', '#fff', '#ffdf00'];
    const duration = 6000;
    const end = Date.now() + duration;

    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    });

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }
        confetti({ particleCount: 40, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors });
        confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors });
    }, 300);
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('music-toggle').textContent = '🔇';
    } else {
        music.play();
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }
}