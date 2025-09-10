function Quote_Stash(){
    return["Adopt the pace of nature: her secret is patience.",
        "The only thing we have to fear is fear itself.",
        "Be yourself; everyone else is already taken.",
        "Opportunities don't happen, you create them." ,
        "All men are created equal."
    ];
}

function generate_quote(){
    const quotes = Quote_Stash();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").innerText = quotes[randomIndex];
    }

    function resetQuote() {
      document.getElementById("quote").innerText = "Click \"Generate Quote\" to get started!";
}