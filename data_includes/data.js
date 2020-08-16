var shuffleSequence = seq("intro", shuffle("a"));

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "لطفا برای کلمه بعد صبر کنید",
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5"],
        presentAsScale: true,
        instructions: "از عددهای روی کیبورد یا شماره های روی صفحه برای امتیازدهی استفاده کنید",
        leftComment:"غیرطبیعی", rightComment: "طبیعی",
    },
    "Message", {
        hideProgressBar: false,
        transfer: "keypress",
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true,
    }
];

var items = [

    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }}
                      }],


    ["a", "Message", {html: "<h1> blick </h1> <audio controls autoplay src='https://www.w3schools.com/jsref/horse.ogg'> </audio>"},
          "AcceptabilityJudgment", {s: "blick"}],
    ["a", "Message", {html: "<h1> bnick </h1> <audio controls autoplay src='https://sites.google.com/site/ssptestibex/st/bnick.mp3'> </audio>" },
          "AcceptabilityJudgment", {s: "bnick"}],
    ["a", "Message", {html: "<h1> bpick </h1> <audio controls autoplay src='https://spellout.net/ibexfarm/ajax/download/SSP_PE/data_includes/bnick.mp3'></audio>"},
          "AcceptabilityJudgment", {s: "bpick"}],

];
