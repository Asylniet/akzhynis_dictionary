export const spotWord = (word) => {
    const boldWord = word;
    document.querySelectorAll(".example").forEach((example) => {
        const words = {};
        words.q = example.innerHTML;
        words.q = words.q.replace(
            new RegExp("(" + boldWord + ")", "i"),
            makeBold("$1")
        );
        example.innerHTML = words.q;
    });
}
function makeBold(str) {
    return str.bold();
}