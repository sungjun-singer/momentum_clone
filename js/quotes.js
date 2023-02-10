const quotes = [
    {
        quotes : "Believe in yourself",
        kor : "자기 자신을 믿으세요"
    },
    {
        quotes : "Love yourself",
        kor : "자기 자신을 사랑하세요"
    },
    {
        quotes : "Don't beat yourself up",
        kor : "자책하지 마세요"
    },
    {
        quotes : "Don't dream, Be it",
        kor : "꿈만 꾸지 말고, 되세요"
    },
    {
        quotes : "Be brave",
        kor : "용감해지세요"
    },
    {
        quotes : "Live positive",
        kor : "긍정적으로 사세요"
    },
    {
        quotes : "He can do, she can do, why not me?",
        kor : "그도 하고, 그녀도 하는데, 난 왜 안돼? 나도 돼."
    },
    {
        quotes : "If not now, then when",
        kor : "지금 아니면 언제 할건데? 당장 해"
    },
    {
        quotes : "Life is unfair, get used to it",
        kor : "인생은 불공평합니다. 익숙해지세요."
    },
    {
        quotes : "The important thing is unfragile mind",
        kor : "중요한 것은 부서지지 않는 마음"
    }
]

const quote = document.querySelector("#quotes span:first-child");
const kor = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
kor.innerText = todayQuote.kor;



