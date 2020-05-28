window.alert("Welcome!");

const arrayOfQuotes = [
    {'author': 'Jhon Wooden', 
     'quote': 'Things work out best for those who make the best of how things work out.'
    },
    {'author': 'Walt Disney', 
     'quote': 'All our dreams can come true if we have the courage to pursue them.'
    },
    {'author': 'Chris Grosser', 
     'quote': 'Opportunities don\'t happen, you create them.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the oppertunities you don\'t take.'
    },
    {'author': 'Oprah Winfrey', 
     'quote': 'I believe that the only courage anybody ever needs is the courage to follow your own dreams.'
    },
    {'author': 'Lolly Daskal', 
     'quote': 'Life is not about finding yourself. Life is about creating yourself.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}